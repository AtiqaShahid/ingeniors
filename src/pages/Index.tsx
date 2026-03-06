import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import ProcessSection from "@/components/ProcessSection";
import TechStackSection from "@/components/TechStackSection";
import StatsSection from "@/components/StatsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ClientsSection from "@/components/ClientsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LocationSection from "@/components/LocationSection";
import FooterSection from "@/components/FooterSection";
import AIChatWidget from "@/components/AIChatWidget";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Helmet>
        <title>Ingeniors — Precision CAD Design & Engineering Solutions</title>
        <meta name="description" content="Unlock your project's potential with Ingeniors' state-of-the-art CAD design, 3D modeling, structural analysis, and product visualization." />
        <link rel="canonical" href="https://ingeniors.com/" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Ingeniors",
          url: "https://ingeniors.com",
          description: "Precision CAD Design & Engineering Solutions",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Gulbahar Block Sector C, Bahria Town",
            addressLocality: "Lahore",
            addressCountry: "PK",
          },
          sameAs: [
            "https://www.linkedin.com/company/108181928/",
            "https://www.facebook.com/61568716863379/"
          ],
        })}</script>
      </Helmet>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <CapabilitiesSection />
      <ProcessSection />
      <TechStackSection />
      <StatsSection />
      <ProjectsSection />
      <ClientsSection />
      <TestimonialsSection />
      <LocationSection />
      <FooterSection />
      <AIChatWidget />
    </div>
  );
};

export default Index;
