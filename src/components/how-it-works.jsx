import React from "react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function HowItWorks() {
  return (
    <div className='flex flex-col items-center py-9'>
      <Badge variant='outline' className='my-2'>
        How It Works
      </Badge>
      <div className='pb-2 text-4xl font-extrabold tracking-tight text-center scroll-m-20 lg:text-3xl'>
        Using our platform is easy and straightforward.
      </div>
      <section class='py-12 md:py-24 bg-radial-dark-green'>
        <div class='container px-4 mx-auto'>
          <div class='max-w-6xl mx-auto'>
            <div class='flex flex-wrap -mx-4 md:-mx-6 items-center'>
              <div class='w-full lg:w-1/3 px-4 md:px-6 mb-16 lg:mb-0'>
                <div class='max-w-xs mx-auto lg:mx-0'>
                  <Image
                    src='https://i.ibb.co/54H7Qn1/Screenshot-2023-09-30-194459.png'
                    width={350}
                    height={350}
                    alt=''
                  />
                  <div class='flex'>
                    <div class='flex-shrink-0 inline-flex w-8 h-8 items-center justify-center text-sm font-bold text-white bg-black bg-opacity-50 rounded-md transition duration-200'>
                      1
                    </div>
                    <div class='ml-3'>
                      <h6 class='font-medium  mb-1'>Sign up</h6>
                      <p class=''>
                        Create an account by simply setting up your email and
                        password.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class='w-full lg:w-1/3 px-4 md:px-6 mb-16 lg:mb-0'>
                <div class='max-w-xs mx-auto lg:mx-0'>
                  <Image
                    src='https://i.ibb.co/z6CWgZy/Screenshot-2023-09-30-194608.png'
                    width={350}
                    height={350}
                    alt=''
                  />
                  <div class='flex'>
                    <div class='flex-shrink-0 inline-flex w-8 h-8 items-center justify-center text-sm font-bold text-white bg-black bg-opacity-50 rounded-md transition duration-200'>
                      2
                    </div>
                    <div class='ml-3'>
                      <h6 class='font-medium  mb-1'>Explore</h6>
                      <p class=''>
                        Browse through our intuitive interface to discover the
                        features.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class='w-full lg:w-1/3 px-4 md:px-6 mb-16 lg:mb-0'>
                <div class='max-w-xs mx-auto lg:mx-0'>
                  <Image
                    src='https://i.ibb.co/54H7Qn1/Screenshot-2023-09-30-194459.png'
                    width={350}
                    height={350}
                    alt=''
                  />
                  <div class='flex'>
                    <div class='flex-shrink-0 inline-flex w-8 h-8 items-center justify-center text-sm font-bold text-white bg-black bg-opacity-50 rounded-md transition duration-200'>
                      3
                    </div>
                    <div class='ml-3'>
                      <h6 class='font-medium  mb-1'>Customize</h6>
                      <p class=''>
                        Select the product you want to customize and start
                        personalize it.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
