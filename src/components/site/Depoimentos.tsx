import { DEPOIMENTOS } from "./content";
import { Reveal } from "./Reveal";
import { Monograma } from "./Monograma";

export function Depoimentos() {
  const destaque = DEPOIMENTOS.find((d) => "destaque" in d && d.destaque) ?? DEPOIMENTOS[0];
  const outros = DEPOIMENTOS.filter((d) => d !== destaque);
  const track = [...outros, ...outros, ...outros];

  return (
    <section className="relative overflow-hidden border-t border-border bg-muted/40 py-24 md:py-40">
      <div className="mx-auto max-w-350 px-6 md:px-10">
        <Reveal>
          <div className="eyebrow mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-gold" /> Quem já passou por isso
          </div>
          <h2 className="max-w-2xl font-serif text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-[-0.02em]">
            Histórias que <em className="italic text-gold">continuam</em>.
          </h2>
        </Reveal>

        {/* Depoimento longo em destaque */}
        <Reveal delay={0.1}>
          <figure className="relative mt-14 border-t border-border pt-10 md:mt-20 md:grid md:grid-cols-12 md:gap-12">
            <Monograma className="pointer-events-none absolute -right-10 -top-6 hidden h-56 w-56 text-foreground/5 lg:block" />
            <figcaption className="md:col-span-3">
              <div className="font-serif text-3xl leading-none">{destaque.nome}</div>
              <div className="mt-3 text-[0.65rem] uppercase tracking-[0.3em] text-gold">
                {"cidade" in destaque ? destaque.cidade : ""}
              </div>
              <div className="mt-2 text-[0.65rem] uppercase tracking-[0.24em] text-foreground/50">
                {destaque.area}
              </div>
            </figcaption>
            <blockquote className="mt-6 font-serif text-[1.4rem] leading-[1.32] tracking-[-0.01em] text-foreground md:col-span-9 md:mt-0 md:text-[2rem] md:leading-[1.28]">
              “{destaque.texto}”
            </blockquote>
          </figure>
        </Reveal>
      </div>

      {/* Mobile — coluna editorial */}
      <div className="mx-auto mt-14 max-w-350 px-6 md:hidden">
        <ul className="relative border-l border-border pl-6">
          {outros.map((d, i) => (
            <Reveal
              key={d.nome}
              delay={i * 0.06}
              as="li"
              className="relative block pb-10 last:pb-0"
            >
              <span
                aria-hidden
                className="absolute -left-6.75 top-2 h-1.5 w-1.5 rounded-full bg-gold"
              />
              <div className="text-[0.58rem] uppercase tracking-[0.28em] text-foreground/45">
                {"cidade" in d ? `${d.cidade} · ` : ""}
                {d.area}
              </div>
              <blockquote className="mt-3 font-serif text-[1.3rem] leading-[1.32] tracking-tight text-foreground">
                {d.texto}
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                <span className="h-px w-6 bg-gold/70" />
                <span className="text-[0.7rem] uppercase tracking-[0.18em] text-foreground/65">
                  {d.nome}
                </span>
              </figcaption>
            </Reveal>
          ))}
        </ul>
      </div>

      {/* Desktop — marquee contínuo */}
      <div className="group relative mt-16 hidden md:block">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-muted/40 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-muted/40 to-transparent" />

        <div className="marquee-track flex items-stretch gap-6 pb-4 pl-6 md:pl-[max(2.5rem,calc((100%-1400px)/2+2.5rem))]">
          {track.map((d, i) => (
            <figure
              key={i}
              className="flex h-full w-105 shrink-0 flex-col justify-between border border-border bg-background p-10"
            >
              <blockquote className="font-serif text-[1.6rem] leading-snug tracking-[-0.01em]">
                “{d.texto}”
              </blockquote>
              <figcaption className="mt-10 border-t border-border pt-6">
                <span className="font-serif text-xl">{d.nome}</span>
                <div className="mt-2 text-[0.62rem] uppercase tracking-[0.26em] text-gold">
                  {"cidade" in d ? `${d.cidade} · ` : ""}
                  {d.area}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
