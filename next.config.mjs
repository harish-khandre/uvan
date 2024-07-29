/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "breeditdonationpage.s3.ap-south-1.amazonaws.com",
      },
       {
        protocol: "https",
        hostname: "uvan-tech.s3.eu-north-1.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
