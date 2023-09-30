import Image from "next/image";
import Carousel from "@/components/carousel";

import { Separator } from "@/components/ui/separator";
import CardList from "@/components/card-list";
import Hero from "@/components/hero";
import WhyUs from "@/components/why-us";
import HowItWorks from "@/components/how-it-works";

const banners = [
  {
    image: "https://i.ibb.co/bvZMBBp/20230914-125230.jpg",
  },
  {
    image: "https://i.ibb.co/vm8xNrN/20230914-125343.jpg",
  },
  {
    image: "https://i.ibb.co/1dGKt9n/20230914-130322.jpg",
  },
];

export default function Home() {
  return (
    <main className='px-5 py-1 md:px-24 '>
      {/* <Carousel images={banners.map((obj) => obj.image)} /> */}
      <Hero />

      <WhyUs />
      <HowItWorks />
      <Separator className='my-2' />
      <div className='pt-5'>
        <CardList />
      </div>
    </main>
  );
}
