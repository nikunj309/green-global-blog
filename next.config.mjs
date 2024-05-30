/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https', // Adjust if your Cloudinary images use HTTP
            hostname: 'res.cloudinary.com',
          },
        ],
      },
};

export default nextConfig;
