import { motion } from "framer-motion";
import { Check, Copy, Github, Linkedin, Mail, Send } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "@formspree/react";

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  // Formspree
  const [state, handleSubmit] = useForm("mnnwyvgj");

  // Muestra el toast cuando se envía con éxito SOLO una vez
  useEffect(() => {
    if (state.succeeded) {
      toast({
        title: "¡Mensaje enviado!",
        description: "Gracias por contactarme. Te responderé pronto!",
      });
    }
  }, [state.succeeded, toast]);
  const copyEmail = () => {
    navigator.clipboard.writeText("dcristiann01@gmail.com");
    setCopied(true);
    toast({
      title: "✓ Email copiado",
      description: "dcristiann01@gmail.com",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Hablemos de tu <span className="gradient-text">Proyecto</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-emerald-500 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Info de contacto */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6">
                Información de Contacto
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Estoy disponible para nuevos proyectos y colaboraciones. ¡No
                dudes en contactarme!
              </p>

              <div className="space-y-4 mb-8">
                <button
                  onClick={copyEmail}
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group w-full text-left"
                >
                  <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all flex-shrink-0">
                    {copied ? (
                      <Check className="w-3 h-5" />
                    ) : (
                      <Mail className="w-3 h-5" />
                    )}
                  </div>
                  <div className="flex-1">
                    <span className="block">dcristiann01@gmail.com</span>
                    <span className="text-xs opacity-70">
                      {copied ? "¡Copiado!" : "Click para copiar"}
                    </span>
                  </div>
                </button>
              </div>

              <div className="flex gap-4">
                <motion.a
                  href="https://github.com/cristiand001"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <Github className="w-5 h-5" />
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/dev-cristian-jimenez/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>

            {/* FORMULARIO */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  type="text"
                  name="name"
                  placeholder="Tu Nombre"
                  required
                  disabled={state.submitting}
                  className="glass-card"
                />

                <Input
                  type="email"
                  name="email"
                  placeholder="Tu Email"
                  required
                  disabled={state.submitting}
                  className="glass-card"
                />

                <Textarea
                  name="message"
                  placeholder="Tu Mensaje"
                  required
                  disabled={state.submitting}
                  rows={6}
                  className="glass-card resize-none"
                />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full gap-2 group"
                  disabled={state.submitting}
                >
                  {state.submitting ? (
                    <>Enviando...</>
                  ) : state.succeeded ? (
                    <>✓ Mensaje Enviado!</>
                  ) : (
                    <>
                      <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      Enviar Mensaje
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center mt-32 pt-8 border-t border-border/50"
      >
        <p className="text-muted-foreground">
          © 2025 Portfolio. Diseñado y desarrollado con ❤️
        </p>
      </motion.div>
    </section>
  );
};
