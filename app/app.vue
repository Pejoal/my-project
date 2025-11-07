<template>
  <PortfolioLayout>
    <HeaderSection />

    <!-- Section Divider -->
    <div class="flex items-center justify-center my-12">
      <div class="flex-1 h-px bg-gradient-to-r from-transparent via-teal-300 dark:via-teal-600 to-transparent"></div>
      <FontAwesomeIcon :icon="faStar" class="mx-4 text-teal-500 dark:text-teal-400" />
      <div class="flex-1 h-px bg-gradient-to-r from-teal-300 dark:via-teal-600 to-transparent"></div>
    </div>

    <DeveloperProfiles />

    <!-- Section Divider -->
    <div class="flex items-center justify-center my-12">
      <div class="flex-1 h-px bg-gradient-to-r from-transparent via-teal-300 dark:via-teal-600 to-transparent"></div>
      <FontAwesomeIcon :icon="faMobile" class="mx-4 text-teal-500 dark:text-teal-400" />
      <div class="flex-1 h-px bg-gradient-to-r from-teal-300 dark:via-teal-600 to-transparent"></div>
    </div>

    <MobileAppsSection />

    <!-- Section Divider -->
    <div class="flex items-center justify-center my-12">
      <div class="flex-1 h-px bg-gradient-to-r from-transparent via-teal-300 dark:via-teal-600 to-transparent"></div>
      <FontAwesomeIcon :icon="faCode" class="mx-4 text-teal-500 dark:text-teal-400" />
      <div class="flex-1 h-px bg-gradient-to-r from-teal-300 dark:via-teal-600 to-transparent"></div>
    </div>

    <WebProjectsSection />

    <!-- Section Divider -->
    <div class="flex items-center justify-center my-12">
      <div class="flex-1 h-px bg-gradient-to-r from-transparent via-teal-300 dark:via-teal-600 to-transparent"></div>
      <FontAwesomeIcon :icon="faStar" class="mx-4 text-teal-500 dark:text-teal-400" />
      <div class="flex-1 h-px bg-gradient-to-r from-teal-300 dark:via-teal-600 to-transparent"></div>
    </div>

    <SkillsSection />

    <!-- Section Divider -->
    <div class="flex items-center justify-center my-12">
      <div class="flex-1 h-px bg-gradient-to-r from-transparent via-teal-300 dark:via-teal-600 to-transparent"></div>
      <FontAwesomeIcon :icon="faCode" class="mx-4 text-teal-500 dark:text-teal-400" />
      <div class="flex-1 h-px bg-gradient-to-r from-teal-300 dark:via-teal-600 to-transparent"></div>
    </div>

    <ExperienceSection />
  </PortfolioLayout>
</template>

<script setup>
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faApple,
  faBootstrap,
  faCss3Alt,
  faDocker,
  faGit,
  faGithub,
  faGooglePlay,
  faHtml5,
  faJs,
  faLaravel,
  faLinux,
  faNodeJs,
  faPhp,
  faReact,
  faSass,
  faVuejs,
} from '@fortawesome/free-brands-svg-icons';
import {
  faAward,
  faBookOpen,
  faBrain,
  faBriefcase,
  faChevronRight,
  faCode,
  faDownload,
  faEnvelope,
  faExternalLinkAlt,
  faFilePdf,
  faGamepad,
  faGlobe,
  faGraduationCap,
  faHeart,
  faLanguage,
  faMapMarkerAlt,
  faMobile,
  faMoon,
  faQuestionCircle,
  faStar,
  faSun,
  faUserCircle,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Add icons to library
library.add(
  faGithub,
  faHtml5,
  faCss3Alt,
  faJs,
  faNodeJs,
  faSass,
  faBootstrap,
  faVuejs,
  faReact,
  faPhp,
  faLaravel,
  faGit,
  faDocker,
  faLinux,
  faGooglePlay,
  faApple,
  faSun,
  faMoon,
  faGlobe,
  faMobile,
  faStar,
  faCode,
  faBrain,
  faUserCircle,
  faQuestionCircle,
  faAward,
  faMapMarkerAlt,
  faEnvelope,
  faLanguage,
  faBriefcase,
  faGraduationCap,
  faDownload,
  faFilePdf,
  faChevronRight,
  faExternalLinkAlt,
  faUsers,
  faHeart,
  faBookOpen,
  faGamepad
);

onMounted(() => {
  AOS.init({ duration: 800, easing: 'ease-out-cubic' });
});
</script>
