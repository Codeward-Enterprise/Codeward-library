import { type HTMLAttributes, type ReactNode, forwardRef, useState } from "react";
import { type VariantProps, cva } from "class-variance-authority";

const avatarVariants = cva(
  [
    "relative inline-flex shrink-0 items-center justify-center overflow-hidden",
    "rounded-full font-medium select-none",
    "transition-all duration-150",
  ],
  {
    variants: {
      size: {
        xs: "size-6 text-[10px]",
        sm: "size-8 text-xs",
        md: "size-10 text-sm",
        lg: "size-12 text-base",
        xl: "size-16 text-lg",
      },
    },
    defaultVariants: { size: "md" },
  },
);

// Deterministic brand-color palette for initials fallback
const AVATAR_COLORS: Array<[string, string]> = [
  ["#0A2540", "#FFFFFF"], // navy-700 / white
  ["#1C3D62", "#FFFFFF"], // navy-600 / white
  ["#2D5685", "#FFFFFF"], // navy-500 / white
  ["#00A593", "#0A2540"], // mint-600 / navy
  ["#005048", "#00D4B8"], // mint-800 / mint
  ["#374151", "#F6F9FC"], // neutral-700 / light
];

function pickColor(seed: string): [string, string] {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = seed.charCodeAt(i) + ((hash << 5) - hash);
  }
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length] as [string, string];
}

function getInitials(alt: string, fallback?: string): string {
  if (fallback) return fallback.slice(0, 2).toUpperCase();
  return alt
    .trim()
    .split(/\s+/)
    .map((w) => w[0] ?? "")
    .join("")
    .slice(0, 2)
    .toUpperCase() || "?";
}

export interface AvatarProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof avatarVariants> {
  src?: string;
  alt?: string;
  fallback?: string;
}

export const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(
  ({ className, size, src, alt = "", fallback, children, ...props }, ref) => {
    const [imgError, setImgError] = useState(false);
    const showImage = src && !imgError;
    const initials = getInitials(alt, fallback);
    const seed = fallback ?? alt;
    const [bg, fg] = pickColor(seed);

    return (
      <span
        ref={ref}
        className={avatarVariants({ size, className })}
        style={showImage ? undefined : { background: bg, color: fg, fontFamily: "var(--font-sans)" }}
        {...props}
      >
        {showImage ? (
          <img
            src={src}
            alt={alt}
            className="size-full object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          initials
        )}
      </span>
    );
  },
);
Avatar.displayName = "Avatar";

// ── AvatarGroup ───────────────────────────────────────────────────────────────
export interface AvatarGroupProps extends HTMLAttributes<HTMLDivElement> {
  max?: number;
  size?: VariantProps<typeof avatarVariants>["size"];
  children: ReactNode;
}

export const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ className, children, max, size = "md", ...props }, ref) => {
    const items = Array.isArray(children) ? children : [children];
    const visible = max ? items.slice(0, max) : items;
    const overflow = max ? items.length - max : 0;

    return (
      <div ref={ref} className={["flex items-center", className].filter(Boolean).join(" ")} {...props}>
        <div className="flex items-center -space-x-2">
          {visible.map((child, i) => (
            <span key={i} className="ring-2 ring-white rounded-full inline-flex">
              {child}
            </span>
          ))}
          {overflow > 0 && (
            <span
              className={[avatarVariants({ size }), "ring-2 ring-white"].join(" ")}
              style={{ background: "#2A2A2E", color: "#98A7B5", fontFamily: "var(--font-sans)" }}
            >
              +{overflow}
            </span>
          )}
        </div>
      </div>
    );
  },
);
AvatarGroup.displayName = "AvatarGroup";

export { avatarVariants };
