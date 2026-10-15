import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AREAS } from "./content";
import { Reveal } from "./Reveal";
import { Monograma } from "./Monograma";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

export function Areas() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="areas"
      className="relative overflow-hidden border-t border-border bg-background py-28 text-foreground md:py-40"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-gold/40 to-transparent" />
      <Monograma className="pointer-events-none absolute -left-24 bottom-10 hidden h-104 w-104 select-none text-foreground/4.5 lg:block" />

      <div className="mx-auto max-w-350 px-6 md:px-10">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-10 border-b border-border pb-10 md:flex-row md:items-end">
            <div>
              <div className="mb-6 flex items-center gap-4 text-[0.7rem] uppercase tracking-[0.35em] text-foreground/60">
                <span className="h-px w-10 bg-gold" /> Áreas de atuação
              </div>
              <h2 className="font-serif text-[clamp(2.5rem,7vw,6rem)] font-light leading-[0.95] tracking-[-0.02em]">
                Onde eu
                <br />
                realmente <em className="italic text-gold">ajudo</em>.
              </h2>
            </div>
            <span className="text-[0.7rem] uppercase tracking-[0.4em] text-gold">Focus · 03</span>
          </div>
        </Reveal>

        <div className="mt-12 space-y-6 md:mt-16 md:space-y-8">
          {AREAS.map((a, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={a.numero} delay={i * 0.08}>
                <div
                  className={`group relative overflow-hidden border border-border bg-card transition-all duration-700 ${
                    isOpen
                      ? "shadow-[0_24px_60px_-40px_oklch(0.18_0.005_60/0.35)]"
                      : "hover:shadow-[0_18px_50px_-40px_oklch(0.18_0.005_60/0.3)]"
                  }`}
                >
                  {/* hairline dourada lateral que avança no hover */}
                  <span
                    aria-hidden
                    className={`absolute inset-y-0 left-0 w-px origin-top bg-gold transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isOpen ? "scale-y-100" : "scale-y-0 group-hover:scale-y-100"
                    }`}
                  />

                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="grid w-full grid-cols-[auto_1fr_auto] items-center gap-6 px-6 py-10 text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-ring md:gap-12 md:px-12 md:py-14"
                  >
                    <span className="-mt-6 font-serif text-lg italic text-gold md:-mt-10 md:text-2xl">
                      {a.numero}.
                    </span>
                    <span
                      className={`font-serif text-3xl font-light leading-none tracking-tight transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:text-5xl ${
                        isOpen
                          ? "text-gold italic"
                          : "group-hover:translate-x-1 group-hover:text-gold"
                      }`}
                    >
                      {a.nome}
                    </span>
                    <span
                      className={`text-2xl font-light transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:text-3xl ${
                        isOpen
                          ? "rotate-45 text-gold"
                          : "text-foreground/40 group-hover:text-gold/70"
                      }`}
                    >
                      +
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.8, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <motion.div
                          initial="hidden"
                          animate="show"
                          variants={{
                            show: { transition: { staggerChildren: 0.1, delayChildren: 0.12 } },
                          }}
                          className="grid grid-cols-1 gap-10 border-t border-border px-6 pb-12 pt-10 md:grid-cols-12 md:gap-8 md:px-12"
                        >
                          <motion.p
                            variants={fadeUp}
                            className="text-base font-light leading-relaxed text-foreground/70 md:col-span-6 md:text-lg"
                          >
                            {a.resumo}
                          </motion.p>
                          <motion.ul
                            variants={{ show: { transition: { staggerChildren: 0.07 } } }}
                            className="space-y-3 md:col-span-5 md:col-start-8"
                          >
                            {a.itens.map((it) => (
                              <motion.li
                                key={it}
                                variants={fadeUp}
                                className="flex items-center gap-4 text-sm text-foreground/80"
                              >
                                <span className="h-px w-6 bg-gold" />
                                {it}
                              </motion.li>
                            ))}
                          </motion.ul>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
