import React from "react";
import { Badge } from "@/components/ui/badge";

export default function WhyUs() {
  return (
    <div className='flex flex-col items-center py-9'>
      <Badge variant='outline' className='my-2'>
        Why Us
      </Badge>
      <div className='pb-2 text-4xl font-extrabold tracking-tight text-center scroll-m-20 lg:text-3xl'>
        We are not just a laser engraving service...
      </div>
      <div className='py-2 text-center'>
        We are your dedicated partner in transforming your vision into
        beautifully engraved reality. <br />
        Here is why customers choose us:
      </div>
      <div className='grid grid-cols-1 gap-5 pt-4 grid-rows-auto md:grid-cols-4 md:grid-rows-2'>
        <div className='p-5 border rounded-md'>
          <b>Precision & Perfection</b> <br />
          We deliver laser-perfect engravings with meticulous attention to
          detail.
        </div>
        <div className='p-5 border rounded-md'>
          <b>Custom Creativity</b> <br />
          Our team turns your ideas into unique, personalized creations.
        </div>
        <div className='p-5 border rounded-md'>
          <b>Quality Assurance</b> <br />
          Count on us for top-notch quality and lasting impressions.
        </div>
        <div className='p-5 border rounded-md'>
          <b>Quick Turnaround</b>
          <br /> We meet your deadlines without compromising on excellence.
        </div>
      </div>
    </div>
  );
}
