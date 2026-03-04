import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import ClientsSection from "@/components/ClientsSection";
import TestimonialsSection from "@/components/TestimonialsSection";

const ClientsPage = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
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
