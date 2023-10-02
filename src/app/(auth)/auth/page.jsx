import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import AuthForm from "@/components/auth/auth-form";
import { MoveLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AuthenticationPage() {
  return (
    <>
      <div className="flex flex-col w-full container mx-auto">
        <div className="flex items-center justify-between w-full pb-32">
          <Link href="/">
            <Button variant="ghost" size="icon">
              <MoveLeft />
            </Button>
          </Link>
          <Link href="/examples/authentication" className="text-2xl font-bold">
            ENGRAVEDOM
          </Link>

          <Link
            href="/examples/authentication"
            className={cn(buttonVariants({ variant: "ghost" }))}
          >
            Login
          </Link>
        </div>

        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] mb-48">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to create your account
              </p>
            </div>
            <AuthForm />
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
        </div>
      </div>
    </>
  );
}
