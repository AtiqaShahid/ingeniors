import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Lightbulb, Users, Zap } from "lucide-react";

const values = [
  { icon: Target, title: "Precision", description: "Every design is engineered to exact specifications with rigorous quality control." },
  { icon: Lightbulb, title: "Innovation", description: "We push boundaries with cutting-edge tools and creative engineering solutions." },
  { icon: Users, title: "Collaboration", description: "We work closely with your team to ensure designs meet all requirements." },
  { icon: Zap, title: "Efficiency", description: "Streamlined workflows deliver results on time without compromising quality." },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="absolute inset-0 gradient-radial" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
              <span className="text-xs font-medium text-primary tracking-widest uppercase mb-4 block">About Us</span>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Engineering <span className="text-gradient">Excellence</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Geometricx is a precision CAD design and engineering consultancy specializing in 3D modeling, structural analysis, sheet metal design, and product visualization. We partner with innovators across industries to transform concepts into production-ready solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our team brings decades of combined experience in mechanical engineering, industrial design, and manufacturing. We leverage industry-leading tools including SolidWorks, CATIA, ANSYS, and Fusion 360 to deliver solutions that exceed expectations.
              </p>
              <Button variant="glow" asChild>
                <Link to="/contact">Work With Us</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative rounded-xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&q=80"
                alt="Engineering workspace with CAD software"
                className="w-full h-80 lg:h-96 object-cover opacity-70 rounded-xl"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent rounded-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 section-glow">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl sm:text-4xl font-bold text-center mb-16"
          >
            Our <span className="text-gradient">Values</span>
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 text-center group hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:shadow-[0_0_25px_-5px_hsl(var(--glow-primary)/0.4)] transition-shadow duration-300">
                  <v.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team image */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team collaboration in engineering environment"
                className="w-full h-72 lg:h-80 object-cover opacity-70 rounded-xl"
                loading="lazy"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl font-bold mb-6">
                A Team Built on <span className="text-gradient">Expertise</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our engineers hold advanced degrees in mechanical engineering, aerospace engineering, and industrial design. We're passionate about precision and committed to delivering solutions that work in the real world.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you're a startup prototyping your first product or an enterprise optimizing a production line, Geometricx has the expertise and tools to accelerate your success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default AboutPage;
