import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
            <Button variant="glow" size="lg" className="text-base px-10">
              Get Started <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          {/* Background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <span className="font-heading text-xl font-bold mb-4 block">
                GEOMETRIC<span className="text-gradient">X</span>
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Precise Innovative Solutions for modern engineering challenges.
              </p>
            </div>
            <div>
              <h4 className="font-heading font-semibold text-sm mb-4 text-foreground">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-primary transition-colors cursor-pointer">Structural Analysis</li>
                <li className="hover:text-primary transition-colors cursor-pointer">3D CAD Modeling</li>
                <li className="hover:text-primary transition-colors cursor-pointer">2D Technical Drawings</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Sheet Metal Design</li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold text-sm mb-4 text-foreground">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-primary transition-colors cursor-pointer">About Us</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Projects</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Blog</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold text-sm mb-4 text-foreground">Connect</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-primary transition-colors cursor-pointer">LinkedIn</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Twitter</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Instagram</li>
              </ul>
            </div>
          </div>
          <div className="glow-line h-px w-full mb-8" />
          <p className="text-xs text-muted-foreground text-center">
            © 2024 Geometricx. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default FooterSection;
