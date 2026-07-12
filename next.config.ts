import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow mobile/other devices on the same WiFi to load dev assets via LAN IP
  allowedDevOrigins: ["192.168.1.45", "localhost", "127.0.0.1"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    qualities: [75, 92],
  },
};

export default nextConfig;
