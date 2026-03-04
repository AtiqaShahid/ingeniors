import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <div className="flex min-h-screen items-center justify-center">
        <div className="absolute inset-0 gradient-radial" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center relative z-10"
        >
          <h1 className="font-heading text-8xl font-bold text-gradient glow-text mb-4">404</h1>
          <p className="text-xl text-muted-foreground mb-8">Page not found</p>
          <Button variant="glow" asChild>
            <Link to="/">Return Home</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
