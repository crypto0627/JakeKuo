import type { NextConfig } from "next";
import { resolve } from "path";

const nextConfig: NextConfig = {
  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      o1js: resolve('node_modules/o1js'),
    };
    config.experiments = { ...config.experiments, topLevelAwait: true };
    config.optimization.minimizer = [];
    config.resolve.fallback = { 
      fs: false, 
      net: false, 
      tls: false,
      'pino-pretty': false
    };
    return config;
  },
  reactStrictMode: false,
  images: {
    unoptimized: true
  },
  distDir: 'out',
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin',
          },
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'require-corp',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
