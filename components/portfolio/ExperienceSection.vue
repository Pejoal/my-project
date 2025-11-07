<template>
  <section class="my-12">
    <div class="flex items-center justify-center mb-8">
      <svg
        class="w-8 h-8 text-teal-500 dark:text-teal-400 mr-3"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          d="M20 6h-3V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM9 4h6v2H9V4zm11 15H4V8h3v2h2V8h6v2h2V8h3v11z"
        />
      </svg>
      <h2 class="font-extrabold text-4xl text-gray-800 dark:text-white relative">
        Professional Experience
        <span class="absolute -bottom-2 left-0 w-16 h-1 bg-teal-500 rounded"></span>
      </h2>
    </div>
    <div class="relative border-l-4 border-teal-500 pl-8">
      <div v-for="job in jobs" :key="job.id" class="mb-8 relative" data-aos="fade-right" data-aos-duration="600">
        <div class="absolute w-4 h-4 bg-teal-500 rounded-full -left-10 mt-2"></div>
        <div class="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 border border-teal-200 dark:border-teal-800">
          <h3 class="text-xl font-bold text-gray-800 dark:text-white">{{ job.title }}</h3>
          <p class="text-teal-500 dark:text-teal-400 font-semibold">{{ job.company }}</p>
          <p class="text-gray-600 dark:text-gray-400 mb-3">{{ job.startDate }} - {{ job.endDate || 'Present' }}</p>
          <p class="text-gray-600 dark:text-gray-300 leading-relaxed">{{ job.description }}</p>
        </div>
      </div>
    </div>

    <!-- Languages & Certificates -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
      <!-- Languages -->
      <div
        class="bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-900 dark:to-blue-900 rounded-xl shadow-lg p-6"
        data-aos="flip-left"
      >
        <div class="flex items-center mb-6">
          <svg
            class="w-6 h-6 text-teal-500 dark:text-teal-400 mr-3"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.22-1.79L9 14v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1h-6v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
            />
          </svg>
          <h3 class="font-bold text-2xl text-gray-800 dark:text-white">Languages</h3>
        </div>
        <div class="space-y-4">
          <div
            v-for="language in languages"
            :key="language.language"
            class="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-md border-l-4 border-teal-500"
          >
            <p class="font-bold text-gray-800 dark:text-white">{{ language.language }}</p>
            <p class="text-gray-600 dark:text-gray-300">{{ language.proficiency }}</p>
          </div>
        </div>
      </div>

      <!-- Certificates -->
      <div
        class="bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-900 dark:to-blue-900 rounded-xl shadow-lg p-6"
        data-aos="fade-up"
      >
        <div class="flex items-center mb-6">
          <svg
            class="w-6 h-6 text-teal-500 dark:text-teal-400 mr-3"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9v-2H4V8l8 5 8-5v5h2V6c0-1.1-.9-2-2-2zm-8 7L4 6h16l-8 5zm7 4h2v4h-2v-4zm-3 5h6v2h-6v-2z"
            />
          </svg>
          <h3 class="font-bold text-2xl text-gray-800 dark:text-white">Certificates</h3>
        </div>
        <div class="space-y-4">
          <div
            v-for="certificate in certificates"
            :key="certificate.id"
            class="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-md border-l-4 border-teal-500"
          >
            <h4 class="text-lg font-bold text-teal-500 dark:text-teal-400">
              {{ certificate.name }}
            </h4>
            <p class="text-gray-600 dark:text-gray-300">{{ certificate.place }} - {{ certificate.date }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- CV Section -->
    <div class="mt-12 text-center">
      <div class="flex items-center justify-center mb-8">
        <svg
          class="w-8 h-8 text-teal-500 dark:text-teal-400 mr-3"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11zM8 16h8v2H8v-2zm0-4h8v2H8v-2z"
          />
          <text x="8" y="10" font-size="6" fill="currentColor">PDF</text>
        </svg>
        <h3 class="font-extrabold text-4xl text-gray-800 dark:text-white relative">
          Curriculum Vitae
          <span class="absolute -bottom-2 left-0 w-16 h-1 bg-teal-500 rounded"></span>
        </h3>
      </div>
      <div>
        <a
          href="/Pejoal_CV.pdf"
          download
          class="mt-2 inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-700 rounded shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none"
        >
          Download CV
        </a>
        <div class="mt-4 bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
          <p class="text-gray-600 dark:text-gray-300">CV Preview will be available soon</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const jobs = ref([
  {
    id: 2,
    title: 'Full Stack Developer',
    company: 'Freelancer.com',
    startDate: 'January 2020',
    description:
      'Worked on various projects across different domains, primarily focusing on web development and design.',
  },
  {
    id: 3,
    title: 'Full Stack Developer',
    company: 'Upwork',
    startDate: 'January 2021',
    description:
      'Assisted in the development of several small to medium scale projects, gaining experience in multiple technologies.',
  },
]);

const languages = ref([
  { language: 'Arabic', proficiency: 'Mother Tongue' },
  { language: 'English', proficiency: 'Fluent' },
  { language: 'German', proficiency: 'Conversational' },
]);

const certificates = ref([
  {
    id: 1,
    name: 'German Language B1 - Goethe',
    place: 'Cairo',
    date: 'April 2022',
  },
  {
    id: 2,
    name: 'German B2 TELC DTB',
    place: 'VHS Wesel',
    date: 'August 2025',
  },
]);
</script>
