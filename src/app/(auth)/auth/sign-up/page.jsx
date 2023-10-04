import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import SignUpForm from "@/components/auth/sign-up";
import { MoveLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SignUpPage() {
  return (
    <>
      <div className="flex flex-col w-full container mx-auto">
        <div className="lg:p-8 pt-16 md:pt-24">
          <SignUpForm />
        </div>
      </div>
    </>
  );
}
