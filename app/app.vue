<template>
  <div
    class="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900"
  >
    <NuxtRouteAnnouncer />

    <!-- Navigation -->
    <nav
      class="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center space-x-2">
            <div
              class="w-10 h-10 bg-linear-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center"
            >
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
            @click="toggleDarkMode"
            class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <Icon :name="isDark ? 'heroicons:sun' : 'heroicons:moon'" class="w-5 h-5" />
          </button>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center">
          <div
            class="w-32 h-32 mx-auto mb-8 bg-linear-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl"
          >
            <span class="text-white font-bold text-5xl">P</span>
          </div>

          <h1 class="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I'm
            <span class="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">Pejoal</span>
          </h1>

          <p class="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Mobile App Developer & Language Learning Expert. I create educational apps that help millions of people
            learn languages and improve their skills.
          </p>

          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="https://apps.apple.com/developer/pejoal-nagy-nageep-hanna/id1848573493"
              target="_blank"
              class="flex items-center gap-3 bg-black text-white px-8 py-4 rounded-2xl hover:bg-gray-800 transition-colors shadow-lg"
            >
              <Icon name="simple-icons:appstore" class="w-6 h-6" />
              <div class="text-left">
                <div class="text-xs">Download on the</div>
                <div class="font-semibold">App Store</div>
              </div>
            </a>

            <a
              href="https://play.google.com/store/apps/dev?id=7584224843331524823"
              target="_blank"
              class="flex items-center gap-3 bg-green-600 text-white px-8 py-4 rounded-2xl hover:bg-green-700 transition-colors shadow-lg"
            >
              <Icon name="simple-icons:googleplay" class="w-6 h-6" />
              <div class="text-left">
                <div class="text-xs">Get it on</div>
                <div class="font-semibold">Google Play</div>
              </div>
            </a>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div class="text-center">
              <div class="text-3xl font-bold text-gray-900 dark:text-white">20+</div>
              <div class="text-gray-600 dark:text-gray-300">Published Apps</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-gray-900 dark:text-white">1M+</div>
              <div class="text-gray-600 dark:text-gray-300">Downloads</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-gray-900 dark:text-white">8</div>
              <div class="text-gray-600 dark:text-gray-300">Languages</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-6">About Me</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm a passionate mobile app developer specializing in educational applications. My mission is to make
            language learning accessible and enjoyable for everyone through innovative mobile experiences.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            class="text-center p-6 bg-linear-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl"
          >
            <div class="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Icon name="heroicons:device-phone-mobile" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Mobile Development</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Expert in React Native and native app development for iOS and Android platforms.
            </p>
          </div>

          <div
            class="text-center p-6 bg-linear-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl"
          >
            <div class="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Icon name="heroicons:academic-cap" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Education Tech</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Creating innovative learning experiences that make education engaging and effective.
            </p>
          </div>

          <div
            class="text-center p-6 bg-linear-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-2xl"
          >
            <div class="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Icon name="heroicons:language" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Language Learning</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Specialized in creating comprehensive language learning apps for multiple languages.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Apps Portfolio Section -->
    <section id="apps" class="py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-16">
          <div
            class="inline-flex items-center gap-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-2xl mb-6"
          >
            <Icon name="heroicons:rocket-launch" class="w-6 h-6" />
            <span class="font-semibold">My Apps Portfolio</span>
          </div>
          <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-6">Discover My Apps</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore my collection of educational and utility apps that have helped millions of users worldwide.
          </p>
        </div>

        <!-- German Learning Apps -->
        <AppSection
          title="🇩🇪 German Learning Apps"
          description="Comprehensive German language learning suite from A1 to C2 level"
          :apps="germanApps"
          color="blue"
        />

        <!-- English Learning Apps -->
        <AppSection
          title="🇺🇸 English Learning Apps"
          description="Master English with our interactive learning platform"
          :apps="englishApps"
          color="indigo"
        />

        <!-- Spanish Learning Apps -->
        <AppSection
          title="🇪🇸 Spanish Learning Apps"
          description="Learn Spanish effectively with our comprehensive course"
          :apps="spanishApps"
          color="red"
        />

        <!-- Italian Learning Apps -->
        <AppSection
          title="🇮🇹 Italian Learning Apps"
          description="Discover the beauty of Italian language through interactive lessons"
          :apps="italianApps"
          color="green"
        />

        <!-- Other Language Apps -->
        <AppSection
          title="🌍 Other Languages"
          description="Explore French, Russian and more languages"
          :apps="otherLanguageApps"
          color="purple"
        />

        <!-- Utility Apps -->
        <AppSection
          title="🛠️ Utility Apps"
          description="Powerful tools for productivity and daily tasks"
          :apps="utilityApps"
          color="emerald"
        />

        <!-- Test & Assessment Apps -->
        <AppSection
          title="🧠 Tests & Assessments"
          description="Challenge yourself with IQ tests, personality assessments, and trivia"
          :apps="testApps"
          color="violet"
        />

        <!-- Games -->
        <AppSection
          title="🎮 Games"
          description="Fun and engaging puzzle games for entertainment"
          :apps="gameApps"
          color="pink"
        />
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-6">Let's Connect</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <a
            href="https://apps.apple.com/developer/pejoal-nagy-nageep-hanna/id1848573493"
            target="_blank"
            class="flex items-center gap-4 p-6 bg-gray-50 dark:bg-gray-700 rounded-2xl hover:shadow-lg transition-all hover:scale-105"
          >
            <Icon name="simple-icons:appstore" class="w-8 h-8 text-blue-600" />
            <div>
              <div class="font-semibold text-gray-900 dark:text-white">App Store</div>
              <div class="text-sm text-gray-600 dark:text-gray-300">iOS Apps</div>
            </div>
          </a>

          <a
            href="https://play.google.com/store/apps/dev?id=7584224843331524823"
            target="_blank"
            class="flex items-center gap-4 p-6 bg-gray-50 dark:bg-gray-700 rounded-2xl hover:shadow-lg transition-all hover:scale-105"
          >
            <Icon name="simple-icons:googleplay" class="w-8 h-8 text-green-600" />
            <div>
              <div class="font-semibold text-gray-900 dark:text-white">Google Play</div>
              <div class="text-sm text-gray-600 dark:text-gray-300">Android Apps</div>
            </div>
          </a>

          <a
            href="https://github.com/pejoal"
            target="_blank"
            class="flex items-center gap-4 p-6 bg-gray-50 dark:bg-gray-700 rounded-2xl hover:shadow-lg transition-all hover:scale-105"
          >
            <Icon name="simple-icons:github" class="w-8 h-8 text-gray-900 dark:text-white" />
            <div>
              <div class="font-semibold text-gray-900 dark:text-white">GitHub</div>
              <div class="text-sm text-gray-600 dark:text-gray-300">Open Source</div>
            </div>
          </a>

          <a
            href="https://pejoal.github.io/"
            target="_blank"
            class="flex items-center gap-4 p-6 bg-gray-50 dark:bg-gray-700 rounded-2xl hover:shadow-lg transition-all hover:scale-105"
          >
            <Icon name="heroicons:globe-alt" class="w-8 h-8 text-indigo-600" />
            <div>
              <div class="font-semibold text-gray-900 dark:text-white">Website</div>
              <div class="text-sm text-gray-600 dark:text-gray-300">Portfolio</div>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer
      class="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
    >
      <div class="max-w-7xl mx-auto">
        <div class="text-center">
          <div class="flex items-center justify-center gap-2 mb-4">
            <div class="w-8 h-8 bg-linear-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-sm">P</span>
            </div>
            <span class="font-bold text-xl text-gray-900 dark:text-white">Pejoal</span>
          </div>
          <p class="text-gray-600 dark:text-gray-300 mb-6">
            Building the future of mobile education, one app at a time.
          </p>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            © {{ new Date().getFullYear() }} Pejoal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';

// Dark mode toggle
const isDark = ref(false);
const toggleDarkMode = () => {
  isDark.value = !isDark.value;
  document.documentElement.classList.toggle('dark', isDark.value);
};

// Apps data based on your React Native code
const allApps = ref([
  // German Learning Apps
  {
    id: 'myapp',
    iosId: 'deutschlernen-a1-c2-offline/id6754511381',
    title: 'Learn German A1-C2',
    description: 'Comprehensive German learning app with offline support',
    icon: '🇩🇪',
    category: 'german',
  },
  {
    id: 'a1_a2_german_grammar',
    iosId: 'a1-a2-german-grammar-trainer/id6754821464',
    title: 'A1-A2 German Grammar',
    description: 'Master German grammar fundamentals',
    icon: '📚',
    category: 'german',
  },
  {
    id: 'german_for_nurses',
    iosId: null,
    title: 'German for Nurses',
    description: 'Specialized German course for healthcare professionals',
    icon: '🏥',
    category: 'german',
  },
  {
    id: 'learn_german_from_stories',
    iosId: null,
    title: 'German Stories',
    description: 'Learn German through engaging stories',
    icon: '📖',
    category: 'german',
  },
  // English Learning Apps
  {
    id: 'learn_english_app',
    iosId: 'learn-english-a1-c2/id6754513056',
    title: 'Learn English A1-C2',
    description: 'Complete English learning course',
    icon: '🇺🇸',
    category: 'english',
  },
  {
    id: 'a1_a2_english_grammar',
    iosId: 'a1-a2-english-grammar/id6754511839',
    title: 'A1-A2 English Grammar',
    description: 'English grammar trainer for beginners',
    icon: '📖',
    category: 'english',
  },
  // Spanish Learning Apps
  {
    id: 'learn_spanish_app',
    iosId: 'تعلم-الإسبانية/id6754511440',
    title: 'Learn Spanish',
    description: 'Master Spanish with interactive lessons',
    icon: '🇪🇸',
    category: 'spanish',
  },
  {
    id: 'a1_a2_spanish_grammar',
    iosId: null,
    title: 'A1-A2 Spanish Grammar',
    description: 'Spanish grammar fundamentals',
    icon: '📖',
    category: 'spanish',
  },
  {
    id: 'learn_spanish_from_stories',
    iosId: 'learn-spanish-with-stories/id6754769339',
    title: 'Spanish Stories',
    description: 'Learn Spanish through captivating stories',
    icon: '📚',
    category: 'spanish',
  },
  // Italian Learning Apps
  {
    id: 'learn_italian_app',
    iosId: 'تعلم-الإيطالية/id6754513406',
    title: 'Learn Italian',
    description: 'Discover Italian language and culture',
    icon: '🇮🇹',
    category: 'italian',
  },
  {
    id: 'a1_a2_italian_grammar',
    iosId: null,
    title: 'A1-A2 Italian Grammar',
    description: 'Italian grammar essentials',
    icon: '📖',
    category: 'italian',
  },
  {
    id: 'learn_italian_from_stories',
    iosId: 'learn-italian-with-stories/id6754609859',
    title: 'Italian Stories',
    description: 'Learn Italian with engaging stories',
    icon: '📚',
    category: 'italian',
  },
  // Other Languages
  {
    id: 'learn_french_app',
    iosId: 'apprendre-le-français/id6754800257',
    title: 'Learn French',
    description: 'Master French language with ease',
    icon: '🇫🇷',
    category: 'other',
  },
  {
    id: 'learn_russian',
    iosId: 'تعلم-الروسية-بدون-نت/id6754518388',
    title: 'Learn Russian',
    description: 'Russian language course offline',
    icon: '🇷🇺',
    category: 'other',
  },
  // Utility Apps
  {
    id: 'qr_manager',
    iosId: 'qr-manager-pro/id6754516032',
    title: 'QR Manager Pro',
    description: 'Advanced QR code scanner and generator',
    icon: '🔳',
    category: 'utility',
  },
  {
    id: 'videoplayer',
    iosId: null,
    title: 'Video Player Pro',
    description: 'Professional video player with advanced features',
    icon: '📱',
    category: 'utility',
  },
  {
    id: 'password_manager',
    iosId: 'password-manager-pro-offline/id6754517449',
    title: 'Password Manager Pro',
    description: 'Secure offline password management',
    icon: '🔐',
    category: 'utility',
  },
  // Test Apps
  {
    id: 'iq_test',
    iosId: 'app/pro-iq-test/id6754533659',
    title: 'Pro IQ Test',
    description: 'Professional IQ assessment tool',
    icon: '🧠',
    category: 'test',
  },
  {
    id: 'trivia_test',
    iosId: 'trivia-test-pro/id6754518491',
    title: 'Trivia Test Pro',
    description: 'Challenge your knowledge with trivia',
    icon: '🎯',
    category: 'test',
  },
  {
    id: 'personality_test',
    iosId: 'personality-test-offline/id6754801097',
    title: 'Personality Test',
    description: 'Discover your personality type',
    icon: '✨',
    category: 'test',
  },
  // Games
  {
    id: 'puzzle',
    iosId: 'slides-puzzle/id6754782354',
    title: 'Slides Puzzle',
    description: 'Classic sliding puzzle game',
    icon: '🧩',
    category: 'game',
  },
]);

// Computed properties for filtered apps
const germanApps = computed(() => allApps.value.filter((app) => app.category === 'german'));
const englishApps = computed(() => allApps.value.filter((app) => app.category === 'english'));
const spanishApps = computed(() => allApps.value.filter((app) => app.category === 'spanish'));
const italianApps = computed(() => allApps.value.filter((app) => app.category === 'italian'));
const otherLanguageApps = computed(() => allApps.value.filter((app) => app.category === 'other'));
const utilityApps = computed(() => allApps.value.filter((app) => app.category === 'utility'));
const testApps = computed(() => allApps.value.filter((app) => app.category === 'test'));
const gameApps = computed(() => allApps.value.filter((app) => app.category === 'game'));

// Function to open app store
const openAppStore = (appId, iosId, appName) => {
  let storeUrl = 'https://pejoal.github.io/';
  if (typeof window !== 'undefined') {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    if (isIOS && iosId) {
      storeUrl = `https://apps.apple.com/app/${iosId}`;
    } else if (appId) {
      storeUrl = `https://play.google.com/store/apps/details?id=com.pejoal.${appId}`;
    }
  }
  window.open(storeUrl, '_blank');
};

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
