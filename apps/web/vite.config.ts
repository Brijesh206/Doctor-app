import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		proxy: {
			"/api": {
				target: "http://localhost:3000",
				changeOrigin: true,
			},
		},
	},
	resolve: {
		dedupe: ["react", "react-dom", "react-is"],
	},
	optimizeDeps: {
		include: ["react-is", "recharts"],
	},
});
