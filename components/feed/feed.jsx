import Image from 'next/image';
import { H4 } from '../fonts/headers';
import P from '../fonts/paragraph';
import Button from '../accessories/button';
import Reveal from '../anime/reveal';
import Typed from '../typing/typing';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
const Feed = () => {
  const router = useRouter();
  return (
    <div className="w-full pt-8 pb-2 mt-[5.4rem]">
      <div className="md:flex justify-center items-center gap-5 md:w-[80%] w-[90%]  m-auto">
        <div className="relative basis-[48%]">
          <H4 className="text-brandBlack orange_gradient font-brandFont tracking-wider">
            <Typed text="Hi, I'm Destiny Eze" speed={100}></Typed>
          </H4>
          <H4 className="text-brandBlack font-brandFont tracking-wider orange_reverse">
            <Typed
              text={'Welcome To My Portfolio.'}
              speed={100}
              delay={2500}
            ></Typed>
          </H4>
          <Reveal>
            <P className="my-6">
              Hi, I’m Destiny Eze, a seasoned front-end developer with a passion
              for crafting clean, responsive websites and web applications. My
              expertise includes HTML, CSS, JavaScript, React, and Next.js, and
              I love bringing designs to life with intuitive, user-friendly
              interfaces. I focus on creating efficient, seamless experiences
              while keeping accessibility and modern web practices in mind. It's
              my greatest pleasure to be at your service.
            </P>
          </Reveal>

          <div className="flex gap-3">
            <a href={'#profile'}>
              <Button className="w-fit bg-brandOrange hover:transform hover:-translate-y-1 transition-all ease-in active:translate-y-1">
                View Profile
              </Button>
            </a>
            <a href="#contact-me">
              <Button className="w-fit bg-darkPurple hover:transform hover:-translate-y-1 transition-all ease-in active:translate-y-1">
                {' '}
                Hire Me
              </Button>
            </a>
          </div>
        </div>
        <div className="relative basis-[48%] h-[400px] flex justify-center items-center">
          {/* Outer Div (Border effect) */}
          <div className="w-[320px] h-[320px] bg-brandOrange rounded-full absolute transform translate-x-3"></div>

          {/* Inner Div (Main Content) */}
          <div className="w-[320px] h-[320px] border-r-4 bg-darkPurple rounded-full absolute z-10 flex items-center justify-center shadow-lg shadow-brandPurple">
            <Image
              src={'/images/profile-image.png'}
              width={100}
              height={100}
              alt=""
              className="rounded-full w-full h-full"
            />
          </div>
        </div>
      </div>
      <hr className="w-[80%] m-auto mt-6 h-[1px] bg-brandPurple" />
    </div>
  );
};

export default Feed;
