'use client';

import { navLinks } from '@/constants';
import { person, search } from '@/public';
import Icon from './Icon';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/legacy/image';
import { motion } from 'framer-motion';

const NavBar = () => {

    {/*Animation for nav toggle button */}
   const topVariant = {
    closed: {
        rotate: 0
    },
    opened: {
        rotate: 45
    }
   };
   const midVariant = {
    closed: {
        opacity: 1
    },
    opened: {
        opacity: 0
    }
   };
   const botVariant = {
    closed: {
        rotate: 0
    },
    opened: {
        rotate: -45
    }
   };
    

  {/*for opening the navigation panel */}
  const [open, setOpen] = useState(false);
  
  {/*for adding navigation background when scrolled */}
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
        window.scrollY > 0 ? setScrolled(true) : setScrolled(false);
    };
    window.addEventListener('scroll', handleScroll);

    return()=> {
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  {/*Close the nav panel when the open state is false */}
  const handleCloseNav = () => {
    setOpen(false);
  };

  return (
      <header className='absolute z-50 w-full'>
          <nav className={`fixed top-0 left-0 w-full flex justify-between
          items-center xl:px-28 lg:px-20 px-6 py-8 text-white gap-3 transition duration-300
          
          ${scrolled ? 'bg-zinc-900 bg-opacity-70 backdrop-blur-md border-b border-b-gray-800' : ''}
          
          `}>
              
              <h3 className='font-bold'>iDSGadgets</h3>
              <div className='flex gap-10 max-md:hidden'>
                {navLinks.map(link => (
                  <Link href={link.url} key={link.label}>
                      <span className='hover:text-slate-300'>
                      {link.label}
                      </span>
                       
                  </Link>
                ))}
              </div>
              <div className='flex gap-2 max-md:hidden'>
                  <Icon 
                      imageUrl={search}  
                      imageAlt='search icon' 
                  />
                  <Icon 
                      imageUrl={person}  
                      imageAlt='user icon' 
                  />
              </div>
              
              <div className='hidden max-md:flex'>
                  <button className='flex flex-col gap-1' onClick={() => setOpen(prev => !prev)}>
                      <motion.div 
                          variants={topVariant}
                          className='w-6 h-1 bg-white rounded origin-left'
                          animate={open ? 'opened' : 'closed'}
                      >
                      </motion.div>

                      <motion.div 
                          variants={midVariant}
                          className='w-6 h-1 bg-white rounded'
                          animate={open ? 'opened' : 'closed'}
                      >
                      </motion.div>

                      <motion.div 
                          variants={botVariant}
                          className='w-6 h-1 bg-white rounded origin-left'
                          animate={open ? 'opened' : 'closed'}
                      >
                      </motion.div>
                  </button>
              </div>    
          </nav>
      
      {/*Navigation Panel */}
       {open && (
          <div className='w-1/2 h-full bg-slate-100 flex flex-col padding justify-start fixed left-0 
          items-start md:hidden border-r-2 border-slate-500 gap-4'>
               {navLinks.map(link => (  
                      <div key={link.label} className='flex item-center justify-center gap-2'>
                          <Image
                              src={link.imgICON}
                              alt='nav icon'
                              width={25}
                              height={25}
                              style={{
                                  maxWidth: '100%',
                                  height: 'auto'
                              }} />

                          <Link 
                              href={link.url}   
                              onClick={handleCloseNav}
                              className='text-primary_black hover:text-slate-500'
                          >
                              {link.label}
                          </Link>
                      </div>
                      
               ))}
          </div>
       )}
          

      </header>
  );
};

export default NavBar;