import { motion } from "framer-motion";
import { Box, PenTool, FileText, Layers, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Layers,
    title: "Structural Analysis",
    description: "We provide detailed insights into the structural integrity and performance of various designs, from machinery chassis to electronic equipment.",
  },
  {
    icon: Box,
    title: "3D CAD Modeling",
    description: "Utilizing state-of-the-art technology and deep industry expertise, we cater to various manufacturing needs, including CNC machining, 3D printing, and more.",
  },
  {
    icon: FileText,
    title: "2D Technical Drawings",
    description: "Our 2D Technical and Manufacturing Drawing Services, perfect for detailed production schematics. We specialize in GDT to ensure high-quality outcomes.",
  },
  {
    icon: PenTool,
    title: "Sheet Metal Design",
    description: "Leveraging advanced CAD tools, we deliver customized solutions, including enclosure designs, DXF files, reverse engineering, and comprehensive engineering documentation.",
  },
  {
    icon: Eye,
    title: "Product Visualization",
    description: "Specializing in high-impact visual content, we create engaging animations and renderings that boost marketing efforts and enhance customer engagement.",
  },
];

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
            <Button variant="glow" size="sm">Get Started</Button>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="glass-card p-6 lg:p-8 group hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:shadow-[0_0_20px_-5px_hsl(var(--glow-primary)/0.4)] transition-shadow duration-300">
                <service.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
