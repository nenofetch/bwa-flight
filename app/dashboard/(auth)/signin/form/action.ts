"use server"

import { redirect } from "next/navigation";
import { formSchema } from "./validation";
import prisma from "@/lib/prisma";
import bcrypt from 'bcrypt';
import { lucia } from "@/lib/auth";
import { cookies } from "next/headers";

export interface ActionResult {
    errorTitle: string | null
    errorDesc: string[] | null
}

export async function handleSignIn(prevState: unknown, formData: FormData): Promise<ActionResult> {

    console.log(formData.get('email'))
    console.log(formData.get('password'))

    const values = formSchema.safeParse({
        email: formData.get('email') as string,
        password: formData.get('password') as string
    });


    if(!values.success){
        const errorDesc = values.error.issues.map((issue) => issue.message)

        return {
            errorTitle: 'Error Validation',
            errorDesc
        }
    }


    const existingUser = await prisma.user.findFirst({
        where: {
            email: values.data.email
        }
    })


    if(!existingUser){
        return {
            errorTitle: 'Error',
            errorDesc: ['Email / Password salah!']
        }
    }


    const validPassword = await bcrypt.compare(values.data.password, existingUser.password);


    if(!validPassword){
        return {
            errorTitle: 'Error',
            errorDesc: ['Email / Password salah!']
        }
    }

    const session = await lucia.createSession(existingUser.id, {})
    const sessionCookie = await lucia.createSessionCookie(session.id)

    cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
    );


    return redirect('/dashboard')


}