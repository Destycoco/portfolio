'use client';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3 } from 'react-icons/fa6';
import { IoLogoJavascript } from 'react-icons/io';
import { FaReact } from 'react-icons/fa';
import { RiNextjsFill } from 'react-icons/ri';
import { SiTailwindcss } from 'react-icons/si';
import { IoGitBranch } from 'react-icons/io5';
import { FaGithub } from 'react-icons/fa6';
import '../../app/globals.css';
import { useState } from 'react';
import Button from '../accessories/button';
import { H2, H3 } from '../fonts/headers';
import P from '../fonts/paragraph';
import MediaBox from '../accessories/mediabox';
const intialData =
  'Hi, I’m Destiny Eze, a passionate front-end \
    developer specializing in crafting modern, responsive, and user-friendly \
    web applications. With strong skills in HTML, CSS, JavaScript, React, and Next.js, \
    I enjoy building seamless digital experiences that prioritize accessibility and \
    performance. I’ve worked on several freelance projects and recently completed a \
    full-stack web app utilizing Next.js and MongoDB. When I’m not coding, you’ll find me learning \
    about the latest trends in web development and reading tech blogs and articles. \
    Feel free to check out my projects or get in touch for collaboration opportunities!';
const dataArray = [
  {
    name: 'Bio',
    info: 'Hi, I’m Destiny Eze, a passionate front-end \
    developer specializing in crafting modern, responsive, and user-friendly \
    web applications. With strong skills in HTML, CSS, JavaScript, React, and Next.js, \
    I enjoy building seamless digital experiences that prioritize accessibility and \
    performance. I’ve worked on several freelance projects and recently completed a \
    full-stack web app utilizing Next.js and MongoDB. When I’m not coding, you’ll find me learning \
    about the latest trends in web development and reading tech blogs and articles. \
    Feel free to check out my projects or get in touch for collaboration opportunities!',
    id: 1,
  },
  {
    name: 'Education',
    info: 'I hold a Bachelor of Technology in Mechanical Engineering from River State University \
    with a Second Class Upper Degree, which I completed in 2022. Alongside my engineering background\
    , I’ve pursued my passion for web development by completing several certifications on Udemy and other online platforms, \
    where I gained hands-on experience with modern web technologies and frameworks.',
    id: 2,
  },
  {
    name: 'Experience',
    info: 'I have solid experience working with core web technologies like HTML, CSS, and JavaScript, \
    which I use to build responsive and dynamic websites. My expertise extends to modern front-end libraries and frameworks, \
    including React and Next.js, where I focus on creating smooth, interactive user interfaces and optimizing performance. \
    I’m also skilled in Tailwind CSS, allowing me to rapidly design and customize layouts with clean, maintainable code. Additionally, \
    I’m proficient in version control using Git and GitHub, which I use for efficient collaboration and managing projects in a structured way.',
    id: 3,
  },
  { name: 'Skills', info: 'ekfekf', id: 4 },
  { name: 'Contact Details', info: 'ekfhkef', id: 5 },
];
const Profile = () => {
  const [information, setInformation] = useState(intialData);
  const [header, setHeader] = useState('Bio');
  const handleChangeInfo = (value) => {
    setInformation(value.info);
    setHeader(value.name);
  };
  return (
    <div className="pt-8 w-[80%] m-auto">
      <H3 className="font-brandFont text-center mb-8">Profile</H3>
      <div className="flex mt-16 gap-8">
        {/***Left hand card */}
        <div className="basis-[48%] border border-red-700 py-3">
          <H2 className="font-brandFont m-auto w-[80%] mb-4">Why hire me?</H2>
          <div className="flex flex-col gap-3">
            {dataArray.map((data) => (
              <Button
                className="bg-brandPurple w-[80%] m-auto text-lg active:translate-y-1 hover:bg-brandOrange duration-100 transition-all ease-in btn"
                key={data.id}
                onClick={() => handleChangeInfo(data)}
              >
                {data.name && data.name}
              </Button>
            ))}
          </div>
        </div>
        {/***Right hand card */}
        <div className="basis-[48%]  py-3 border border-green-700">
          <H2 className="w-[80%] m-auto mb-4 font-brandFont">My {header}</H2>
          <P className="w-[80%] m-auto">{information}</P>
          {header === 'Experience' && (
            <div className="flex gap-2 flex-wrap w-[80%] m-auto mt-2">
              <MediaBox className="hover:bg-brandOrange">
                <FaHtml5 className="text-3xl text-white" />
              </MediaBox>
              <MediaBox className="hover:bg-brandOrange">
                <FaCss3 className="text-3xl text-white" />
              </MediaBox>
              <MediaBox className="hover:bg-brandOrange">
                <IoLogoJavascript className="text-3xl text-white " />
              </MediaBox>
              <MediaBox className="hover:bg-brandOrange">
                <FaReact className="text-3xl text-white " />
              </MediaBox>
              <MediaBox className="hover:bg-brandOrange">
                <RiNextjsFill className="text-3xl text-white" />
              </MediaBox>
              <MediaBox className="hover:bg-brandOrange">
                <SiTailwindcss className="text-3xl text-white" />
              </MediaBox>
              <MediaBox className="hover:bg-brandOrange">
                <IoGitBranch className="text-3xl text-white" />
              </MediaBox>
              <MediaBox className="hover:bg-brandOrange">
                <FaGithub className="text-3xl text-white" />
              </MediaBox>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
