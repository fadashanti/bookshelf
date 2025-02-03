"use client"
import * as React from 'react';
import AuthForm from "@/components/AuthForm";
import { signInSchema } from "@/lib/validations";
import { signInWithCredentials } from '@/lib/actions/auh';

const Page = () => {
  return (
    <AuthForm
      type="SIGN_IN"
      schema={signInSchema}
      defaultValues={{ email: '', password: '' }}
      onSubmit={signInWithCredentials}
    />
  );
}

export default Page;