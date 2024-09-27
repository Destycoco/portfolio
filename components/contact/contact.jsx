import { H3, H2 } from '../fonts/headers';
import Formsection from './form';
import Image from 'next/image';
const Contact = () => {
  return (
    <div className="md:w-[80%] w-[90%] m-auto mb-12" id="contact-me">
      <H3 className="text-center font-brandFont mt-2 mb-8 w-fit pb-1 line m-auto relative">
        Contact Me
      </H3>
      <div className=" bg-brandPurple md:bg-[#e6d0fd] md:px-12 px-4 py-4 rounded-lg mt-12">
        <H2 className="font-brandFont mb-3 ">Get In Touch</H2>
        <div className="flex mb-8">
          <Formsection />
          <div className="w-[48%] relative flex justify-center items-center  max-md:hidden">
            <div className="w-[70%]">
              <Image
                src={'/images/man-typing-1.png'}
                alt=""
                width={100}
                height={100}
                className="w-full z-50 relative"
              />
              <Image
                src={'/images/message-1.png'}
                alt=""
                width={100}
                height={100}
                className="w-[60%] absolute top-0 left-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
