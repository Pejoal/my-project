<!-- components/WebProjectsSection.vue -->
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
          v-for="proj in projects"
          :key="proj.id"
          class="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
          data-aos="zoom-in"
          :data-aos-delay="proj.delay"
        >
          <div
            class="h-48 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50 p-6 flex items-center justify-center relative overflow-hidden"
          >
            <Icon
              :name="proj.icon"
              class="w-20 h-20 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition"
            ></div>
          </div>
          <div class="p-6">
            <h3
              class="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition"
            >
              {{ proj.title }}
            </h3>
            <p class="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">{{ proj.desc }}</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="tag in proj.tags"
                class="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs rounded-full font-medium"
              >
                {{ tag }}
              </span>
            </div>
            <div class="flex gap-3">
              <a
                :href="proj.live"
                target="_blank"
                class="flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800"
              >
                <Icon name="heroicons:globe-alt" class="w-4 h-4" /> Live
              </a>
              <a
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
const projects = [
  {
    id: 1,
    title: 'TaskFlow Pro',
    desc: 'Advanced project management dashboard with real-time collaboration',
    icon: 'heroicons:chart-bar',
    tags: ['Vue 3', 'Pinia', 'Laravel API'],
    live: 'https://taskflow.pejoal.com',
    github: 'https://github.com/pejoal/taskflow',
    delay: 100,
  },
  {
    id: 2,
    title: 'ShopSwift',
    desc: 'E-commerce platform with Stripe & inventory sync',
    icon: 'heroicons:shopping-cart',
    tags: ['Nuxt 3', 'Tailwind', 'Node.js'],
    live: 'https://shopswift.pejoal.com',
    github: 'https://github.com/pejoal/shopswift',
    delay: 200,
  },
  {
    id: 3,
    title: 'LearnHub',
    desc: 'Online course platform with video streaming & quizzes',
    icon: 'heroicons:academic-cap',
    tags: ['React', 'Firebase', 'Stripe'],
    live: 'https://learnhub.pejoal.com',
    github: 'https://github.com/pejoal/learnhub',
    delay: 300,
  },
];
</script>
