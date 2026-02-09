// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   images: {
//     domains: ['localhost', 'images.pexels.com', 'i.imgur.com'], // <== Domain name
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'firebasestorage.googleapis.com',
//       },
//     ],
//   },
//   reactCompiler: true,
// };

// export default nextConfig;


import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== "production";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // production-safe remote hosts
      { protocol: "https", hostname: "images.pexels.com", pathname: "/**" },
      { protocol: "https", hostname: "i.imgur.com", pathname: "/**" },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        pathname: "/**",
      },

      // dev-only (kalau kamu pakai absolute URL dari localhost / IP lokal)
      ...(isDev
        ? [
          { protocol: "http" as const, hostname: "localhost", pathname: "/**" },
          { protocol: "http" as const, hostname: "127.0.0.1", pathname: "/**" },
          // kalau kamu benar-benar load image dari IP LAN:
          { protocol: "http" as const, hostname: "192.168.0.107", pathname: "/**" },
        ]
        : []),
    ],

    // kalau kamu pakai IP lokal (192.168.x.x) untuk image src, Next bisa butuh ini saat dev
    ...(isDev ? { dangerouslyAllowLocalIP: true } : {}),
  },

  reactCompiler: true,
};

export default nextConfig;
