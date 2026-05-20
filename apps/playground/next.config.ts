import type { NextConfig } from "next";

const config: NextConfig = {
  transpilePackages: [
    "@codeward/tokens",
    "@codeward/utils",
    "@codeward/hooks",
    "@codeward/icons",
  ],
};

export default config;
