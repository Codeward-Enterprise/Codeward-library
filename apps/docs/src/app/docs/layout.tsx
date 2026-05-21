import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="flex pt-[57px]">
        <Sidebar />
        <main
          className="flex-1 min-w-0 lg:pl-[var(--docs-sidebar-width)]"
          style={{ backgroundColor: "var(--background)" }}
        >
          <div className="mx-auto max-w-3xl px-6 py-12">{children}</div>
        </main>
      </div>
    </>
  );
}
