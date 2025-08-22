import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: __dirname,
  eslint: {
    // ⛔ jangan gagal build walau ada error eslint
    ignoreDuringBuilds: true,
  },
  typescript: {
    // ⛔ jangan gagal build walau ada error typescript
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
