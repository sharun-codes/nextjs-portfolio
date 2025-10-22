/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true, // since static export can’t use next/image optimization
    },
    trailingSlash: true,
};

export default nextConfig;
