<template>
  <div class="mb-12">
    <!-- Section Header -->
    <div class="flex items-center mb-6">
      <div :class="`w-12 h-12 rounded-2xl flex items-center justify-center mr-4 ${getColorClasses(color).bg}`">
        <span class="text-2xl">{{ getIcon(title) }}</span>
      </div>
      <div class="flex-1">
        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-1">{{ title }}</h3>
        <p class="text-gray-600 dark:text-gray-300">{{ description }}</p>
      </div>
    </div>

    <!-- Apps Grid for vertical layout -->
    <div v-if="apps.length > 0 && layout === 'grid'" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <AppCard
        v-for="app in apps"
        :key="app.id"
        :app="app"
        :color="color"
        @click="openAppStore(app.id, app.iosId, app.title)"
      />
    </div>

    <!-- Apps Horizontal Scroll for horizontal layout -->
    <div v-else-if="apps.length > 0" class="flex overflow-x-auto gap-4 pb-4 scrollbar-hide">
      <AppCard
        v-for="app in apps"
        :key="app.id"
        :app="app"
        :color="color"
        :horizontal="true"
        @click="openAppStore(app.id, app.iosId, app.title)"
        class="min-w-[280px]"
      />
    </div>

    <!-- Empty State -->
    <div v-else class="text-center py-8">
      <div class="text-gray-400 text-lg">No apps in this category yet</div>
    </div>
  </div>
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
