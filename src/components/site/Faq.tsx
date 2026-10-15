import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FAQ } from "./content";
import { Reveal } from "./Reveal";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative border-t border-border py-28 md:py-40">
      <div className="mx-auto grid max-w-350 grid-cols-1 gap-14 px-6 md:grid-cols-12 md:gap-16 md:px-10">
        {/* Coluna de título */}
        <Reveal className="md:col-span-4">
          <div className="md:sticky md:top-28">
            <div className="eyebrow mb-5 text-gold">Perguntas frequentes</div>
            <h2 className="font-serif text-[clamp(2.25rem,4.2vw,3.75rem)] leading-[1.06] tracking-[-0.01em]">
              Dúvidas sobre seus <em className="italic text-gold">direitos</em>?
            </h2>
            <p className="mt-7 max-w-sm text-base leading-relaxed text-foreground/70">
              As perguntas que mais chegam no WhatsApp — respondidas sem juridiquês, do jeito que eu
              explico no atendimento.
            </p>
            <div className="rule-hand mt-9 w-24" />
          </div>
        </Reveal>

        {/* Fólio de cartões */}
        <div className="md:col-span-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {FAQ.map((item, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={i} delay={(i % 2) * 0.06 + Math.floor(i / 2) * 0.05}>
                  <div className={i % 2 === 1 ? "md:mt-12" : undefined}>
                    <div
                      className={`group h-full border bg-card p-7 transition-all duration-500 md:p-8 ${
                        isOpen
                          ? "border-gold/25 shadow-[0_20px_40px_-18px_color-mix(in_oklab,var(--color-gold)_28%,transparent)]"
                          : "border-border hover:border-gold/25 hover:shadow-[0_18px_36px_-20px_color-mix(in_oklab,var(--color-gold)_22%,transparent)]"
                      }`}
                    >
                      <button
                        onClick={() => setOpen(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        className="w-full text-left"
                      >
                        <span className="block font-serif text-2xl text-gold/50">
                          {String(i + 1).padStart(2, "0")}.
                        </span>
                        <h3
                          className={`mt-4 font-serif text-xl leading-tight tracking-tight transition-colors md:pr-6 ${
                            isOpen ? "text-gold" : "group-hover:text-gold"
                          }`}
                        >
                          {item.q}
                        </h3>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="mt-6 border-t border-gold/15 pt-6 text-[0.95rem] leading-relaxed text-foreground/75">
                              {item.a}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
