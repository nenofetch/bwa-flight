
import { Metadata } from 'next';
import React, { FC } from 'react';
import FormSignIn from './form';
import { getUser } from '@/lib/auth';
import { redirect } from 'next/navigation';


interface SignInPageProps {

}

export const metadata: Metadata = {
    title: 'Dashboard | SignIn'
}


export default async function Page(props: FC<SignInPageProps>): Promise<React.ReactElement> {
    const { session, user } = await getUser();

    if (session && user.role === 'ADMIN') return redirect('/dashboard');


    return <FormSignIn />
}
