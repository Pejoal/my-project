<template>
  <section id="about" class="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-6">About Me</h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          I'm a passionate mobile app developer specializing in educational applications. My mission is to make language
          learning accessible and enjoyable for everyone through innovative mobile experiences.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          class="text-center p-6 bg-linear-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl"
        >
          <div class="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Icon name="heroicons:device-phone-mobile" class="w-8 h-8 text-white" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Mobile Development</h3>
          <p class="text-gray-600 dark:text-gray-300">
            Expert in React Native and native app development for iOS and Android platforms.
          </p>
        </div>

        <div
          class="text-center p-6 bg-linear-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl"
        >
          <div class="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Icon name="heroicons:academic-cap" class="w-8 h-8 text-white" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Education Tech</h3>
          <p class="text-gray-600 dark:text-gray-300">
            Creating innovative learning experiences that make education engaging and effective.
          </p>
        </div>

        <div
          class="text-center p-6 bg-linear-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-2xl"
        >
          <div class="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Icon name="heroicons:language" class="w-8 h-8 text-white" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Language Learning</h3>
          <p class="text-gray-600 dark:text-gray-300">
            Specialized in creating comprehensive language learning apps for multiple languages.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
