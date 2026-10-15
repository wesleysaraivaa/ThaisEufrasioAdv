import { WHATSAPP_URL } from "./content";
import { Reveal } from "./Reveal";
import { Monograma } from "./Monograma";

function WhatsappIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden fill="currentColor" className={className}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.83 9.83 0 0 0 12.04 2Zm0 1.82c2.16 0 4.19.84 5.72 2.37a8.04 8.04 0 0 1 2.37 5.72c0 4.46-3.63 8.09-8.09 8.09a8.1 8.1 0 0 1-4.12-1.13l-.3-.17-3.12.82.84-3.04-.19-.31a8.03 8.03 0 0 1-1.24-4.26c0-4.46 3.63-8.09 8.13-8.09Zm-2.5 4.06c-.2 0-.52.07-.79.37-.27.3-1.03 1.01-1.03 2.45 0 1.45 1.05 2.84 1.2 3.04.15.2 2.05 3.28 5.05 4.47 2.49.98 2.84.78 3.35.73.51-.05 1.66-.68 1.89-1.33.24-.66.24-1.22.17-1.34-.07-.12-.27-.19-.56-.34-.29-.15-1.71-.85-1.98-.94-.27-.1-.46-.15-.66.15-.19.29-.76.95-.93 1.14-.17.2-.34.22-.63.08-.29-.15-1.22-.45-2.32-1.44-.86-.76-1.44-1.71-1.61-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.6-.9-2.18-.19-.47-.39-.48-.56-.48h-.12Z" />
    </svg>
  );
}

export function CtaFinal() {
  return (
    <section className="relative overflow-hidden border-t border-border py-24 md:py-56">
      <Monograma className="pointer-events-none absolute -bottom-24 -right-16 h-128 w-lg select-none text-foreground/5" />

      <div className="relative mx-auto max-w-350 px-6 md:px-10">
        <Reveal>
          <div className="mb-10 flex items-center gap-4 text-[0.7rem] uppercase tracking-[0.35em] text-foreground/60 md:mb-14">
            <span className="h-px w-10 bg-gold" /> Próximo passo
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-serif text-[clamp(2.75rem,9vw,9rem)] font-light leading-[0.92] tracking-[-0.03em]">
            Traga a carta
            <br />
            do <em className="italic text-gold">INSS</em>.
            <br />
            <span className="ml-[6vw] font-normal">Eu leio com você.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-14 flex flex-col items-stretch justify-between gap-10 border-t border-border pt-10 md:mt-20 md:flex-row md:items-end">
            <p className="max-w-md text-base font-light leading-relaxed text-foreground/70 md:text-lg">
              Mande foto da carta de negativa, do extrato do benefício ou só conte o que aconteceu.
              Digo se há caminho e qual é — sem compromisso.
            </p>

            <div className="flex w-full flex-col items-stretch gap-4 md:w-auto md:items-end">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex w-full items-center justify-center gap-4 overflow-hidden border border-gold/40 bg-foreground px-8 py-5 text-[0.7rem] uppercase tracking-[0.28em] text-background outline-none transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-24px_color-mix(in_oklab,var(--color-gold)_70%,transparent)] focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background active:translate-y-0 md:w-auto md:min-h-17 md:justify-start md:gap-6 md:px-12 md:text-xs md:tracking-[0.3em]"
              >
                <span className="absolute inset-0 translate-y-full bg-gold transition-transform duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />
                <WhatsappIcon className="relative z-10 h-[1.15rem] w-[1.15rem] shrink-0" />
                <span className="relative z-10">Falar no WhatsApp</span>
                <span className="relative z-10 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-2">
                  →
                </span>
              </a>
              <span className="text-center text-[0.65rem] uppercase tracking-[0.28em] text-foreground/50 md:text-right md:tracking-[0.3em]">
                Resposta em até 24 horas úteis
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
