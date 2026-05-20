import type { Preview } from "@storybook/react";
import { codewardTheme } from "./theme";
import "../src/styles/globals.css";

const preview: Preview = {
  parameters: {
    docs: {
      theme: codewardTheme,
    },
    backgrounds: {
      default: "dark",
      values: [
        { name: "dark", value: "#111113" }, // neutro escuro — canvas padrão
        { name: "navy", value: "#0A2540" }, // Navy 700 — superfície brand
        { name: "navy-deep", value: "#04111F" }, // Navy 900
        { name: "light", value: "#F6F9FC" }, // Light Surface
        { name: "white", value: "#FFFFFF" },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "centered",
  },
};

export default preview;
