import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { ScrollingProvider, Section } from 'react-scroll-section';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Head from 'next/head';
import Header from '../components/header/header';
import ExperienceCard from '../components/experience-card/experience-card';
import Introduce from '../components/introduce/introduce';
import SkillCard from '../components/skill-card/skill-card';
import ProjectCard from '../components/project-card/project-card';

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
  });
  const [isNavOpen, setNavOpen] = useState(false);

  return (
    <div>
      <Head>
        <title>Jiwon Park</title>
        <meta name='description' content='introduce myself' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ScrollingProvider offset={-130}>
        <div className='relative w-100 bg-green-cyan'>
          <Header isNavOpen={isNavOpen} setNavOpen={setNavOpen} />
          <div
            className={`max-w-screen-2xl min-h-screen mx-auto flex flex-col justify-center items-center px-5 ${
              isNavOpen ? 'blur-sm' : 'blur-none'
            }`}
          >
            <Section
              id='About Me'
              className='flex justify-center items-center min-h-screen w-5/6'
            >
              <Introduce />
            </Section>
            <Section
              data-aos='fade-up'
              id='Skills'
              className='flex justify-center items-center md:w-5/6'
            >
              <SkillCard />
            </Section>
            <Section
              data-aos='fade-up'
              id='Experiences'
              className='flex 2xl:w-3/6 md:w-5/6 my-52'
            >
              <ExperienceCard />
            </Section>
            <Section
              data-aos='fade-up'
              id='Projects'
              className='flex w-full mb-52'
            >
              <ProjectCard />
            </Section>
          </div>
        </div>
      </ScrollingProvider>
    </div>
  );
};

export default Home;
