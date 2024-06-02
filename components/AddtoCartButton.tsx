'use client';

import { cart } from '@/public';
import Image from 'next/legacy/image';

const AddtoCartButton = () => {
  return (
    <button className=" p-3 bg-zinc-800 border hover:bg-zinc-700 border-red-100 rounded-md">
        <Image
          src={cart}
          alt="cart button"
          style={{
            maxWidth: '100%',
            height: 'auto'
          }} />
    </button>
  );
};

export default AddtoCartButton;