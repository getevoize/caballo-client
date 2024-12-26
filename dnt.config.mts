import { build, emptyDir } from "https://deno.land/x/dnt@0.40.0/mod.ts";

await emptyDir("./dist");

await build({
  entryPoints: ["./src/mod.ts"],
  outDir: "./dist",
  shims: {
    deno: true,
  },
  package: {
    name: "caballo-client",
    version: "<RELEASE_VERSION_PLACEHOLDER>",
    description: "A Deno project targeting Node.js 18+ with ESM support",
    license: "MIT",
    author: "Raul Lugo",
    main: "./mod.js",
    type: "module",
    engines: {
      node: ">=18.0.0",
    },
    scripts: {
      test: "node test.js",
    },
    repository: {
      type: "git",
      url: "https://git.rlugo.dev/raul/caballo-client.git",
    },
    keywords: ["deno", "node", "esm", "validation"],
  },
  compilerOptions: {
    lib: ["ES2022"],
    target: "ES2022",
  },
  test: false,
  postBuild() {
    Deno.copyFileSync("LICENSE", "dist/LICENSE");
    Deno.copyFileSync("README.md", "dist/README.md");
  },
});
