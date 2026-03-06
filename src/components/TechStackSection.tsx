import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Cog, BarChart3, Layers, Code2, Wrench, X } from "lucide-react";

const tools = [
  {
    name: "SolidWorks",
    desc: "3D CAD & simulation",
    icon: Cog,
    detail: "3D mechanical design and assembly modeling for accurate engineering products.",
  },
  {
    name: "AutoCAD",
    desc: "2D/3D drafting & design",
    icon: Layers,
    detail: "Professional drafting software for precise engineering drawings and technical documentation.",
  },
  {
    name: "ANSYS",
    desc: "Finite element analysis",
    icon: BarChart3,
    detail: "Simulation software used for structural, thermal, and fluid analysis.",
  },
  {
    name: "CATIA",
    desc: "Surface & parametric modeling",
    icon: Cpu,
    detail: "Advanced product design platform used widely in aerospace and automotive industries.",
  },
  {
    name: "MATLAB",
    desc: "Numerical computation",
    icon: Code2,
    detail: "Engineering computation and simulation platform for complex system modeling.",
  },
  {
    name: "Python",
    desc: "Automation & scripting",
    icon: Wrench,
    detail: "Used for data processing, automation, and engineering simulation scripting.",
  },
];

const TechStackSection = () => {
  const [openTool, setOpenTool] = useState<number | null>(null);

  return (
    <section className="relative py-24 lg:py-32 section-glow">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium text-primary tracking-widest uppercase mb-4 block">Technology</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Technology <span className="text-gradient">Stack</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            The tools powering our engineering precision.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {tools.map((tool, i) => {
            const Icon = tool.icon;
            const isOpen = openTool === i;
            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative"
              >
                <button
                  onClick={() => setOpenTool(isOpen ? null : i)}
                  className={`w-full glass-card p-6 text-center group hover:-translate-y-1 transition-all duration-300 cursor-pointer ${
                    isOpen ? "border-primary/40 shadow-[0_0_25px_-5px_hsl(var(--glow-primary)/0.3)]" : ""
                  }`}
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_-5px_hsl(var(--glow-primary)/0.3)] transition-all duration-300">
                    <Icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">{tool.name}</h3>
                  <p className="text-xs text-muted-foreground">{tool.desc}</p>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: -5 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -5 }}
                      transition={{ duration: 0.25 }}
                      className="absolute left-0 right-0 top-full mt-2 z-20"
                    >
                      <div className="glass-card p-4 border-primary/20 shadow-[0_0_30px_-10px_hsl(var(--glow-primary)/0.3)]">
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-sm text-muted-foreground">{tool.detail}</p>
                          <button
                            onClick={(e) => { e.stopPropagation(); setOpenTool(null); }}
                            className="text-muted-foreground hover:text-primary transition-colors shrink-0"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
