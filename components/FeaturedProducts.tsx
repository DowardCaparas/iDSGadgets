
import Image from 'next/image';
import { gadgets } from '@/constants';
import Link from 'next/link';

const FeaturedProducts = () => {


    return (
        <div className='w-full mt-14 gap-4 flex flex-col'>
            <h3 className='text-slate-500 font-semibold'>Featured Products</h3>

            <div className='grid sm:grid-cols-3 grid-flow-row gap-5 grid-cols-2 mt-6'>
                {gadgets.map(item => (
                    <Link
                        key={item.id}
                        href={`/Devices/${item.id}`}
                        aria-label={`Link to product${item.details.name} 
                                     worth ${item.details.currentPrice}
                                  `}
                    >
                        <div key={item.id}
                            className='border-2 border-neutral-200 rounded-md bg-slate-50 hover:shadow-xl cursor-pointer'>

                            <div className='grid bg-white'>
                                <Image
                                    src={item.details.deviceIMG}
                                    alt={item.details.name}
                                    width={250}
                                    height={250}
                                    className='object-contain place-self-center'
                                    quality={100}
                                />
                            </div>

                            <div className='p-5 border-t-2 border-slate-200'>

                                <div className='flex justify-start items-start flex-col gap-4'>
                                    <div className='flex gap-4 justify-start items-start ml-3'>
                                        <p className='text-primary_black text-xl font-bold'>
                                            $ {item.details.currentPrice}
                                        </p>
                                        <p className='text-sm line-through text-slate-500'>
                                            $ {item.details.oldPrice}
                                        </p>
                                    </div>
                                    <h3 className='text-primary_black font-semibold max-md:text-[12px]'>
                                        {item.details.name.substring(0, 15)}...
                                    </h3>
                                </div>

                            </div>

                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default FeaturedProducts;