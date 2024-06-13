import Image from 'next/image';
import CustomButton from './CustomButton';
import { wallet, dollar, play } from '@/public';
import { heroBG } from '@/public/images';

const Hero = () => {
  return (
    <section id='home' className='bg-zinc-950 hero_container__padding mt-0 pt-12'>

      <div className='flex max-lg:flex-wrap justify-between items-end gap-10'>

        <div className='flex flex-col justify-start items-start gap-6 mt-28 z-10 text-white'>
          <h1 className='xl:text-6xl md:text-4xl font-bold text-2xl'>
            Let&apos;s Create the  
            <span className=' text-cyan-300 shadow-md'> Future</span>
          </h1>
          <p className='text-slate-200 max-md:text-[12px]'>
            Bridge the gap between creativity and productivity with the most
            powerful VR-ready machines
          </p>
          <div className='flex gap-4 mt-4'>
            <CustomButton
              title='Buy Now'
              containerStyles='px-8 rounded-md py-2 bg-white hover:bg-slate-300 active:bg-slate-200'
              textStyles='text-black font-semibold'
              label='Buy the product now'
            />
            <CustomButton
              title='Watch Video'
              textStyles='text-slate-200'
              containerStyles='flex gap-2 p-2 hover:bg-primary_black rounded-md active:bg-zinc-700'
              btnIcon={play}
              label='Watch the video'
            />
          </div>

          <div className='flex gap-4 my-10'>
            <div className='flex justify-start items-start '>
              <Image
                src={dollar}
                alt='dollar icon'
                width={40}
                height={40}
                className='object-contain'
              />
              <p className='font-semibold md:text-md text-sm'>
                100% Money back
                <p className='font-normal text-slate-200 text-[12px]'>
                  You have 10 days to get refund
                </p>
              </p>
            </div>

            <div className='flex justify-start items-start'>
              <Image
                src={wallet}
                alt='wallet icon'
                width={40}
                height={40}
                className='object-contain'
              />
              <span className='font-semibold md:text-md text-sm'>
                100% Payment Security
                <p className='font-normal text-slate-200 text-[12px]'>
                  Your payments are safe with us
                </p>
              </span>
            </div>
          </div>
        </div>

      <div className='lg:w-full w-full flex justify-end items-end'>
      <Image
          src={heroBG}
          alt='Hero image'
          height={610}
          width={600}
          className='object-contain'
          quality={100}
        />
      </div>
       
      </div>
    </section>
  );
};

export default Hero;
