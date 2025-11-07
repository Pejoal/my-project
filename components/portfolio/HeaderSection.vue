<template>
  <section
    class="p-8 bg-gradient-to-r from-teal-500 to-blue-600 dark:from-teal-600 dark:to-blue-700 text-white shadow-lg rounded-2xl mb-12"
    data-aos="zoom-out-left"
  >
    <h1 class="font-extrabold text-4xl mb-6">{{ profile.name }} ({{ profile.age }})</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <p class="text-lg font-semibold mb-3">🚀 {{ profile.title }}</p>
        <p class="text-sm mb-3">📍 {{ profile.location }}</p>
        <p class="text-sm mb-3">🗣️ Languages: {{ profile.languages.join(', ') }}</p>
        <p class="text-sm mb-3">🎯 Hobbies: {{ profile.hobbies.join(', ') }}</p>
      </div>
      <div class="flex items-center justify-center md:justify-end">
        <div class="text-center">
          <p class="text-lg font-bold">📧 Contact me at</p>
          <a
            :href="`mailto:${profile.email}`"
            class="text-teal-200 hover:text-teal-100 transition-colors duration-300 text-lg font-semibold underline"
          >
            {{ profile.email }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const profile = {
  name: 'Pejoal Hanna',
  age: 22,
  title: 'Full Stack Developer',
  location: 'Rees, Germany',
  languages: ['English', 'German', 'Arabic'],
  hobbies: ['Coding', 'Reading', 'Traveling'],
  email: 'pejoal.business@gmail.com',
};
</script>
