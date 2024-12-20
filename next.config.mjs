import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "landing.ctihc.com",
      },
      {
        protocol: "https",
        hostname: "storage-api.ctihc.com",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
