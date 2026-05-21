interface Prop {
  name: string;
  type: string;
  default?: string;
  description: string;
  required?: boolean;
}

interface PropTableProps {
  props: Prop[];
}

export function PropTable({ props }: PropTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border" style={{ borderColor: "var(--border)" }}>
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr style={{ backgroundColor: "var(--muted)" }}>
            {["Prop", "Tipo", "Padrão", "Descrição"].map((h) => (
              <th
                key={h}
                className="text-left px-4 py-3 text-xs font-medium uppercase tracking-widest border-b"
                style={{
                  color: "var(--muted-foreground)",
                  borderColor: "var(--border)",
                  fontFamily: "var(--font-sans)",
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.map((prop, i) => (
            <tr
              key={prop.name}
              style={{ backgroundColor: i % 2 === 0 ? "var(--background)" : "var(--muted)" }}
            >
              <td className="px-4 py-3 border-b" style={{ borderColor: "var(--border)" }}>
                <code
                  className="text-xs px-1.5 py-0.5 rounded font-medium"
                  style={{
                    backgroundColor: "var(--color-navy-50)",
                    color: "var(--primary)",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  {prop.name}
                  {prop.required && (
                    <span style={{ color: "var(--destructive)" }}> *</span>
                  )}
                </code>
              </td>
              <td className="px-4 py-3 border-b" style={{ borderColor: "var(--border)" }}>
                <code
                  className="text-xs"
                  style={{ color: "var(--color-mint-600)", fontFamily: "var(--font-mono)" }}
                >
                  {prop.type}
                </code>
              </td>
              <td className="px-4 py-3 border-b" style={{ borderColor: "var(--border)" }}>
                {prop.default ? (
                  <code
                    className="text-xs"
                    style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-mono)" }}
                  >
                    {prop.default}
                  </code>
                ) : (
                  <span style={{ color: "var(--color-neutral-300)" }}>—</span>
                )}
              </td>
              <td
                className="px-4 py-3 border-b"
                style={{ borderColor: "var(--border)", color: "var(--foreground)", fontFamily: "var(--font-sans)" }}
              >
                {prop.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
