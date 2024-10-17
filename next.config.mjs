/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "landing.ctihc.com",
      },
    ],
  },
};

export default nextConfig;
