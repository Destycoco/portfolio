import Image from 'next/image';
import { H4 } from '../fonts/headers';
import P from '../fonts/paragraph';
import Button from '../accessories/button';
import Reveal from '../anime/reveal';
import Typed from '../typing/typing';
import Link from 'next/link';
import Typewriter from '../typewriter/typewriter';
const Feed = () => {
  return (
    <div className="w-full pt-12 pb-2  bg-black">
      <div className="md:flex justify-center items-center gap-5 md:w-[80%] w-[90%]  m-auto">
        <div className="relative basis-[48%]">
          <H4 className="text-white font-brandFont3 tracking-wider">
            <Typed text="Hi, I'm Destiny Eze" speed={100}></Typed>
          </H4>
          <H4 className="text-brandGold font-brandFont3 tracking-wider">
            <Typewriter
              writeups={[
                'A Graphic Designer',
                'And also a Web Developer.',
                'A Creative Content Writer',
              ]}
              // speed={100}
              delay={2500}
            ></Typewriter>
          </H4>
          <Reveal bg="brandCream">
            <P className="my-6 text-white font-brandFont3 leading-relaxed tracking-wide">
              I am a versatile content writer, graphic designer, and web
              developer who brings creative ideas to life. With compelling
              words, captivating designs, and dynamic websites, I showcase your
              vision to a global audience. Whether it’s engaging content, sales
              copy, or eye-catching visuals, I combine creativity and strategy
              to keep your audience hooked and coming back for more.
            </P>
          </Reveal>

          <div className="flex gap-3">
            <a href={'#profile'}>
              <Button
                text="black"
                className="w-fit border-2  bg-[#fff]  hover:transform hover:-translate-y-1 transition-all ease-in active:translate-y-1"
              >
                View Profile
              </Button>
            </a>
            <a href="#contact-me">
              <Button className="fw-fit border-2 hover:transform hover:-translate-y-1 transition-all ease-in active:translate-y-1">
                {' '}
                Hire Me
              </Button>
            </a>
          </div>
        </div>
        <div className="relative basis-[48%] h-[400px] flex justify-center items-center">
          {/* Outer Div (Border effect) */}
          <div className="w-[320px] h-[320px] bg-[#d8901b] rounded-full absolute transform translate-x-3"></div>

          {/* Inner Div (Main Content) */}
          <div className="w-[320px] h-[320px] bg-brandCream border-r-4  rounded-full absolute z-10 flex items-center justify-center ">
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
    </div>
  );
};

export default Feed;
