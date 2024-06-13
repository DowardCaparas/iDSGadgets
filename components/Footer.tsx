import { footerLinks, socials } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <footer className='bg-zinc-950 relative container__padding' id='contact'>
        <div className='flex justify-between flex-wrap gap-6 text-white py-14'>
          {/*Footer Left */}
          <div className='flex flex-col justify-start items-start gap-6 lg:w-1/3'>
            <Link href='/' aria-label='Go to home'>
              <h1 className='font-bold sm:text-2xl text-xl'>iDSGadgets</h1>
            </Link>
            <p className='text-primary_gray'>
              Elevate your tech game with top-tier gadgets, where innovation
              meets quality.
            </p>
            <div className='flex gap-3'>
              {socials.map((icon) => (
                <Image
                  key={icon.label}
                  src={icon.iconLogo}
                  alt={icon.label}
                  width={25}
                  height={25}
                  className='green_gradient rounded p-1'
                />
              ))}
            </div>
          </div>

          {/*Links */}
          <div className='flex lg:gap-32 gap-10 flex-wrap'>
            {footerLinks.map((item, index) => (
              <div key={index}>
                <h3 className='font-bold'>{item.title}</h3>
                <div className='flex flex-col mt-5 gap-3'>
                  {item.links.map((link) => (
                    <Link
                      key={link.title}
                      href={link.url}
                      aria-label='link'
                      className='text-secondary_gray'
                    >
                      <span className='hover:text-white'>
                         {link.title}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </footer>
      <div
        className='bg-zinc-950 flex items-center justify-center py-6 
   border-t border-secondary_gray'
      >
        <p className='text-secondary_gray max-sm:text-sm'>
        &copy; 2024 Dounhuward Caparas All Rights Reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
