'use client';

import { navLinks } from '@/constants';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useAnimationControls } from 'framer-motion';

const NavBar = () => {
  {
    /*for opening the navigation panel */
  }
  const [open, setOpen] = useState(false);

  /*Animate navigation panel */
  const containerVariants = {
    close: {
      width: '14rem',
      transition: {
        type: 'tween',
        duration: 0.3,
      },
    },
    open: {
      width: '16rem',
      transition: {
        type: 'tween',
        duration: 0.3,
      },
    },
  };

  {
    /*End for opening the navigation panel */
  }

  // adding background when scrolled
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 0 ? setScrolled(true) : setScrolled(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // end of adding background when scrolled

 /*Tap anywhere to close nav panel*/
  const containerControls = useAnimationControls();

  useEffect(() => {
    if (open) {
      containerControls.start('open');
    } else {
      containerControls.start('close');
    }
  }, [open, containerControls]);
  

  /*End of Animating navigation panel */

  useEffect(() => {
    const handleOutsideClick = () => {
      if (open) {
        // If navigation is open and click is outside of navigation, close it
        setOpen((prev) => !prev);
      }
    };

    document.body.addEventListener('click', handleOutsideClick);

    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    };
  }, [open]);



  {
    /*Close the nav panel when the open state is false */
  }
  const handleCloseNav = () => {
    setOpen((prev) => !prev);
  };

  return (
    <header className='w-full'>
      <nav
        className={`fixed top-0 z-50  w-full flex justify-between first-letter:items-center 
        py-8 text-white gap-3 transition duration-300 nav__padding
        
          ${scrolled ? 'bg-zinc-900 bg-opacity-70 backdrop-blur-xl border-b-2 border-primary_cyan' : ''}

        `}
      >
        <Link
          href='/'
          aria-label='Go to home'
        >
          <h1 className='font-bold sm:text-2xl text-xl'>iDSGadgets</h1>

        </Link>
        <div className='flex gap-10 max-md:hidden'>
          {navLinks.map((link) => (
            <Link href={link.url} key={link.label}>
              <span className='hover:text-slate-300'>{link.label}</span>
            </Link>
          ))}
        </div>

        <div className='hidden max-md:flex z-10'>
          <button
            className='flex flex-col gap-1'
            onClick={() => setOpen((prev) => !prev)}
          >
            <div className='w-6 h-1 bg-white rounded origin-left'></div>
            <div className='w-6 h-1 bg-white rounded'></div>
            <div className='w-6 h-1 bg-white rounded origin-left'></div>

          </button>
        </div>
      </nav>

      {/*Navigation Panel */}
      {open && (
        <motion.div
          variants={containerVariants}
          animate={containerControls}
          initial='close'
          className='z-50 h-full bg-slate-100 flex flex-col padding justify-start fixed right-0 
          items-start md:hidden border-r-2 border-slate-500 gap-4 top-0'
        >
          {navLinks.map((link) => (
            <div
              key={link.label}
              className='flex item-center justify-center gap-2'
            >
              <Image
                src={link.imgICON}
                alt='nav icon'
                width={25}
                height={25}
                className='object-contain'
              />

              <Link
                href={link.url}
                onClick={handleCloseNav}
                className='text-primary_black hover:text-slate-500'
              >
                {link.label}
              </Link>
            </div>
          ))}
        </motion.div>
      )}
    </header>
  );
};

export default NavBar;
