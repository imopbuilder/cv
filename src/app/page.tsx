import { About } from '@/components/pages/home/about';
import { Achievements } from '@/components/pages/home/achievements';
import { Education } from '@/components/pages/home/education';
import { Experience } from '@/components/pages/home/experience';
import { Intro } from '@/components/pages/home/intro';
import { Projects } from '@/components/pages/home/projects';
import { ResumeCommandMenu } from '@/components/pages/home/resume-command-menu';
import { Skills } from '@/components/pages/home/skills';

export default function Home() {
  return (
    <main className='md:py-16 py-10 px-5 space-y-8 relative'>
      <Intro />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Achievements />
      <ResumeCommandMenu />
    </main>
  );
}
