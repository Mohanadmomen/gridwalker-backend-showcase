import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Facebook, Send } from "lucide-react";
import { toast } from "sonner";

const info = [
  { icon: Mail, label: "Email", value: "mohanadmomen25@gmail.com", href: "mailto:mohanadmomen25@gmail.com" },
  { icon: Phone, label: "Phone", value: "+20 109 477 1552", href: null },
  { icon: MapPin, label: "Location", value: "Egypt", href: null },
];

const socials = [
  { icon: Github, href: "https://github.com/Mohanadmomen", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/mohanad-momen/", label: "LinkedIn" },
  { icon: Facebook, href: "https://www.facebook.com/mohanad.momen.5", label: "Facebook" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSending(true);
    // mailto fallback
    const mailTo = `mailto:mohanadmomen25@gmail.com?subject=${encodeURIComponent(form.subject || "Contact from Portfolio")}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.open(mailTo, "_blank");
    setSending(false);
    toast.success("Opening your email client!");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="py-24 px-6" id="contact">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-2">
            // Contact
          </p>
          <h2 className="font-heading text-3xl font-bold">
            Let's Connect<span className="text-primary">.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              I'm always excited to hear about new projects and opportunities. Whether you
              have a question, want to collaborate, or just want to say hi, feel free to reach out!
            </p>

            <motion.div
              className="space-y-4 mb-10"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {info.map((i) => (
                <motion.div
                  key={i.label}
                  variants={item}
                  className="flex items-center gap-4 p-4 rounded-lg border border-border border-dashed bg-card/50"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <i.icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{i.label}</p>
                    {i.href ? (
                      <a href={i.href} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                        {i.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-foreground">{i.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div>
              <h3 className="font-heading font-semibold text-sm mb-4">Follow Me</h3>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="p-3 rounded-lg border border-border bg-card text-muted-foreground transition-all hover:text-primary hover:glow-border-hover"
                  >
                    <s.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-6 rounded-lg border border-border bg-card space-y-5"
            >
              <h3 className="font-heading text-xl font-bold mb-2">Send a Message</h3>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-muted-foreground mb-1 block">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    maxLength={100}
                    className="w-full px-3 py-2.5 rounded-md bg-muted border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-shadow"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground mb-1 block">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    maxLength={255}
                    className="w-full px-3 py-2.5 rounded-md bg-muted border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-shadow"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-muted-foreground mb-1 block">Subject</label>
                <input
                  type="text"
                  placeholder="What's this about?"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  maxLength={200}
                  className="w-full px-3 py-2.5 rounded-md bg-muted border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-shadow"
                />
              </div>

              <div>
                <label className="text-xs text-muted-foreground mb-1 block">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  maxLength={1000}
                  className="w-full px-3 py-2.5 rounded-md bg-muted border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-shadow resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full py-3 rounded-lg font-medium text-sm text-primary-foreground bg-gradient-to-r from-primary to-accent flex items-center justify-center gap-2 transition-shadow hover:shadow-[0_0_30px_hsl(200_80%_55%/0.35)] disabled:opacity-60"
              >
                <Send size={16} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
