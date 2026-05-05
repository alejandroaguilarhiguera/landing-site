// next.config.ts
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n.ts"); // si no tienes src/, pon "./i18n.ts"

const nextConfig: NextConfig = {
  reactCompiler: true,
};

export default withNextIntl(nextConfig);