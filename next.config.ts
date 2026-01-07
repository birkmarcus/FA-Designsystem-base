import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Suppress console warnings for params Promise (Next.js 16)
  logging: {
    fetches: {
      fullUrl: false,
    },
  },
};

export default nextConfig;

