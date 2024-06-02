import Image from 'next/legacy/image';
import CustomButton from './CustomButton';
import { laptop } from '@/public/images';

const About = () => {
  return (
      <section className='w-full padding black_gradient relative' id='about'>
          <div className='flex-between max-lg:flex-col gap-4 mt-5'>
                  <Image
                      src= {laptop}
                      alt='laptop'
                      width={500}
                      height={450}
                      className='object-contain ml-14'
                      style={{
                          maxWidth: '100%',
                          height: 'auto'
                      }} />
                      
                  <div className='w-full flex flex-col justify-end items-end gap-2 text-white'>
                      <p>From $799</p>
                      <h1 className='text-4xl font-bold'>iPad Pro</h1>
                      <p>Astonishing performance. Incredibly displays</p>
                      <p>Superfast wireless connectivity</p>
                      
                      <CustomButton 
                          title='Buy Now'
                          containerStyles='px-8 mt-6 rounded-md py-2 bg-white hover:bg-slate-300 active:bg-slate-200'
                          textStyles='text-primary_black font-semibold'
                       />

                  </div>
          </div>
             
          
      </section>
  );
};

export default About;