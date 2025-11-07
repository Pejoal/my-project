<template>
  <button
    @click="toggleDarkMode"
    aria-label="Toggle dark mode"
    class="fixed top-6 right-6 z-50 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-600 hover:scale-110"
    data-aos="zoom-in"
  >
    <FontAwesomeIcon :icon="isDarkMode ? faSun : faMoon" class="text-xl text-teal-600 dark:text-teal-400" />
  </button>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const isDarkMode = ref(false);

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  localStorage.setItem('darkMode', isDarkMode.value);
  document.documentElement.classList.toggle('dark', isDarkMode.value);
};

onMounted(() => {
  const savedDarkMode = localStorage.getItem('darkMode');
  isDarkMode.value = savedDarkMode
    ? savedDarkMode === 'true'
    : window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.classList.toggle('dark', isDarkMode.value);
});
</script>
