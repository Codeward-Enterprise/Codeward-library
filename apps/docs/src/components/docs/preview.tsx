interface PreviewProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export function Preview({ children, dark = false }: PreviewProps) {
  return (
    <div
      className="rounded-xl border p-8 flex flex-wrap gap-3 items-center"
      style={{
        backgroundColor: dark ? "var(--color-navy-700)" : "var(--background)",
        borderColor: dark ? "var(--color-navy-600)" : "var(--border)",
      }}
    >
      {children}
    </div>
  );
}
