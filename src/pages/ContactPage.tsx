import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";
import { Helmet } from "react-helmet-async";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Helmet>
        <title>Contact Ingeniors — Let's Connect</title>
        <meta name="description" content="Connect with Ingeniors on LinkedIn. Start your next precision engineering project today." />
        <link rel="canonical" href="https://ingeniors.com/contact" />
      </Helmet>
      <Navbar />

      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="absolute inset-0 gradient-radial" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <span className="text-xs font-medium text-primary tracking-widest uppercase mb-4 block">Contact</span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Let's <span className="text-gradient">Connect</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Ready to start your next engineering project? Connect with us on LinkedIn and let's bring your vision to life.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-md mx-auto"
          >
            <div className="glass-card p-10 text-center border-primary/20">
              <Linkedin className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="font-heading text-xl font-semibold mb-3 text-foreground">Connect on LinkedIn</h2>
              <p className="text-muted-foreground mb-8 text-sm">
                Reach out directly — we'd love to hear about your project.
              </p>
              <a
                href="https://www.linkedin.com/company/108181928/admin/dashboard/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="glow" size="lg" className="gap-2 w-full sm:w-auto">
                  <Linkedin className="w-5 h-5" />
                  Connect on LinkedIn
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default ContactPage;
