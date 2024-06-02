'use client';

import Image from 'next/legacy/image';
import { useState } from 'react';
import { gadgets } from '@/constants';

const FeaturedProducts = () => {
    
   const [showall, setShowall] = useState(false);
   
   // Slice the gadgets array to only include the first three items
   const featuredGadgets = showall ? gadgets : gadgets.slice(0, 3);

  return (
      <div className='w-full mt-14 gap-4 flex flex-col'>
          <h3 className='text-slate-500 font-semibold'>Featured Products</h3>

          <div className='grid sm:grid-cols-3 grid-flow-row gap-y-7 gap-x-3 grid-cols-2 mt-6'>
              {featuredGadgets.map(item => (
                  <div key={item.id} 
                       className='border-2 border-neutral-200 rounded-md bg-slate-50 hover:shadow-xl cursor-pointer'>

                      <div className='grid bg-white'>
                          <Image
                              src={item.deviceIMG}
                              alt=''
                              width={100}
                              height={90}
                              className='object-cover place-self-center'
                              layout='responsive'
                              quality={100}
                               />
                      </div>

                      <div className='p-5 border-t-2 border-slate-200'>
                          
                          <div className='flex justify-start items-start flex-col gap-4'>
                              <div className='flex gap-4 justify-start items-start ml-3'>
                                  <p className='text-primary_black text-xl font-bold'>$ {item.details.currentPrice}</p>
                                  <p className='text-sm line-through text-slate-500'>$ {item.details.oldPrice}</p>
                              </div>
                              <h3 className='text-primary_black font-semibold max-md:text-sm'>{item.details.name}</h3>
                          </div>
                         
                      </div>

                  </div>
              ))} 
          </div>
              <button 
                  className='hover:underline'
                  onClick={() => setShowall(prev => !prev)}
              >
                  {showall ? 'See Less^' : 'View All >'}
              </button>
      </div>
  );
};

export default FeaturedProducts;