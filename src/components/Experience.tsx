import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { experiences } from "@/data/project";

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Experiencia <span className="gradient-text">Laboral</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-emerald-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -10 }}
                className="glass-card rounded-3xl overflow-hidden h-full flex flex-col"
              >
                <div className="relative overflow-hidden aspect-video bg-gradient-to-br from-background to-secondary">
                  <motion.img
                    src={exp.image}
                    alt={exp.company}
                    className="w-full h-full object-contain p-8"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                  {exp.featured && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                      Destacado
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-3">
                    {exp.github && (
                      <Button
                        size="sm"
                        variant="secondary"
                        className="gap-2"
                        asChild
                      >
                        <a
                          href={exp.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4" />
                          Código
                        </a>
                      </Button>
                    )}
                    {exp.live && (
                      <Button size="sm" className="gap-2" asChild>
                        <a
                          href={exp.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-xs text-primary font-semibold uppercase tracking-widest mb-1">
                    {exp.title}
                  </p>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {exp.company}
                  </h3>
                  <p className="text-muted-foreground mb-4 flex-1 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
