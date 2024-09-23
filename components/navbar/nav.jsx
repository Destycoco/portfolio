// import P from '../paragraph';
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
const NavBar = () => {
  return (
    <div className="md:px-[5rem] px-[1rem] py-3 border w-full">
      <div className="flex_between ">
        <Image
          src={'/images/logo-light.png'}
          alt="logo"
          width={75}
          height={75}
        />
        <div className="flex gap-5 max-md:hidden">
          <Link href={''}>
            <H2 className=" text-darkPurple font-brandFont">Projects</H2>
          </Link>
          <Link href={''}>
            <H2 className=" text-darkPurple font-brandFont">About Me</H2>
          </Link>
          <Link href={''}>
            <H2 className=" text-darkPurple font-brandFont">Hire Me</H2>
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
          <MdOutlineMenu />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
