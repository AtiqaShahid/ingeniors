import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import ClientsSection from "@/components/ClientsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Helmet } from "react-helmet-async";

const ClientsPage = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Helmet>
        <title>Clients — Ingeniors Trusted Partners</title>
        <meta name="description" content="Proudly partnering with forward-thinking companies to deliver impactful design and engineering solutions." />
        <link rel="canonical" href="https://ingeniors.com/clients" />
      </Helmet>
      <Navbar />
      <div className="pt-20">
        <ClientsSection />
        <TestimonialsSection />
      </div>
      <FooterSection />
    </div>
  );
};

export default ClientsPage;
