'use client';

import { cart } from '@/public';
import Image from 'next/image';

const AddtoCartButton = () => {
  return (
    <button className=' p-3 bg-zinc-800 border hover:bg-zinc-700 border-red-100 rounded-md'>
        <Image
          src={cart}
          alt='cart button'
          height={25}
          width={25}
          className='object-contain'
         />
    </button>
  );
};

export default AddtoCartButton;