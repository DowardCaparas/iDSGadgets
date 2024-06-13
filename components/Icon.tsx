'use client';

import { IconProps } from '@/types';
import Image from 'next/image';

const Icon = ({imageUrl, imageAlt}: IconProps) => {
  return (
    <Image
      src={imageUrl}
      width={25}
      height={25}
      alt={imageAlt}
    />
  );
};

export default Icon;