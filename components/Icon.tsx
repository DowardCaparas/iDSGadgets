'use client';

import { IconProps } from '@/types';
import Image from 'next/legacy/image';

const Icon = ({imageUrl, imageAlt}: IconProps) => {
  return (
    <Image
      src={imageUrl}
      width={25}
      height={25}
      alt={imageAlt}
      style={{
        maxWidth: '100%',
        height: 'auto'
      }} />
  );
};

export default Icon;