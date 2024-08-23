"use server"

import { redirect } from "next/navigation";
import { formSchema } from "./validation"

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


    return redirect('/dashboard/signin')


}