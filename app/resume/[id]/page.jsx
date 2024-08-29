'use client'
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { ResumeProvider } from "@/context/ResumeContext";
import { DATA } from "@/utils/data";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home({params}) {
  const [data,setData] = useState(DATA[Number(params.id)])
  useEffect(()=>{
    async function fetchResumes() {
        try {
          const response = await fetch(`/api/resume/${params.id}`);
          const data = await response.json();
          setData(data)
        } catch (error) {
          console.error("Failed to fetch resumes:", error);
        }
      }
      fetchResumes();
  },[params])

  return (
    
    <div>
      <div id="top-bg-cover-img" className="opacity-[0.7] p-[12em] md:p-[18em]"/>
      <div className="max-w-[1024px] mx-auto">
      <Navbar DATA ={data} />
        <Hero DATA ={data}/>
        <Projects DATA ={data}/>
        <Experience DATA ={data}/>
        <Skills DATA ={data}/>
        <Contact DATA ={data}/>
        <Footer/>
      </div>
    </div>
  );
}


