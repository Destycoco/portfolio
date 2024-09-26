import Image from 'next/image';
import { H3, H1 } from '../fonts/headers';
import Link from 'next/link';
import { IoEyeSharp } from 'react-icons/io5';
import { FiGithub } from 'react-icons/fi';
import P from '../fonts/paragraph';
import Reveal from '../anime/reveal';
const Projects = () => {
  return (
    <div className="md:w-[80%] w-[90%] m-auto pb-12">
      <H3 className="font-brandFont text-center mt-2 mb-8 w-fit pb-1 line m-auto relative">
        Projects
      </H3>
      <div className="flex w-full flex-wrap gap-12 mt-10 mb-16 justify-center">
        {/*** Project 1 */}
        <div className="md:basis-[45%] pb-4 rounded-lg shadow bg-white">
          <Image
            width={100}
            height={100}
            src="/images/project-1.jpg"
            alt=""
            className="w-full overflow-hidden rounded-tl-lg rounded-tr-lg object-fill"
          />
          <div className="px-4 space-y-2">
            <Reveal>
              <H1 className="font-brandFont mt-2">Demo Project</H1>
              <P>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </P>
            </Reveal>

            <div className="flex gap-2 items-center justify-end ">
              <Link
                href={''}
                className="text-brandPurple font-semibold hover:text-brandOrange"
              >
                Live
              </Link>
              <Link
                href={''}
                className="text-brandPurple font-semibold hover:text-brandOrange"
              >
                Code
              </Link>
            </div>
          </div>
        </div>
        {/*********** End of Project 1 */}
        <div className="md:basis-[45%] pb-4 rounded-lg shadow bg-white">
          <Image
            width={100}
            height={100}
            src="/images/project-2.jpg"
            alt=""
            className="w-full overflow-hidden rounded-tl-lg rounded-tr-lg object-fill"
          />
          <div className="px-4 space-y-2">
            <Reveal>
              <H1 className="font-brandFont mt-2">Demo Project</H1>
              <P>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </P>
            </Reveal>
            <div className="flex gap-2 items-center justify-end ">
              <Link
                href={''}
                className="text-brandPurple font-semibold hover:text-brandOrange"
              >
                Live
              </Link>
              <Link
                href={''}
                className="text-brandPurple font-semibold hover:text-brandOrange"
              >
                Code
              </Link>
            </div>
          </div>
        </div>
        {/***********End of Project 2 */}
        <div className="md:basis-[45%] pb-4 rounded-lg shadow bg-white">
          <Image
            width={100}
            height={100}
            src="/images/project-3.jpg"
            alt=""
            className="w-full overflow-hidden rounded-tl-lg rounded-tr-lg object-fill"
          />
          <div className="px-4 space-y-2">
            <Reveal>
              <H1 className="font-brandFont mt-2">Demo Project</H1>
              <P>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </P>
            </Reveal>
            <div className="flex gap-2 items-center justify-end ">
              <Link
                href={''}
                className="text-brandPurple font-semibold hover:text-brandOrange"
              >
                Live
              </Link>
              <Link
                href={''}
                className="text-brandPurple font-semibold hover:text-brandOrange"
              >
                Code
              </Link>
            </div>
          </div>
        </div>
        {/*************End of Project 3 */}
        <div className="md:basis-[45%] pb-4 rounded-lg shadow bg-white">
          <Image
            width={100}
            height={100}
            src="/images/project-4.jpg"
            alt=""
            className="w-full overflow-hidden rounded-tl-lg rounded-tr-lg object-fill"
          />
          <div className="px-4 space-y-2">
            <Reveal>
              <H1 className="font-brandFont mt-2">Demo Project</H1>
              <P>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </P>
            </Reveal>
            <div className="flex gap-2 items-center justify-end ">
              <Link
                href={''}
                className="text-brandPurple font-semibold hover:text-brandOrange"
              >
                Live
              </Link>
              <Link
                href={''}
                className="text-brandPurple font-semibold hover:text-brandOrange"
              >
                Code
              </Link>
            </div>
          </div>
        </div>
        {/***************End Project 4 */}
      </div>
      <hr className="w-[100%] m-auto mt-6 h-[1.5px] bg-brandPurple" />
    </div>
  );
};

export default Projects;
