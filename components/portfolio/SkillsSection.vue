<template>
  <section class="my-12">
    <div class="flex items-center justify-center mb-8">
      <FontAwesomeIcon :icon="faCode" class="w-8 h-8 text-teal-500 dark:text-teal-400 mr-3" />
      <h2 class="font-extrabold text-4xl text-gray-800 dark:text-white relative">
        Technical Skills
        <span class="absolute -bottom-2 left-0 w-16 h-1 bg-teal-500 rounded"></span>
      </h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div
        v-for="(skillGroup, groupName) in skills"
        :key="groupName"
        class="bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-900 dark:to-blue-900 rounded-xl shadow-lg p-6 border border-teal-200 dark:border-teal-800"
        data-aos="zoom-out"
        data-aos-duration="600"
      >
        <h3 class="text-teal-500 dark:text-teal-400 font-bold text-xl mb-4">
          {{ groupName }}
        </h3>
        <ul class="space-y-4">
          <li v-for="skill in skillGroup" :key="skill.name" class="flex flex-col text-gray-700 dark:text-gray-300">
            <div class="flex items-center mb-1">
              <FontAwesomeIcon
                v-if="skill.icon"
                :icon="skill.icon"
                class="mr-3 text-lg text-teal-500 dark:text-teal-400"
              />
              <span v-else class="mr-6"></span>
              <span class="font-medium">{{ skill.name }}</span>
            </div>
            <div class="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
              <div
                class="bg-teal-500 h-2.5 rounded-full transition-all duration-500"
                :style="{ width: `${skill.proficiency}%` }"
              ></div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- Soft Skills Section -->
    <div
      class="mt-12 bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-900 dark:to-blue-900 rounded-xl shadow-lg p-6"
      data-aos="zoom-in"
    >
      <div class="flex items-center justify-center mb-8">
        <FontAwesomeIcon :icon="faStar" class="w-8 h-8 text-teal-500 dark:text-teal-400 mr-3" />
        <h3 class="font-extrabold text-3xl text-gray-800 dark:text-white relative">
          Soft Skills
          <span class="absolute -bottom-2 left-0 w-16 h-1 bg-teal-500 rounded"></span>
        </h3>
      </div>
      <ul class="flex flex-wrap gap-4 justify-center">
        <li
          v-for="skill in softSkills"
          :key="skill"
          class="px-4 py-2 bg-white dark:bg-gray-700 rounded-full shadow-md text-gray-700 dark:text-gray-300 font-medium hover:bg-teal-100 dark:hover:bg-teal-800 transition-colors duration-300"
        >
          {{ skill }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faNodeJs,
  faSass,
  faBootstrap,
  faVuejs,
  faReact,
  faPhp,
  faLaravel,
  faGit,
  faGithub,
  faDocker,
  faLinux,
} from '@fortawesome/free-brands-svg-icons';
import { faCode, faStar } from '@fortawesome/free-solid-svg-icons';

const skills = ref({
  Frontend: [
    { name: 'HTML 5', icon: faHtml5, proficiency: 95 },
    { name: 'CSS 3', icon: faCss3Alt, proficiency: 90 },
    { name: 'Sass', icon: faSass, proficiency: 85 },
    { name: 'Bootstrap 5', icon: faBootstrap, proficiency: 80 },
    { name: 'Tailwind CSS', proficiency: 90 },
    { name: 'JavaScript', icon: faJs, proficiency: 85 },
    { name: 'React.js', icon: faReact, proficiency: 80 },
    { name: 'Vue 3', icon: faVuejs, proficiency: 90 },
    { name: 'TypeScript', proficiency: 70 },
  ],
  Backend: [
    { name: 'PHP 8', icon: faPhp, proficiency: 85 },
    { name: 'Node.js', icon: faNodeJs, proficiency: 80 },
    { name: 'Laravel 11', icon: faLaravel, proficiency: 90 },
    { name: 'MySQL', proficiency: 85 },
    { name: 'MongoDB', proficiency: 75 },
    { name: 'PostgreSQL', proficiency: 70 },
  ],
  'DevOps & Tools': [
    { name: 'Git', icon: faGit, proficiency: 90 },
    { name: 'GitHub', icon: faGithub, proficiency: 90 },
    { name: 'Docker', icon: faDocker, proficiency: 80 },
    { name: 'Linux', icon: faLinux, proficiency: 85 },
    { name: 'AWS', proficiency: 70 },
    { name: 'Google Cloud', proficiency: 65 },
  ],
});

const softSkills = [
  'Communication',
  'Teamwork',
  'Problem-solving',
  'Adaptability',
  'Time Management',
  'Leadership',
  'Critical Thinking',
  'Creativity',
];
</script>
