import React from "react";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <div className='flex items-center justify-center py-12 md:py-24'>
      <div className='flex flex-col items-center gap-5 text-center'>
        <h1 className='text-4xl font-extrabold tracking-tight scroll-m-20 lg:text-5xl'>
          "Your Vision, Our Laser Precision."
        </h1>
        <p className='max-w-2xl text-base leading-7 text-center'>
          Welcome to the world of{" "}
          <a
            href='#'
            className='font-medium underline text-primary underline-offset-4'
          >
            Custom Laser Engraving,
          </a>{" "}
          where your imagination knows no bounds. At Engravedom, we empower you
          to transform ordinary objects into extraordinary keepsakes.
        </p>
        <div className='flex items-center gap-5'>
          <Button variant='ghost'>Get Started</Button>
          <Button variant='outline'>See Examples</Button>
        </div>
      </div>
    </div>
  );
}
