"use client";

import { CustomButtonProps } from '@/types';
import Image from 'next/image';

const CustomButton = ({title, containerStyles, textStyles, btnIcon, label}: CustomButtonProps) => {
  return (
      <button
          type='button'
          className={`${containerStyles}`}
          aria-label={label}
      >
          {btnIcon && (
        <div className='relative w-7 h-7'>
            <Image
                src={btnIcon}
                alt='arrow_left'
                height={25}
                width={25}
                className='object-contain'
 
            />
        </div>
      )}

          <span className={`${textStyles}`}>
              {title}
          </span>
      </button>
  );
};

export default CustomButton;