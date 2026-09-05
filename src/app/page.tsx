import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Goals from "@/components/Goals";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-[#121212] text-white selection:bg-white/30 min-h-screen">
      <Hero />
      <Education />
      <Skills />
      <Projects />
      <Goals />
      <Certifications />
      <Footer />
    </main>
  );
}
