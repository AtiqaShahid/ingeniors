import { motion } from "framer-motion";
import { Box, PenTool, FileText, Layers, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { services } from "@/data/services";

const iconMap: Record<string, React.ElementType> = {
  "structural-analysis": Layers,
  "3d-cad-modeling": Box,
  "2d-technical-drawings": FileText,
  "sheet-metal-design": PenTool,
  "product-visualization": Eye,
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-24 lg:py-32 section-glow">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-xs font-medium text-primary tracking-widest uppercase mb-4 block">Services</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            We Always Provide{" "}
            <span className="text-gradient">Expert Design</span> Services
          </h2>
          <div className="flex items-center gap-4 mt-6">
            <Button variant="glow" size="sm" asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.slug] || Layers;
            return (
              <motion.div
                key={service.slug}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
              >
                <Link to={`/services/${service.slug}`} className="block">
                  <div className="glass-card overflow-hidden group hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                    <div className="h-40 relative overflow-hidden">
                      <img
                        src={service.thumbnail}
                        alt={service.title}
                        className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-[1.03] transition-all duration-500"
                        loading="lazy"
                        onError={(e) => { (e.target as HTMLImageElement).src = "/placeholder.svg"; }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                    </div>
                    <div className="p-6 lg:p-8">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:shadow-[0_0_20px_-5px_hsl(var(--glow-primary)/0.4)] transition-shadow duration-300">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-heading text-lg font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
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
  );
};

export default ServicesSection;
