<template>
  <div>
    <!-- Category Header -->
    <div class="flex items-center gap-3 mb-6" data-aos="fade-up">
      <div :class="`w-10 h-10 rounded-lg bg-gradient-to-r ${color} flex items-center justify-center shadow-md`">
        <Icon :name="icon" class="w-5 h-5 text-white" />
      </div>
      <h3 class="text-xl font-bold text-gray-800 dark:text-white">{{ title }}</h3>
    </div>

    <!-- Skills Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div
        v-for="(skill, i) in skills"
        :key="skill.name"
        class="space-y-2"
        :data-aos="i % 2 === 0 ? 'fade-right' : 'fade-left'"
        :data-aos-delay="i * 80"
      >
        <div class="flex justify-between items-center">
          <div class="flex items-center gap-2">
            <Icon :name="skill.icon" class="w-5 h-5 text-gray-600 dark:text-gray-400" />
            <span class="font-medium text-gray-800 dark:text-white">{{ skill.name }}</span>
          </div>
          <span class="text-sm font-bold text-gray-600 dark:text-gray-400">{{ skill.level }}%</span>
        </div>
        <div class="h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div
            :ref="
              (el) => {
                if (el) progressRef[i] = el;
              }
            "
            :class="`h-full bg-gradient-to-r ${color} rounded-full transition-all duration-1400 ease-out`"
            :style="{ width: '0%' }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  icon: String,
  color: String,
  skills: Array,
  progressRef: {
    type: Array,
    required: true,
  },
});
</script>
