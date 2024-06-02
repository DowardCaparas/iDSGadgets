'use client';

import { CustomButtonProps } from '@/types';
import Image from 'next/legacy/image';

const CustomButton = ({title, containerStyles, textStyles, btnIcon}: CustomButtonProps) => {
  return (
      <button
          type='button'
          className={`${containerStyles}`}
      >
          {btnIcon && (
        <div className='relative w-7 h-7'>
            <Image
                src={btnIcon}
                alt='arrow_left'
                className='object-contain'
                layout='fill'
                style={{
                    maxWidth: '100%',
                    height: 'auto'
                }} 
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