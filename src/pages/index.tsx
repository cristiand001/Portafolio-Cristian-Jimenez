import { About } from "@/components/About";
import { CustomCursor } from "@/components/CustomCursor";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <>
      <CustomCursor /> {/* 👈 SIEMPRE AFUERA, NIVEL ROOT */}
      <div className="min-h-screen font-['Inter']">
        <ThemeToggle />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default Index;
