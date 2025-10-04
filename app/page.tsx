"use client";


import Approach from "@/components/Approach";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import dynamic from "next/dynamic";
import AboutMe from "../components/AboutMe";
import TechAndStack from "../components/TechAndStack";
const Grid = dynamic(() => import("@/components/Grid"), {
  ssr: false, // ✅ disables server-side rendering for this component
});
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
