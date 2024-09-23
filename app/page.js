// import react from 'react';
import Contact from '@/components/contact/contact';
import Feed from '@/components/feed/feed';
import Profile from '@/components/profile/profile';
import Projects from '@/components/projects/projects';
const Home = () => {
  return (
    <div>
      <Feed />
      <Profile />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
