import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import heroImage from "@/assets/thais-hero-clean.jpg";
import { WHATSAPP_URL, CIDADE, OAB, AREAS } from "./content";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const stripRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: stripRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", reduceMotion ? "0%" : "7%"]);

  return (
    <section id="top" className="relative w-full overflow-hidden bg-background">
      {/* Left metadata rail */}
      <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-14 border-r border-border lg:block">
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2">
          <span className="block rotate-180 whitespace-nowrap text-[0.62rem] uppercase tracking-[0.4em] text-foreground/45 [writing-mode:vertical-rl]">
            {OAB} · {CIDADE}
          </span>
        </div>
        <div className="absolute top-28 left-1/2 h-24 w-px -translate-x-1/2 bg-gold/50" />
      </div>

      <div className="mx-auto flex min-h-screen max-w-350 flex-col justify-center px-6 pt-28 md:px-10 md:pt-32 lg:pl-24">
        <div className="relative grid grid-cols-12 items-end gap-y-10">
          {/* Headline — spans nearly the full width, overlapping the photo strip */}
          <div className="relative z-20 col-span-12 lg:col-span-9">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE }}
              className="mb-10 flex items-baseline gap-5"
            >
              <span className="font-serif text-sm italic text-gold">Est. Ubajara</span>
              <span className="h-px flex-1 max-w-28 bg-border" />
              <span className="text-[0.62rem] uppercase tracking-[0.38em] text-foreground/45">
                Benefícios do INSS
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.08, ease: EASE }}
              className="font-serif font-light text-foreground"
            >
              {/* Mobile: três linhas equilibradas, sem recuos exagerados */}
              <span className="block text-[clamp(3.4rem,15vw,4.6rem)] leading-[0.92] tracking-[-0.03em] sm:hidden">
                <span className="block">
                  Defender <span className="italic text-gold">é</span>
                </span>
                <span className="block">cuidar</span>
                <span className="block pl-[10%]">de gente.</span>
              </span>

              {/* Desktop: composição editorial original */}
              <span className="hidden text-[clamp(3rem,13vw,11rem)] leading-[0.86] tracking-[-0.045em] sm:block">
                <span className="block">Defender</span>
                <span className="block pl-[8%] italic text-gold">é</span>
                <span className="block">cuidar de</span>
                <span className="block pl-[18%] md:pl-[24%]">gente.</span>
              </span>
            </motion.h1>
          </div>

          {/* Photo strip — narrow vertical band, sharp, anchored right */}
          <motion.div
            ref={stripRef}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.2, ease: EASE }}
            className="relative z-10 col-span-12 h-[52vh] overflow-hidden sm:h-[62vh] lg:absolute lg:bottom-0 lg:right-0 lg:col-span-4 lg:h-[70vh] lg:w-[26%]"
          >
            <motion.img
              style={{ y }}
              src={heroImage}
              alt="Thaís Eufrásio, advogada, em frente ao fórum"
              className="absolute inset-x-0 top-[-17%] h-[120%] w-full object-cover object-[52%_50%] will-change-transform"
            />
            <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-background via-background/75 to-transparent" />
            <div className="absolute inset-y-0 left-0 w-px bg-gold/45" />
          </motion.div>
        </div>

        {/* Footer masthead of the hero */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: EASE }}
          className="relative z-20 mt-12 border-t border-border pt-7 pb-10 md:mt-16"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <p className="max-w-sm text-sm font-light leading-relaxed text-foreground/75">
              Salário-maternidade, BPC/LOAS, aposentadoria rural e descontos indevidos no benefício
              — atendimento em Ubajara e comarcas da Ibiapaba.
            </p>

            <ul className="flex flex-wrap gap-x-10 gap-y-4 lg:pr-[30%]">
              {AREAS.map((a) => (
                <li key={a.numero} className="flex items-baseline gap-2">
                  <span className="text-[0.6rem] tracking-[0.2em] text-gold">{a.numero}</span>
                  <span className="font-serif text-lg text-foreground/85">{a.curto}</span>
                </li>
              ))}
            </ul>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 self-start"
            >
              <span className="h-px w-8 bg-gold transition-all duration-500 group-hover:w-16" />
              <span className="text-[0.68rem] font-medium uppercase tracking-[0.35em] text-gold">
                Agendar conversa
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
