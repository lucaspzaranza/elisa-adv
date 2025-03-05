import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // Exporta como HTML estático
  basePath: "/elisa-adv", // Define o caminho base do GitHub Pages
  images: {
    unoptimized: true, // Evita otimizações de imagem (GitHub Pages não suporta a otimização automática do Next.js)
  },
};

export default nextConfig;
