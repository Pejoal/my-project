<template>
  <section class="my-12">
    <div class="flex items-center justify-center mb-8">
      <FontAwesomeIcon :icon="faMobile" class="w-8 h-8 text-teal-500 dark:text-teal-400 mr-3" />
      <h2 class="font-extrabold text-4xl text-gray-800 dark:text-white relative">
        Mobile Apps
        <span class="absolute -bottom-2 left-0 w-16 h-1 bg-teal-500 rounded"></span>
      </h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="app in mobileApps"
        :key="app.id"
        class="bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-900 dark:to-blue-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-teal-200 dark:border-teal-800 hover:scale-105"
        data-aos="flip-up"
        data-aos-duration="600"
      >
        <div class="text-center mb-4">
          <div class="text-4xl mb-3">{{ app.icon }}</div>
          <h3 class="font-bold text-xl text-gray-800 dark:text-white mb-2">{{ app.name }}</h3>
          <span
            class="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-teal-100 dark:bg-teal-800 text-teal-800 dark:text-teal-200"
          >
            {{ app.category }}
          </span>
        </div>
        <p class="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">{{ app.description }}</p>

        <!-- Stats -->
        <div class="flex justify-between items-center mb-4 text-xs text-gray-500 dark:text-gray-400">
          <span>⭐ {{ app.rating }}/5</span>
          <span>📥 {{ app.downloads }}</span>
        </div>

        <!-- Features -->
        <div class="mb-4">
          <h4 class="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Features:</h4>
          <div class="flex flex-wrap gap-1">
            <span
              v-for="feature in app.features.slice(0, 2)"
              :key="feature"
              class="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 rounded"
            >
              {{ feature }}
            </span>
          </div>
        </div>

        <!-- Store Links -->
        <div class="space-y-2">
          <a
            :href="`https://play.google.com/store/apps/details?id=${app.id}`"
            class="flex items-center justify-center w-full px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg transition-colors duration-300"
            target="_blank"
          >
            <FontAwesomeIcon :icon="faGooglePlay" class="mr-2" />
            Google Play
          </a>
          <div class="flex space-x-2">
            <div
              class="flex-1 px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300 rounded-lg text-center cursor-not-allowed"
            >
              <FontAwesomeIcon :icon="faApple" class="mr-2" />
              App Store
            </div>
            <div
              class="flex-1 px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300 rounded-lg text-center cursor-not-allowed"
            >
              <FontAwesomeIcon :icon="faGlobe" class="mr-2" />
              Web
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faGooglePlay, faApple } from '@fortawesome/free-brands-svg-icons';
import { faMobile, faGlobe } from '@fortawesome/free-solid-svg-icons';

const mobileApps = ref([
  {
    id: 'com.pejoal.myapp',
    name: 'German Learning App',
    description:
      'Comprehensive German language learning app with interactive lessons, vocabulary building, pronunciation practice, and cultural insights.',
    icon: '🇩🇪',
    category: 'Education',
    features: ['Interactive Lessons', 'Speech Recognition', 'Progress Tracking', 'Cultural Insights'],
    downloads: '10K+',
    rating: 4.5,
  },
  {
    id: 'com.pejoal.learn_english_app',
    name: 'English Learning App',
    description:
      'Master English with engaging lessons, comprehensive grammar exercises, vocabulary building, and real-world conversation practice.',
    icon: '🇺🇸',
    category: 'Education',
    features: ['Business English', 'Grammar Exercises', 'Conversation Practice', 'Pronunciation Guide'],
    downloads: '25K+',
    rating: 4.7,
  },
  {
    id: 'com.pejoal.learn_french_app',
    name: 'French Learning App',
    description:
      'Learn French from basics to advanced with cultural insights, pronunciation guides, and immersive content.',
    icon: '🇫🇷',
    category: 'Education',
    features: ['Cultural Insights', 'Regional Dialects', 'Literature Excerpts', 'Conversation Scenarios'],
    downloads: '15K+',
    rating: 4.4,
  },
  {
    id: 'com.pejoal.iq_test',
    name: 'IQ Test Pro',
    description:
      'Challenge your mind with comprehensive IQ tests, cognitive assessments, and brain training exercises.',
    icon: '🧠',
    category: 'Entertainment',
    features: ['Multiple Test Types', 'Detailed Analytics', 'Brain Training', 'Progress Reports'],
    downloads: '50K+',
    rating: 4.8,
  },
  {
    id: 'com.pejoal.german_for_nurses',
    name: 'German for Nurses',
    description: 'Specialized German language app designed for healthcare professionals and nursing students.',
    icon: '👩‍⚕️',
    category: 'Medical',
    features: ['Medical Terminology', 'Patient Communication', 'Healthcare Scenarios', 'Professional Vocabulary'],
    downloads: '5K+',
    rating: 4.9,
  },
  {
    id: 'com.pejoal.videoplayer',
    name: 'Advanced Video Player',
    description:
      'Feature-rich video player with subtitle support, multiple format compatibility, and advanced playback controls.',
    icon: '🎬',
    category: 'Media',
    features: ['4K Playback', 'Subtitle Support', 'Gesture Controls', 'Playlist Management'],
    downloads: '100K+',
    rating: 4.6,
  },
]);
</script>
