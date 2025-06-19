import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // required for static HTML export
  distDir: 'out',   // default output directory
  images: {
    unoptimized: true // optional if you're using <Image />
  },
  trailingSlash: true // optional, helps with GitHub Pages compatibility
};

export default nextConfig;
