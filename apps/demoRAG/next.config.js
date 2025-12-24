import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Required because LangChain + HuggingFace use Node APIs
  experimental: {
    serverActions: true,
  },

  webpack: (config) => {
    // Fix for "node:module" and other node: imports
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
      crypto: false,
    };

    return config;
  },
};

export default nextConfig;
