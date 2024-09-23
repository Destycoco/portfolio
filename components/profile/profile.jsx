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
import { H2, H3, H1 } from '../fonts/headers';
import P from '../fonts/paragraph';
import MediaBox from '../accessories/mediabox';
import Link from 'next/link';
// import '../../globals.css';
const Contact = {
  email: 'destibright1@gmail.com',
  number: '08165563166',
  location: 'Lagos, Nigeria',
  linkedIn: 'https://www.linkedin.com/in/destiny2000',
  youtube: 'https://www.youtube.com/@DestycocosTV',
};
const Experience = [
  {
    position: 'Front-End Developer Intern, Ossoft Solution Services',
    year: '2023-2024',
    desc: 'At Ossoft Solution Services, a tech company providing cutting-edge solutions to businesses, I worked as an intern, contributing to various web development projects. During my time there, I gained hands-on experience with modern web technologies and collaborated with a team to deliver solutions that improved business operations.',
  },
  {
    position: 'Freelance Web Developer',
    year: '2023-Current',
    desc: 'I’ve also worked on several freelance projects, where I helped clients build responsive websites and web applications. Through these projects, I applied my skills in HTML, CSS, JavaScript, React, and Next.js to deliver tailored solutions, while using Git and GitHub to manage version control and project collaboration efficiently.',
  },
];
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
    info: '',
    id: 3,
  },
  {
    name: 'Skills',
    info: 'I have solid experience working with core web technologies like HTML, CSS, and JavaScript, \
    which I use to build responsive and dynamic websites. My expertise extends to modern front-end libraries and frameworks, \
    including React and Next.js, where I focus on creating smooth, interactive user interfaces and optimizing performance. \
    I’m also skilled in Tailwind CSS, allowing me to rapidly design and customize layouts with clean, maintainable code. Additionally, \
    I’m proficient in version control using Git and GitHub, which I use for efficient collaboration and managing projects in a structured way.',
    id: 4,
  },
  { name: 'Contact', info: '', id: 5 },
];
const Profile = () => {
  const [information, setInformation] = useState(intialData);
  const [header, setHeader] = useState('Bio');
  const handleChangeInfo = (value) => {
    setInformation(value.info);
    setHeader(value.name);
  };
  return (
    <div className="py-8 pb-12 md:w-[80%] w-[90%] m-auto">
      <H3 className="font-brandFont text-center mb-8 w-fit pb-1 line m-auto relative ">
        Profile
      </H3>
      <div className="md:flex flex max-md:flex-col mt-16 gap-8 mb-16 ">
        {/***Left hand card */}
        <div className="basis-[48%] py-6 shadow bg-white">
          <H2 className="font-brandFont m-auto md:w-[80%] w-[90%] mb-4">
            Why hire me?
          </H2>
          <div className="flex flex-col gap-3">
            {dataArray.map((data) => (
              <Button
                className="bg-brandPurple md:w-[80%] w-[90%] 
                m-auto text-lg active:translate-y-1 
                hover:bg-brandOrange duration-100 
                transition-all ease-in btn purple-gradient focus:outline-none focus:ring-1 focus:ring-brandPurple"
                key={data.id}
                onClick={() => handleChangeInfo(data)}
              >
                {data.name && data.name}
              </Button>
            ))}
          </div>
        </div>
        {/***Right hand card */}
        <div className="basis-[48%] py-6 shadow bg-white">
          <H2 className="md:w-[80%] w-[90%] m-auto mb-4 font-brandFont">
            My {header}
          </H2>
          <P className="md:w-[80%] w-[90%] m-auto">{information}</P>
          {header === 'Experience' && (
            <div className="space-y-4 md:w-[80%] w-[90%] m-auto">
              {Experience.map((data) => (
                <div>
                  <H1>{data.position}</H1>
                  <P>{data.year}</P>
                  <P>{data.desc}</P>
                </div>
              ))}
            </div>
          )}
          {header === 'Contact' && (
            <div className="md:w-[80%] w-[90%] m-auto">
              <H1>
                Email: <span className="font-normal">{Contact.email}</span>
              </H1>
              <H1>
                Phone: <span className="font-normal">{Contact.number}</span>
              </H1>
              <H1>
                Location:{' '}
                <span className="font-normal">{Contact.location}</span>
              </H1>
              <H1>
                LinkedIn:{' '}
                <span className="font-normal">
                  <Link href={Contact.linkedIn} target="_blank">
                    {Contact.linkedIn}
                  </Link>
                </span>
              </H1>
              <H1>
                Youtube:{' '}
                <span className="font-normal">
                  <Link href={Contact.youtube} target="_blank">
                    {Contact.youtube}
                  </Link>
                </span>
              </H1>
            </div>
          )}
          {header === 'Skills' && (
            <div className="flex gap-2 flex-wrap md:w-[80%] w-[90%] m-auto mt-2">
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
      <hr className="w-[100%] m-auto mt-6 h-[1.3px] bg-brandPurple" />
    </div>
  );
};

export default Profile;
