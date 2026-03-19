import { lazy } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import { LazySection } from "@/components/LazySection";
import { Helmet } from "react-helmet-async";

// Lazy load all below-fold sections
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const CapabilitiesSection = lazy(() => import("@/components/CapabilitiesSection"));
const ProcessSection = lazy(() => import("@/components/ProcessSection"));
const TechStackSection = lazy(() => import("@/components/TechStackSection"));
const StatsSection = lazy(() => import("@/components/StatsSection"));
const ProjectsSection = lazy(() => import("@/components/ProjectsSection"));
const ClientsSection = lazy(() => import("@/components/ClientsSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const LocationSection = lazy(() => import("@/components/LocationSection"));
const FooterSection = lazy(() => import("@/components/FooterSection"));
const AIChatWidget = lazy(() => import("@/components/AIChatWidget"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Helmet>
        <title>Ingeniors — Precision CAD Design & Engineering Solutions</title>
        <meta name="description" content="Unlock your project's potential with Ingeniors' state-of-the-art CAD design, 3D modeling, structural analysis, and product visualization." />
        <link rel="canonical" href="https://ingeniors.com/" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" as="image" href="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80" />
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
      <LazySection><ServicesSection /></LazySection>
      <LazySection><CapabilitiesSection /></LazySection>
      <LazySection><ProcessSection /></LazySection>
      <LazySection><TechStackSection /></LazySection>
      <LazySection><StatsSection /></LazySection>
      <LazySection><ProjectsSection /></LazySection>
      <LazySection><ClientsSection /></LazySection>
      <LazySection><TestimonialsSection /></LazySection>
      <LazySection><LocationSection /></LazySection>
      <LazySection><FooterSection /></LazySection>
      <LazySection><AIChatWidget /></LazySection>
    </div>
  );
};

export default Index;
