import { motion } from "framer-motion";
import { Building2, Stethoscope, Shirt, Music, Compass } from "lucide-react";

const clients = [
  { name: "WhiteSmilePro", icon: Stethoscope },
  { name: "Dosta", icon: Building2 },
  { name: "HOODTIE", icon: Shirt },
  { name: "Beelzebubs", icon: Music },
  { name: "Axis", icon: Compass },
];

const ClientsSection = () => {
  return (
    <section id="clients" className="relative py-24 lg:py-32 section-glow">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium text-primary tracking-widest uppercase mb-4 block">Our Clients</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Trusted by <span className="text-gradient">Industry Leaders</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Proudly partnering with forward-thinking companies, we've had the privilege of delivering impactful design and engineering solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {clients.map((client, i) => {
            const Icon = client.icon;
            return (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 flex flex-col items-center gap-3 group hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 group-hover:shadow-[0_0_20px_-5px_hsl(var(--glow-primary)/0.3)] transition-all duration-300">
                  <Icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </div>
                <span className="font-heading text-sm font-semibold text-muted-foreground group-hover:text-primary transition-colors duration-300">
                  {client.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
