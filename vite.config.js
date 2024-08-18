import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@src": "/src",
            "@assets": "/src/assets",
            "@components": "/src/components",
            "@store": "/src/store",
            "@services": "/src/services",
            "@pages": "/src/pages",
        },
    },
    envPrefix: "VITE_", 
});
