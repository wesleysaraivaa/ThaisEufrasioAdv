import { PRIMEIRA_SEMANA, WHATSAPP_URL } from "./content";
import { Reveal } from "./Reveal";
import { Monograma } from "./Monograma";

export function PrimeiraSemana() {
  return (
    <section
      id="primeira-semana"
      className="relative overflow-hidden border-t border-border bg-muted/30 py-24 md:py-36"
    >
      <Monograma className="pointer-events-none absolute -right-16 top-10 hidden h-104 w-104 select-none text-foreground/5 md:block" />

      <div className="relative mx-auto max-w-350 px-6 md:px-10">
        <Reveal>
          <div className="mb-6 flex items-center gap-4 text-[0.7rem] uppercase tracking-[0.35em] text-foreground/60">
            <span className="h-px w-10 bg-gold" /> Sete primeiros dias
          </div>
          <h2 className="max-w-3xl font-serif text-[clamp(2rem,4.4vw,3.6rem)] leading-[1.04] tracking-[-0.02em]">
            O que você recebe na <em className="italic text-gold">primeira semana</em>.
          </h2>
          <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-foreground/70">
            Não é promessa de resultado. É o que acontece, em ordem, desde a hora em que você me
            manda a primeira mensagem.
          </p>
        </Reveal>

        <ol className="mt-16 md:mt-20">
          {PRIMEIRA_SEMANA.map((item, i) => (
            <Reveal key={item.dia} delay={i * 0.06} as="li" className="block">
              <div className="grid grid-cols-1 gap-4 border-t border-border py-8 md:grid-cols-12 md:gap-10 md:py-10">
                <div className="md:col-span-2">
                  <span className="text-[0.65rem] uppercase tracking-[0.32em] text-gold">
                    {item.dia}
                  </span>
                </div>
                <h3 className="font-serif text-2xl leading-tight tracking-[-0.01em] md:col-span-4 md:text-[1.7rem]">
                  {item.titulo}
                </h3>
                <p className="text-[0.95rem] font-light leading-relaxed text-foreground/75 md:col-span-6">
                  {item.texto}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={0.1}>
          <div className="flex flex-col gap-5 border-t border-border pt-8 md:flex-row md:items-center md:justify-between">
            <p className="max-w-lg text-sm font-light leading-relaxed text-foreground/65">
              Se em algum desses dias eu concluir que não há caminho, eu digo — e não cobro pela
              análise.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 self-start"
            >
              <span className="h-px w-8 bg-gold transition-all duration-500 group-hover:w-16" />
              <span className="text-[0.68rem] font-medium uppercase tracking-[0.35em] text-gold">
                Começar o dia 1
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
