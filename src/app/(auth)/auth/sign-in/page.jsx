import SignInForm from "@/components/auth/sign-in";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function SignInPage() {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  if (data?.session) {
    redirect("/");
  }
  return (
    <>
      <div className="flex flex-col w-full container mx-auto">
        <div className="lg:p-8 pt-16 md:pt-24">
          <SignInForm />
        </div>
      </div>
    </>
  );
}
