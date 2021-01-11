import babel from "@rollup/plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import pkg from "./package.json";
import path from "path";

export default [
  {
    input: [
      pkg.source,
      "src/components/ExampleComponent.js",
      "src/mymodule/index.js",
    ],
    output: [
      {
        format: "cjs",
        dir: "dist",
        exports: "auto",
        preserveModules: true,
      },
    ],
    plugins: [
      external(),
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/env", "@babel/preset-react"],
        babelHelpers: "bundled",
      }),
      postcss({
        modules: true,
        minimize: true,
        extract: path.resolve("dist/styles.css"),
        extensions: [".css"],
      }),
    ],
    external: Object.keys(pkg.peerDependencies || {}),
  },
];
