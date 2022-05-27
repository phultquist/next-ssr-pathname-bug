/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: () => {
    return [
      {
        source: "/rewrite",
        destination: "/",
      },
    ];
  },
};

module.exports = nextConfig;
