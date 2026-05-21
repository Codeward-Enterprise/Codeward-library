import type { NextConfig } from "next";

const config: NextConfig = {
  transpilePackages: [
    "@codeforward/tokens",
    "@codeforward/utils",
    "@codeforward/icons",
  ],
};

export default config;
