<template>
  <div
    :class="`
      group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl relative
      ${horizontal ? 'w-[280px] shrink-0' : 'w-full'}
      bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700
      p-6 shadow-lg hover:shadow-2xl
    `"
    @click="$emit('click')"
  >
    <!-- Horizontal Layout -->
    <div v-if="horizontal" class="text-center">
      <!-- App Icon -->
      <div 
        :class="`
          w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-4 transition-all duration-300
          ${getColorClasses(color).bg} group-hover:scale-110
        `"
      >
        <span class="text-4xl">{{ app.icon }}</span>
      </div>
      
      <!-- App Info -->
      <div class="space-y-2">
        <h4 class="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {{ app.title }}
        </h4>
        <p class="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 leading-relaxed">
          {{ app.description }}
        </p>
      </div>
      
      <!-- Store Badges -->
      <div class="flex items-center justify-center gap-2 mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
        <div v-if="app.iosId" class="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
          <Icon name="simple-icons:appstore" class="w-3 h-3" />
          <span>iOS</span>
        </div>
        <div v-if="app.id" class="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
          <Icon name="simple-icons:googleplay" class="w-3 h-3" />
          <span>Android</span>
        </div>
      </div>
    </div>

    <!-- Vertical Layout -->
    <div v-else class="flex items-center space-x-4">
      <!-- App Icon -->
      <div 
        :class="`
          w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300
          ${getColorClasses(color).bg} group-hover:scale-110
        `"
      >
        <span class="text-3xl">{{ app.icon }}</span>
      </div>
      
      <!-- App Info -->
      <div class="flex-1 min-w-0">
        <h4 class="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
          {{ app.title }}
        </h4>
        <p class="text-gray-600 dark:text-gray-300 line-clamp-2 leading-relaxed">
          {{ app.description }}
        </p>
        
        <!-- Store Badges -->
        <div class="flex items-center gap-3 mt-3">
          <div v-if="app.iosId" class="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
            <Icon name="simple-icons:appstore" class="w-4 h-4" />
            <span>Available on iOS</span>
          </div>
          <div v-if="app.id" class="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
            <Icon name="simple-icons:googleplay" class="w-4 h-4" />
            <span>Available on Android</span>
          </div>
        </div>
      </div>
      
      <!-- Arrow Icon -->
      <div class="shrink-0">
        <Icon 
          name="heroicons:arrow-top-right-on-square" 
          class="w-6 h-6 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" 
        />
      </div>
    </div>

    <!-- Hover Effect Overlay -->
    <div class="absolute inset-0 bg-linear-to-r from-blue-600/10 to-indigo-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
  </div>
</template>

<script setup>
const props = defineProps({
  app: {
    type: Object,
    required: true
  },
  color: {
    type: String,
    default: 'blue'
  },
  horizontal: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['click'])

const getColorClasses = (color) => {
  const colors = {
    blue: {
      bg: 'bg-blue-100 dark:bg-blue-900/30',
      border: 'border-blue-200 dark:border-blue-700',
      text: 'text-blue-600 dark:text-blue-400'
    },
    indigo: {
      bg: 'bg-indigo-100 dark:bg-indigo-900/30',
      border: 'border-indigo-200 dark:border-indigo-700',
      text: 'text-indigo-600 dark:text-indigo-400'
    },
    red: {
      bg: 'bg-red-100 dark:bg-red-900/30',
      border: 'border-red-200 dark:border-red-700',
      text: 'text-red-600 dark:text-red-400'
    },
    green: {
      bg: 'bg-green-100 dark:bg-green-900/30',
      border: 'border-green-200 dark:border-green-700',
      text: 'text-green-600 dark:text-green-400'
    },
    purple: {
      bg: 'bg-purple-100 dark:bg-purple-900/30',
      border: 'border-purple-200 dark:border-purple-700',
      text: 'text-purple-600 dark:text-purple-400'
    },
    emerald: {
      bg: 'bg-emerald-100 dark:bg-emerald-900/30',
      border: 'border-emerald-200 dark:border-emerald-700',
      text: 'text-emerald-600 dark:text-emerald-400'
    },
    violet: {
      bg: 'bg-violet-100 dark:bg-violet-900/30',
      border: 'border-violet-200 dark:border-violet-700',
      text: 'text-violet-600 dark:text-violet-400'
    },
    pink: {
      bg: 'bg-pink-100 dark:bg-pink-900/30',
      border: 'border-pink-200 dark:border-pink-700',
      text: 'text-pink-600 dark:text-pink-400'
    }
  }
  return colors[color] || colors.blue
}
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