import Image from 'next/legacy/image';
import CustomButton from './CustomButton';
import { wallet, dollar } from '@/public';

const Hero = () => {
  return (
      <section className='black_gradient min-h-screen padding z-10' id='home'>

          <div className='flex flex-col justify-center items-center gap-6 mt-28 z-10 text-white'>
              <h1 className='lg:text-8xl font-bold text-6xl max-sm:text-4xl'>Create the future</h1>
              <div className='h-1 w-1/2 bg-primary_cyan'></div>
              <span className='flex flex-col justify-center items-center text-slate-200'>
                  <p>Bridge the gap between creativity and productivity with</p>
                  <p>the most powerful VR-ready machines</p>
              </span>
              <div className='flex gap-4 mt-4'>
                  <CustomButton 
                      title="Buy Now"
                      containerStyles="px-8 rounded-md py-2 bg-white hover:bg-slate-300 active:bg-slate-200"
                      textStyles="text-slate-500 font-semibold"
                  />
                  <CustomButton 
                      title="Watch Video"
                      textStyles="text-slate-200"
                      containerStyles='flex gap-2 p-2 hover:bg-primary_black rounded-md active:bg-zinc-700'
                      btnIcon='/play.svg'
                  />
              </div>
              <div className='flex gap-4 mt-10 bg-zinc-800 p-5 rounded-md'>
                  <div className='flex justify-start items-start px-2'>
                      <Image
                          src={dollar}
                          alt='dollar icon'
                          width={35}
                          height={35}
                          className='object-contain'
                          style={{
                              maxWidth: '100%',
                              height: 'auto',
                          }} />
                      <span className='font-semibold md:text-lg'>100% Money back
                          <p className='font-normal text-slate-200 text-sm'>
                              You have 10 days to get refund</p>
                      </span>
                  </div>

                  <div className='flex justify-start items-start px-2'>
                      <Image
                          src={wallet}
                          alt='wallet icon'
                          width={35}
                          height={35}
                          className='object-contain'
                          style={{
                              maxWidth: '100%',
                              height: 'auto'
                          }} />
                      <span className='font-semibold md:text-lg'>100% Payment Security
                          <p className='font-normal text-slate-200 text-sm'>
                              Your payments are safe with us</p>
                      </span>
                  </div>

              </div>
          </div>
        
      </section>
  );
};

export default Hero;
