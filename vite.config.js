import path from "path";
// import nunjucks from "@vituum/vite-plugin-nunjucks";
// import * as njkData from "./src/data.njk.json";

const root = path.resolve(__dirname, "src");
const outDir = path.resolve(__dirname, "dist");

// const pages = {};
// for (const page of njkData.pages) {
//     const name = path.parse(page).name;
//     pages[name] = path.resolve(root, `pages/${page}`);
// }

export default {
    root: root,
    build: {
        outDir: outDir,
        emptyOutDir: true,
        rollupOptions: {
            input: {
                index: path.resolve(root, "index.html"),
            },
        },
    },
    // plugins: [
    //     nunjucks({
    //         data: "./src/data.njk.json",
    //         filetypes: {
    //             html: /.(.html)$/,
    //             json: /.(json.njk.html)$/,
    //         },
    //     }),
    // ],
};
