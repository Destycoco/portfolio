import { H3, H2 } from '../fonts/headers';
import Formsection from './form';
import Image from 'next/image';
const Contact = () => {
  return (
    <div
      className="md:w-[80%] w-[100%] max-md:px-1 m-auto mb-12"
      id="contact-me"
    >
      <H3 className="text-center font-brandFont mt-6 mb-8 w-fit pb-1 line m-auto relative">
        Contact Me
      </H3>
      <div className=" bg-black md:px-12 px-4 py-4 rounded-lg mt-12">
        <H2 className="font-brandFont mb-3 text-white ">Get In Touch</H2>
        <div className="flex mb-8">
          <Formsection />
          <div className="w-[48%] relative flex justify-center items-center  max-md:hidden">
            <div className="w-[70%]">
              <Image
                src={'/images/contact-me.svg'}
                alt=""
                width={100}
                height={100}
                className="w-full z-50 relative"
              />
              <Image
                src={'/images/email-logo.svg'}
                alt=""
                width={100}
                height={100}
                className="w-[60%] absolute -top-10 left-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
