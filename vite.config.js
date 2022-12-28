import path from "path";
import { defineConfig } from "vite";

const root = path.resolve(__dirname, "src");
const outDir = path.resolve(__dirname, "dist");

export default {
    root: root,
    build: {
        outDir: outDir,
        emptyOutDir: true,
        rollupOptions: {
            input: {
                index: path.resolve(root, "index.html"),
            },
            output: {
                assetFileNames: (assetInfo) => {
                    let extType = assetInfo.name.split(".").at(1);
                    if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
                        extType = "images";
                    }
                    return `assets/${extType}/[name]-[hash][extname]`;
                },
            },
        },
    },
};
