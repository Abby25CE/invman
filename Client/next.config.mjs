/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterrns: [
      {
        protocol: "https",
        hostname: "s3-invntorymanagement.s3.us-east-2.amazonaws.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
