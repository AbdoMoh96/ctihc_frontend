import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "appwrite.abdomoh.com",
      },
      {
        protocol: "https",
        hostname: "api.ctihc.abdomoh.com",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
