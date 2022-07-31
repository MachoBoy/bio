import { useState } from 'react';
import type { NextPage } from 'next';
import { ScrollingProvider, Section } from 'react-scroll-section';
import Head from 'next/head';
import Header from '../components/header/header';
import FadeInBottom from '../components/fade-in-bottom/fadeInBottom';
import ExperienceCard from '../components/experience-card/experience-card';
import Introduce from '../components/introduce/introduce';
import SkillCard from '../components/skill-card/skill-card';
// import ProjectCard from '../components/project-card/project-card';
import ProjectList from '../components/project-list/project-list';
import Parallax from '../components/parallax/Parallax';
import FadeInTop from '../components/fade-in-top/fadeInTop';

const Home: NextPage = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  // const { scrollYProgress } = useScroll();
  // console.log(scrollYProgress);
  return (
    <div>
      <Head>
        <title>Jiwon Park</title>
        <meta name='description' content='introduce myself' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ScrollingProvider offset={-230}>
        <div className='relative w-100 transition-colors duration-500 bg-light-white dark:bg-green-cyan'>
          <Header isNavOpen={isNavOpen} setNavOpen={setNavOpen} />
          <div
            className={`max-w-screen-2xl min-h-screen mx-auto flex flex-col justify-center items-center px-5 ${
              isNavOpen ? 'blur-sm' : 'blur-none'
            }`}
          >
            <FadeInTop>
              <Section
                id='About Me'
                className='flex justify-center items-center min-h-screen xs:w-5/6 xxs:w-11/12 mx-auto'
              >
                <Introduce />
              </Section>
            </FadeInTop>
            <FadeInBottom isList={false}>
              <Parallax offset={200}>
                <Section
                  id='Skills'
                  className='flex justify-center items-center min-h-screen xs:w-5/6 xxs:w-11/12 mx-auto'
                >
                  <div className='sm:-mt-72 xxs:mt-0'>
                    <SkillCard />
                  </div>
                </Section>
              </Parallax>
            </FadeInBottom>
            <FadeInBottom isList={false}>
              <Section
                id='Experiences'
                className='flex justify-center items-center 2xl:w-8/12 xs:w-5/6 xxs:w-11/12 min-h-screen mx-auto'
              >
                <div className='sm:-mt-56 xxs:-mt-56'>
                  <ExperienceCard />
                </div>
              </Section>
            </FadeInBottom>
            <Section
              id='Projects'
              className='flex justify-center items-center 2xl:w-10/12 xs:w-5/6 xxs:w-11/12'
            >
              <ProjectList />
            </Section>
          </div>
        </div>
      </ScrollingProvider>
    </div>
  );
};

export default Home;
