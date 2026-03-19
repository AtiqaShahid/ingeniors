import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 gradient-radial" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-accent/8 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      <div className="container mx-auto px-4 relative z-10 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
              <span className="text-xs font-medium text-primary tracking-wider uppercase">Precision Engineering</span>
            </motion.div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6">
              <span className="text-foreground">Precision Design,</span>
              <br />
              <span className="text-gradient glow-text">Infinite Innovation</span>
            </h1>

            <p className="text-muted-foreground text-base lg:text-lg max-w-lg mb-10 leading-relaxed">
              Unlock the full potential of your projects with Ingeniors' state-of-the-art CAD design and engineering solutions. From conceptualization to execution, our tailored services ensure precision, efficiency, and scalability.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="glow" size="lg" className="text-base px-8" asChild>
                <Link to="/contact">Get Started</Link>
              </Button>
              <Button variant="glow-outline" size="lg" className="text-base px-8" asChild>
                <Link to="/projects">View Projects</Link>
              </Button>
            </div>
          </motion.div>

          {/* Hero visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Background engineering image */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=60"
                  alt="Abstract engineering visualization"
                  className="w-full h-full object-cover opacity-20"
                  decoding="async"
                  fetchPriority="low"
                />
              </div>
              {/* Floating geometric shapes */}
              <div className="absolute inset-0 animate-float">
                <div className="absolute top-[10%] left-[15%] w-32 h-32 border border-primary/20 rounded-2xl rotate-12 glass-card" />
                <div className="absolute top-[30%] right-[10%] w-24 h-24 border border-accent/20 rounded-xl -rotate-12 glass-card" style={{ animationDelay: "1s" }} />
                <div className="absolute bottom-[20%] left-[20%] w-40 h-28 border border-primary/15 rounded-2xl rotate-6 glass-card" />
              </div>
              <div className="absolute inset-0 animate-float-slow">
                <div className="absolute top-[5%] right-[30%] w-16 h-16 bg-primary/10 rounded-lg rotate-45" />
                <div className="absolute bottom-[15%] right-[25%] w-20 h-20 bg-accent/8 rounded-full blur-sm" />
              </div>
              {/* Central orb */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 blur-xl animate-pulse-glow" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-primary/30 glass flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent opacity-60 blur-sm" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator - positioned with proper spacing below content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col items-center gap-2 mt-16 pb-8"
        >
          <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-4 h-4 text-primary animate-scroll-indicator" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
