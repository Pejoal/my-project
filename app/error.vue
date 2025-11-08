<!-- error.vue -->
<template>
  <div
    class="min-h-screen bg-gradient-to-br from-red-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4"
  >
    <div class="max-w-md w-full text-center" data-aos="fade-up">
      <div class="text-8xl font-bold text-red-200 dark:text-red-800 mb-6">
        <Icon name="heroicons:exclamation-triangle" class="w-32 h-32 mx-auto" />
      </div>
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">{{ error.statusCode }} Error</h1>
      <p class="text-gray-600 dark:text-gray-300 mb-6">
        {{ error.message || 'Something went wrong.' }}
      </p>
      <NuxtLink
        to="/"
        class="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition"
      >
        <Icon name="heroicons:home" class="w-5 h-5" />
        Go Home
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
defineProps({
  error: Object,
});
</script>
