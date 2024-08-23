
import { Metadata } from 'next';
import React, { FC } from 'react';
import FormSignIn from './form';

interface SignInPageProps {

}

export const metadata: Metadata = {
    title: 'Dashboard | SignIn'
}


export default function Page(props: FC<SignInPageProps>): React.ReactElement {
    return (
        <FormSignIn />
    );
}
