<template>
  <div
    class="min-h-screen overflow-hidden bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900"
  >
    <NuxtRouteAnnouncer />

    <!-- Navigation -->
    <AppNavigation :is-dark="isDark" @toggle-dark-mode="toggleDarkMode" />

    <NuxtPage />

    <ContactSection />

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script setup>
import { useDarkMode } from '~/composables/useApp';

const { isDark, toggleDarkMode } = useDarkMode();
</script>
