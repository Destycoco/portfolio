import Image from 'next/image';
import { H4 } from '../fonts/headers';
import P from '../fonts/paragraph';
import Button from '../accessories/button';
import Reveal from '../anime/reveal';
import Typed from '../typing/typing';
import Link from 'next/link';
const Feed = () => {
  return (
    <div className="w-full pt-12 pb-2  bg-black">
      <div className="md:flex justify-center items-center gap-5 md:w-[80%] w-[90%]  m-auto">
        <div className="relative basis-[48%]">
          <H4 className="text-white font-brandFont3 tracking-wider">
            <Typed text="Hi, I'm Destiny Eze" speed={100}></Typed>
          </H4>
          <H4 className="text-brandGold font-brandFont3 tracking-wider">
            <Typed
              text={"I'm a Content Writer"}
              speed={100}
              delay={2500}
            ></Typed>
          </H4>
          <Reveal bg="brandCream">
            <P className="my-6 text-white font-brandFont3 leading-relaxed tracking-wide">
              A content writer and a web developer who can turn a boring
              'how-to' guide into a page-turner. With a knack for storytelling
              and a dash of humor, I have the magic to bring words to life and
              keep readers hooked without a hint of boredom. Whether it’s
              crafting compelling sales copies or scripting engaging content,
              I’m your go-to expert. Combining creativity with strategy, I know
              exactly how to create engaging content that keeps your audience
              coming back for more.
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
