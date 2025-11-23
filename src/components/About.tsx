import { motion } from "framer-motion";
import {
  Boxes,
  Code2,
  Database,
  Orbit,
  Rocket,
  Route,
  Zap,
} from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import InteractiveImage from "./InteractiveImage.";

const skills = [
  { name: "JavaScript y TypeScript", level: 90, icon: Code2 },
  { name: "Node.js & APIs", level: 88, icon: Rocket },
  { name: "React & Tailwind", level: 95, icon: Orbit },
  { name: "NestJS & Next.js", level: 85, icon: Route },
  { name: "SQL & NoSQL", level: 89, icon: Database },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Sobre <span className="gradient-text">Mí</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-emerald-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-[1.5fr_1fr] gap-12 items-center max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card p-3 rounded-3xl">
              <InteractiveImage src="/images/workspace.jpg" alt="Mi setup" />
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Soy un desarrollador apasionado por crear experiencias web
              excepcionales. Con más de 2 años de experiencia, me especializo en
              transformar ideas complejas en interfaces intuitivas y atractivas.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Mi enfoque combina código limpio, diseño moderno y las últimas
              tecnologías para entregar productos que no solo funcionan
              perfectamente, sino que también deleitan a los usuarios.
            </p>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <skill.icon className="w-5 h-5 text-primary" />
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-muted-foreground">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{
                        duration: 1,
                        delay: 0.5 + index * 0.1,
                        ease: "easeOut",
                      }}
                      className="h-full bg-gradient-to-r from-primary to-emerald-500"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
