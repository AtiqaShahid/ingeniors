import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  return (
    <section className="relative py-24 lg:py-32 section-glow">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium text-primary tracking-widest uppercase mb-4 block">Testimonials</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold">
            How They Are <span className="text-gradient">Satisfied</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto glass-card p-8 lg:p-12 relative"
        >
          <Quote className="w-10 h-10 text-primary/30 mb-6" />
          <p className="text-foreground/90 text-base lg:text-lg leading-relaxed mb-8">
            I couldn't be happier with the custom-designed beehive from Geometricx. The innovative design with an integrated water reservoir and easy-access honey extraction has made beekeeping so much easier and more enjoyable. The attention to detail, like the wooden sticks for natural hive-building, truly shows their expertise and understanding of bee behavior. This hive has been both functional and efficient, and I'd highly recommend Geometricx to anyone looking for top-quality, thoughtful design work!
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-accent/20 flex items-center justify-center border border-primary/20">
              <span className="font-heading font-bold text-primary">OM</span>
            </div>
            <div>
              <p className="font-heading font-semibold text-foreground">Oliver Mason</p>
              <p className="text-sm text-muted-foreground">Client</p>
            </div>
          </div>

          {/* Decorative glow */}
          <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary/5 rounded-full blur-[60px]" />
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
