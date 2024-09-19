import Image from 'next/image';
import { H4 } from '../fonts/headers';
import P from '../fonts/paragraph';
import Button from '../accessories/button';

const Feed = () => {
  return (
    <div className="w-full pt-8 pb-8">
      <div className="flex justify-center items-center gap-5 w-[80%]  m-auto ">
        <div className="relative basis-[48%]">
          <H4 className="text-brandBlack font-brandFont tracking-wider">
            Looking For <span className="text-brandOrange">Me</span>??
          </H4>
          <H4 className="text-brandBlack font-brandFont tracking-wider">
            Welcome To My Portfolio
          </H4>
          <P className="my-6">
            Hi, I’m Destiny Eze, a front-end developer with a passion for
            crafting clean, responsive websites and web applications. My
            expertise includes HTML, CSS, JavaScript, React, and Next.js, and I
            love bringing designs to life with intuitive, user-friendly
            interfaces. I focus on creating efficient, seamless experiences
            while keeping accessibility and modern web practices in mind. It's
            my greatest pleasure to be at your service.
          </P>
          <div className="flex gap-3">
            <Button className="w-fit bg-brandOrange">View Profile</Button>
            <Button className="w-fit bg-darkPurple">Hire Me</Button>
          </div>
          {/* <div className="bg-brandPurple w-5 h-5 absolute rotate-45 top-6 -z-10 opacity-[0.6]"></div>
          <div className="bg-brandPurple w-5 h-5 absolute top-[50%] rotate-45 -z-10 transform -translate-x-20 opacity-[0.6]"></div>
          <div className="bg-brandOrange w-5 h-5 absolute rotate-45 -z-10 transform top-[7.5rem] translate-x-20 opacity-[0.6]"></div>
          <div className="bg-brandOrange w-5 h-5 absolute rotate-45 -z-10 transform top-[13rem] opacity-[0.6]"></div>
          <div className="bg-brandOrange w-5 h-5 absolute rotate-45 -z-10 transform top[60%] -translate-x-20 opacity-[0.6]"></div>
          <div className="bg-brandOrange w-5 h-5 absolute rotate-45 -z-10 transform top-6 -translate-x-20 opacity-[0.6]"></div>
          <div className="bg-brandPurple w-5 h-5 absolute rotate-45 -z-10 transform top-6 right-0 translate-x-5 opacity-[0.6]"></div>
          <div className="bg-brandOrange w-5 h-5 absolute rotate-45 -z-10 transform top-[50%] right-0 translate-x-2 opacity-[0.6]"></div>
          <div className="bg-brandPurple w-5 h-5 absolute rotate-45 -z-10 transform top[60%] right-0 translate-x-5 opacity-[0.6]"></div>
          <div className="bg-brandOrange w-5 h-5 absolute rotate-45 -z-10 transform top-[54%] right-0 -translate-x-[6rem] opacity-[0.6]"></div>
          <div className="bg-brandOrange w-5 h-5 absolute rotate-45 -z-10 transform top-[30%] right-0 -translate-x-[3rem] opacity-[0.6]"></div>
          <div className="bg-brandOrange w-5 h-5 absolute rotate-45 -z-10 transform bottom-[6%] right-0 -translate-x-[5rem] opacity-[0.6]"></div>
          <div className="bg-brandPurple w-5 h-5 absolute rotate-45 -z-10 transform top-[0] right-[50%] translate-y-[5rem] opacity-[0.6]"></div>
          <div className="bg-brandOrange w-5 h-5 absolute rotate-45 -z-10 transform top-[1.5rem] right-[20%] opacity-[0.6]"></div> */}
        </div>
        <div className="relative basis-[48%] h-[400px] border border-red-800 flex justify-center items-center">
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
    </div>
  );
};

export default Feed;
