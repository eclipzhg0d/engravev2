import { Search as SearchButton } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Search() {
  return (
    <Button variant='ghost' size='icon'>
      <SearchButton className='h-[1.2rem] w-[1.2rem] ' />
    </Button>
  );
}
