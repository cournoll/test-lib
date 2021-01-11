import babel from "@rollup/plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import pkg from "./package.json";
import path from "path";

export default [
  {
    // input: pkg.source,
    // output: [
    //   { file: pkg.main, format: "cjs" },
    //   { file: pkg.module, format: "esm" },
    // ],
    input: [
      "src/index.js",
      "src/components/ExampleComponent.js",
      "src/mymodule/index.js",
    ],
    output: [
      {
        format: "cjs",
        dir: "dist",
        exports: "auto",
        preserveModules: true,
        preserveModulesRoot: "src",
      },
    ],
    plugins: [
      external(),
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
    external: Object.keys(pkg.peerDependencies || {}),
  },
];
