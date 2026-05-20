import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Design Tokens/Typography",
  parameters: {
    backgrounds: { default: "dark" },
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Escala tipográfica Codeward. Fonte principal: Inter. Fonte código: JetBrains Mono. Pesos: 400 (regular) e 500 (medium) para UI, 600/700 para títulos.",
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const Divider = () => (
  <div style={{ height: "1px", background: "#2A2A2A", margin: "8px 0 32px" }} />
);
const Label = ({ text }: { text: string }) => (
  <p
    style={{
      color: "#5F6B7A",
      fontFamily: "Inter, sans-serif",
      fontSize: "11px",
      fontWeight: 500,
      letterSpacing: "0.08em",
      textTransform: "uppercase" as const,
      margin: "0 0 20px",
    }}
  >
    {text}
  </p>
);

const TypeRow = ({
  size,
  px,
  weight,
  label,
  sample,
  mono = false,
}: {
  size: string;
  px: string;
  weight: string;
  label: string;
  sample: string;
  mono?: boolean;
}) => (
  <div
    style={{
      display: "flex",
      alignItems: "baseline",
      gap: "24px",
      padding: "12px 0",
      borderBottom: "1px solid #1E1E1E",
    }}
  >
    <div style={{ width: "100px", flexShrink: 0 }}>
      <p
        style={{
          color: "#00D4B8",
          fontFamily: "JetBrains Mono, monospace",
          fontSize: "11px",
          margin: 0,
        }}
      >
        {size}
      </p>
      <p
        style={{
          color: "#5F6B7A",
          fontFamily: "JetBrains Mono, monospace",
          fontSize: "10px",
          margin: "2px 0 0",
        }}
      >
        {px} · {weight}
      </p>
    </div>
    <p
      style={{
        fontFamily: mono ? "JetBrains Mono, monospace" : "Inter, sans-serif",
        fontSize: px,
        fontWeight: Number(weight),
        color: "#F6F9FC",
        margin: 0,
        lineHeight: 1.2,
        flex: 1,
      }}
    >
      {sample}
    </p>
    <p
      style={{
        color: "#333337",
        fontFamily: "Inter, sans-serif",
        fontSize: "11px",
        margin: 0,
        flexShrink: 0,
      }}
    >
      {label}
    </p>
  </div>
);

const WeightRow = ({
  weight,
  label,
  sample,
}: { weight: number; label: string; sample: string }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "24px",
      padding: "10px 0",
      borderBottom: "1px solid #1E1E1E",
    }}
  >
    <div style={{ width: "100px", flexShrink: 0 }}>
      <p
        style={{
          color: "#00D4B8",
          fontFamily: "JetBrains Mono, monospace",
          fontSize: "11px",
          margin: 0,
        }}
      >
        {weight}
      </p>
      <p
        style={{
          color: "#5F6B7A",
          fontFamily: "Inter, sans-serif",
          fontSize: "11px",
          margin: "1px 0 0",
        }}
      >
        {label}
      </p>
    </div>
    <p
      style={{
        fontFamily: "Inter, sans-serif",
        fontSize: "20px",
        fontWeight: weight,
        color: "#F6F9FC",
        margin: 0,
      }}
    >
      {sample}
    </p>
  </div>
);

const TypographyPage = () => (
  <div style={{ maxWidth: "800px", padding: "2rem", fontFamily: "Inter, sans-serif" }}>
    <div style={{ marginBottom: "2.5rem" }}>
      <h1 style={{ color: "#F6F9FC", fontSize: "24px", fontWeight: 700, margin: "0 0 8px" }}>
        Tipografia
      </h1>
      <p style={{ color: "#5F6B7A", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>
        <strong style={{ color: "#F6F9FC" }}>Inter</strong> para toda interface — corpo, labels,
        botões e headings. <strong style={{ color: "#F6F9FC" }}>JetBrains Mono</strong> para código,
        IDs, hashes e valores técnicos. Importe via{" "}
        <code
          style={{ color: "#00D4B8", fontFamily: "JetBrains Mono, monospace", fontSize: "12px" }}
        >
          @codeforward/tokens/styles
        </code>
        .
      </p>
    </div>

    <Divider />

    {/* Type scale — Inter */}
    <Label text="Escala — Inter (font-sans)" />
    <TypeRow
      size="text-xs"
      px="12px"
      weight="400"
      label="caption, hint"
      sample="Atualizado há 2 horas · Codeward Platform"
    />
    <TypeRow
      size="text-sm"
      px="14px"
      weight="400"
      label="body, labels, inputs"
      sample="Deploy em produção confirmado para sexta-feira."
    />
    <TypeRow
      size="text-sm"
      px="14px"
      weight="500"
      label="body medium"
      sample="João Silva · Tech Lead · Codeward"
    />
    <TypeRow
      size="text-base"
      px="16px"
      weight="400"
      label="large body"
      sample="Construa produtos digitais com velocidade e qualidade."
    />
    <TypeRow
      size="text-base"
      px="16px"
      weight="600"
      label="card title, section"
      sample="Resumo do projeto"
    />
    <TypeRow
      size="text-lg"
      px="18px"
      weight="600"
      label="page subtitle"
      sample="MVP em 8 semanas"
    />
    <TypeRow
      size="text-xl"
      px="20px"
      weight="600"
      label="dialog title"
      sample="Entrar na plataforma"
    />
    <TypeRow size="text-2xl" px="24px" weight="700" label="page title" sample="Dashboard" />
    <TypeRow
      size="text-3xl"
      px="30px"
      weight="700"
      label="metric, hero number"
      sample="R$ 48.200"
    />
    <TypeRow size="text-4xl" px="36px" weight="700" label="hero headline" sample="Codeward UI" />

    <div style={{ height: "40px" }} />
    <Divider />

    {/* Type scale — Mono */}
    <Label text="Escala — JetBrains Mono (font-mono)" />
    <TypeRow
      size="text-xs"
      px="12px"
      weight="400"
      label="hash, version"
      sample="a7f3c9d · v2.4.1 · INV-2025-042"
      mono
    />
    <TypeRow
      size="text-sm"
      px="14px"
      weight="400"
      label="code, ids, values"
      sample="api-gateway · us-east-1 · 1m 12s"
      mono
    />
    <TypeRow
      size="text-base"
      px="16px"
      weight="500"
      label="inline code"
      sample="pnpm add @codeforward/tokens"
      mono
    />
    <TypeRow
      size="text-lg"
      px="18px"
      weight="400"
      label="code block"
      sample="const theme = createTheme(codewardTheme)"
      mono
    />

    <div style={{ height: "40px" }} />
    <Divider />

    {/* Weights */}
    <Label text="Pesos — Inter" />
    <WeightRow weight={400} label="Regular — corpo, descrições" sample="Codeward Platform" />
    <WeightRow weight={500} label="Medium — labels, UI elements" sample="Codeward Platform" />
    <WeightRow weight={600} label="Semibold — títulos, buttons" sample="Codeward Platform" />
    <WeightRow weight={700} label="Bold — headlines, métricas" sample="Codeward Platform" />

    <div style={{ height: "40px" }} />
    <Divider />

    {/* Usage examples */}
    <Label text="Exemplos de uso" />
    <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
      {/* Metric */}
      <div>
        <p
          style={{
            color: "#5F6B7A",
            fontFamily: "Inter, sans-serif",
            fontSize: "12px",
            margin: "0 0 4px",
          }}
        >
          Métrica
        </p>
        <p
          style={{
            color: "#5F6B7A",
            fontFamily: "Inter, sans-serif",
            fontSize: "13px",
            fontWeight: 400,
            margin: "0 0 2px",
          }}
        >
          MRR Atual
        </p>
        <p
          style={{
            color: "#F6F9FC",
            fontFamily: "Inter, sans-serif",
            fontSize: "32px",
            fontWeight: 700,
            margin: 0,
            lineHeight: 1,
          }}
        >
          R$ 48.200
        </p>
      </div>
      {/* Code reference */}
      <div>
        <p
          style={{
            color: "#5F6B7A",
            fontFamily: "Inter, sans-serif",
            fontSize: "12px",
            margin: "0 0 8px",
          }}
        >
          Referência técnica
        </p>
        <div
          style={{
            background: "#1A1A1E",
            borderRadius: "8px",
            padding: "16px",
            border: "1px solid #2A2A2E",
          }}
        >
          <p
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "13px",
              color: "#F6F9FC",
              margin: 0,
              lineHeight: 1.7,
            }}
          >
            <span style={{ color: "#5F6B7A" }}>{"/* tokens.css */"}</span>
            {"\n"}
            <span style={{ color: "#00D4B8" }}>--font-sans</span>:{" "}
            <span style={{ color: "#8DA8CC" }}>'Inter'</span>, system-ui, sans-serif;{"\n"}
            <span style={{ color: "#00D4B8" }}>--font-mono</span>:{" "}
            <span style={{ color: "#8DA8CC" }}>'JetBrains Mono'</span>, monospace;
          </p>
        </div>
      </div>
    </div>
  </div>
);

export const AllTypography: Story = {
  name: "Escala tipográfica completa",
  render: () => <TypographyPage />,
  parameters: { layout: "fullscreen", backgrounds: { default: "dark" } },
};
