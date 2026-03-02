import { motion } from "framer-motion";

const techs = [
  { name: "C#", icon: "⚙️" },
  { name: "ASP.NET Core", icon: "🔷" },
  { name: "SQL Server", icon: "🗄️" },
  { name: "RESTful APIs", icon: "🔗" },
  { name: "JWT Auth", icon: "🔐" },
  { name: "Entity Framework", icon: "📦" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const TechStack = () => {
  return (
    <section className="py-24 px-6" id="stack">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-2">
            // Tech Stack
          </p>
          <h2 className="font-heading text-3xl font-bold mb-12">
            Tools I work with<span className="text-primary">.</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {techs.map((tech) => (
            <motion.div
              key={tech.name}
              variants={item}
              className="group flex items-center gap-3 p-4 rounded-lg border border-border bg-card transition-all hover:glow-border-hover cursor-default"
            >
              <span className="text-xl">{tech.icon}</span>
              <span className="font-mono text-sm text-secondary-foreground group-hover:text-foreground transition-colors">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
