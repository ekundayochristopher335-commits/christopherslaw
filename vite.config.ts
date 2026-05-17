import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import twcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    tanstackStart({ 
      server: { 
        build: { 
          staticNodeEnv: true,
          rollupOptions: {
            external: ["node:stream", "node:stream/web", "node:async_hooks", "node:fs", "node:path", "node:util"],
          }
        }
      }
    }), 
    twcss(), 
    react(), 
    tsconfigPaths()
  ],
  server: {
    host: "0.0.0.0",
  },
  build: {
    ssr: "src/server.ts",
    target: "node20",
    emptyOutDir: true,
    rollupOptions: {
      external: ["node:stream", "node:stream/web", "node:async_hooks", "node:fs", "node:path", "node:util"],
    },
  },
  ssr: {
    external: ["node:stream", "node:stream/web", "node:async_hooks", "node:fs", "node:path", "node:util"],
    noExternal: [],
  },
});


