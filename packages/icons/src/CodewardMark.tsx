import type { SVGProps } from "react";

export interface CodewardMarkProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

/**
 * Codeward brand mark — layered shield with < > brackets.
 * The shield has three depth layers to convey architecture/structure.
 */
export function CodewardMark({ size = 32, className, ...props }: CodewardMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      role="img"
      aria-label="Codeward"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Layer 3 — back shadow (translucent navy) */}
      <path
        d="M16 2L4 7v9c0 6.627 5.373 12 12 12s12-5.373 12-12V7L16 2z"
        fill="currentColor"
        opacity="0.15"
        transform="translate(1.5 1.5)"
      />
      {/* Layer 2 — mid layer */}
      <path
        d="M16 2L4 7v9c0 6.627 5.373 12 12 12s12-5.373 12-12V7L16 2z"
        fill="currentColor"
        opacity="0.4"
        transform="translate(0.75 0.75)"
      />
      {/* Layer 1 — front shield */}
      <path d="M16 2L4 7v9c0 6.627 5.373 12 12 12s12-5.373 12-12V7L16 2z" fill="currentColor" />
      {/* Brackets < > */}
      <path
        d="M13 12l-3 4 3 4M19 12l3 4-3 4"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
