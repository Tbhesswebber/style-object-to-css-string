import { builtinModules } from "node:module";
import { resolve } from "node:path";

/** @type {import('vite').UserConfig} */
export default {
    build: {
        lib: {
            entry: {
                parsers: resolve(__dirname, "src/parsers.js"),
                createParser: resolve(__dirname, "src/createParser.js"),
                main: resolve(__dirname, "src/objToString.js")
            },
            name: "styleObjectToCss",
            fileName: (format, entryAlias) => {
                const fileName = `index.${format}.js`;
                return entryAlias === "main" ? fileName : `${entryAlias}/${fileName}`;
            },
        },
        outDir: resolve(__dirname, "dist"),
        rollupOptions: {
            external: [...builtinModules, /^node:/],
        },
    },
    test: {
        globals: true,
        setupFiles: ['./testSetup.js'],
        watch: false,
    }
};
