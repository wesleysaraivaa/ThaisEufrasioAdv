import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { Sobre } from "@/components/site/Sobre";
import { PrimeiraSemana } from "@/components/site/PrimeiraSemana";
import { Areas } from "@/components/site/Areas";
import { Processo } from "@/components/site/Processo";
import { Diferenciais } from "@/components/site/Diferenciais";
import { Depoimentos } from "@/components/site/Depoimentos";
import { Faq } from "@/components/site/Faq";
import { CtaFinal } from "@/components/site/CtaFinal";
import { Footer } from "@/components/site/Footer";

export function App() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <Sobre />
      <PrimeiraSemana />
      <Areas />
      <Processo />
      <Diferenciais />
      <Depoimentos />
      <Faq />
      <CtaFinal />
      <Footer />
    </main>
  );
}
