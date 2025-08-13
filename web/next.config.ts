import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable image optimization for better deployment compatibility
  images: {
    unoptimized: true,
  },

  // Base path for deployment (can be customized for subdirectory deployment)
  basePath: '',

  // Asset prefix for CDN deployment
  assetPrefix: '',

  // Trailing slash for better static hosting compatibility
  trailingSlash: true,

  // Environment variables
  env: {
    CUSTOM_KEY: 'my-value',
  },

  // TypeScript configuration
  typescript: {
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: false,
  },

  // ESLint configuration
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
