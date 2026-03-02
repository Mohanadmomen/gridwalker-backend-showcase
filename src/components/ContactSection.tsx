import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Facebook } from "lucide-react";

const socials = [
  { icon: Mail, href: "mailto:mohanadmomen25@gmail.com", label: "Email" },
  { icon: Github, href: "https://github.com/Mohanadmomen", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/mohanad-momen/", label: "LinkedIn" },
  { icon: Facebook, href: "https://www.facebook.com/mohanad.momen.5", label: "Facebook" },
];

const ContactSection = () => {
  return (
    <section className="py-24 px-6" id="contact">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-accent text-sm tracking-widest uppercase mb-2">
            // Contact
          </p>
          <h2 className="font-heading text-3xl font-bold mb-4">
            Let's connect<span className="text-accent">.</span>
          </h2>
          <p className="text-muted-foreground mb-2">
            Reach me at{" "}
            <a
              href="mailto:mohanadmomen25@gmail.com"
              className="text-accent font-mono text-sm hover:underline"
            >
              mohanadmomen25@gmail.com
            </a>
          </p>
        </motion.div>

        <motion.div
          className="flex items-center justify-center gap-4 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="p-3 rounded-lg border border-border bg-card text-muted-foreground transition-all hover:text-accent hover:glow-border-hover"
            >
              <s.icon size={20} />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
