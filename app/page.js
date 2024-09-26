// import react from 'react';
'use client';
import Contact from '@/components/contact/contact';
import Feed from '@/components/feed/feed';
import Profile from '@/components/profile/profile';
import Projects from '@/components/projects/projects';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
const Home = () => {
  return (
    <>
      <div className="">
        <Feed />
        <Profile />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default Home;
