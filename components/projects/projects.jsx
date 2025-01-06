'use client';
import Image from 'next/image';
import { H3, H1 } from '../fonts/headers';
import Link from 'next/link';
import { IoEyeSharp } from 'react-icons/io5';
import { FiGithub } from 'react-icons/fi';
import P from '../fonts/paragraph';
import Reveal from '../anime/reveal';
import Slider from 'react-slick';
import SimpleSlider from '../carousel/carousel';
// import Carousel from '../carousel/carousel';

const Projects = () => {
  return (
    <div className=" bg-black m-auto pb-12" id="projects">
      <div className="w-[100%] md:w-[80%] m-auto pt-4">
        <H3 className="font-brandFont3 text-center mt-3 mb-10 text-white w-fit pb-1 line m-auto relative">
          Articles
        </H3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:p-6 max-md:px-2 max-md:py-6 bg-gray-100">
          {/* Child Div 1 */}
          <div className="h-[480px] bg-white rounded-lg shadow-lg overflow-hidden ">
            <div className="h-[55%] max-md:h-[47%] w-full">
              <img
                src="/images/africa-tour.svg"
                alt="Sample Image 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <Reveal>
                <h2 className="text-2xl font-bold mb-2 text-black">
                  Discover Africa
                </h2>
                <p className="text-gray-600 leading-snug mb-2">
                  Africa is known as the home of breathtaking wildlife and lush
                  forests, making it the perfect destination for nature lovers
                  and adventure seekers. This Christmas, let's explore five
                  African countries that offer unforgettable experiences and
                  breathtaking natural beauty.
                </p>
                <Link
                  href={'../../5-countries-to-visit-in-africa'}
                  className="text-brandGold hover:text-brandOrange flex justify-self-end"
                >
                  View Post
                </Link>
              </Reveal>
            </div>
          </div>

          {/* Child Div 2 */}
          <div className="h-[480px] bg-white rounded-lg shadow-lg overflow-hidden ">
            <div className="h-[55%] max-md:h-[47%] w-full">
              <img
                src="/images/luxury-travel.svg"
                alt="Sample Image 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-2 px-4">
              <Reveal>
                <h2 className="text-2xl font-bold mb-2 text-black">
                  Luxury Travel On A Budget
                </h2>
                <p className="text-gray-600 leading-snug ">
                  Luxury travel doesn't have to break the bank! for a moment,
                  try to picture yourself staying at stunning resorts, indulging
                  in delectable meals, and exploring incredible destinations
                  without overspending. With just the right planning and insider
                  tips, you can experience all of this on a budget. Ready to
                  discover the tips? Keep reading to uncover the secrets to
                  affordable luxury travel!
                </p>
                <Link
                  href={'../../luxury-travel-on-a-budget'}
                  className="text-brandGold hover:text-brandOrange flex justify-self-end"
                >
                  View Post
                </Link>
              </Reveal>
            </div>
          </div>

          {/* Child Div 3 */}
          {/* <div className="h-[480px] bg-white rounded-lg shadow-lg overflow-hidden ">
            <div className="h-[55%] max-md:h-[47%] w-full">
              <img
                src="/images/africa-tour.svg"
                alt="Sample Image 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <Reveal>
                <h2 className="text-2xl font-bold mb-2 text-black">
                  Discover Africa
                </h2>
                <p className="text-gray-600 leading-snug mb-2">
                  Africa is known as the home of breathtaking wildlife and lush
                  forests, making it the perfect destination for nature lovers
                  and adventure seekers. This Christmas, let's explore five
                  African countries that offer unforgettable experiences and
                  breathtaking natural beauty.
                </p>
                <Link
                  href={'../../5-countries-to-visit-in-africa'}
                  className="text-brandGold hover:text-brandOrange flex justify-self-end"
                >
                  View Post
                </Link>
              </Reveal>
            </div>
          </div> */}
          {/* Child Div 4 */}
          {/* <div className="h-[480px] bg-white rounded-lg shadow-lg overflow-hidden ">
            <div className="h-[55%] max-md:h-[47%] w-full">
              <img
                src="/images/africa-tour.svg"
                alt="Sample Image 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <Reveal>
                <h2 className="text-2xl font-bold mb-2 text-black">
                  Discover Africa
                </h2>
                <p className="text-gray-600 leading-snug mb-2">
                  Africa is known as the home of breathtaking wildlife and lush
                  forests, making it the perfect destination for nature lovers
                  and adventure seekers. This Christmas, let's explore five
                  African countries that offer unforgettable experiences and
                  breathtaking natural beauty.
                </p>
                <Link
                  href={'../../5-countries-to-visit-in-africa'}
                  className="text-brandGold hover:text-brandOrange flex justify-self-end"
                >
                  View Post
                </Link>
              </Reveal>
            </div>
          </div> */}
        </div>
      </div>
      <div className="w-[80%] m-auto">
        <H3 className="font-brandFont3 text-center mt-6 mb-10 text-white w-fit pb-1 line m-auto relative">
          Designs
        </H3>
        <SimpleSlider />
      </div>
    </div>
  );
};

export default Projects;
