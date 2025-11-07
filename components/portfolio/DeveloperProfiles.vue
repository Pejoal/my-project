<template>
  <section class="my-12" data-aos="fade-up">
    <div class="flex items-center justify-center mb-8">
      <FontAwesomeIcon :icon="faGooglePlay" class="w-8 h-8 text-teal-500 dark:text-teal-400 mr-3" />
      <h2 class="font-extrabold text-4xl text-gray-800 dark:text-white relative">
        Google Play Developer Profile
        <span class="absolute -bottom-2 left-0 w-16 h-1 bg-teal-500 rounded"></span>
      </h2>
    </div>
    <div
      class="bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-900 dark:to-blue-900 rounded-xl shadow-lg p-6 text-center border border-teal-200 dark:border-teal-800"
    >
      <p class="text-gray-600 dark:text-gray-300 mb-4">
        Explore all my mobile apps on my Google Play Developer profile.
      </p>
      <a
        href="https://play.google.com/store/apps/dev?id=7584224843331524823"
        class="inline-flex items-center px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-lg transition-colors duration-300"
        target="_blank"
      >
        <FontAwesomeIcon :icon="faGooglePlay" class="mr-2" />
        Visit Google Play Profile
      </a>

      <!-- App Store Section -->
      <div class="mt-6 pt-6 border-t border-teal-200 dark:border-teal-600">
        <p class="text-gray-600 dark:text-gray-300 mb-4">My apps are also available on the Apple App Store.</p>
        <a href="#" class="inline-flex items-center px-6 py-3 bg-gray-400 text-white rounded-lg cursor-not-allowed">
          <FontAwesomeIcon :icon="faApple" class="mr-2" />
          Coming Soon to App Store
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faGooglePlay, faApple } from '@fortawesome/free-brands-svg-icons';
</script>
