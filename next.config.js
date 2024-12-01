/** @type {import("next").NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**",
      },
    ],
  },
  sassOptions: {
    silenceDeprecations: ["mixed-decls", "color-functions", "global-builtin", "import", "legacy-js-api"],
  },
};

export default nextConfig;
