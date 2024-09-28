// import P from '../paragraph';
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedinIn } from 'react-icons/fa6';
import { BsYoutube } from 'react-icons/bs';
import { RiInstagramFill } from 'react-icons/ri';
import { H2 } from '../fonts/headers';
import MediaBox from '../accessories/mediabox';
import Button from '../accessories/button';
import { MdOutlineMenu } from 'react-icons/md';
import { MdOutlineClose } from 'react-icons/md';
import '../../app/globals.css';
import { useEffect, useState } from 'react';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isShowNav, setIsShowNav] = useState(false);
  const toggleNav = () => {
    setIsShowNav((prev) => !prev);
  };
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
        <Link href={'/'}>
          <Image
            src={'/images/logo-light.png'}
            alt="logo"
            width={75}
            height={75}
          />
        </Link>

        <div className="flex gap-5 max-md:hidden">
          <Link href={'#projects'}>
            <H2
              className={
                'text-darkPurple font-brandFont w-fit pb-1 m-auto relative nav_style'
              }
            >
              Projects
            </H2>
          </Link>
          <Link href={'#profile'}>
            <H2
              className={
                'text-darkPurple font-brandFont w-fit pb-1 m-auto relative nav_style'
              }
            >
              About Me
            </H2>
          </Link>
          <Link href={'#contact-me'}>
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
            <MediaBox className={'py-2 px-3'}>
              <Link href={'https://www.linkedin.com/in/destiny2000/'}>
                <FaLinkedinIn className="text-white" />
              </Link>
            </MediaBox>
            <MediaBox className={'py-2 px-3'}>
              <Link href={''}>
                <BsYoutube className="text-white" />
              </Link>
            </MediaBox>
            <MediaBox className={'py-2 px-3'}>
              <Link href={''}>
                <RiInstagramFill className="text-white" />
              </Link>
            </MediaBox>
          </div>
          <Button className="bg-brandOrange">Download Resume</Button>
        </div>
        {/*Mobile Nav*/}
        <div className="md:hidden relative text-right w-[50%] justify-end flex">
          {/* Menu Icon Wrapper */}
          <div className="relative flex justify-center items-center w-[50px] h-[50px] ">
            {/* MdOutlineMenu */}
            <MdOutlineMenu
              size={40}
              className={`cursor-pointer absolute text-brandPurple transition-all duration-500 ease-in-out ${
                isShowNav
                  ? 'opacity-0 transform rotate-90 scale-0'
                  : 'opacity-100 transform rotate-0 scale-100'
              }`}
              onClick={toggleNav}
            />

            {/* MdOutlineClose */}
            <MdOutlineClose
              size={40}
              className={`cursor-pointer absolute text-brandPurple transition-all duration-500 ease-in-out ${
                isShowNav
                  ? 'opacity-100 transform rotate-0 scale-100'
                  : 'opacity-0 transform rotate-90 scale-0'
              }`}
              onClick={toggleNav}
            />
          </div>

          {/* Dropdown Menu */}
          {isShowNav && (
            <div className="absolute top-full mt-6 shadow text-left pt-6 py-3 px-4 flex flex-col gap-3 rounded-br-md rounded-bl-md right-0 w-full min-w-[250px] bg-white">
              <a
                href="#projects"
                className=" "
                onClick={() => setIsShowNav(false)}
              >
                <div className="font-semibold text-xl text-brandBlack border border-brandPurple hover:text-white w-full py-1 px-2 rounded-sm hover:bg-brandPurple bg-[#faf4ff] transition-all duration-100 ease-out">
                  Projects
                </div>
              </a>
              <a
                href="#profile"
                className=" "
                onClick={() => setIsShowNav(false)}
              >
                <div className="font-semibold text-xl text-brandBlack border border-brandPurple hover:text-white w-full py-1 px-2 rounded-sm hover:bg-brandPurple bg-[#faf4ff] transition-all duration-100 ease-out">
                  About Me
                </div>
              </a>
              <a
                href="#contact-me"
                className=" "
                onClick={() => setIsShowNav(false)}
              >
                <div className="font-semibold text-xl text-brandBlack border border-brandPurple hover:text-white w-full py-1 px-2 rounded-sm hover:bg-brandPurple bg-[#faf4ff] transition-all duration-10 ease-out">
                  Hire Me
                </div>
              </a>
              <div className="flex items-center gap-2 mt-[6px] mb-2">
                <MediaBox className="py-1 px-2 hover:bg-brandOrange">
                  <Link href="https://www.linkedin.com/in/destiny2000/">
                    <FaLinkedinIn className="text-white" />
                  </Link>
                </MediaBox>
                <MediaBox className="py-1 px-2 hover:bg-brandOrange">
                  <Link href="">
                    <BsYoutube className="text-white" />
                  </Link>
                </MediaBox>
                <MediaBox className="py-1 px-2 hover:bg-brandOrange">
                  <Link href="">
                    <RiInstagramFill className="text-white" />
                  </Link>
                </MediaBox>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
