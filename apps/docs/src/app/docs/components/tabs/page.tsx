import { CodeBlock } from "@/components/docs/code-block";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Tabs" };

export default function TabsPage() {
  return (
    <div className="space-y-10" style={{ fontFamily: "var(--font-sans)" }}>
      <div className="space-y-2">
        <p
          className="text-sm"
          style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-mono)" }}
        >
          codeward add tabs
        </p>
        <h1 className="text-4xl font-medium tracking-tight" style={{ color: "var(--foreground)" }}>
          Tabs
        </h1>
        <p className="text-lg" style={{ color: "var(--muted-foreground)" }}>
          Navegação por abas para conteúdo agrupado. Construído sobre{" "}
          <code style={{ fontFamily: "var(--font-mono)" }}>@radix-ui/react-tabs</code>.
        </p>
      </div>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Instalação
        </h2>
        <CodeBlock language="bash" code="codeward add tabs" />
        <CodeBlock language="bash" code="npm install @radix-ui/react-tabs" />
      </section>

      <hr style={{ borderColor: "var(--border)" }} />

      <section className="space-y-4">
        <h2 className="text-xl font-medium" style={{ color: "var(--foreground)" }}>
          Exemplo
        </h2>
        <div
          className="rounded-xl border p-6"
          style={{ backgroundColor: "var(--background)", borderColor: "var(--border)" }}
        >
          <Tabs defaultValue="overview">
            <TabsList>
              <TabsTrigger value="overview">Visão geral</TabsTrigger>
              <TabsTrigger value="metrics">Métricas</TabsTrigger>
              <TabsTrigger value="settings">Configurações</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <p className="text-sm pt-4" style={{ color: "var(--muted-foreground)" }}>
                Sprint 14 em andamento. 8 de 12 tarefas concluídas. Deploy previsto para sexta.
              </p>
            </TabsContent>
            <TabsContent value="metrics">
              <p className="text-sm pt-4" style={{ color: "var(--muted-foreground)" }}>
                Velocity média: 32 story points/sprint. Lead time: 2.4 dias.
              </p>
            </TabsContent>
            <TabsContent value="settings">
              <p className="text-sm pt-4" style={{ color: "var(--muted-foreground)" }}>
                Configurações do projeto. Notificações e integrações.
              </p>
            </TabsContent>
          </Tabs>
        </div>
        <CodeBlock
          language="tsx"
          code={`import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Visão geral</TabsTrigger>
    <TabsTrigger value="metrics">Métricas</TabsTrigger>
    <TabsTrigger value="settings">Configurações</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">
    Conteúdo da aba Visão geral
  </TabsContent>
  <TabsContent value="metrics">
    Conteúdo da aba Métricas
  </TabsContent>
  <TabsContent value="settings">
    Conteúdo da aba Configurações
  </TabsContent>
</Tabs>

{/* Controlado */}
<Tabs value={activeTab} onValueChange={setActiveTab}>
  ...
</Tabs>`}
        />
      </section>
    </div>
  );
}
