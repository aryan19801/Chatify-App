import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
	return {
		plugins: [react()],
		...(mode === "development" && {
			server: {
				port: 3000,
				proxy: {
					"/api": {
						target: "http://localhost:5000",
					},
				},
			},
		}),
	};
});
