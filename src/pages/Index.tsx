import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AerospaceSection from "@/components/AerospaceSection";
import AIInAerospace from "@/components/AIInAerospace";
import ProjectSection from "@/components/ProjectSection";
import QuizSection from "@/components/QuizSection";
import TeamSection from "@/components/TeamSection";
import TechStackSection from "@/components/TechStackSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AerospaceSection />
      <AIInAerospace />
      <ProjectSection />
      <QuizSection />
      <TeamSection />
      <TechStackSection />
      <FooterSection />
    </div>
  );
};

export default Index;
