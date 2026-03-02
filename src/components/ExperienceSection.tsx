import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Trophy } from "lucide-react";

const timeline = [
  {
    icon: GraduationCap,
    title: "B.E. Computer Engineering & Control",
    place: "Suez Canal University (SCU)",
    period: "2021 — Present",
    detail: "GPA 3.2 — Specializing in backend systems, AI, and control engineering.",
  },
  {
    icon: BookOpen,
    title: "NTI — Machine Learning Training",
    place: "National Telecommunication Institute",
    period: "Training",
    detail: "Completed intensive training in Machine Learning fundamentals and applications.",
  },
  {
    icon: BookOpen,
    title: "HCIA-AI & Deep Learning",
    place: "Huawei ICT Academy",
    period: "Certification",
    detail: "Certified in Artificial Intelligence and Deep Learning by Huawei.",
  },
  {
    icon: BookOpen,
    title: "Cisco CCNA",
    place: "Cisco Networking Academy",
    period: "Certification",
    detail: "Certified in networking fundamentals, routing, and switching.",
  },
  {
    icon: Trophy,
    title: "ECPC 2023 — 73rd Place",
    place: "Egyptian Collegiate Programming Contest",
    period: "2023",
    detail: "Competed nationally and ranked 73rd among top university teams across Egypt.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};

const ExperienceSection = () => {
  return (
    <section className="py-24 px-6" id="experience">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-2">
            // Experience & Education
          </p>
          <h2 className="font-heading text-3xl font-bold mb-12">
            My Journey<span className="text-primary">.</span>
          </h2>
        </motion.div>

        <motion.div
          className="relative"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-6">
            {timeline.map((entry, i) => (
              <motion.div
                key={i}
                variants={item}
                className="relative pl-14"
              >
                {/* Icon dot */}
                <div className="absolute left-0 top-1 w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center z-10">
                  <entry.icon size={16} className="text-primary" />
                </div>

                <div className="p-5 rounded-lg border border-border bg-card transition-shadow hover:glow-border-hover">
                  <div className="flex items-start justify-between gap-4 mb-1 flex-wrap">
                    <h3 className="font-heading text-base font-semibold">
                      {entry.title}
                    </h3>
                    <span className="font-mono text-xs text-primary bg-primary/10 px-2 py-0.5 rounded shrink-0">
                      {entry.period}
                    </span>
                  </div>
                  <p className="font-mono text-xs text-muted-foreground mb-2">
                    {entry.place}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {entry.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
