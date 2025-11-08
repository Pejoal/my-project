<template>
  <section class="py-20 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-16" data-aos="fade-up">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Skills & Expertise</h2>
        <p class="text-xl text-gray-600 dark:text-gray-300">Full-stack, DevOps, and human-centered soft skills</p>
      </div>

      <!-- ==================== TECHNICAL SKILLS ==================== -->
      <div class="space-y-16 mb-20">
        <!-- Frontend -->
        <SkillCategory
          title="Frontend"
          icon="heroicons:code-bracket"
          color="from-blue-500 to-cyan-500"
          :skills="frontendSkills"
          :progress-ref="frontendProgress"
          data-aos="fade-right"
        />

        <!-- Mobile -->
        <SkillCategory
          title="Mobile"
          icon="heroicons:device-phone-mobile"
          color="from-indigo-500 to-purple-500"
          :skills="mobileSkills"
          :progress-ref="mobileProgress"
          data-aos="fade-left"
        />

        <!-- Backend -->
        <SkillCategory
          title="Backend"
          icon="heroicons:server"
          color="from-green-500 to-emerald-500"
          :skills="backendSkills"
          :progress-ref="backendProgress"
          data-aos="fade-right"
        />

        <!-- Database & DevOps -->
        <SkillCategory
          title="Database & DevOps"
          icon="heroicons:cog-6-tooth"
          color="from-orange-500 to-red-500"
          :skills="dbDevOpsSkills"
          :progress-ref="dbDevOpsProgress"
          data-aos="fade-left"
        />

        <!-- Testing & Tools -->
        <SkillCategory
          title="Testing & Tools"
          icon="heroicons:beaker"
          color="from-pink-500 to-rose-500"
          :skills="testingToolsSkills"
          :progress-ref="testingToolsProgress"
          data-aos="fade-right"
        />
      </div>

      <!-- ==================== SOFT SKILLS ==================== -->
      <div>
        <h3 class="text-2xl font-bold text-center text-gray-800 dark:text-white mb-10" data-aos="fade-up">
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

// ──────────────────────────────────────
// 1. Frontend
// ──────────────────────────────────────
const frontendSkills = [
  { name: 'Vue / Nuxt.js', level: 88, icon: 'simple-icons:nuxtdotjs' },
  { name: 'React', level: 92, icon: 'simple-icons:react' },
  { name: 'Next.js', level: 85, icon: 'simple-icons:nextdotjs' },
  { name: 'Tailwind CSS', level: 96, icon: 'simple-icons:tailwindcss' },
  { name: 'HTML / CSS / JS', level: 98, icon: 'simple-icons:html5' },
  { name: 'TypeScript', level: 87, icon: 'simple-icons:typescript' },
];

// ──────────────────────────────────────
// 2. Mobile
// ──────────────────────────────────────
const mobileSkills = [
  { name: 'React Native', level: 95, icon: 'simple-icons:react' },
  { name: 'Expo', level: 92, icon: 'simple-icons:expo' },
  { name: 'Flutter (Basic)', level: 65, icon: 'simple-icons:flutter' },
];

// ──────────────────────────────────────
// 3. Backend
// ──────────────────────────────────────
const backendSkills = [
  { name: 'Laravel / PHP', level: 85, icon: 'simple-icons:laravel' },
  { name: 'Node.js', level: 82, icon: 'simple-icons:nodedotjs' },
  { name: 'Express.js', level: 84, icon: 'simple-icons:express' },
  { name: 'GraphQL', level: 78, icon: 'simple-icons:graphql' },
  { name: 'REST APIs', level: 90, icon: 'heroicons:globe-alt' },
];

// ──────────────────────────────────────
// 4. Database & DevOps
// ──────────────────────────────────────
const dbDevOpsSkills = [
  { name: 'MongoDB', level: 87, icon: 'simple-icons:mongodb' },
  { name: 'MySQL / MariaDB', level: 90, icon: 'simple-icons:mysql' },
  { name: 'PostgreSQL', level: 80, icon: 'simple-icons:postgresql' },
  { name: 'Redis', level: 75, icon: 'simple-icons:redis' },
  { name: 'Docker', level: 88, icon: 'simple-icons:docker' },
  { name: 'Docker Compose', level: 86, icon: 'simple-icons:docker' },
  { name: 'CI/CD (GitHub Actions)', level: 82, icon: 'simple-icons:githubactions' },
  { name: 'AWS (EC2, S3)', level: 70, icon: 'simple-icons:amazonaws' },
];

// ──────────────────────────────────────
// 5. Testing & Tools
// ──────────────────────────────────────
const testingToolsSkills = [
  { name: 'Jest', level: 85, icon: 'simple-icons:jest' },
  { name: 'Cypress', level: 78, icon: 'simple-icons:cypress' },
  { name: 'Git & GitHub', level: 93, icon: 'simple-icons:git' },
  { name: 'Figma', level: 80, icon: 'simple-icons:figma' },
  { name: 'Postman', level: 90, icon: 'simple-icons:postman' },
];

// ──────────────────────────────────────
// Soft Skills
// ──────────────────────────────────────
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

// ──────────────────────────────────────
// Progress Refs
// ──────────────────────────────────────
const frontendProgress = ref([]);
const mobileProgress = ref([]);
const backendProgress = ref([]);
const dbDevOpsProgress = ref([]);
const testingToolsProgress = ref([]);
const softProgress = ref([]);

// ──────────────────────────────────────
// Animate on Mount
// ──────────────────────────────────────
onMounted(() => {
  const animate = (refs, skills, delay) => {
    setTimeout(() => {
      refs.value.forEach((el, i) => {
        if (el && skills[i]) el.style.width = `${skills[i].level}%`;
      });
    }, delay);
  };

  animate(frontendProgress, frontendSkills, 300);
  animate(mobileProgress, mobileSkills, 400);
  animate(backendProgress, backendSkills, 500);
  animate(dbDevOpsProgress, dbDevOpsSkills, 600);
  animate(testingToolsProgress, testingToolsSkills, 700);
  animate(softProgress, softSkills, 800);
});
</script>
