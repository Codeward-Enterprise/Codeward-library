import { create } from "@storybook/theming/create";

export const codewardTheme = create({
  base: "dark",

  brandTitle: "Codeward UI",
  brandTarget: "_self",

  colorPrimary: "#00D4B8",
  colorSecondary: "#00D4B8",

  // ── App chrome — neutral dark (não-navy para não conflitar com componentes) ──
  appBg: "#0A0A0C",           // quase preto — sidebar bg
  appContentBg: "#111113",    // conteúdo principal
  appPreviewBg: "#111113",    // canvas do story
  appBorderColor: "#222226",
  appBorderRadius: 8,

  textColor: "#F6F9FC",
  textInverseColor: "#111113",
  textMutedColor: "#5F6B7A",

  barTextColor: "#98A7B5",
  barHoverColor: "#F6F9FC",
  barSelectedColor: "#00D4B8",
  barBg: "#0A0A0C",

  inputBg: "#1A1A1E",
  inputBorder: "#2A2A2E",
  inputTextColor: "#F6F9FC",
  inputBorderRadius: 6,

  fontBase: "'Inter', system-ui, -apple-system, sans-serif",
  fontCode: "'JetBrains Mono', 'Fira Code', ui-monospace, monospace",
});
