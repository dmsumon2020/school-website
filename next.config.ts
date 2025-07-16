import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "effortless-fireworks-ed642ae948.media.strapiapp.com",
      },
    ],
  },
};

export default nextConfig;
