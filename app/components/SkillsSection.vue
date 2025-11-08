<!-- components/SkillsSection.vue -->
<template>
  <section class="py-20 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
    <div class="max-w-7xl mx-auto">
      <!-- Section Title -->
      <div class="text-center mb-16" data-aos="fade-up">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Skills & Expertise</h2>
        <p class="text-xl text-gray-600 dark:text-gray-300">Technical mastery and human-centered soft skills</p>
      </div>

      <!-- Technical Skills -->
      <div class="mb-20">
        <h3 class="text-2xl font-bold text-gray-800 dark:text-white text-center mb-10" data-aos="fade-up">
          Technical Skills
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div
            v-for="(skill, i) in technicalSkills"
            :key="skill.name"
            class="space-y-3"
            data-aos="fade-right"
            :data-aos-delay="i * 80"
          >
            <div class="flex justify-between items-center">
              <div class="flex items-center gap-3">
                <div
                  class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg"
                >
                  <Icon :name="skill.icon" class="w-6 h-6 text-white" />
                </div>
                <span class="font-semibold text-lg text-gray-800 dark:text-white">{{ skill.name }}</span>
              </div>
              <span class="text-sm font-bold text-blue-600 dark:text-blue-400">{{ skill.level }}%</span>
            </div>
            <div class="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div
                ref="techProgress"
                class="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-1500 ease-out"
                :style="{ width: '0%' }"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Soft Skills -->
      <div>
        <h3 class="text-2xl font-bold text-gray-800 dark:text-white text-center mb-10" data-aos="fade-up">
          Soft Skills
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div
            v-for="(skill, i) in softSkills"
            :key="skill.name"
            class="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            data-aos="zoom-in"
            :data-aos-delay="i * 100"
          >
            <div
              class="w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg"
            >
              <Icon :name="skill.icon" class="w-8 h-8 text-white" />
            </div>
            <h4 class="font-bold text-gray-900 dark:text-white mb-2">{{ skill.name }}</h4>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">{{ skill.desc }}</p>
            <div class="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div
                ref="softProgress"
                class="h-full bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full transition-all duration-1200 ease-out"
                :style="{ width: '0%' }"
              ></div>
            </div>
            <span class="mt-2 text-xs font-medium text-emerald-600 dark:text-emerald-400">{{ skill.level }}%</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';

// Technical Skills
const technicalSkills = [
  { name: 'React Native', level: 95, icon: 'simple-icons:react' },
  { name: 'Expo', level: 92, icon: 'simple-icons:expo' },
  { name: 'Nuxt.js / Vue', level: 88, icon: 'simple-icons:nuxtdotjs' },
  { name: 'Laravel / PHP', level: 85, icon: 'simple-icons:laravel' },
  { name: 'Node.js', level: 82, icon: 'simple-icons:nodedotjs' },
  { name: 'MongoDB', level: 87, icon: 'simple-icons:mongodb' },
  { name: 'Tailwind CSS', level: 96, icon: 'simple-icons:tailwindcss' },
  { name: 'Git & GitHub', level: 93, icon: 'simple-icons:git' },
];

// Soft Skills
const softSkills = [
  { name: 'Problem Solving', level: 94, desc: 'Breaking down complex challenges', icon: 'heroicons:puzzle-piece' },
  {
    name: 'Communication',
    level: 90,
    desc: 'Clear, concise, and empathetic',
    icon: 'heroicons:chat-bubble-left-right',
  },
  { name: 'Team Collaboration', level: 88, desc: 'Thriving in cross-functional teams', icon: 'heroicons:user-group' },
  { name: 'Time Management', level: 91, desc: 'Delivering on time, every time', icon: 'heroicons:clock' },
  {
    name: 'Adaptability',
    level: 89,
    desc: 'Quick learner in dynamic environments',
    icon: 'heroicons:arrows-up-down',
  },
  { name: 'Creativity', level: 87, desc: 'Innovative UX & feature ideas', icon: 'heroicons:light-bulb' },
];

// Refs for progress bars
const techProgress = ref([]);
const softProgress = ref([]);

// Animate progress bars on mount
onMounted(() => {
  // Technical
  setTimeout(() => {
    techProgress.value.forEach((el, i) => {
      if (el) el.style.width = `${technicalSkills[i].level}%`;
    });
  }, 300);

  // Soft
  setTimeout(() => {
    softProgress.value.forEach((el, i) => {
      if (el) el.style.width = `${softSkills[i].level}%`;
    });
  }, 500);
});
</script>
