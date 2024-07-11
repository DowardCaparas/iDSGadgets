
import Image from 'next/image';
import { products } from '@/constants';

const ProductCard = () => {
  return(
    <div className='w-full'>
        <h3 className='text-slate-500 font-semibold'>Our Products</h3>
       
        <div className='grid md:grid-cols-3 grid-flow-row gap-4 grid-cols-2'>

            {products.map((item, index) => (
                <div key={index} 
                className={`shadow-lg hover:bg-gray-100 rounded cursor-pointer
                    ${index === 0 ? 'row-span-2 mt-24' : ''}
                    ${index === 3 ? 'col-span-2' : ''}
                `}
                >
                    <h3 className='ml-5 mt-5 text-slate-700 font-semibold'>{item.title}</h3>

                    <div className='flex justify-center items-center'>
                    <Image 
                        src={item.imgurl}
                        alt={item.title}
                        height={200}
                        width={200}
                        className='object-contain w-1/2'
                    />
                    </div>
                   
                </div>
            ))}

        </div>
    </div>
  );
};

export default ProductCard;