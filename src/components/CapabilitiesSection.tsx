import { motion } from "framer-motion";
import { Zap, Users, Target, Lightbulb } from "lucide-react";

const capabilities = [
  { icon: Target, label: "Precision Engineering" },
  { icon: Lightbulb, label: "Innovative Solutions" },
  { icon: Users, label: "Collaborative Approach" },
  { icon: Zap, label: "Rapid Prototyping" },
];

const CapabilitiesSection = () => {
  return (
    <section id="capabilities" className="relative py-24 lg:py-32 section-glow">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-medium text-primary tracking-widest uppercase mb-4 block">Capabilities</span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Specializing in{" "}
              <span className="text-gradient">Collaborative Design</span>{" "}
              Solutions
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-lg">
              At Geometricx, we combine expertise, innovation, and teamwork to transform your ideas into market-ready products. Our approach is centered around collaborative design processes that ensure each project benefits from diverse perspectives and expert insights.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="glass-card p-6 flex flex-col items-center text-center gap-4 group hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:shadow-[0_0_25px_-5px_hsl(var(--glow-primary)/0.4)] transition-shadow duration-300">
                  <cap.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-heading font-semibold text-foreground">{cap.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
