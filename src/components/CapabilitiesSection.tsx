import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Factory, Car, Cpu, Zap, Package, ChevronDown } from "lucide-react";

const industries = [
  {
    icon: Car,
    label: "Automotive Engineering",
    details: [
      "Mechanical component design",
      "Structural simulation",
      "CAD assembly modeling",
      "Product lifecycle support",
      "Manufacturing consultation",
    ],
  },
  {
    icon: Factory,
    label: "Industrial Manufacturing",
    details: [
      "Machinery component design",
      "Production engineering",
      "Structural load simulations",
      "Process optimization",
    ],
  },
  {
    icon: Package,
    label: "Product Development",
    details: [
      "Concept design",
      "CAD modeling",
      "Engineering simulations",
      "Rapid prototyping",
      "Design for manufacturability",
    ],
  },
  {
    icon: Zap,
    label: "Energy Systems",
    details: [
      "Mechanical system design",
      "Thermal simulations",
      "Structural analysis",
      "Equipment optimization",
    ],
  },
];

const CapabilitiesSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="capabilities" className="relative py-24 lg:py-32 section-glow">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium text-primary tracking-widest uppercase mb-4 block">Industries</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Industries We <span className="text-gradient">Serve</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Delivering precision engineering solutions across sectors that demand excellence.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={ind.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <button
                  onClick={() => toggle(i)}
                  className={`w-full text-left glass-card p-6 group transition-all duration-300 hover:-translate-y-0.5 ${
                    isOpen
                      ? "border-primary/40 shadow-[0_0_25px_-5px_hsl(var(--glow-primary)/0.3)]"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? "bg-primary/20 shadow-[0_0_20px_-5px_hsl(var(--glow-primary)/0.4)]"
                          : "bg-primary/10 group-hover:bg-primary/15"
                      }`}
                    >
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-heading font-semibold text-foreground flex-1">
                      {ind.label}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-muted-foreground transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-primary" : ""
                      }`}
                    />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="glass-card mt-2 p-5 border-primary/20">
                        <ul className="space-y-2">
                          {ind.details.map((d) => (
                            <li key={d} className="flex items-center gap-3 text-sm text-muted-foreground">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                              {d}
                            </li>
                          ))}
                        </ul>
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

export default CapabilitiesSection;
