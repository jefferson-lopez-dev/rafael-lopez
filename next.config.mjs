import path from "path";
import { fileURLToPath } from "url";

// Obtener el valor de __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
      },
    ],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "react-native-fs": false, // Desactivar react-native-fs
      jsmediatags: path.resolve(
        __dirname,
        "node_modules/jsmediatags/dist/jsmediatags.min.js"
      ), // Forzar el uso de la versión del navegador
    };

    return config;
  },
};

export default nextConfig;
