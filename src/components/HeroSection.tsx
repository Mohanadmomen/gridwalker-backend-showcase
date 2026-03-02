import { motion } from "framer-motion";
import { Github, Linkedin, ChevronDown, Facebook } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";
import mohanadImg from "@/assets/mohanad.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 150 }}
          className="mb-6"
        >
          <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border-2 border-primary/30 glow-border">
            <img
              src={mohanadImg}
              alt="Mohanad Momen"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-4">
            // Backend Engineer &amp; AI Enthusiast
          </p>
        </motion.div>

        <motion.h1
          className="font-heading text-5xl md:text-7xl font-bold tracking-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Mohanad Momen<span className="text-primary">.</span>
        </motion.h1>

        <motion.p
          className="font-mono text-xs text-muted-foreground mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          B.E. Computer Engineering &bull; GPA 3.2
        </motion.p>

        <motion.p
          className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          Computer Engineering student specializing in{" "}
          <span className="text-foreground font-medium">backend development</span>,{" "}
          <span className="text-primary font-mono">AI integration</span>, and building
          scalable systems with <span className="text-primary font-mono">.NET</span>
        </motion.p>

        <motion.div
          className="flex items-center justify-center gap-3 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <MagneticButton
            href="https://github.com/Mohanadmomen"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm transition-shadow hover:shadow-[0_0_30px_hsl(200_80%_55%/0.4)]"
          >
            <Github size={18} />
            GitHub
          </MagneticButton>
          <MagneticButton
            href="https://www.linkedin.com/in/mohanad-momen/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium text-sm transition-all hover:border-primary/50 hover:text-primary hover:shadow-[0_0_20px_hsl(200_80%_55%/0.15)]"
          >
            <Linkedin size={18} />
            LinkedIn
          </MagneticButton>
          <MagneticButton
            href="https://www.facebook.com/mohanad.momen.5"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium text-sm transition-all hover:border-primary/50 hover:text-primary hover:shadow-[0_0_20px_hsl(200_80%_55%/0.15)]"
          >
            <Facebook size={18} />
            Facebook
          </MagneticButton>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
