<template>
  <section class="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="text-center">
        <div
          class="w-32 h-32 mx-auto mb-8 bg-linear-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl"
        >
          <span class="text-white font-bold text-5xl">P</span>
        </div>

        <h1 class="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Hi, I'm
          <span class="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">Pejoal Hanna</span>
        </h1>

        <p class="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          Mobile App Developer & Language Learning Expert. I create educational apps that help millions of people learn
          languages and improve their skills.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="https://apps.apple.com/developer/pejoal-nagy-nageep-hanna/id1848573493"
            target="_blank"
            class="flex items-center gap-3 bg-black text-white px-8 py-4 rounded-2xl hover:bg-gray-800 transition-colors shadow-lg"
          >
            <Icon name="simple-icons:appstore" class="w-6 h-6" />
            <div class="text-left">
              <div class="text-xs">Download on the</div>
              <div class="font-semibold">App Store</div>
            </div>
          </a>

          <a
            href="https://play.google.com/store/apps/dev?id=7584224843331524823"
            target="_blank"
            class="flex items-center gap-3 bg-green-600 text-white px-8 py-4 rounded-2xl hover:bg-green-700 transition-colors shadow-lg"
          >
            <Icon name="simple-icons:googleplay" class="w-6 h-6" />
            <div class="text-left">
              <div class="text-xs">Get it on</div>
              <div class="font-semibold">Google Play</div>
            </div>
          </a>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div class="text-center">
            <div class="text-3xl font-bold text-gray-900 dark:text-white">20+</div>
            <div class="text-gray-600 dark:text-gray-300">Published Apps</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-gray-900 dark:text-white">1M+</div>
            <div class="text-gray-600 dark:text-gray-300">Downloads</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-gray-900 dark:text-white">8</div>
            <div class="text-gray-600 dark:text-gray-300">Languages</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
