const { pathAlias } = require("./config");

module.export = {
  compilerOptions: {
    target: "es5", // Specify ECMAScript target version
    lib: ["dom", "dom.iterable", "esnext"], // List of library files to be included in the compilation
    allowJs: true, // Allow JavaScript files to be compiled
    skipLibCheck: true, // Skip type checking of all declaration files
    esModuleInterop: true, /* Disbles namespace imports (import * as fs from "fs")
    and enables CJS/AMD/UMD style imports (import fs from "fs") */
    allowSyntheticDefaultImports: true, // Allow default imports from modules with no default export
    strict: true, // Enable all strict type checking options
    forceConsistentCasingInFileNames: true, /* Disallow inconsistently-cased
    references to the same file. */
    module: "esnext", // Specify module code generation
    moduleResolution: "node", // Resolve modules using Node.js style
    resolveJsonModule: true, // Include modules imported with .json extension
    noEmit: true, // Do not emit output (meaning do not compile code, only perform type checking)
    jsx: "react", // Support JSX in .tsx files
    sourceMap: true, // *** Generate corrresponding .map file ***
    declaration: true, // *** Generate corresponding .d.ts file ***
    noUnusedLocals: true, // *** Report errors on unused locals ***
    noUnusedParameters: true, // *** Report errors on unused parameters ***
    experimentalDecorators: true, // *** Enables experimental support for ES decorators ***
    incremental: true, /* *** Enable incremental compilation by
    reading/writing information from prior compilations to a file on disk *** */
    noFallthroughCasesInSwitch: true, /* *** Report errors for
    fallthrough cases in switch statement *** */
    baseUrl: "./src",
    paths: pathAlias.map((item) => ({
      [`${item.alias}/*`]: [`${item.pah}/*`],
    })),
  },
  include: [
    "src/**/*", // *** The files TypeScript should type check ***
  ],
  exclude: ["node_modules", "build"], // *** The files to not type check ***
};