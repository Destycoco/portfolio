import Image from 'next/image';
import { H3, H1 } from '../fonts/headers';
import Link from 'next/link';
import { IoEyeSharp } from 'react-icons/io5';
import { FiGithub } from 'react-icons/fi';
import P from '../fonts/paragraph';
import Reveal from '../anime/reveal';
const Projects = () => {
  return (
    <div className=" bg-black m-auto pb-12" id="projects">
      <div className="w-[90%] md:w-[80%] m-auto pt-4">
        <H3 className="font-brandFont3 text-center mt-3 mb-10 text-white w-fit pb-1 line m-auto relative">
          Projects
        </H3>
        <div className="flex w-full flex-wrap gap-12 mt-10 mb-16 justify-center">
          {/*** Project 1 */}
          <div className="md:basis-[45%] pb-4 rounded-lg shadow bg-white">
            <Image
              width={100}
              height={100}
              src="/images/africa-tour.svg"
              alt=""
              className="w-[100%] h-[58%]  overflow-hidden rounded-tl-lg rounded-tr-lg object-fill"
            />
            <div className="px-4 space-y-2">
              <Reveal>
                <H1 className="font-brandFont3 mt-2 mb-2">
                  Top 5 countries to visit in Africa for Christmas
                </H1>
                <P>
                  Africa is known as the home of breathtaking wildlife and lush
                  forests, making it the perfect destination for nature lovers
                  and adventure seekers. This Christmas, let's explore five
                  African countries that promises unforgettable experiences and
                  breathtaking natural beauty.
                </P>
              </Reveal>

              <div className="flex gap-2 items-center justify-end ">
                <Link
                  href={'../../5-countries-to-visit-in-africa'}
                  className="text-[#d8901c] font-semibold hover:text-brandOrange"
                >
                  View Post
                </Link>
                {/* <Link
                  href={'https://github.com/Destycoco/pizza-app'}
                  className="text-brandPurple font-semibold hover:text-brandOrange"
                >
                  Code
                </Link> */}
              </div>
            </div>
          </div>
          {/*********** End of Project 1 */}
          <div className="md:basis-[45%]  pb-4 rounded-lg shadow bg-white">
            <Image
              width={100}
              height={100}
              src="/images/9ja-quiz.png"
              alt=""
              className="w-full overflow-hidden h-[58%] rounded-tl-lg rounded-tr-lg object-fill"
            />
            <div className="px-4 space-y-2">
              <Reveal>
                <H1 className="font-brandFont mt-2 mb-2">9JA FOOD QUIZ</H1>
                <P>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
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
                <H1 className="font-brandFont mt-2 mb-2">Demo Project</H1>
                <P>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
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
                <H1 className="font-brandFont mt-2 mb-2">Demo Project</H1>
                <P>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
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
      </div>
    </div>
  );
};

export default Projects;
