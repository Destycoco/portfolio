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
import Reveal from '../anime/reveal';
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
    position: 'Content writer, Ossoft Solution Services',
    year: '2023-2024',
    desc: 'At Ossoft Solution Services, a tech company providing cutting-edge solutions to businesses, \
    I Wrote and published engaging blog posts, social media updates, and website copy to enhance the brand’s \
    online presence.',
  },
  {
    position: 'Content Writer Intern, BrainTutor Academy',
    year: '2023-2024',
    desc: 'Researched and wrote compelling copy for email campaigns, achieving a 10% higher open rate compared to previous campaigns.',
  },
  {
    position: 'Graphic Designer, Freelance',
    year: '2023-2024',
    desc: "As a freelance graphic designer, I've worked on different projects, including logos, \
    branding, marketing materials, and website visuals. I’ve helped clients establish strong \
    identities and create engaging designs that align with their goals. My experience has sharpened \
    my attention to detail and ability to deliver high-quality work within deadlines.",
  },
];
const skills =
  'As a content writer, I specialize in creating engaging, relatable, and results-driven content, \
  including blogs, sales copies, and scripts. I have a keen ability to adapt my tone and style to \
  suit different brands and audiences, ensuring every piece feels authentic and on point. \
  My expertise extends beyond writing, as I focus on crafting SEO-optimized content that drives traffic \
  and resonates with readers. Additionally, I have hands-on experience with graphic design tools like Canva, \
  CorelDRAW, and Adobe Photoshop, allowing me to create visually compelling content that complements my writing. \
  With proficiency in SEO tools like Google Analytics, I track performance and refine content to maximize its reach \
  and engagement.';
const info =
  "Hello there! I'm Destiny - a dynamic creative content writer,\
 skilled graphic designer, and savvy web developer. I possess a \
 unique talent for seamlessly blending words, visuals, and functionality\
  to create impactful results. My expertise lies in crafting compelling sales copies, \
  engaging blog posts, and captivating scripts that not only hook readers from the start \
  but also boost SEO to drive organic traffic. I also specialize in designing visually \
  appealing graphics that enhance the message and improve audience engagement, ensuring a \
  cohesive and impactful digital presence. When it comes to web development, I ensure \
  that everything comes together flawlessly on a dynamic platform, guaranteeing a \
  smooth user experience. By combining storytelling, design, and technical strategies, \
  I create content that not only captivates but also delivers a polished and professional end product. \
  If you're in need of someone who can infuse creativity, strategy, and innovation into your projects, \
  look no further - I'm your go-to person!";

const education =
  'With a background in Mechanical Engineering, I’ve mastered the art of breaking down complex \
  ideas into simple, relatable solutions - a skill that translates seamlessly into my work as both \
  a content writer and graphic designer. Just like engineering is about solving problems and designing \
  systems that work, content writing is about crafting words that connect, engage, and drive results, \
  while graphic design brings those ideas to life visually. Studying engineering taught me discipline, \
  attention to detail, and how to think creatively under pressure, all of which I bring into my creative work. \
  I’ve also leveraged my engineering mindset to enhance my design skills, ensuring every visual is not only\
  striking but also thoughtfully structured to communicate effectively. Whether it’s creating content that \
  simplifies tough concepts or designing visuals that captivate, my unique blend of technical and creative \
  skills ensures every project is a success.';
const dataArray = [
  {
    name: 'Bio',
    info: '',
    id: 1,
  },
  {
    name: 'Education',
    info: '',
    id: 2,
  },
  {
    name: 'Experience',
    info: '',
    id: 3,
  },
  {
    name: 'Skills',
    info: '',
    id: 4,
  },
  { name: 'Contact', info: '', id: 5 },
];
const Profile = () => {
  const [header, setHeader] = useState('Bio');
  const handleChangeInfo = (value) => {
    setHeader(value.name);
  };
  return (
    <div
      className="pt-8 md:pb-12 pb-2 md:w-[80%] w-[100%] max-md:px-1 m-auto "
      id="profile"
    >
      <H3 className="font-brandFont3 text-center mb-8 w-fit pb-1 line m-auto relative ">
        Profile
      </H3>
      <div className="md:flex flex max-md:flex-col mt-16 gap-8 mb-16 ">
        {/***Left hand card */}
        <div className="basis-[48%] py-6 shadow bg-white">
          <H2 className="font-brandFont m-auto md:w-[80%] w-[90%] mb-4 text-brandBlack">
            Why hire me?
          </H2>
          <div className="flex flex-col gap-3">
            {dataArray.map((data) => (
              <Button
                className="bg-black md:w-[80%] w-[90%] border-2 border-black
                m-auto text-lg active:translate-y-1 
                hover:bg-white duration-200  hover:text-black
                transition-all ease-in btn focus:outline-none  focus:translate-x-2"
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
          <H2 className="md:w-[80%] w-[90%] m-auto mb-4 font-brandFont text-brandBlack">
            My {header}
          </H2>
          {header === 'Education' && (
            <Reveal width={'90%'} mdWidth={'80%'}>
              <P className="md:w-[80%] w-[90%] m-auto">{education}</P>
            </Reveal>
          )}
          {header === 'Bio' && (
            <Reveal>
              <P className="md:w-[80%] w-[90%] m-auto">{info}</P>
            </Reveal>
          )}
          {header === 'Experience' && (
            <div className="space-y-4 md:w-[80%] w-[90%] m-auto">
              {Experience.map((data) => (
                <Reveal>
                  <div>
                    <H1>{data.position}</H1>
                    <P>{data.year}</P>
                    <P>{data.desc}</P>
                  </div>
                </Reveal>
              ))}
            </div>
          )}
          {header === 'Contact' && (
            <Reveal width="90%" mdWidth="80%">
              <div className="md:w-[80%] w-[90%] m-auto">
                <H1>
                  Email:{' '}
                  <span className="font-normal text-base max-sm:text-sm">
                    {Contact.email}
                  </span>
                </H1>
                <H1>
                  Phone:{' '}
                  <span className="font-normal  text-base max-sm:text-sm">
                    {Contact.number}
                  </span>
                </H1>
                <H1>
                  Location:{' '}
                  <span className="font-normal  text-base max-sm:text-sm">
                    {Contact.location}
                  </span>
                </H1>
                <H1>
                  LinkedIn:{' '}
                  <span className="font-normal max-sm:text-sm text-brandPurple hover:underline">
                    <Link href={Contact.linkedIn} target="_blank">
                      {Contact.linkedIn}
                    </Link>
                  </span>
                </H1>
                {/* <H1>
                  Youtube:{' '}
                  <span className="font-normal max-sm:text-sm text-brandPurple hover:underline">
                    <Link href={Contact.youtube} target="_blank">
                      {Contact.youtube}
                    </Link>
                  </span>
                </H1> */}
              </div>
            </Reveal>
          )}
          {header === 'Skills' && (
            <Reveal width="90%" mdWidth="80%">
              <div className="flex gap-2 flex-wrap md:w-[80%] w-[90%] m-auto mt-2">
                <P className="text-brandBlack">{skills}</P>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
