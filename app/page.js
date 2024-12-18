import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import { DATA } from '@/utils/data';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <div
        id="top-bg-cover-img"
        className="opacity-[0.7] p-[12em] md:p-[18em]"
      />
      <div className="max-w-[1024px] mx-auto">
        <Navbar DATA={DATA} />
        <Hero DATA={DATA} />
        <Experience DATA={DATA} />
        <Projects DATA={DATA} />
        <Skills DATA={DATA} />
        <Contact DATA={DATA} />
        <Footer />
      </div>
    </div>
  );
}
