import HeroSection from "@/components/HeroSection";
import TechStack from "@/components/TechStack";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <TechStack />
      <ProjectsSection />
      <Footer />
    </div>
  );
};

export default Index;
