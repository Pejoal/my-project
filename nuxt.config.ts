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
    head: {
      script: [
        {
          innerHTML: `
            // Prevent theme flash on page load
            (function() {
              const savedTheme = localStorage.getItem('darkMode');
              const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              const isDark = savedTheme !== null ? savedTheme === 'true' : prefersDark;
              if (isDark) {
                document.documentElement.classList.add('dark');
              }
            })();
          `,
          type: 'text/javascript',
        },
      ],
    },
  },

  modules: ['@nuxt/content', '@nuxt/eslint', '@nuxt/image', '@nuxt/scripts', '@nuxt/test-utils', '@nuxt/ui'],
});
