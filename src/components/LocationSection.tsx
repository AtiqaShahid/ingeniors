import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const GOOGLE_MAPS_DIRECTIONS = "https://www.google.com/maps/dir/?api=1&destination=31.3497,74.1594&travelmode=driving";
const EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.0!2d74.1594!3d31.3497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDIwJzU5LjAiTiA3NMKwMDknMzMuOCJF!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s";

const LocationSection = () => (
  <section className="relative py-24 lg:py-32 section-glow">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-xs font-medium text-primary tracking-widest uppercase mb-4 block">Location</span>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          Find <span className="text-gradient">Us</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Visit our engineering hub in Bahria Town, Lahore.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto glass-card overflow-hidden glow-border"
      >
        {/* Map */}
        <div className="relative w-full h-[350px] sm:h-[400px]">
          <iframe
            src={EMBED_URL}
            width="100%"
            height="100%"
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.9) contrast(1.1)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ingeniors Office Location"
          />
          {/* Overlay for dark blend */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-background/80" />
        </div>

        {/* Info bar */}
        <div className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground text-sm">Ingeniors — Bahria Town, Lahore</h3>
              <p className="text-xs text-muted-foreground">95GV+XXH, Gulbahar Block Sector C</p>
            </div>
          </div>
          <Button variant="glow" size="sm" asChild>
            <a
              href={GOOGLE_MAPS_DIRECTIONS}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <Navigation className="w-4 h-4" />
              Get Directions
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default LocationSection;
