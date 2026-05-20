import type { SVGProps } from "react";
import { CodewardMark } from "./CodewardMark";

export interface CodewardIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  /** Show full wordmark (mark + "Codeward" text) or mark only */
  variant?: "mark" | "wordmark";
}

export function CodewardIcon({ size = 32, variant = "mark", ...props }: CodewardIconProps) {
  if (variant === "mark") {
    return <CodewardMark size={size} {...props} />;
  }

  const height = size;
  const width = Math.round(size * 3.5);

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      aria-label="Codeward"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <CodewardMark size={size} />
      <text
        x={size + 8}
        y={size * 0.68}
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight={500}
        fontSize={size * 0.5}
        fill="currentColor"
        dominantBaseline="middle"
      >
        Codeward
      </text>
    </svg>
  );
}
