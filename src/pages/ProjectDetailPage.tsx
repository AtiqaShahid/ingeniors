import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { getProjectBySlug } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";

const ProjectDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = getProjectBySlug(slug || "");

  if (!project) return <Navigate to="/404" replace />;

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Helmet>
        <title>{project.title} — Ingeniors Projects</title>
        <meta name="description" content={project.shortDescription} />
        <link rel="canonical" href={`https://ingeniors.com/projects/${project.slug}`} />
      </Helmet>
      <Navbar />

      <section className="relative pt-24">
        <div className="h-72 lg:h-[28rem] relative overflow-hidden">
          <img src={project.heroImage} alt={project.title} className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative -mt-32 z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" /> Back to Projects
            </Link>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">{project.title}</h1>
            {project.client && <p className="text-primary text-sm font-medium">Client: {project.client}</p>}
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-12">
            {project.description}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="mb-16">
            <h3 className="font-heading text-lg font-semibold mb-4">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-xs font-medium text-primary">{tech}</span>
              ))}
            </div>
          </motion.div>

          <h3 className="font-heading text-lg font-semibold mb-6">Project Gallery</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {project.gallery.map((img, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1 }} className="rounded-xl overflow-hidden group">
                <img src={img} alt={`${project.title} - Image ${i + 1}`} className="w-full h-64 object-cover opacity-70 group-hover:opacity-90 group-hover:scale-[1.03] transition-all duration-500" loading="lazy" onError={(e) => { (e.target as HTMLImageElement).src = "/placeholder.svg"; }} />
              </motion.div>
            ))}
          </div>

          <div className="mt-12">
            <Button variant="glow" asChild>
              <Link to="/contact">Discuss Your Project</Link>
            </Button>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default ProjectDetailPage;
