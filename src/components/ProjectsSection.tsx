import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AI-Driven Dermatological Diagnostic System",
    tag: "AI + Backend",
    description:
      "Engineered the backend infrastructure for an AI-powered diagnostic platform. Integrated machine learning models with a robust API layer, enabling real-time dermatological analysis and research-grade data pipelines.",
    techs: ["ASP.NET Core", "REST API", "AI Integration", "SQL Server"],
  },
  {
    title: "QT-Based Numerical Analysis Suite",
    tag: "Algorithms",
    description:
      "Built a high-performance numerical analysis toolkit featuring complex algorithmic implementations. Focused on computational efficiency, precision handling, and clean architecture for mathematical operations.",
    techs: ["C++", "Qt Framework", "Numerical Methods", "Performance Optimization"],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const ProjectsSection = () => {
  return (
    <section className="py-24 px-6" id="projects">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-2">
            // Featured Projects
          </p>
          <h2 className="font-heading text-3xl font-bold mb-12">
            What I've built<span className="text-primary">.</span>
          </h2>
        </motion.div>

        <motion.div
          className="space-y-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={item}
              whileHover={{ scale: 1.02, transition: { duration: 0.25 } }}
              className="group relative p-6 rounded-lg border border-border bg-card transition-shadow hover:glow-border-hover cursor-default"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <span className="inline-block font-mono text-xs text-primary bg-primary/10 px-2 py-0.5 rounded mb-2">
                    {project.tag}
                  </span>
                  <h3 className="font-heading text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
                <ExternalLink
                  size={16}
                  className="text-muted-foreground group-hover:text-primary transition-colors mt-1 shrink-0"
                />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.techs.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs text-muted-foreground border border-border rounded px-2 py-0.5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
