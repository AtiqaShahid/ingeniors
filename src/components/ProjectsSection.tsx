import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

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
          <Button variant="glow-outline" size="sm" className="w-fit" asChild>
            <Link to="/projects">View More <ArrowRight className="w-4 h-4 ml-1" /></Link>
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <Link to={`/projects/${project.slug}`} className="block">
                <div className="glass-card overflow-hidden group hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                  <div className="h-48 relative overflow-hidden">
                    <img
                      src={project.heroImage.replace('w=1200', 'w=600').replace('q=80', 'q=60')}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-[1.03] transition-all duration-500"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => { (e.target as HTMLImageElement).src = "/placeholder.svg"; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                  </div>
                  <div className="p-6">
                    <span className="text-xs text-primary font-medium tracking-wider uppercase mb-2 block">
                      {project.title}
                    </span>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.shortDescription}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
