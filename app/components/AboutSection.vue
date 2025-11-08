<template>
  <section id="about" class="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-16" data-aos="fade-up" data-aos-delay="100">
        <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-6">About Me</h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          I'm a passionate software developer with a strong focus on mobile experiences. While I specialize in creating
          accessible and enjoyable educational apps, particularly for language learning, I also build a diverse range of
          utility apps, quizzes, and games.
        </p>
      </div>

      <!-- Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Card 1: Mobile Development -->
        <div
          class="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <div class="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Icon name="heroicons:device-phone-mobile" class="w-8 h-8 text-white" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Mobile Development</h3>
          <p class="text-gray-600 dark:text-gray-300">
            Expert in React Native and native app development for iOS and Android platforms.
          </p>
        </div>

        <!-- Card 2: Language Learning -->
        <div
          class="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div class="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Icon name="heroicons:language" class="w-8 h-8 text-white" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Language Learning</h3>
          <p class="text-gray-600 dark:text-gray-300">
            Specialized in creating comprehensive learning apps for German, English, Spanish, and more.
          </p>
        </div>

        <!-- Card 3: Utilities, Quizzes & Games -->
        <div
          class="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
          data-aos="fade-left"
          data-aos-delay="500"
        >
          <div class="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Icon name="heroicons:puzzle-piece" class="w-8 h-8 text-white" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Utilities, Quizzes & Games</h3>
          <p class="text-gray-600 dark:text-gray-300">
            Building useful tools like password managers, QR scanners, and engaging trivia & puzzle games.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No props needed for this standalone section
</script>

<style scoped>
/* Optional: Add subtle hover lift */
.shadow-md:hover {
  transform: translateY(-4px);
}
</style>
