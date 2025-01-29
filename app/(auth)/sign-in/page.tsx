"use client"
import * as React from 'react';
import AuthForm from "@/components/AuthForm";
import { signInSchema } from "@/lib/validations";

const Page = () => {
  return (
    <AuthForm
      type="SIGN_IN"
      schema={signInSchema}
      defaultValues={{ email: '', password: '' }}
      onSubmit={() => {}}
    />
  );
}

export default Page;