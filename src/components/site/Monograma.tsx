/**
 * Monograma "TE" com haste de balança — marca d'água autoral,
 * usada onde antes havia os numerais decorativos gigantes.
 */
export function Monograma({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      aria-hidden
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      className={className}
    >
      {/* haste central */}
      <path d="M100 34v132" />
      {/* travessão da balança */}
      <path d="M44 62h112" />
      {/* pratos */}
      <path d="M44 62c0 14 8 24 18 24s18-10 18-24" />
      <path d="M120 62c0 14 8 24 18 24s18-10 18-24" />
      {/* base */}
      <path d="M74 166h52" />
      {/* T */}
      <path d="M70 96h32M86 96v46" />
      {/* E */}
      <path d="M118 96h26M118 96v46M118 119h20M118 142h26" />
      {/* círculo de selo */}
      <circle cx="100" cy="100" r="92" strokeWidth="0.8" />
    </svg>
  );
}
