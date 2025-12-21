<!-- pages/impressum.vue -->
<template>
  <div
    class="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 pt-24 px-4"
  >
    <div class="max-w-4xl mx-auto">
      <NuxtLink
        to="/"
        class="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 mb-8 font-medium"
      >
        <Icon name="heroicons:arrow-left" class="w-5 h-5" />
        Back to Portfolio
      </NuxtLink>

      <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Impressum</h1>
      <p class="text-sm text-gray-500 dark:text-gray-400 mb-10">Last updated: <strong>December 21, 2025</strong></p>

      <div class="max-w-none space-y-8 prose prose-lg dark:prose-invert">
        <section>
          <div class="dark:text-gray-300">
            <p class="mb-2"><strong>Pejoal Dev Studio</strong></p>
            <p class="mb-2">Owner: Pejoal Hanna</p>
            <p class="mb-2">
              Address:<br />
              Trappstraße 6<br />
              46483 Wesel<br />
              Germany
            </p>
            <p class="mb-2">
              Contact:
              <a href="mailto:pejoal.business@gmail.com" class="text-blue-600 hover:underline">
                pejoal.business@gmail.com
              </a>
            </p>
          </div>
        </section>
      </div>

      <div class="mt-10 pb-4 text-center space-x-4">
        <NuxtLink
          to="/terms"
          class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
        >
          Terms and Conditions
        </NuxtLink>
        <span class="text-gray-400">|</span>
        <NuxtLink
          to="/privacy-policy"
          class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
        >
          Privacy Policy
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Impressum - Pejoal Dev Studio',
  description: 'Legal Notice / Impressum for Pejoal Dev Studio.',
  robots: 'noindex',
});
</script>
