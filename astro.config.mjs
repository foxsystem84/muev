// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
// https://astro.build/config
export default defineConfig({
  integrations: [icon()],
  vite: {
    server: {
      watch: {
        // Ignora únicamente los archivos temporales/log del sistema raíz
        ignored: ["**/DumpStack.log.tmp", "C:\\*.tmp", "C:\\*.log"],
        // Polling asegura que Windows notifique a Vite cuando guardas un archivo
        usePolling: true,
        interval: 100,
      },
    },

    plugins: [tailwindcss()],
  },
});
