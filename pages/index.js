import Contact from '@/components/contact/contact';
import Feed from '@/components/feed/feed';
import Profile from '@/components/profile/profile';
import Projects from '@/components/projects/projects';
import RootLayout from '@/app/layout';
const Home = () => {
  return (
    <>
      <RootLayout>
        <div className="mt-16">
          <Feed />
          <Profile />
          <Projects />
          <Contact />
        </div>
      </RootLayout>
    </>
  );
};

export default Home;
