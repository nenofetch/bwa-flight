
import { Metadata } from 'next';
import React from 'react';
import FormSignIn from './form';
import { getUser } from '@/lib/auth';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
    title: 'Dashboard | SignIn'
}


export default async function Page(): Promise<React.ReactElement> {
    const { session, user } = await getUser();

    if (session && user.role === 'ADMIN') return redirect('/dashboard');


    return <FormSignIn />
}
