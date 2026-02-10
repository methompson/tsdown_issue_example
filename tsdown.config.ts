import { defineConfig } from "tsdown";

import Vue from "unplugin-vue/rolldown";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";

export default defineConfig({
  entry: ["./src/main.ts"],
  platform: "browser",
  plugins: [Vue({ isProduction: true }), VueI18nPlugin()],
  tsconfig: "./tsconfig.json",
});
