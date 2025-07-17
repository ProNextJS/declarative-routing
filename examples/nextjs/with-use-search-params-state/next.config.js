/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  experimental: {
    reactCompiler: true,
  },
  images: {
    remotePatterns: [new URL("https://raw.githubusercontent.com/PokeAPI/**")],
  },
};

export default config;
