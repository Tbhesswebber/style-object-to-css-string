import { builtinModules } from "node:module";
import { resolve, basename } from "node:path";
import dts from 'vite-plugin-dts'

/** @type {import('vite').UserConfig} */
export default {
    build: {
        lib: {
            entry: {
                parsers: resolve(__dirname, "src/parsers.js"),
                createParser: resolve(__dirname, "src/createParser.js"),
                index: resolve(__dirname, "src/objToString.js")
            },
            formats: ["esm", "cjs"],
            name: "styleObjectToCss",
            fileName: (format, entryAlias) => {
                const extension = format === "esm" ? "mjs" : "cjs";
                const fileName = `index.${extension}`;
                return entryAlias === "index" ? fileName : `${entryAlias}/${fileName}`;
            },
        },
        outDir: resolve(__dirname, "dist"),
        rollupOptions: {
            external: [...builtinModules, /^node:/],
        },
        emptyOutDir: true,
    },
    plugins: [dts({insertTypesEntry: true, beforeWriteFile(path, content) {
        const defaultFileName = basename(path);
        if (["main", "objToString"].some(name => defaultFileName.includes(name))) {
            return {filePath: path.replace(defaultFileName, "/index.d.ts"), content}
        }
        const fileName = defaultFileName.replace(".d.ts", "/index.d.ts");
        const newPath = path.replace(defaultFileName, fileName);

        return {filePath: newPath, content}
    }})],
    test: {
        globals: true,
        setupFiles: ['./testSetup.js'],
        watch: false,
    }
};
