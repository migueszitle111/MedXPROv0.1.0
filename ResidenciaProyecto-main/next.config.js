/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['res.cloudinary.com'],
    },
    trailingSlash: true, // Asegura que Netlify maneje las rutas correctamente
  } 
  module.exports = nextConfig
