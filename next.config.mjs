/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ddragon.leagueoflegends.com',
        pathname: '**',
      },
    ],
    formats: ['image/avif']
  }
};

export default nextConfig;
