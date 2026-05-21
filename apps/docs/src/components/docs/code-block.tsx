"use client";

import { useState } from "react";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}

export function CodeBlock({ code, language = "tsx", filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div
      className="rounded-xl overflow-hidden border"
      style={{ borderColor: "var(--color-navy-800)" }}
    >
      {filename && (
        <div
          className="flex items-center justify-between px-4 py-2 border-b text-xs"
          style={{
            backgroundColor: "var(--color-navy-800)",
            borderColor: "var(--color-navy-700)",
            color: "var(--color-navy-300)",
            fontFamily: "var(--font-mono)",
          }}
        >
          <span>{filename}</span>
          <span
            className="text-[10px] uppercase tracking-wider"
            style={{ color: "var(--color-navy-500)" }}
          >
            {language}
          </span>
        </div>
      )}
      <div className="relative" style={{ backgroundColor: "#0D1929" }}>
        <button
          type="button"
          onClick={copy}
          className="absolute top-3 right-3 text-xs px-2 py-1 rounded transition-all"
          style={{
            color: copied ? "var(--cta)" : "var(--color-navy-400)",
            backgroundColor: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.08)",
            fontFamily: "var(--font-mono)",
          }}
        >
          {copied ? "copiado!" : "copiar"}
        </button>
        <pre
          className="overflow-x-auto p-4 pr-16 text-sm leading-relaxed"
          style={{ fontFamily: "var(--font-mono)", color: "#E2E8F0", margin: 0 }}
        >
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
