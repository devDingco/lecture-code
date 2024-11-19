/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites() {
    return [
      {
        source: "/mynaver3",
        destination: "https://www.naver.com",
      },
    ];
  },
};

export default nextConfig;
