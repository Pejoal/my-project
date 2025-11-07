<template>
  <section
    class="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-gray-50 dark:from-gray-900 dark:via-teal-900 dark:to-gray-800 flex flex-col justify-center items-center py-12 px-4 transition-colors duration-300"
  >
    <!-- Animated background elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        class="absolute -top-10 -left-10 w-72 h-72 bg-gradient-to-r from-teal-200 to-blue-200 dark:from-teal-800 dark:to-blue-800 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-20 animate-pulse"
      ></div>
      <div
        class="absolute top-1/2 -right-10 w-96 h-96 bg-gradient-to-r from-blue-200 to-teal-200 dark:from-blue-800 dark:to-teal-800 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-20 animate-pulse animation-delay-2000"
      ></div>
      <div
        class="absolute -bottom-10 left-1/3 w-80 h-80 bg-gradient-to-r from-teal-200 to-gray-200 dark:from-teal-800 dark:to-gray-800 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-20 animate-pulse animation-delay-4000"
      ></div>
    </div>

    <!-- Dark mode toggle -->
    <DarkModeToggle />

    <div
      class="bg-white dark:bg-gray-800 shadow-2xl rounded-3xl w-full max-w-6xl p-4 transition-colors duration-300 relative z-10"
    >
      <slot />
    </div>
  </section>
</template>

<style scoped>
.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>
