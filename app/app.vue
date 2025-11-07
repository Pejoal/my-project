<template>
  <div
    class="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900"
  >
    <NuxtRouteAnnouncer />

    <!-- Navigation -->
    <AppNavigation :is-dark="isDark" @toggle-dark-mode="toggleDarkMode" />

    <!-- Hero Section -->
    <HeroSection />

    <!-- About Section -->
    <AboutSection />

    <!-- Apps Portfolio Section -->
    <AppsPortfolioSection
      :german-apps="germanApps"
      :english-apps="englishApps"
      :spanish-apps="spanishApps"
      :italian-apps="italianApps"
      :other-language-apps="otherLanguageApps"
      :utility-apps="utilityApps"
      :test-apps="testApps"
      :game-apps="gameApps"
    />

    <!-- Contact Section -->
    <ContactSection />

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script setup>
import { useAppData, useDarkMode } from '~/composables/useApp';

// Use composables for app data and dark mode
const { germanApps, englishApps, spanishApps, italianApps, otherLanguageApps, utilityApps, testApps, gameApps } =
  useAppData();
const { isDark, toggleDarkMode } = useDarkMode();

// SEO
useSeoMeta({
  title: 'Pejoal - Mobile App Developer & Language Learning Expert',
  ogTitle: 'Pejoal - Mobile App Developer & Language Learning Expert',
  description:
    'Professional mobile app developer specializing in educational apps. Creator of language learning apps for German, English, Spanish, Italian and more.',
  ogDescription:
    'Professional mobile app developer specializing in educational apps. Creator of language learning apps for German, English, Spanish, Italian and more.',
  ogImage: '/og-image.png',
  twitterCard: 'summary_large_image',
});
</script>
