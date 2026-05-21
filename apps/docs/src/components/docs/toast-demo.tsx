"use client";

import { Button } from "@/components/ui/button";
import { Toast, ToastDescription, ToastTitle } from "@/components/ui/toast";
import { useState } from "react";

type ToastVariant = "default" | "success" | "warning" | "destructive";

const variants: { label: string; variant: ToastVariant; title: string; description: string }[] = [
  {
    label: "Info",
    variant: "default",
    title: "Informação",
    description: "Operação realizada com sucesso.",
  },
  {
    label: "Success",
    variant: "success",
    title: "Salvo!",
    description: "As alterações foram aplicadas.",
  },
  {
    label: "Warning",
    variant: "warning",
    title: "Atenção",
    description: "Esta ação pode ter consequências.",
  },
  {
    label: "Erro",
    variant: "destructive",
    title: "Erro",
    description: "Não foi possível completar a operação.",
  },
];

export function ToastDemo() {
  const [active, setActive] = useState<ToastVariant | null>(null);

  const show = (variant: ToastVariant) => {
    setActive(null);
    setTimeout(() => setActive(variant), 50);
  };

  const current = variants.find((v) => v.variant === active);

  return (
    <div className="flex flex-wrap gap-3 items-center">
      {variants.map((v) => (
        <Button key={v.variant} variant="outline" onClick={() => show(v.variant)}>
          {v.label}
        </Button>
      ))}
      {active && current && (
        <Toast variant={active} open onOpenChange={() => setActive(null)} duration={3000}>
          <ToastTitle>{current.title}</ToastTitle>
          <ToastDescription>{current.description}</ToastDescription>
        </Toast>
      )}
    </div>
  );
}
