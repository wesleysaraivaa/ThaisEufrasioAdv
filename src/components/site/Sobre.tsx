import { OAB, TIMELINE } from "./content";
import { Reveal } from "./Reveal";
import { Monograma } from "./Monograma";

export function Sobre() {
  return (
    <section id="sobre" className="relative overflow-hidden border-t border-border py-28 md:py-40">
      <Monograma className="pointer-events-none absolute -right-20 top-8 hidden h-120 w-120 select-none text-foreground/5 md:block" />

      <div className="relative mx-auto grid max-w-350 grid-cols-1 gap-16 px-6 md:grid-cols-12 md:gap-12 md:px-10">
        {/* Left: eyebrow + headline + signature quote */}
        <div className="md:col-span-5 md:pr-8">
          <Reveal>
            <div className="mb-10 flex items-center gap-4 text-[0.7rem] uppercase tracking-[0.35em] text-foreground/60">
              <span className="h-px w-10 bg-gold" /> Sobre — a fundadora
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-serif text-[clamp(2.4rem,5.2vw,4.8rem)] font-light leading-[1.02] tracking-[-0.02em]">
              Quem depende
              <br />
              do INSS não pode
              <br />
              esperar <em className="italic text-gold">sozinho</em>.
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-14 border-l border-gold/40 pl-6">
              <p className="font-serif text-xl italic leading-relaxed text-foreground/80 md:text-2xl">
                “Muita gente aqui na região desiste depois da primeira carta de negativa do INSS.
                Quase sempre o direito existe — falta alguém para ler a carta e reunir a prova.”
              </p>
              <div className="mt-6 flex items-center gap-4 text-[0.7rem] uppercase tracking-[0.3em] text-foreground/60">
                <span className="font-serif text-2xl italic text-gold">—</span>
                Thaís Eufrásio, advogada
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right: twin-column text + timeline */}
        <div className="md:col-span-7 md:pl-8">
          <Reveal delay={0.1}>
            <div className="grid grid-cols-1 gap-10 border-t border-border pt-10 md:grid-cols-2">
              <p className="text-base font-light leading-relaxed text-foreground/80">
                Sou Thaís Eufrásio, advogada inscrita na OAB/CE, e atendo em Ubajara e nas comarcas
                vizinhas da Ibiapaba. Meu trabalho se concentra em benefícios do INSS:
                salário-maternidade da trabalhadora rural, BPC/LOAS, aposentadoria por idade e
                revisões.
              </p>
              <p className="text-base font-light leading-relaxed text-foreground/80">
                Também cuido de descontos que aparecem no benefício sem autorização — consignados e
                mensalidades de associação. Sou recém-formada e trato isso com honestidade: não
                prometo prazo nem resultado, explico o que a lei permite e o que os documentos
                sustentam.
              </p>
            </div>
          </Reveal>

          <div className="mt-16">
            {TIMELINE.map((t, i) => (
              <Reveal key={t.ano} delay={i * 0.05}>
                <div className="group grid grid-cols-[110px_1fr] items-baseline gap-8 border-t border-border py-5 transition hover:bg-foreground/1.5">
                  <div className="text-[0.7rem] uppercase tracking-[0.3em] text-gold">{t.ano}</div>
                  <div className="font-serif text-lg font-light text-foreground/90 md:text-xl">
                    {t.texto}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-12 flex items-center justify-between border-t border-border pt-6 text-[0.65rem] uppercase tracking-[0.35em] text-foreground/50">
              <span>Ubajara · Ceará</span>
              <span className="text-gold">{OAB}</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
