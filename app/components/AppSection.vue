<template>
  <section id="about" class="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-6">About Me</h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          I'm a passionate software developer with a strong focus on mobile experiences. While I specialize in creating
          accessible and enjoyable educational apps, particularly for language learning, I also build a diverse range of
          utility apps, quizzes, and games.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Card 1: Mobile Development -->
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

        <!-- Card 2: Language Learning (Updated from original) -->
        <div
          class="text-center p-6 bg-linear-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-2xl"
        >
          <div class="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Icon name="heroicons:language" class="w-8 h-8 text-white" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Language Learning</h3>
          <p class="text-gray-600 dark:text-gray-300">
            Specialized in creating comprehensive learning apps for German, English, Spanish, and more.
          </p>
        </div>

        <!-- Card 3: Utilities, Quizzes & Games (Updated from original) -->
        <div
          class="text-center p-6 bg-linear-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl"
        >
          <div class="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <!-- Using puzzle-piece to cover games & quizzes -->
            <Icon name="heroicons:puzzle-piece" class="w-8 h-8 text-white" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Utilities, Quizzes & Games</h3>
          <p class="text-gray-600 dark:text-gray-300">
            Building useful tools like password managers, QR scanners, and engaging trivia & puzzle games.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  apps: {
    type: Array,
    default: () => [],
  },
  color: {
    type: String,
    default: 'blue',
  },
  layout: {
    type: String,
    default: 'horizontal', // 'horizontal' or 'grid'
  },
});

const getIcon = (title) => {
  if (title.includes('🇩🇪') || title.includes('German')) return '🇩🇪';
  if (title.includes('🇺🇸') || title.includes('English')) return '🇺🇸';
  if (title.includes('🇪🇸') || title.includes('Spanish')) return '🇪🇸';
  if (title.includes('🇮🇹') || title.includes('Italian')) return '🇮🇹';
  if (title.includes('🌍') || title.includes('Languages')) return '🌍';
  if (title.includes('🛠️') || title.includes('Utility')) return '🛠️';
  if (title.includes('🧠') || title.includes('Test')) return '🧠';
  if (title.includes('🎮') || title.includes('Games')) return '🎮';
  return '📱';
};

const getColorClasses = (color) => {
  const colors = {
    blue: {
      bg: 'bg-blue-100 dark:bg-blue-900/30',
      border: 'border-blue-200 dark:border-blue-700',
      text: 'text-blue-600 dark:text-blue-400',
    },
    indigo: {
      bg: 'bg-indigo-100 dark:bg-indigo-900/30',
      border: 'border-indigo-200 dark:border-indigo-700',
      text: 'text-indigo-600 dark:text-indigo-400',
    },
    red: {
      bg: 'bg-red-100 dark:bg-red-900/30',
      border: 'border-red-200 dark:border-red-700',
      text: 'text-red-600 dark:text-red-400',
    },
    green: {
      bg: 'bg-green-100 dark:bg-green-900/30',
      border: 'border-green-200 dark:border-green-700',
      text: 'text-green-600 dark:text-green-400',
    },
    purple: {
      bg: 'bg-purple-100 dark:bg-purple-900/30',
      border: 'border-purple-200 dark:border-purple-700',
      text: 'text-purple-600 dark:text-purple-400',
    },
    emerald: {
      bg: 'bg-emerald-100 dark:bg-emerald-900/30',
      border: 'border-emerald-200 dark:border-emerald-700',
      text: 'text-emerald-600 dark:text-emerald-400',
    },
    violet: {
      bg: 'bg-violet-100 dark:bg-violet-900/30',
      border: 'border-violet-200 dark:border-violet-700',
      text: 'text-violet-600 dark:text-violet-400',
    },
    pink: {
      bg: 'bg-pink-100 dark:bg-pink-900/30',
      border: 'border-pink-200 dark:border-pink-700',
      text: 'text-pink-600 dark:text-pink-400',
    },
  };
  return colors[color] || colors.blue;
};
</script>

<style scoped>
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
