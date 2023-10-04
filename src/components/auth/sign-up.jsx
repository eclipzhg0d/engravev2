"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { Field, Form, Formik } from "formik";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useToast } from "@/components/ui/use-toast";
import SignUpSchema from "@/schemas/sign-up";

export default function SignUpForm({ className, ...props }) {
  const { toast } = useToast();
  const supabase = createClientComponentClient();

  const [errorMsg, setErrorMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function signUp(formData) {
    setIsLoading(true);
    const { error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
    });

    if (error) {
      setErrorMsg(error.message);
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }
  return (
    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] md:mt-32">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Create an account
        </h1>
        <p className="text-sm text-muted-foreground">
          Fill out the fields to continue.
        </p>
      </div>
      <div className={cn("grid gap-6", className)} {...props}>
        <Formik
          initialValues={{
            username: "",
            fullname: "",
            email: "",
            password: "",
          }}
          validationSchema={SignUpSchema}
          onSubmit={signUp}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="grid gap-10 md:gap-5">
                <div className="grid gap-10 md:gap-5">
                  {/* username */}
                  <Label className="sr-only" htmlFor="username">
                    Username
                  </Label>
                  <Field
                    className={cn(
                      "input dark:autofill:shadow-[inset_0_0_0px_1000px_rgb(9,9,11)]",
                      errors.username && touched.username && "border-red-500"
                    )}
                    id="username"
                    name="username"
                    placeholder="Your username.."
                    type="username"
                    autoCapitalize="none"
                    disabled={isLoading}
                  />
                  {/* fullname */}
                  <Label className="sr-only" htmlFor="fullname">
                    Full name
                  </Label>
                  <Field
                    className={cn(
                      "input dark:autofill:shadow-[inset_0_0_0px_1000px_rgb(9,9,11)]",
                      errors.fullname && touched.fullname && "border-red-500"
                    )}
                    id="fullname"
                    name="fullname"
                    placeholder="John Doe"
                    type="fullname"
                    autoCapitalize="none"
                    disabled={isLoading}
                  />
                  <Label className="sr-only" htmlFor="email">
                    Email
                  </Label>
                  <Field
                    className={cn(
                      "input dark:autofill:shadow-[inset_0_0_0px_1000px_rgb(9,9,11)]",
                      errors.email && touched.email && "border-red-500"
                    )}
                    id="email"
                    name="email"
                    placeholder="name@example.com"
                    type="email"
                    autoCapitalize="none"
                    disabled={isLoading}
                  />
                  {errors.email && touched.email ? (
                    <div className="text-red-600">{errors.email}</div>
                  ) : null}
                </div>
                <Label className="sr-only" htmlFor="password">
                  Password
                </Label>
                <Field
                  className={cn(
                    "input dark:autofill:shadow-[inset_0_0_0px_1000px_rgb(9,9,11)]",
                    errors.password && touched.password && "border-red-500"
                  )}
                  id="password"
                  name="password"
                  placeholder="password"
                  type="password"
                  disabled={isLoading}
                />
                {errors.password && touched.password ? (
                  <div className="text-red-600">{errors.password}</div>
                ) : null}

                <Button disabled={isLoading}>
                  {isLoading && (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  Continue
                </Button>
              </div>
            </Form>
          )}
        </Formik>
        {errorMsg && <div className="text-red-600">{errorMsg}</div>}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <Button variant="outline" type="button" disabled={isLoading}>
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Google
        </Button>
      </div>
      <p className="px-8 text-center text-sm text-muted-foreground">
        By clicking continue, you agree to our{" "}
        <Link
          href="/terms"
          className="underline underline-offset-4 hover:text-primary"
        >
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link
          href="/privacy"
          className="underline underline-offset-4 hover:text-primary"
        >
          Privacy Policy
        </Link>
        .
      </p>
    </div>
  );
}
