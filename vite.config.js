import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import VitePluginGhPages from 'vite-plugin-gh-pages'; // Import the plugin

export default defineConfig({
  plugins: [Vue(), VitePluginGhPages()], 
  base: "/Summarizer/"
});
