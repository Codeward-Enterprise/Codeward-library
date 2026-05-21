import { codeToHtml } from "shiki";
import { CopyButton } from "./copy-button";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}

export async function CodeBlock({ code, language = "tsx", filename }: CodeBlockProps) {
  const html = await codeToHtml(code, {
    lang: language,
    theme: "github-dark-dimmed",
  });

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
        <CopyButton code={code} />
        <div
          className="overflow-x-auto text-sm [&_pre]:p-4 [&_pre]:pr-16 [&_pre]:m-0 [&_pre]:leading-relaxed [&_pre]:bg-transparent! [&_code]:bg-transparent!"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: shiki output is safe
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
}
