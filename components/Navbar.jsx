'use client';
import React, { useState } from 'react';

const Navbar = ({DATA}) => {
  const [menuOpen, setMenuOpen] = useState(false);
    // Toggle menu open state
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
  return (
    <nav
      id="navbar"
      class={`flex z-40 w-full h-auto items-center justify-center sticky top-0 inset-x-0 bg-background/0 data-[menu-open=true]:border-none backdrop-blur-lg  backdrop-saturate-150  max-w-[1024px] mx-auto ${menuOpen ? 'backdrop-blur-lg bg-background/60' : 'bg-background/0'}`}
    >
      <header className="flex w-full flex-row px-6 gap-4 items-center justify-between py-6">
        <strong>{DATA?.name}.</strong>
        <ul className="hidden sm:flex gap-4">
          <a href='#projects' className='hover:text-white hover:cursor-pointer'>projects</a>
          <a href='#experience' className='hover:text-white hover:cursor-pointer'>experience</a>
          <a href='#skills' className='hover:text-white hover:cursor-pointer'>skills</a>
          <a href='#contact' className='hover:text-white hover:cursor-pointer'>contact</a>
        </ul>
        <div className='flex md:hidden'>
          <button
            onClick={toggleMenu}
            className="relative w-6 h-6 focus:outline-none"
          >
            {/* Hamburger Icon */}
            <span
              className={`block absolute w-full h-[2px] bg-white transform transition duration-300 ease-in-out ${
                menuOpen ? 'rotate-45 top-4.5' : '-translate-y-1.5'
              }`}
            />
            <span
              className={`block absolute w-full h-[2px] bg-white transform transition duration-300 ease-in-out ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block absolute w-full h-[2px] bg-white transform transition duration-300 ease-in-out ${
                menuOpen ? '-rotate-45 -top-8.5' : 'translate-y-1.5'
              }`}
            />
          </button>
        </div>
        <div
          className={`z-30 px-6 pt-2 fixed flex max-w-full top-[4rem] inset-x-0 bottom-0 w-screen flex-col gap-2  bg-[#161821] backdrop-blur-xl saturate-50  backdrop-saturate-150  h-screen ${
            menuOpen ? 'transform translate-y-0' : 'hidden transform -translate-y-full'
          }`

        }
        style={{ height: 'calc(100vh - 1rem )' }}
        >
          <ul className="flex flex-col gap-2 mt-2 ">
          <a href='#projects' className='hover:text-white hover:cursor-pointer' onClick={toggleMenu}>projects</a>
          <a href='#experience' className='hover:text-white hover:cursor-pointer' onClick={toggleMenu}>experience</a>
          <a href='#skills' className='hover:text-white hover:cursor-pointer' onClick={toggleMenu}>skills</a>
          <a href='#contact' className='hover:text-white hover:cursor-pointer' onClick={toggleMenu}>contact</a>
          </ul>
        </div>
      </header>
    </nav>
  );
};

export default Navbar;

