

import CustomButton from '@/components/CustomButton';
import { gadgets } from '@/constants';
import Image from 'next/image';

const ProductDetail = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  // Find the gadget with the matching ID
  const gadget = gadgets.find(g => g.id.toString() === id);

  if (!gadget) {
    return <div>Gadget not found!</div>;
  }

  const { name, currentPrice, oldPrice, description, deviceIMG } = gadget.details;

  return (

    <section className='container__padding mt-28 overflow-hidden'>
      <div className='flex max-md:flex-col justify-between items-start gap-6'>
        <Image
          src={deviceIMG}
          alt={name}
          height={550}
          width={550}
          quality={100}
          className='object-contain mr-10 sm:w-2/4 w-2/3 place-self-center'
        />

        {/* Details */}
        <div className='w-full flex flex-col md:justify-start justify-start md:items-start 
        items-center gap-4'>
          <p className='md:text-3xl text-xl font-bold max-md:text-center'>{name}</p>
          <div className='flex justify-center items-center gap-6'>
            <p className='font-semibold'>${currentPrice}</p>
            <p className=' line-through text-slate-500'>${oldPrice}</p>
          </div>

          <p className='text-slate-500 max-md:text-[12px] max-md:text-center'>{description}</p>

          <CustomButton
            title='Add to Cart'
            containerStyles='px-10 py-3 bg-zinc-900 mt-5'
            textStyles='text-white'
            label='Add to cart the product'
          />
        </div>
      </div>
    </section>
  );
};

export const generateStaticParams = () => {
  return [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }, { id: '5' }, { id: '6' }];
};

export default ProductDetail;