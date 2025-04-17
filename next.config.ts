import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 sassOptions: {
    // implementation: 'sass-embedded',
    includepaths: ['./styles'],
  },
};

export default nextConfig;
