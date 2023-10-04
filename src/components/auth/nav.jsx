import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";

export default function AuthNavigation() {
  return (
    <div className="flex items-center justify-between px-5 w-full py-10 bg-white border-b md:px-24 border-zinc-100 dark:border-zinc-900 dark:bg-background">
      <Link href="/">
        <Button variant="ghost" size="icon">
          <MoveLeft />
        </Button>
      </Link>
      <Link href="#" className="text-xl font-bold">
        ENGRAVEDOM
      </Link>
      <Link href="/auth/sign-up">
        <Button variant="ghost">Sign Up</Button>
      </Link>
    </div>
  );
}
