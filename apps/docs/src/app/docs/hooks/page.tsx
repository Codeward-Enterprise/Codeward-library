import { CodeBlock } from "@/components/docs/code-block";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Hooks" };

export default function HooksPage() {
  return (
    <div className="space-y-12" style={{ fontFamily: "var(--font-sans)" }}>
      <div className="space-y-2">
        <h1 className="text-4xl font-medium tracking-tight" style={{ color: "var(--foreground)" }}>
          Hooks
        </h1>
        <p className="text-lg" style={{ color: "var(--muted-foreground)" }}>
          React hooks do pacote{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>@codeforward/hooks</code>. Todos são
          client-side — use em componentes marcados com{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>"use client"</code>.
        </p>
      </div>

      <hr style={{ borderColor: "var(--border)" }} />

      {[
        {
          name: "useDebounce",
          signature: "useDebounce<T>(value: T, delay: number): T",
          desc: "Atrasa a atualização de um valor pelo tempo especificado. Ideal para campos de busca que disparam requisições — evita chamadas desnecessárias a cada keystroke.",
          code: `import { useDebounce } from "@codeforward/hooks";

function SearchInput() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    if (debouncedQuery) fetchResults(debouncedQuery);
  }, [debouncedQuery]);

  return <Input value={query} onChange={(e) => setQuery(e.target.value)} />;
}`,
        },
        {
          name: "useLocalStorage",
          signature: "useLocalStorage<T>(key: string, initialValue: T): [T, setter]",
          desc: "Estado persistido no localStorage. API idêntica ao useState. SSR-safe — não executa no servidor.",
          code: `import { useLocalStorage } from "@codeforward/hooks";

function ThemeToggle() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  return (
    <Switch
      label="Modo escuro"
      checked={theme === "dark"}
      onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
    />
  );
}`,
        },
        {
          name: "useMediaQuery",
          signature: "useMediaQuery(query: string): boolean",
          desc: "Retorna true quando a media query CSS é satisfeita. Ideal para renderização condicional responsiva sem depender de CSS.",
          code: `import { useMediaQuery } from "@codeforward/hooks";

function Layout({ children }) {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");

  return isMobile ? <MobileLayout>{children}</MobileLayout> : <DesktopLayout>{children}</DesktopLayout>;
}`,
        },
        {
          name: "useClickOutside",
          signature: "useClickOutside<T extends HTMLElement>(ref, handler): void",
          desc: "Executa o handler quando o usuário clica fora do elemento referenciado. Funciona com mouse e touch.",
          code: `import { useClickOutside } from "@codeforward/hooks";

function Dropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref, () => setOpen(false));

  return (
    <div ref={ref}>
      <button onClick={() => setOpen(true)}>Abrir</button>
      {open && <ul>...</ul>}
    </div>
  );
}`,
        },
      ].map(({ name, signature, desc, code }) => (
        <section key={name} className="space-y-4">
          <div className="space-y-1">
            <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
              {name}
            </h2>
            <code
              className="text-sm block px-3 py-2 rounded-lg"
              style={{
                backgroundColor: "var(--color-navy-50)",
                color: "var(--primary)",
                fontFamily: "var(--font-mono)",
              }}
            >
              {signature}
            </code>
            <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
              {desc}
            </p>
          </div>
          <CodeBlock language="tsx" code={code} />
          <hr style={{ borderColor: "var(--border)" }} />
        </section>
      ))}
    </div>
  );
}
