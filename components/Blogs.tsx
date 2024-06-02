import { BlogProps } from '@/types';
import Image from 'next/legacy/image';
import CustomButton from './CustomButton';

interface BlogListProps {
  blogs: BlogProps[]
}

const Blogs = ({blogs}: BlogListProps) => {

  return (
    <section className='w-full min-h-screen padding' id='blog'>
       <h3 className='text-slate-500 font-semibold'>Latest News & Blogs</h3>

        <div className='grid md:grid-cols-3 grid-flow-row gap-4 grid-cols-2 mt-8'>

          {blogs.map(item => (
            <div key={item.title} className='flex flex-col border border-slate-200 
            rounded-md gap-7 hover:shadow-lg cursor-pointer'>
                <Image
                  src={item.imgURL}
                  alt={item.title}
                  width={100}
                  height={80}
                  quality={100}
                  className='object-contain w-full rounded-tl-md rounded-tr-md'
                  sizes="100vw"
                />

                <div className='flex flex-col gap-y-5 ml-5 mb-8'>
                  <h3 className='font-semibold overflow-hidden text-primary_black max-md:text-sm'>{item.title}</h3>
                  <p className='text-slate-500'>{item.date}</p>
                </div>
            </div>
          ))}

        </div>

        <div className='green_gradient mt-14 flex flex-col justify-center 
        items-center gap-10 padding rounded-md'>

          <div className='text-white flex justify-center items-center flex-col bg-zinc-800 p-5 rounded-md'>
            <h1 className='text-2xl font-bold'>Get Our Newsletter</h1>
            <p className='text-sm text-slate-200'>Enjoy up to 15% off on your first purchase!</p>
          </div>

          <div className='flex justify-center items-center'>
            <input 
              type='search' 
              placeholder='example@email.com' 
              className='rounded-tl-md rounded-bl-md p-5 py-2 px-5 sm:px-10 text-primary_black max-md:w-2/3'
            />

            <CustomButton 
              title='SUBSCRIBE'
              containerStyles='bg-zinc-800 py-2 px-10 rounded-tr-md rounded-br-md hover:bg-zinc-700 max-md:px-3'
              textStyles='text-white font-semibold max-md:text-sm'
            />
          </div>
            
        </div>

    </section>
  );
};

export default Blogs;