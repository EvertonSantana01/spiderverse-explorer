/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: 'https://660ec417356b87a55c500dc9.mockapi.io/user',
    DOMAIN_ORIGIN: "http://localhost:3000/api/user",
  },
};

export default nextConfig;
