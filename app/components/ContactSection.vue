<template>
  <section id="contact" class="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-6">Let's Connect</h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Have a project in mind or want to collaborate? I'd love to hear from you!
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
        <a
          href="https://apps.apple.com/developer/pejoal-nagy-nageep-hanna/id1848573493"
          target="_blank"
          class="flex items-center gap-4 p-6 bg-gray-50 dark:bg-gray-700 rounded-2xl hover:shadow-lg transition-all hover:scale-105"
        >
          <Icon name="simple-icons:appstore" class="w-8 h-8 text-blue-600" />
          <div>
            <div class="font-semibold text-gray-900 dark:text-white">App Store</div>
            <div class="text-sm text-gray-600 dark:text-gray-300">iOS Apps</div>
          </div>
        </a>

        <a
          href="https://play.google.com/store/apps/dev?id=7584224843331524823"
          target="_blank"
          class="flex items-center gap-4 p-6 bg-gray-50 dark:bg-gray-700 rounded-2xl hover:shadow-lg transition-all hover:scale-105"
        >
          <Icon name="simple-icons:googleplay" class="w-8 h-8 text-green-600" />
          <div>
            <div class="font-semibold text-gray-900 dark:text-white">Google Play</div>
            <div class="text-sm text-gray-600 dark:text-gray-300">Android Apps</div>
          </div>
        </a>

        <a
          href="https://github.com/pejoal"
          target="_blank"
          class="flex items-center gap-4 p-6 bg-gray-50 dark:bg-gray-700 rounded-2xl hover:shadow-lg transition-all hover:scale-105"
        >
          <Icon name="simple-icons:github" class="w-8 h-8 text-gray-900 dark:text-white" />
          <div>
            <div class="font-semibold text-gray-900 dark:text-white">GitHub</div>
            <div class="text-sm text-gray-600 dark:text-gray-300">Open Source</div>
          </div>
        </a>

        <a
          href="https://pejoal.github.io/"
          target="_blank"
          class="flex items-center gap-4 p-6 bg-gray-50 dark:bg-gray-700 rounded-2xl hover:shadow-lg transition-all hover:scale-105"
        >
          <Icon name="heroicons:globe-alt" class="w-8 h-8 text-indigo-600" />
          <div>
            <div class="font-semibold text-gray-900 dark:text-white">Website</div>
            <div class="text-sm text-gray-600 dark:text-gray-300">Portfolio</div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>
