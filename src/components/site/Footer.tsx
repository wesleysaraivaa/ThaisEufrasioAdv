import logoSrc from "@/assets/logo.jpg";
import { CIDADE, INSTAGRAM_URL, OAB, WHATSAPP_URL } from "./content";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-16">
      <div className="mx-auto grid max-w-350 grid-cols-1 gap-10 px-6 md:grid-cols-4 md:px-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logoSrc} alt="" className="h-10 w-10 rounded-full object-cover" />
            <div className="font-serif text-xl">
              Thaís <span className="text-gold">Eufrásio</span> · Advocacia
            </div>
          </div>
          <p className="mt-6 max-w-sm text-sm text-muted-foreground">
            Escritório dedicado ao Direito Previdenciário, Consumidor e Criminal, com atendimento
            presencial e online.
          </p>
        </div>

        <div>
          <div className="eyebrow mb-4">Contato</div>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold"
              >
                Instagram
              </a>
            </li>
            <li className="text-muted-foreground">{CIDADE}</li>
          </ul>
        </div>

        <div>
          <div className="eyebrow mb-4">Institucional</div>
          <ul className="space-y-2 text-sm">
            <li className="text-muted-foreground">{OAB}</li>
            <li className="text-muted-foreground">Atendimento com hora marcada</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-350 flex-col items-start justify-between gap-4 border-t border-border px-6 pt-8 text-xs text-muted-foreground md:flex-row md:items-center md:px-10">
        <span>
          © {new Date().getFullYear()} Thaís Eufrásio Advocacia. Todos os direitos reservados.
        </span>
        <span className="eyebrow">Advocacia · Ubajara</span>
      </div>
    </footer>
  );
}
