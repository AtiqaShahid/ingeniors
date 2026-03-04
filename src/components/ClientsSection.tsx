import { motion } from "framer-motion";

const clients = ["WhiteSmilePro", "Dosta", "HOODTIE", "Beelzebubs", "Axis"];

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

        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
          {clients.map((client, i) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card px-8 py-5 group hover:-translate-y-1 transition-all duration-300"
            >
              <span className="font-heading text-lg font-semibold text-muted-foreground group-hover:text-primary transition-colors duration-300">
                {client}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
