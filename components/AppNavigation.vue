<template>
  <nav
    class="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center space-x-2">
          <div class="w-10 h-10 bg-linear-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
            <span class="text-white font-bold text-lg">P</span>
          </div>
          <span class="font-bold text-xl text-gray-900 dark:text-white">Pejoal</span>
        </div>

        <div class="hidden md:flex items-center space-x-8">
          <a
            href="#about"
            class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >About</a
          >
          <a
            href="#apps"
            class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >Apps</a
          >
          <a
            href="#contact"
            class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >Contact</a
          >
        </div>

        <button
          @click="$emit('toggle-dark-mode')"
          class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          <Icon :name="isDark ? 'heroicons:sun' : 'heroicons:moon'" class="w-5 h-5" />
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
defineProps({
  isDark: {
    type: Boolean,
    required: true,
  },
});

defineEmits(['toggle-dark-mode']);
</script>
