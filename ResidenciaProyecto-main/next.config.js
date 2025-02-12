/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['res.cloudinary.com'],
    },
    trailingSlash: true, // Asegura que Netlify maneje las rutas correctamente
    output: "export", // Esto ayuda en Netlify a generar páginas estáticas
  }
  
  module.exports = nextConfig
  