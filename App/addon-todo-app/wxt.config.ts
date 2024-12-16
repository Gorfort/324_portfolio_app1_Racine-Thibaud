import { defineConfig } from "wxt";

// See https://wxt.dev/api/config.html
export default defineConfig({
  extensionApi: "chrome",
  manifest: {
    name: "Todo App",
    version: "0.0.4",
    description:
      "Cet addon permet de gérer une liste de tâche à faire et de la partager.",
    permissions: ["identity"],
    host_permissions: [],
    browser_specific_settings: {
      gecko: {
        id: "{e0ee3647-ebd3-473b-8e46-5ce85df2733b}",
        strict_min_version: "109.0",
      },
    },
  },
});
