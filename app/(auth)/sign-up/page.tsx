"use client"
import * as React from 'react';
import AuthForm from "@/components/AuthForm";
import { signUpSchema } from "@/lib/validations";
import { signUp } from '@/lib/actions/auh';

const Page = () => {
  return (
    <AuthForm
      type="SIGN_UP"
      schema={signUpSchema}
      defaultValues={{ 
        email: '', 
        password: '',
        fullName: '',
        universityId: 0,
        universityCard: '' 
      }}
      onSubmit={signUp}
    />
  );
}

export default Page;