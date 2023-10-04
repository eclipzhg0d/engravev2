"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Button } from "../ui/button";
import { useToast } from "@/components/ui/use-toast";

export default function SignOut() {
  const { toast } = useToast();
  const supabase = createClientComponentClient();

  async function handleSignOut() {
    const { error } = await supabase.auth.signOut();

    toast({
      title: "You've succesfully signed out.",
    });

    if (error) {
      // eslint-disable-next-line no-console
      console.error("ERROR:", error);
    }
  }

  return (
    <Button variant="ghost" size="xs" onClick={handleSignOut}>
      Sign Out
    </Button>
  );
}
