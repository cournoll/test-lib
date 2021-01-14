import babel from "@rollup/plugin-babel";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import pkg from "./package.json";
import path from "path";

export default [
  {
    input: pkg.source,
    output: [
      {
        format: "cjs",
        dir: "dist",
        exports: "auto",
        preserveModules: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      babel({
        exclude: "node_modules/**",
        babelHelpers: "bundled",
      }),
      postcss({
        modules: true,
        minimize: true,
        extract: path.resolve("dist/styles.css"),
        extensions: [".css"],
      }),
    ],
  },
];
