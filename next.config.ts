import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "standalone",
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': './src/components'
    };
    return config;
  },
  turbopack: {
    resolveAlias: {
      '@components': './src/components'
    }
  }
};

export default nextConfig;
