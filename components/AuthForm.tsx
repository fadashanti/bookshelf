"use client";
import { zodResolver } from "@hookform/resolvers/zod"
import { DefaultValues, FieldValues, SubmitHandler, useForm, UseFormReturn } from "react-hook-form"
import { z, ZodType } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from 'next/link'
import { FIELD_NAMES, FIELD_TYPES } from "@/constants";
import ImageUpload from "./ImageUpload";
import { Path } from "react-hook-form";

interface Props<T extends FieldValues> {
  type: 'SIGN_IN' | 'SIGN_UP';
  schema: ZodType<T>;
  defaultValues: T;
  onSubmit: (data: T) => Promise<{ success: boolean, error?: string }>;
}

const AuthForm = <T extends FieldValues>({ type, schema, defaultValues, onSubmit }: Props<T>) => {
  const isSignIn = type === 'SIGN_IN';
  // 1. Define your form.
  const form: UseFormReturn<T> = useForm({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  })
  // 2. Define a submit handler.
  const handleSubmit: SubmitHandler<T> = async (data) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold text-white">
        {isSignIn ? 'Welcome back to the Bookshelf' : 'Create Your Library Account'}
      </h1>

      <p className="text-light-100">
        {isSignIn ? 'Access the vast collection of resources, and stay updated' : 'Please complete all fields and upload a valid university ID to gain access to the library'}
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6 w-full">
          {Object.keys(defaultValues).map((field) => (
            <FormField key={field} control={form.control} name={field as Path<T>} render={({ field }) => (
                <FormItem>
                  <FormLabel className="capitalize">
                    {FIELD_NAMES[field.name as keyof typeof FIELD_NAMES]}
                  </FormLabel>
                  <FormControl>
                    {field.name === "universityCard" ? ( 
                      <ImageUpload onFileChange={field.onChange}/> 
                    ) : ( 
                      <Input required type={FIELD_TYPES[field.name as keyof typeof FIELD_TYPES]} {...field} className="form-input" />
                    )}
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <Button type="submit" className="form-btn">
            {isSignIn ? 'Sign in' : 'Create account'}
          </Button>
        </form>
      </Form>

      <p className="text-center text-base font-medium">
        {isSignIn ? 'New to Bookshelf? ' : 'Already have an account? '}
        <Link href={isSignIn ? "/sign-up" : "/sign-in"} className="font-bold text-primary">
          {isSignIn ? 'Create an account' : 'Sign in'}
        </Link>
      </p>
    </div>
  );
}
export default AuthForm;