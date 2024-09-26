// import P from '../paragraph';
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedinIn } from 'react-icons/fa6';
import { BsYoutube } from 'react-icons/bs';
import { RiInstagramFill } from 'react-icons/ri';
import { H2 } from '../fonts/headers';
import { H1 } from '../fonts/headers';
import MediaBox from '../accessories/mediabox';
import Button from '../accessories/button';
import { MdOutlineMenu } from 'react-icons/md';
import '../../app/globals.css';
import { useEffect, useState } from 'react';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const checkScroll = () => {
      const scrolled = window.scrollY > 0;
      if (scrolled !== isScrolled) {
        setIsScrolled(scrolled);
      }
    };
    window.addEventListener('scroll', checkScroll);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, [isScrolled]);
  console.log(isScrolled);
  return (
    <div
      className={`md:px-[5rem] px-[1rem] py-3 shadow-md border-none w-full transform transition-[0.3s] ease-in top-0 fixed z-30 ${isScrolled ? 'nav_shadow' : 'bg-white'}`}
    >
      <div className="flex_between ">
        <Image
          src={'/images/logo-light.png'}
          alt="logo"
          width={75}
          height={75}
        />
        <div className="flex gap-5 max-md:hidden">
          <Link href={''}>
            <H2
              className={
                'text-darkPurple font-brandFont w-fit pb-1 m-auto relative nav_style'
              }
            >
              Projects
            </H2>
          </Link>
          <Link href={''}>
            <H2
              className={
                'text-darkPurple font-brandFont w-fit pb-1 m-auto relative nav_style'
              }
            >
              About Me
            </H2>
          </Link>
          <Link href={''}>
            <H2
              className={
                'text-darkPurple font-brandFont w-fit pb-1 m-auto relative nav_style'
              }
            >
              Hire Me
            </H2>
          </Link>
        </div>
        <div className="flex items-center gap-2 max-md:hidden">
          <div className="flex items-center gap-2">
            <MediaBox>
              <Link href={'https://www.linkedin.com/in/destiny2000/'}>
                <FaLinkedinIn className="text-white" />
              </Link>
            </MediaBox>
            <MediaBox>
              <Link href={''}>
                <BsYoutube className="text-white" />
              </Link>
            </MediaBox>
            <MediaBox>
              <Link href={''}>
                <RiInstagramFill className="text-white" />
              </Link>
            </MediaBox>
          </div>
          <Button className="bg-brandOrange">Download Resume</Button>
        </div>
        {/*Mobeile Nav*/}
        <div className="md:hidden">
          <MdOutlineMenu
            size={40}
            className="cursor-pointer text-brandPurple"
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
