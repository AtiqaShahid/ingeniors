import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { projects } from "@/data/projects";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="absolute inset-0 gradient-radial" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
            <span className="text-xs font-medium text-primary tracking-widest uppercase mb-4 block">Portfolio</span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
              Explore our portfolio of precision-engineered solutions spanning industrial robotics, aerospace, and manufacturing.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
              >
                <Link to={`/projects/${project.slug}`} className="block">
                  <div className="glass-card overflow-hidden group hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                    <div className="h-56 relative overflow-hidden">
                      <img
                        src={project.heroImage}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-[1.03] transition-all duration-500"
                        loading="lazy"
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
      <FooterSection />
    </div>
  );
};

export default ProjectsPage;
