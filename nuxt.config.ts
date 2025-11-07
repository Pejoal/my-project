// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },

  // Enable static site generation for GitHub Pages
  nitro: {
    prerender: {
      routes: ['/'],
    },
  },

  // Configure for GitHub Pages deployment
  app: {
    baseURL: '/my-project/',
  },

  modules: ['@nuxt/content', '@nuxt/eslint', '@nuxt/image', '@nuxt/scripts', '@nuxt/test-utils', '@nuxt/ui'],
});
