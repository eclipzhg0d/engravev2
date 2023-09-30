import { ShoppingCart as CartButton } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Cart() {
  return (
    <Button variant='ghost' size='icon'>
      <CartButton className='h-[1.2rem] w-[1.2rem] ' />
    </Button>
  );
}
