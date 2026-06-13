import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimisticClientCache: true,
  },
};

export default nextConfig;
