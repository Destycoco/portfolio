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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gray-100">
          {/* Child Div 1 */}
          <div className="h-[480px] bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-[55%] w-full">
              <img
                src="/images/africa-tour.svg"
                alt="Sample Image 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <Reveal>
                <h2 className="text-2xl font-bold mb-2">Discover Africa</h2>
                <p className="text-gray-600">
                  Africa is known as the home of breathtaking wildlife and lush
                  forests, making it the perfect destination for nature lovers
                  and adventure seekers. This Christmas, let's explore five
                  African countries that offer unforgettable experiences and
                  breathtaking natural beauty.
                </p>
              </Reveal>
            </div>
          </div>

          {/* Child Div 2 */}
          <div className="h-[480px] bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-[50%] w-full">
              <img
                src="https://via.placeholder.com/800x400"
                alt="Sample Image 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2">Adventure Awaits</h2>
              <p className="text-gray-600">
                Discover thrilling destinations and unforgettable experiences
                across Africa.
              </p>
            </div>
          </div>

          {/* Child Div 3 */}
          <div className="h-[480px] bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-[50%] w-full">
              <img
                src="https://via.placeholder.com/800x400"
                alt="Sample Image 3"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2">Nature's Wonders</h2>
              <p className="text-gray-600">
                Witness the beauty of Africa’s wildlife and natural wonders
                firsthand.
              </p>
            </div>
          </div>

          {/* Child Div 4 */}
          <div className="h-[480px] bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-[50%] w-full">
              <img
                src="https://via.placeholder.com/800x400"
                alt="Sample Image 4"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2">Cultural Treasures</h2>
              <p className="text-gray-600">
                Immerse yourself in the rich traditions and cultural heritage of
                Africa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
