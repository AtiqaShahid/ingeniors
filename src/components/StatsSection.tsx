import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "Projects Completed", value: 250, suffix: "+" },
  { label: "Industries Served", value: 15, suffix: "+" },
  { label: "Client Satisfaction", value: 98, suffix: "%" },
  { label: "Engineers On Board", value: 30, suffix: "+" },
];

function useCountUp(target: number, trigger: boolean, duration = 2000) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [trigger, target, duration]);
  return count;
}

const StatCard = ({ label, value, suffix, delay }: { label: string; value: number; suffix: string; delay: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const count = useCountUp(value, visible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="glass-card p-8 text-center group hover:-translate-y-1 transition-all duration-300"
    >
      <div className="font-heading text-4xl sm:text-5xl font-bold text-gradient glow-text mb-2">
        {count}{suffix}
      </div>
      <p className="text-muted-foreground text-sm font-medium">{label}</p>
    </motion.div>
  );
};

const StatsSection = () => (
  <section className="relative py-24 lg:py-32 section-glow">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-xs font-medium text-primary tracking-widest uppercase mb-4 block">Our Impact</span>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          Numbers That <span className="text-gradient">Speak</span>
        </h2>
      </motion.div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <StatCard key={s.label} {...s} delay={i * 0.1} />
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
