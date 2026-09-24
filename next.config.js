/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGitHubPages ? "/-the-drinkers-website" : "",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
