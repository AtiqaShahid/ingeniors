import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";
import { Layers, Box, FileText, PenTool, Eye } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  "structural-analysis": Layers,
  "3d-cad-modeling": Box,
  "2d-technical-drawings": FileText,
  "sheet-metal-design": PenTool,
  "product-visualization": Eye,
};

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="absolute inset-0 gradient-radial" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <span className="text-xs font-medium text-primary tracking-widest uppercase mb-4 block">Our Services</span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Expert <span className="text-gradient">Design</span> Services
            </h1>
            <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
              From concept to production, we deliver precision engineering solutions that transform your ideas into reality.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = iconMap[service.slug] || Layers;
              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link to={`/services/${service.slug}`} className="block">
                    <div className="glass-card overflow-hidden group hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                      <div className="h-48 relative overflow-hidden">
                        <img
                          src={service.thumbnail}
                          alt={service.title}
                          className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-[1.03] transition-all duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                        <div className="absolute bottom-4 left-4">
                          <div className="w-10 h-10 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center backdrop-blur-sm">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="font-heading text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {service.shortDescription}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      <FooterSection />
    </div>
  );
};

export default ServicesPage;
