import { About } from "@/components/About";
import { CustomCursor } from "@/components/CustomCursor";
import { Hero } from "@/components/Hero";
import { Experience } from "../components/Experience";
import { Projects } from "@/components/Projects";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <>
      <CustomCursor />
      <div className="min-h-screen font-['Inter']">
        <ThemeToggle />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default Index;
