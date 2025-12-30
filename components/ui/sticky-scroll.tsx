'use client';

import React, { forwardRef } from 'react';
import { GlowCard } from '@/components/ui/GlowCard';

const StickyScrollGallery = forwardRef<HTMLElement>((props, ref) => {
  return (
    <main className='' ref={ref}>
      <section className='w-full relative z-10'>
        <div className='grid grid-cols-12 gap-2'>
          <div className='grid gap-2 col-span-4'>
            <figure className=' w-full'>
              <img
                src='/services/appsinchatgpt/scroll/1.png'
                alt=''
                className='transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md '
              />
            </figure>
            <figure className=' w-full'>
              <img
                src='/services/appsinchatgpt/scroll/3.png'
                alt=''
                className='transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md '
              />
            </figure>
            <figure className=' w-full'>
              <img
                src='/services/appsinchatgpt/scroll/5.png'
                alt=''
                className='transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md '
              />
            </figure>
            <figure className='w-full'>
              <img
                src='/services/appsinchatgpt/scroll/7.png'
                alt=''
                className='transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md '
              />
            </figure>
            <figure className='w-full'>
              <img
                src='/services/appsinchatgpt/scroll/2.png'
                alt=''
                className='transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md '
              />
            </figure>
          </div>

          <div className='sticky top-20 h-screen w-full col-span-4 gap-2 grid grid-rows-3'>
            <GlowCard variant="green-default" className="w-full h-full" innerClassName="flex items-center justify-center bg-brand-gradient p-6">
              <h2 className="text-4xl text-center text-white">
                We have built over 100 apps
              </h2>
            </GlowCard>
            <figure className='w-full h-full '>
              <img
                src='/services/appsinchatgpt/scroll/4.png'
                alt=''
                className='transition-all duration-300 h-full w-full  align-bottom object-cover rounded-md '
              />
            </figure>
            <figure className='w-full h-full '>
              <img
                src='/services/appsinchatgpt/scroll/6.png'
                alt=''
                className='transition-all duration-300 h-full w-full align-bottom object-cover rounded-md '
              />
            </figure>
            <figure className='w-full h-full '>
              <img
                src='/services/appsinchatgpt/scroll/8.png'
                alt=''
                className='transition-all duration-300 h-full w-full  align-bottom object-cover rounded-md '
              />
            </figure>
          </div>

          <div className='grid gap-2 col-span-4'>
            <figure className='w-full'>
              <img
                src='/services/appsinchatgpt/scroll/1.png'
                alt=''
                className='transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md '
              />
            </figure>
            <figure className='w-full'>
              <img
                src='/services/appsinchatgpt/scroll/4.png'
                alt=''
                className='transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md '
              />
            </figure>
            <figure className='w-full'>
              <img
                src='/services/appsinchatgpt/scroll/7.png'
                alt=''
                className='transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md '
              />
            </figure>
            <figure className='w-full'>
              <img
                src='/services/appsinchatgpt/scroll/2.png'
                alt=''
                className='transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md '
              />
            </figure>
            <figure className='w-full'>
              <img
                src='/services/appsinchatgpt/scroll/5.png'
                alt=''
                className='transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md '
              />
            </figure>
          </div>
        </div>
      </section>
    </main>
  );
});

StickyScrollGallery.displayName = 'StickyScrollGallery';

export default StickyScrollGallery;

