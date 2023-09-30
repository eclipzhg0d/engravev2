import { Button } from "@/components/ui/button";
import {
  Card as CardContainer,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";
import { Check } from "lucide-react";
import Link from "next/link";

export default function Card({ cardData }) {
  return (
    <>
      {cardData.map((card) => (
        <CardContainer className='w-full cursor-pointer' key={card.id}>
          <CardHeader>
            <Image src={card.image} width={400} height={350} alt={card.title} />
          </CardHeader>
          <CardContent>
            <CardTitle className='text-base'>
              <Link href={`/${card.tag}/${card.slug}`}>{card.title}</Link>
            </CardTitle>
            <CardDescription>{card.description}</CardDescription>
          </CardContent>
          <CardFooter className='flex items-center justify-between'>
            <Button variant='ghost'>
              <Check className='w-5 h-5 pr-2' />
              Customizable
            </Button>
            <Button>Add to cart</Button>
          </CardFooter>
        </CardContainer>
      ))}
    </>
  );
}
