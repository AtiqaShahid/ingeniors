import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ClientsSection from "@/components/ClientsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FooterSection from "@/components/FooterSection";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Helmet>
        <title>Ingeniors — Precision CAD Design & Engineering Solutions</title>
        <meta name="description" content="Unlock your project's potential with Ingeniors' state-of-the-art CAD design, 3D modeling, structural analysis, and product visualization." />
        <link rel="canonical" href="https://ingeniors.com/" />
      </Helmet>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <CapabilitiesSection />
      <ProjectsSection />
      <ClientsSection />
      <TestimonialsSection />
      <FooterSection />
    </div>
  );
};

export default Index;
