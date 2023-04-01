/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["ekpoloke.s3.ap-south-1.amazonaws.com", "rukminim1.flixcart.com", "ekpoloke.s3.amazonaws.com", "placeimg.com", "ekpoloke-backend-old.onrender.com"],
  },
};

module.exports = nextConfig;