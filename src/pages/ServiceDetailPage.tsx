import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { getServiceBySlug, services } from "@/data/services";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { Helmet } from "react-helmet-async";

const ServiceDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug || "");

  if (!service) return <Navigate to="/404" replace />;

  const relatedServices = service.relatedSlugs
    .map((s) => services.find((sv) => sv.slug === s))
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Helmet>
        <title>{service.title} — Ingeniors Services</title>
        <meta name="description" content={service.shortDescription} />
        <link rel="canonical" href={`https://ingeniors.com/services/${service.slug}`} />
      </Helmet>
      <Navbar />

      <section className="relative pt-24 pb-0">
        <div className="h-72 lg:h-96 relative overflow-hidden">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative -mt-32 z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link to="/services" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" /> Back to Services
            </Link>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">{service.title}</h1>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="lg:col-span-2">
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">{service.description}</p>
              <img src={service.image} alt={service.title} className="w-full rounded-xl opacity-70 hover:opacity-90 transition-opacity duration-500 mb-10" loading="lazy" />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <div className="glass-card p-6 lg:p-8 sticky top-28">
                <h3 className="font-heading text-lg font-semibold mb-6 text-foreground">Key Features</h3>
                <ul className="space-y-3 mb-8">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button variant="glow" className="w-full" asChild>
                  <Link to="/contact">Request Quote</Link>
                </Button>
              </div>
            </motion.div>
          </div>

          {relatedServices.length > 0 && (
            <div className="mt-24">
              <h2 className="font-heading text-2xl font-bold mb-8">
                Related <span className="text-gradient">Services</span>
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {relatedServices.map((rs) => (
                  <Link key={rs!.slug} to={`/services/${rs!.slug}`} className="block">
                    <div className="glass-card p-6 group hover:-translate-y-1 transition-all duration-300">
                      <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors mb-2">{rs!.title}</h3>
                      <p className="text-sm text-muted-foreground">{rs!.shortDescription}</p>
                      <span className="inline-flex items-center gap-1 text-primary text-sm mt-4">Learn more <ArrowRight className="w-3 h-3" /></span>
                    </div>
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

export default ServiceDetailPage;
