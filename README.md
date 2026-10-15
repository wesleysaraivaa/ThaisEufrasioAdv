# Thaís Eufrásio Advocacia

Landing page institucional do escritório. Uma página única, sem backend, sem roteamento.

**Stack:** React 19 · Vite 8 · Tailwind CSS v4 · Framer Motion · TypeScript

## Estrutura do projeto

```
src/
├── App.tsx                   # raiz da aplicação — lista as seções em ordem
├── main.tsx                  # entry point React
├── styles.css                # tema, cores, fontes e utilitários globais
├── assets/
│   ├── logo.jpg              # ⚠ placeholder — substitua pela foto real (ver abaixo)
│   └── thais-hero-clean.jpg  # foto de abertura do Hero
└── components/site/
    ├── content.ts            # todos os textos e dados do site
    ├── Nav.tsx               # cabeçalho fixo com menu mobile
    ├── Hero.tsx              # seção de abertura com foto e headline
    ├── Marquee.tsx           # letreiro contínuo com as áreas de atuação
    ├── Sobre.tsx             # apresentação e timeline
    ├── PrimeiraSemana.tsx    # o que acontece nos primeiros 7 dias
    ├── Areas.tsx             # áreas de atuação em acordeão
    ├── Processo.tsx          # etapas do processo em 4 colunas
    ├── Diferenciais.tsx      # quatro compromissos numerados
    ├── Depoimentos.tsx       # depoimentos em destaque + marquee
    ├── Faq.tsx               # perguntas frequentes em grade de cartões
    ├── CtaFinal.tsx          # chamada para ação final com link do WhatsApp
    ├── Footer.tsx            # rodapé com contato e dados institucionais
    ├── Reveal.tsx            # animação de entrada ao rolar a página
    └── Monograma.tsx         # marca d'água SVG "TE" usada como decoração
```