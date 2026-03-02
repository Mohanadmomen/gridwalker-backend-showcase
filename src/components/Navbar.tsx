import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > 40);

    const sections = links.map((l) => l.href.slice(1));
    let current = "";
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 200) current = id;
      }
    }
    setActive(current);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return (
    <motion.nav
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/60 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-background/20"
          : ""
      }`}
    >
      <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" className="font-heading font-bold text-lg">
          M<span className="text-accent">.</span>
        </a>
        <div className="flex items-center gap-6">
          {links.map((l) => {
            const isActive = active === l.href.slice(1);
            return (
              <a
                key={l.href}
                href={l.href}
                className={`relative font-mono text-xs transition-colors ${
                  isActive ? "text-accent" : "text-muted-foreground hover:text-accent"
                }`}
              >
                {l.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-accent"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
              </a>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
