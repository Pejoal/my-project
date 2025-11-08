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

    <SkillsSection />

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
    <WebProjectsSection />

    <!-- Contact Section -->
    <ContactSection />

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script setup>
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useAppData, useDarkMode } from '~/composables/useApp';
onMounted(() => {
  AOS.init({
    duration: 800,
    once: true,
    easing: 'ease-out-cubic',
  });
});

// Use composables for app data and dark mode
const { germanApps, englishApps, spanishApps, italianApps, otherLanguageApps, utilityApps, testApps, gameApps } =
  useAppData();
const { isDark, toggleDarkMode } = useDarkMode();

// SEO
useSeoMeta({
  title: 'Pejoal Hanna - Full Stack Developer',
  ogTitle: 'Pejoal Hanna - Full Stack Developer',
  description:
    'Professional full-stack developer specializing in cross-platform mobile applications and web systems/apps. Experienced in CSS, React Native, Expo, PHP, Laravel, MongoDB, MariaDB/MySQL, and Node.js with published apps on major app stores.',
  ogDescription:
    'Professional full-stack developer specializing in cross-platform mobile applications and web systems/apps. Experienced in CSS, React Native, Expo, PHP, Laravel, MongoDB, MariaDB/MySQL, and Node.js with published apps on major app stores.',
  // ogImage: '/og-image.png',
  twitterCard: 'summary_large_image',
});
</script>
