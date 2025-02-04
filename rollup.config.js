const babel = require("@rollup/plugin-babel");
const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const peerDepsExternal = require("rollup-plugin-peer-deps-external");
const postcss = require("rollup-plugin-postcss");

const packageJson = require("./package.json");

const rollupConfig = {
  input: "src/index.js",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    postcss({
      config: {
        path: "./postcss.config.js",
      },
      extensions: [".css"],
      minimize: true,
      inject: {
        insertAt: "top",
      },
    }),
    babel({
      exclude: "node_modules/**",
      babelHelpers: "bundled",
    }),
  ],
  external: ["react", "react-dom"],
};

module.exports = rollupConfig;
