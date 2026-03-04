import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Hexacopter Design",
    description: "A robust, lightweight hexacopter built for maximum load capacity and stability.",
    gradient: "from-primary/20 to-accent/10",
  },
  {
    title: "6-DOF Industrial Robot",
    description: "A versatile robotic arm with six degrees of freedom for industrial tasks like welding and drilling.",
    gradient: "from-accent/20 to-primary/10",
  },
  {
    title: "Adjustable Sheet Metal Shelving",
    description: "Modular shelving with height-adjustable sections, allowing flexible organization and space optimization.",
    gradient: "from-primary/15 to-accent/15",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-24 lg:py-32 section-glow">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4"
        >
          <div>
            <span className="text-xs font-medium text-primary tracking-widest uppercase mb-4 block">Portfolio</span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold">
              Our <span className="text-gradient">Projects</span>
            </h2>
          </div>
          <Button variant="glow-outline" size="sm" className="w-fit">
            View More <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="glass-card overflow-hidden group hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
            >
              {/* Visual placeholder */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 border border-primary/20 rounded-xl rotate-45 group-hover:rotate-[55deg] transition-transform duration-500" />
                  <div className="absolute w-12 h-12 bg-primary/10 rounded-lg -rotate-12 group-hover:rotate-0 transition-transform duration-500" />
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs text-primary font-medium tracking-wider uppercase mb-2 block">
                  {project.title}
                </span>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
