import { User as ProfileButton } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Profile() {
  return (
    <Button variant='ghost' size='icon'>
      <ProfileButton className='h-[1.2rem] w-[1.2rem] ' />
    </Button>
  );
}
