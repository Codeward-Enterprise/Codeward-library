"use client";

import { useState } from "react";

export function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="absolute top-3 right-3 text-xs px-2 py-1 rounded transition-all z-10"
      style={{
        color: copied ? "var(--cta)" : "var(--color-navy-400)",
        backgroundColor: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.08)",
        fontFamily: "var(--font-mono)",
      }}
    >
      {copied ? "copiado!" : "copiar"}
    </button>
  );
}
