<template>
  <section class="my-12">
    <div class="flex items-center justify-center mb-8">
      <FontAwesomeIcon :icon="faGlobe" class="w-8 h-8 text-teal-500 dark:text-teal-400 mr-3" />
      <h2 class="font-extrabold text-4xl text-gray-800 dark:text-white relative">
        Web Projects
        <span class="absolute -bottom-2 left-0 w-16 h-1 bg-teal-500 rounded"></span>
      </h2>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <section
        v-for="project in projects"
        :key="project.title"
        class="bg-white dark:bg-gray-700 border border-teal-200 dark:border-teal-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:scale-105"
        data-aos="fade-up"
        data-aos-duration="600"
      >
        <img
          :src="project.image"
          :alt="`Screenshot of ${project.title} project`"
          class="w-full h-48 object-cover"
          loading="lazy"
        />
        <div class="p-6">
          <h3 class="text-teal-500 dark:text-teal-400 text-xl font-bold mb-3">
            {{ project.title }}
          </h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{{ project.description }}</p>
          <div class="flex flex-wrap gap-3">
            <a
              :href="project.link"
              class="inline-flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-600 hover:bg-gray-900 dark:hover:bg-gray-500 text-white rounded-lg transition-colors duration-300"
              target="_blank"
            >
              <FontAwesomeIcon :icon="faGithub" class="mr-2" />
              GitHub
            </a>
            <a
              :href="project.liveLink === '#' ? '#' : project.liveLink"
              :class="[
                'inline-flex items-center px-4 py-2 rounded-lg transition-colors duration-300',
                project.liveLink === '#'
                  ? 'bg-gray-400 text-white cursor-not-allowed'
                  : 'bg-teal-500 hover:bg-teal-600 text-white',
              ]"
              :target="project.liveLink === '#' ? '_self' : '_blank'"
            >
              <FontAwesomeIcon :icon="faGlobe" class="mr-2" />
              {{ project.liveLink === '#' ? 'Demo Coming Soon' : 'Live Demo' }}
            </a>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const projects = ref([
  {
    title: 'E-Commerce Platform',
    description:
      'Full-stack e-commerce solution with Vue.js frontend and Laravel backend. Features user authentication, shopping cart, payment processing, and admin panel for product management.',
    link: 'https://github.com/Pejoal/ecommerce',
    liveLink: '#',
    image: '/assets/Screenshot2.png',
  },
  {
    title: 'Appointment Scheduling App',
    description:
      'Streamlined appointment booking system for driving schools. Built to enhance efficiency and provide seamless experience for instructors and students.',
    link: 'https://github.com/Pejoal/Termin',
    liveLink: '#',
    image: '/assets/appointments.png',
  },
  {
    title: 'Multiplayer Card Game',
    description:
      'Real-time multiplayer card game with deck management, animations, and responsive design. Built with Laravel, Inertia.js, Vue 3, and TailwindCSS.',
    link: 'https://github.com/Pejoal/Game',
    liveLink: '#',
    image: '/assets/game1.png',
  },
  {
    title: 'Social Media Platform',
    description:
      'Complete social media application with real-time chat, posts, likes, comments, and friend system. Responsive design for desktop and mobile.',
    link: 'https://github.com/Pejoal/Social-Media-Platform',
    liveLink: '#',
    image: '/assets/social_media_logo.png',
  },
]);
</script>
