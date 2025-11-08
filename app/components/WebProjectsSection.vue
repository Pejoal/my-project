<template>
  <section id="web-projects" class="py-20 px-4 bg-gray-50 dark:bg-gray-900">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16" data-aos="fade-up">
        <div
          class="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-2xl mb-6"
        >
          <Icon name="heroicons:code-bracket" class="w-6 h-6" />
          <span class="font-bold">Web Projects</span>
        </div>
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Full-Stack Web Apps</h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          From dashboards to e-commerce — built with modern stacks.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(proj, index) in projects"
          :key="proj.title"
          class="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
          data-aos="zoom-in"
          :data-aos-delay="(index + 1) * 100"
        >
          <div class="h-48 relative overflow-hidden">
            <span
              v-if="proj.isNew"
              class="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-md"
            >
              NEW
            </span>

            <img
              :src="proj.image"
              :alt="proj.title"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
          </div>
          <div class="p-6">
            <h3
              class="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition"
            >
              {{ proj.title }}
            </h3>

            <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">{{ proj.description }}</p>

            <div class="flex gap-4">
              <a
                v-if="proj.live"
                :href="proj.live"
                target="_blank"
                class="flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800"
              >
                <Icon name="heroicons:globe-alt" class="w-4 h-4" /> Live
              </a>
              <a
                v-if="proj.github"
                :href="proj.github"
                target="_blank"
                class="flex items-center gap-1 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
              >
                <Icon name="simple-icons:github" class="w-4 h-4" /> Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const projects = ref([
  {
    title: 'ERP System',
    description:
      'An ERP system built with Laravel, MariaDB, Vue 3, and modern technologies. **Note: The live site may take up to 1 minute to load on the first visit.** Use test (admin) credentials: (Username: pejoal, Password: password).',
    live: 'https://project-manager-tvrw.onrender.com/payroll/dashboard',
    image: 'https://github.com/user-attachments/assets/2b2b4ed9-69f2-446a-924d-909d666a2d89',
    isNew: true,
  },
  {
    title: 'E-Commerce',
    description:
      'This is an E-commerce project developed using Vue.js and Laravel. It features a user-friendly interface with a responsive design that works well on both desktop and mobile devices. The application includes user authentication, product listing, shopping cart functionality, and secure payment processing. It also has an admin panel for managing products, orders, and users.',
    github: 'https://github.com/Pejoal/ecommerce',
    image: '/assets/Screenshot2.png',
    isNew: true,
  },
  {
    title: 'Appointments App',
    description:
      'This app was designed to streamline appointment scheduling and coordination for a driving school. It aimed to enhance efficiency and provide a seamless experience for both instructors and students.',
    github: 'https://github.com/Pejoal/Termin',
    image: '/assets/appointments.png',
  },
  {
    title: 'Cards Game',
    description:
      'A multiplayer card game with features such as card deck management (shuffling, dealing, etc.), animations for card movements, responsive design for different devices, and real-time playing. Developed using Laravel, Inertia, Vue 3, TailwindCSS, Docker, and MySQL.',
    github: 'https://github.com/Pejoal/Game',
    image: '/assets/game1.png',
  },
  {
    title: 'Social Media App',
    description:
      'A social media application developed using Vue.js and Laravel. The app includes features like user authentication, real-time chat, post creation and management, likes, comments, and a friend system. It also includes a responsive design for both desktop and mobile devices.',
    github: 'https://github.com/Pejoal/Social-Media-Platform',
    image: '/assets/social_media_logo.png',
  },
]);
</script>
