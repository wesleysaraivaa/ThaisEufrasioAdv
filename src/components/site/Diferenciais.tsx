import { DIFERENCIAIS } from "./content";
import { Reveal } from "./Reveal";

export function Diferenciais() {
  return (
    <section className="relative border-t border-border py-28 md:py-40">
      <div className="mx-auto max-w-350 px-6 md:px-10">
        <Reveal>
          <div className="eyebrow mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-gold" /> Compromissos
          </div>
          <h2 className="max-w-3xl font-serif text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.05] tracking-[-0.01em]">
            Quatro coisas que você pode <em className="italic text-gold">cobrar</em> de mim.
          </h2>
        </Reveal>

        <div className="mt-24 grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-x-20 md:gap-y-32">
          {DIFERENCIAIS.map((d, i) => (
            <Reveal key={d.n} delay={i * 0.08} className={i % 2 === 1 ? "md:mt-24" : ""}>
              <div className="flex items-start gap-8">
                <div className="font-serif text-[6rem] font-extralight leading-none text-gold/70 md:text-[8rem]">
                  {d.n}
                </div>
                <div className="pt-6 md:pt-10">
                  <h3 className="font-serif text-2xl font-light md:text-3xl">{d.titulo}</h3>
                  <p className="mt-4 max-w-xs text-sm leading-relaxed text-foreground/70 md:text-base">
                    {d.texto}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
