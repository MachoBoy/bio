import { useState } from 'react';
import type { NextPage } from 'next';
import { ScrollingProvider, Section } from 'react-scroll-section';
import Head from 'next/head';
import useWidth from '../hook/useWidth';
import Header from '../components/header/header';
import ExperienceCard from '../components/experience-card/experience-card';
import Introduce from '../components/introduce/introduce';
import SkillCard from '../components/skill-card/skill-card';
import ProjectList from '../components/project-list/project-list';
import FadeInTop from '../components/fade-in-top/fadeInTop';

const Home: NextPage = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  return (
    <div>
      <Head>
        <title>Jiwon Park</title>
        <meta name='description' content='introduce myself' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ScrollingProvider>
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
                className='flex justify-center items-center min-h-screen w-11/12 xs:w-5/6 xxs:w-11/12 mx-auto'
              >
                <Introduce />
              </Section>
            </FadeInTop>

            <Section
              id='Skills'
              className='flex justify-center items-center min-h-screen w-11/12 xs:w-5/6 xxs:w-11/12 mx-auto py-0 sm:py-[200px] xxs:py-0'
            >
              <SkillCard />
            </Section>

            <Section
              id='Experiences'
              className='flex justify-center items-center w-11/12 2xl:w-8/12 xs:w-5/6 xxs:w-11/12 min-h-screen mx-auto'
            >
              <ExperienceCard />
            </Section>

            <Section
              id='Projects'
              className='flex justify-center items-center w-11/12 2xl:w-10/12 xs:w-5/6 xxs:w-11/12 sm:py-[200px] xxs:py-[100px]'
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
