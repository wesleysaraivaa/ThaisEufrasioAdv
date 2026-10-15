// Letreiro infinito.
// A lista é duplicada e a animação desloca -50%: como cada item já embute o
// espaçamento à direita (pr-14), metade da largura = exatamente uma lista,
// então o loop é perfeito, sem salto.
//
// A largura de uma lista é ~2.500px, então as durações abaixo equivalem a:
// - Mobile: ~55px/s (movimento claramente legível e confortável)
// - Desktop: ~12px/s (ritmo sutil de deriva, igual ao original)
const items = [
  "Salário-maternidade rural",
  "BPC / LOAS negado",
  "Aposentadoria por idade",
  "Revisão de benefício",
  "Consignado não autorizado",
  "Descontos no benefício",
  "Ubajara · Ibiapaba",
];

export const MARQUEE_MOBILE_S = 45;
export const MARQUEE_DESKTOP_S = 208;

export function Marquee() {
  return (
    <section aria-hidden className="overflow-hidden border-y border-border bg-background py-5">
      <style>{`
        .marquee-track { animation: marquee ${MARQUEE_MOBILE_S}s linear infinite; }
        @media (min-width: 768px) {
          .marquee-track { animation-duration: ${MARQUEE_DESKTOP_S}s; }
        }
        @keyframes marquee { to { transform: translateX(-50%); } }
      `}</style>
      {/* w-max é essencial: sem ele o elemento tem a largura da tela e o -50% anda só alguns pixels */}
      <div className="marquee-track flex w-max whitespace-nowrap motion-reduce:animate-none">
        {[...items, ...items].map((it, i) => (
          <span
            key={i}
            className="flex items-center gap-14 pr-14 text-[0.7rem] uppercase tracking-[0.4em] text-foreground/50"
          >
            {it}
            <span className="text-gold">·</span>
          </span>
        ))}
      </div>
    </section>
  );
}
