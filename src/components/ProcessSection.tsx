import { motion } from "framer-motion";
import { Lightbulb, PenTool, Activity, Box, Factory } from "lucide-react";

const steps = [
  { icon: Lightbulb, title: "Idea", desc: "Concept & requirement gathering" },
  { icon: PenTool, title: "Design", desc: "CAD modeling & technical drawings" },
  { icon: Activity, title: "Simulation", desc: "Stress analysis & validation" },
  { icon: Box, title: "Prototype", desc: "Rapid prototyping & iteration" },
  { icon: Factory, title: "Manufacturing", desc: "Production-ready deliverables" },
];

const ProcessSection = () => (
  <section className="relative py-24 lg:py-32 section-glow">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-xs font-medium text-primary tracking-widest uppercase mb-4 block">Our Process</span>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          Engineering <span className="text-gradient">Workflow</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          A streamlined process from concept to manufacturing, ensuring precision at every stage.
        </p>
      </motion.div>

      {/* Desktop horizontal */}
      <div className="hidden lg:flex items-start justify-between relative">
        {/* Connecting line */}
        <div className="absolute top-12 left-[10%] right-[10%] h-px">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full h-full origin-left glow-line"
          />
        </div>

        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex flex-col items-center text-center w-1/5 relative z-10 group"
            >
              <div className="w-24 h-24 rounded-2xl glass-card flex items-center justify-center mb-4 group-hover:shadow-[0_0_30px_-5px_hsl(var(--glow-primary)/0.3)] transition-all duration-300">
                <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-1">{step.title}</h3>
              <p className="text-xs text-muted-foreground max-w-[140px]">{step.desc}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile vertical */}
      <div className="lg:hidden flex flex-col gap-6 relative">
        <div className="absolute top-0 bottom-0 left-6 w-px glow-line" />
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-5 relative z-10 group"
            >
              <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center flex-shrink-0 group-hover:shadow-[0_0_20px_-5px_hsl(var(--glow-primary)/0.3)] transition-all duration-300">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground text-sm">{step.title}</h3>
                <p className="text-xs text-muted-foreground">{step.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default ProcessSection;
