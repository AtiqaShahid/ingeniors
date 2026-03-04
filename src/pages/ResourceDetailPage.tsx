import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { getResourceBySlug, resources } from "@/data/resources";
import { ArrowLeft, ArrowRight } from "lucide-react";

const ResourceDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const resource = getResourceBySlug(slug || "");

  if (!resource) return <Navigate to="/404" replace />;

  const related = resource.relatedSlugs
    .map((s) => resources.find((r) => r.slug === s))
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      <section className="relative pt-24">
        <div className="h-64 lg:h-80 relative overflow-hidden">
          <img src={resource.coverImage} alt={resource.title} className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative -mt-24 z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link to="/resources" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" /> Back to Resources
            </Link>
            <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">{resource.title}</h1>
            <p className="text-sm text-muted-foreground">
              {resource.author} · {resource.date}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          {resource.content.map((para, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
              className="text-muted-foreground text-base lg:text-lg leading-relaxed mb-6"
            >
              {para}
            </motion.p>
          ))}

          {related.length > 0 && (
            <div className="mt-16 pt-12 border-t border-border/40">
              <h3 className="font-heading text-xl font-bold mb-6">Related Articles</h3>
              <div className="space-y-4">
                {related.map((r) => (
                  <Link key={r!.slug} to={`/resources/${r!.slug}`} className="block glass-card p-5 group hover:-translate-y-0.5 transition-all duration-300">
                    <h4 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                      {r!.title}
                    </h4>
                    <p className="text-sm text-muted-foreground line-clamp-1">{r!.excerpt}</p>
                    <span className="inline-flex items-center gap-1 text-primary text-sm mt-2">
                      Read more <ArrowRight className="w-3 h-3" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default ResourceDetailPage;
