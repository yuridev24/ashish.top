/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_TOKEN: "402e0cc2-77dd-4677-964a-91de299ea777",
    HASHNODE_HOST: "ashishagarwal.hashnode.dev"
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.hashnode.com",
      }
    ]
  },
};

export default nextConfig;
