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

        <ClientOnly>
          <button
            @click="$emit('toggle-dark-mode')"
            class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <!-- Sun icon for dark mode (when dark mode is active, show sun to switch to light) -->
            <svg v-if="isDark" class="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clip-rule="evenodd"
              />
            </svg>
            <!-- Moon icon for light mode (when light mode is active, show moon to switch to dark) -->
            <svg v-else class="w-5 h-5 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          </button>
          <template #fallback>
            <div class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 w-10 h-10"></div>
          </template>
        </ClientOnly>
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
