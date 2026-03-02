import { motion } from "framer-motion";
import { Github, Linkedin, Facebook } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";
import mohanadImg from "@/assets/mohanad.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-primary text-sm tracking-widest uppercase mb-4">
              // Backend Engineer &amp; AI Enthusiast
            </p>

            <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight mb-4">
              Mohanad Momen<br />Ibrahim<span className="text-primary">.</span>
            </h1>

            <p className="font-mono text-xs text-muted-foreground mb-6">
              B.E. Computer Engineering &bull; GPA 3.2
            </p>

            <div className="mb-8">
              <h2 className="font-heading text-lg font-semibold mb-3">
                About Me<span className="text-primary">.</span>
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                I'm a Computer Engineering student at Suez Canal University with a deep focus on
                <span className="text-foreground font-medium"> backend development</span> and
                <span className="text-primary font-mono"> AI integration</span>. I build scalable,
                production-ready systems using <span className="text-primary font-mono">.NET Core</span>,
                design robust REST APIs, and integrate machine learning models into real-world applications.
                I'm driven by clean architecture, performance, and solving complex problems with code.
              </p>
            </div>

            <div className="flex items-center gap-3 flex-wrap">
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
            </div>
          </motion.div>

          {/* Right — Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, type: "spring", stiffness: 120 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-primary/10 blur-[60px] pointer-events-none" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary/30 glow-border">
                <img
                  src={mohanadImg}
                  alt="Mohanad Momen Ibrahim"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
