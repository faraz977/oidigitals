import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/work/findtruck",
        destination: "/work/truckstation",
        permanent: true,
      },
      {
        source: "/work/export-catalogs",
        destination: "/work/yz-enterprises",
        permanent: true,
      },
      {
        source: "/work/export-website",
        destination: "/work/yz-enterprises",
        permanent: true,
      },
      {
        source: "/work/oi-chatbot",
        destination: "/work/meridian-assist",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
