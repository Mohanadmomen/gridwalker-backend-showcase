import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AI-Driven Dermatological Diagnostic System",
    tag: "AI + Backend",
    description:
      "Engineered the backend infrastructure for an AI-powered diagnostic platform. Integrated a CNN model for classifying skin lesions with high accuracy, connected to a robust REST API layer for real-time dermatological analysis and research-grade data pipelines.",
    techs: ["ASP.NET Core", "REST API", "CNN / Deep Learning", "SQL Server", "Python"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=450&fit=crop",
  },
  {
    title: "QT-Based Numerical Analysis Suite",
    tag: "C++ + Qt",
    description:
      "Built a high-performance numerical analysis toolkit with optimized algorithms for Newton-Raphson root finding and Gaussian Elimination. Focused on computational efficiency, precision handling, and clean architecture for mathematical operations.",
    techs: ["C++", "Qt Framework", "Newton-Raphson", "Gaussian Elimination"],
    image: "./QT_UI.png",
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
      <div className="max-w-4xl mx-auto">
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
          className="space-y-8"
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
              className="group relative rounded-lg border border-border bg-card overflow-hidden transition-shadow hover:glow-border-hover cursor-default"
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                <span className="absolute top-4 left-4 font-mono text-xs text-primary bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full border border-primary/20">
                  {project.tag}
                </span>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-heading text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ExternalLink
                    size={16}
                    className="text-muted-foreground group-hover:text-primary transition-colors mt-1 shrink-0 ml-4"
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
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
