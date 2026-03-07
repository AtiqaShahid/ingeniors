import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const FooterSection = () => {
  return (
    <>
      {/* CTA */}
      <section className="relative py-24 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to <span className="text-gradient glow-text">Transform</span> Your Vision?
            </h2>
            <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
              Let's collaborate to bring your next engineering project to life with precision and innovation.
            </p>
            <Button variant="glow" size="lg" className="text-base px-10" asChild>
              <Link to="/contact">Get Started <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <Link to="/" className="font-heading text-xl font-bold mb-4 block">
                INGENI<span className="text-gradient">ORS</span>
              </Link>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Precise Innovative Solutions for modern engineering challenges.
              </p>
            </div>
            <div>
              <h4 className="font-heading font-semibold text-sm mb-4 text-foreground">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/services/structural-analysis" className="hover:text-primary transition-colors">Structural Analysis</Link></li>
                <li><Link to="/services/3d-cad-modeling" className="hover:text-primary transition-colors">3D CAD Modeling</Link></li>
                <li><Link to="/services/2d-technical-drawings" className="hover:text-primary transition-colors">2D Technical Drawings</Link></li>
                <li><Link to="/services/sheet-metal-design" className="hover:text-primary transition-colors">Sheet Metal Design</Link></li>
                <li><Link to="/services/product-visualization" className="hover:text-primary transition-colors">Product Visualization</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold text-sm mb-4 text-foreground">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                <li><Link to="/projects" className="hover:text-primary transition-colors">Projects</Link></li>
                <li><Link to="/resources" className="hover:text-primary transition-colors">Resources</Link></li>
                <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold text-sm mb-4 text-foreground">Connect</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="https://www.linkedin.com/company/108181928/admin/dashboard/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors inline-flex items-center gap-2"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/61568716863379/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors inline-flex items-center gap-2"
                  >
                    <Facebook className="w-4 h-4" />
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="glow-line h-px w-full mb-8" />
          <p className="text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} Ingeniors. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default FooterSection;
