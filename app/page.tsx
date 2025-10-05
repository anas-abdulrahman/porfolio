"use client";


import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import dynamic from "next/dynamic";
import AboutMe from "../components/AboutMe";
import Clients from "../components/Clients";
import TechAndStack from "../components/TechAndStack";
const Hero = dynamic(() => import("../components/Hero"));
const Grid = dynamic(() => import("../components/Grid"));

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav  />
        <Hero />
        <AboutMe />
        <Grid />
        <TechAndStack/>
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}

export default Home;
