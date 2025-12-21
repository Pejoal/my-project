<template>
  <section id="services" class="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-16" data-aos="fade-up">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Services</h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Professional development solutions tailored to your needs.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <!-- App Development -->
        <div
          class="group relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div
            class="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-colors"
          ></div>

          <div class="relative z-10">
            <div
              class="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400"
            >
              <Icon name="heroicons:device-phone-mobile" class="w-8 h-8" />
            </div>

            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">App Development</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              High-quality, cross-platform mobile applications built for performance and user experience. From concept
              to deployment on App Store and Google Play.
            </p>

            <ul class="space-y-3 mb-8">
              <li class="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                <Icon name="heroicons:check-circle" class="w-5 h-5 text-blue-500 mt-0.5" />
                <span>iOS & Android (Cross-platform)</span>
              </li>
              <li class="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                <Icon name="heroicons:check-circle" class="w-5 h-5 text-blue-500 mt-0.5" />
                <span>Native Performance</span>
              </li>
              <li class="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                <Icon name="heroicons:check-circle" class="w-5 h-5 text-blue-500 mt-0.5" />
                <span>UI/UX Design Implementation</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Web Development -->
        <div
          class="group relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div
            class="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/20 transition-colors"
          ></div>

          <div class="relative z-10">
            <div
              class="w-14 h-14 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center mb-6 text-indigo-600 dark:text-indigo-400"
            >
              <Icon name="heroicons:computer-desktop" class="w-8 h-8" />
            </div>

            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Web Development</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Modern, responsive websites and web applications. Built with the latest technologies to ensure speed, SEO,
              and scalability.
            </p>

            <ul class="space-y-3 mb-8">
              <li class="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                <Icon name="heroicons:check-circle" class="w-5 h-5 text-indigo-500 mt-0.5" />
                <span>Responsive & Mobile-First</span>
              </li>
              <li class="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                <Icon name="heroicons:check-circle" class="w-5 h-5 text-indigo-500 mt-0.5" />
                <span>Modern Frameworks (Vue, Nuxt, React)</span>
              </li>
              <li class="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                <Icon name="heroicons:check-circle" class="w-5 h-5 text-indigo-500 mt-0.5" />
                <span>SEO Optimized</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Services Section
</script>
