<!-- components/AppCard.vue -->
<template>
  <div
    :class="`
      group transition-all duration-300 hover:scale-105 hover:shadow-xl relative
      ${horizontal ? 'w-[280px] shrink-0' : 'w-full'}
      bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700
      p-6 shadow-lg hover:shadow-2xl
    `"
  >
    <!-- Horizontal Layout -->
    <div v-if="horizontal" class="text-center">
      <div
        :class="`w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 ${getColorClasses(color).bg} group-hover:scale-110 overflow-hidden`"
      >
        <img v-if="isUrl(app.icon)" :src="app.icon" :alt="app.title" class="w-full h-full object-cover" />
        <span v-else class="text-4xl">{{ app.icon }}</span>
      </div>

      <div class="space-y-2">
        <h4
          class="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
        >
          {{ app.title }}
        </h4>
        <p class="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 leading-relaxed">
          {{ app.description }}
        </p>
      </div>

      <!-- Store Links -->
      <div class="flex justify-center gap-3 mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
        <a
          v-if="app.iosId"
          :href="`https://apps.apple.com/app/id${app.iosId}`"
          target="_blank"
          class="flex items-center gap-1.5 px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-xs font-medium hover:bg-blue-200 dark:hover:bg-blue-800 transition"
        >
          <Icon name="simple-icons:appstore" class="w-4 h-4" />
          iOS
        </a>
        <a
          v-if="app.id"
          :href="`https://play.google.com/store/apps/details?id=com.pejoal.${app.id}`"
          target="_blank"
          class="flex items-center gap-1.5 px-3 py-1.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg text-xs font-medium hover:bg-green-200 dark:hover:bg-green-800 transition"
        >
          <Icon name="simple-icons:googleplay" class="w-4 h-4" />
          Android
        </a>
      </div>
    </div>

    <!-- Vertical Layout -->
    <div v-else class="flex items-center space-x-4">
      <div
        :class="`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 ${getColorClasses(color).bg} group-hover:scale-110 overflow-hidden`"
      >
        <img v-if="isUrl(app.icon)" :src="app.icon" :alt="app.title" class="w-full h-full object-cover" />
        <span v-else class="text-3xl">{{ app.icon }}</span>
      </div>

      <div class="flex-1 min-w-0">
        <h4
          class="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2"
        >
          {{ app.title }}
        </h4>
        <p class="text-gray-600 dark:text-gray-300 line-clamp-2 leading-relaxed">
          {{ app.description }}
        </p>

        <div class="flex gap-2 mt-3">
          <a
            v-if="app.iosId"
            :href="`https://apps.apple.com/app/id${app.iosId}`"
            target="_blank"
            class="flex items-center gap-1 text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded hover:bg-blue-200 dark:hover:bg-blue-800 transition"
          >
            <Icon name="simple-icons:appstore" class="w-3.5 h-3.5" />
            iOS
          </a>
          <a
            v-if="app.id"
            :href="`https://play.google.com/store/apps/details?id=com.pejoal.${app.id}`"
            target="_blank"
            class="flex items-center gap-1 text-xs px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded hover:bg-green-200 dark:hover:bg-green-800 transition"
          >
            <Icon name="simple-icons:googleplay" class="w-3.5 h-3.5" />
            Android
          </a>
        </div>
      </div>

      <Icon
        name="heroicons:arrow-top-right-on-square"
        class="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-colors"
      />
    </div>

    <div
      class="absolute inset-0 bg-linear-to-r from-blue-600/10 to-indigo-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
    ></div>
  </div>
</template>

<script setup>
defineProps({
  app: Object,
  color: { type: String, default: 'blue' },
  horizontal: { type: Boolean, default: false },
});

const isUrl = (str) => {
  if (!str) return false;
  return str.startsWith('http') || str.startsWith('/') || str.startsWith('assets');
};

const getColorClasses = (color) => {
  const colors = {
    blue: { bg: 'bg-blue-100 dark:bg-blue-900/30' },
    indigo: { bg: 'bg-indigo-100 dark:bg-indigo-900/30' },
    red: { bg: 'bg-red-100 dark:bg-red-900/30' },
    green: { bg: 'bg-green-100 dark:bg-green-900/30' },
    purple: { bg: 'bg-purple-100 dark:bg-purple-900/30' },
    emerald: { bg: 'bg-emerald-100 dark:bg-emerald-900/30' },
    violet: { bg: 'bg-violet-100 dark:bg-violet-900/30' },
    pink: { bg: 'bg-pink-100 dark:bg-pink-900/30' },
  };
  return colors[color] || colors.blue;
};
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
