/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['res.cloudinary.com'],
    },
    output: "export", // Esto ayuda en Netlify a generar páginas estáticas
  }
  
  module.exports = nextConfig
  