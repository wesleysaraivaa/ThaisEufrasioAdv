import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { PROCESSO } from "./content";
import { Reveal } from "./Reveal";
import { Monograma } from "./Monograma";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Processo() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 85%", "end 40%"],
  });
  const progressWidth = useSpring(scrollYProgress, { stiffness: 60, damping: 24, mass: 0.4 });

  return (
    <section
      ref={sectionRef}
      id="processo"
      className="relative overflow-hidden border-t border-border bg-muted/40 py-28 md:py-40"
    >
      {/* Scroll-linked progress on the section's top hairline */}
      <motion.div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px origin-left bg-gold/70"
        style={reduceMotion ? { scaleX: 1 } : { scaleX: progressWidth }}
      />
      <Monograma className="pointer-events-none absolute -right-16 top-16 hidden h-96 w-[24rem] select-none text-foreground/4.5 lg:block" />
      <div className="relative mx-auto max-w-350 px-6 md:px-10">
        <Reveal>
          <div className="eyebrow mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-gold" /> Processo
          </div>
          <h2 className="max-w-3xl font-serif text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.05] tracking-[-0.01em]">
            Do primeiro documento à <em className="italic text-gold">decisão</em>.
          </h2>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-px bg-border md:grid-cols-4">
          {PROCESSO.map((p, i) => (
            <motion.div
              key={p.n}
              className="bg-background"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-90px" }}
              variants={{
                hidden: { opacity: 0, y: reduceMotion ? 0 : 26 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1.1,
                    ease: EASE,
                    delay: i * 0.14,
                    staggerChildren: 0.12,
                    delayChildren: i * 0.14 + 0.1,
                  },
                },
              }}
            >
              <div className="group flex h-full flex-col justify-between p-8 transition-colors duration-500 hover:bg-muted/60 md:p-10 md:min-h-95">
                <div>
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: reduceMotion ? 0 : 12 },
                      show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: EASE } },
                    }}
                    className="font-serif text-6xl font-light text-gold md:text-7xl"
                  >
                    {p.n}
                  </motion.div>
                  <motion.div
                    variants={{
                      hidden: { scaleX: 0 },
                      show: { scaleX: 1, transition: { duration: 1, ease: EASE } },
                    }}
                    className="mt-8 h-px w-8 origin-left bg-gold transition-all duration-500 group-hover:w-16"
                  />
                  <motion.h3
                    variants={{
                      hidden: { opacity: 0, y: reduceMotion ? 0 : 10 },
                      show: { opacity: 1, y: 0, transition: { duration: 1.1, ease: EASE } },
                    }}
                    className="mt-6 font-serif text-2xl font-light tracking-tight md:text-3xl"
                  >
                    {p.titulo}
                  </motion.h3>
                </div>
                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: reduceMotion ? 0 : 10 },
                    show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: EASE } },
                  }}
                  className="mt-8 text-sm leading-relaxed text-foreground/70 md:text-base"
                >
                  {p.texto}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
