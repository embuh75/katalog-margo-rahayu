import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: __dirname,
  eslint: {
    // ⛔ jangan gagal build walau ada error eslint
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
