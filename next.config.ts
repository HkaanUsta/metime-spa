import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  basePath: '/metime-spa',

  output: 'export',

  images: {
    unoptimized: true,
  },

};

export default nextConfig;
