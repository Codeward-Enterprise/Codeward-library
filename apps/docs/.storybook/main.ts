import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-essentials", "@storybook/addon-a11y"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: async (config) => {
    const { default: tailwindcss } = await import("@tailwindcss/postcss");
    const { default: react } = await import("@vitejs/plugin-react");
    return mergeConfig(config, {
      // @vitejs/plugin-react handles the automatic JSX runtime for dev mode.
      // The docs tsconfig has "jsx": "preserve" (for Next.js) and excludes
      // src/stories, so esbuild alone cannot determine the correct JSX transform.
      plugins: [react()],
      css: {
        postcss: {
          plugins: [tailwindcss()],
        },
      },
    });
  },
};

export default config;
