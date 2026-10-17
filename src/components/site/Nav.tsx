import { useEffect, useState } from "react";
import logoSrc from "@/assets/logo.jpg";
import { WHATSAPP_URL, OAB, CIDADE } from "./content";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#primeira-semana", label: "1ª semana" },
  { href: "#areas", label: "Áreas" },
  { href: "#processo", label: "Processo" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-350 items-center justify-between px-6 py-5 md:px-10">
          <a href="#top" className="flex items-center gap-3">
            <img
              src={logoSrc}
              alt="Thaís Eufrásio Advocacia"
              className="h-9 w-9 rounded-full object-cover"
            />
            <span className="font-serif text-lg tracking-wide">
              Thaís <span className="text-gold">Eufrásio</span>
            </span>
          </a>

          <nav className="hidden items-center gap-10 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative text-sm text-foreground/70 transition hover:text-foreground"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-sm tracking-wide text-foreground transition hover:text-gold md:inline-flex"
          >
            <span className="border-b border-gold pb-1">Agendar conversa</span>
          </a>

          <button
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative z-60 -mr-2 p-2 md:hidden"
          >
            <div className="space-y-1.75">
              <span
                className={`block h-px w-7 bg-foreground transition-transform duration-500 ${
                  open ? "translate-y-1 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-px w-7 bg-foreground transition-transform duration-500 ${
                  open ? "-translate-y-1 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile overlay — fora do <header> para não herdar o backdrop-blur/transparência */}
      <div
        className={`fixed inset-0 z-50 flex flex-col bg-background transition-opacity md:hidden ${
          open
            ? "pointer-events-auto opacity-100 duration-0"
            : "pointer-events-none opacity-0 duration-300"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5">
          <span className="font-serif text-lg tracking-wide">
            Thaís <span className="text-gold">Eufrásio</span>
          </span>
        </div>

        <nav className="flex flex-1 flex-col justify-center px-6">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${120 + i * 70}ms` : "0ms" }}
              className={`group flex items-baseline gap-4 border-b border-border py-5 transition-all duration-500 ${
                open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
              }`}
            >
              <span className="text-[0.6rem] tracking-[0.25em] text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-serif text-[2.4rem] font-light leading-none tracking-[-0.02em]">
                {l.label}
              </span>
            </a>
          ))}
        </nav>

        <div className="px-6 pb-10">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex w-full items-center justify-center bg-foreground px-6 py-4 text-[0.7rem] uppercase tracking-[0.3em] text-background"
          >
            Agendar conversa
          </a>
          <p className="mt-5 text-center text-[0.62rem] uppercase tracking-[0.3em] text-foreground/45">
            {OAB} · {CIDADE}
          </p>
        </div>
      </div>
    </>
  );
}
