<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <NuxtLink to="/" class="flex items-center gap-2">
          <div class="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
            <span class="text-white font-bold text-sm">P</span>
          </div>
          <span class="font-bold text-xl text-gray-900 dark:text-white">Pejoal</span>
        </NuxtLink>

        <div class="hidden md:flex items-center gap-8">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
            active-class="text-blue-600 dark:text-blue-400 font-bold"
            @click.prevent="scrollToSection(link.to)"
          >
            {{ link.label }}
          </NuxtLink>
          <NuxtLink
            v-for="link in siteLinks"
            :key="link.to"
            :to="link.to"
            class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
            active-class="text-blue-600 dark:text-blue-400 font-bold"
          >
            {{ link.label }}
          </NuxtLink>
          <ClientOnly>
            <button
              @click="$emit('toggle-dark-mode')"
              class="p-2 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              <svg
                v-if="isDark"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-6.364-.386l1.591-1.591M3 12h2.25m.386-6.364l1.591 1.591"
                />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            </button>
          </ClientOnly>
        </div>

        <button @click="mobileOpen = !mobileOpen" class="md:hidden p-2">
          <Icon :name="mobileOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'" class="w-6 h-6" />
        </button>
      </div>
    </div>

    <div v-if="mobileOpen" class="md:hidden border-t border-gray-200 dark:border-gray-700">
      <div class="px-4 py-3 space-y-2">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
          @click.prevent="
            scrollToSection(link.to);
            mobileOpen = false;
          "
        >
          {{ link.label }}
        </NuxtLink>
        <ClientOnly>
          <button
            @click="
              $emit('toggle-dark-mode');
              mobileOpen = false;
            "
            class="w-full cursor-pointer text-left py-2 flex items-center gap-2 text-gray-700 dark:text-gray-300"
          >
            <svg
              v-if="isDark"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-6.364-.386l1.591-1.591M3 12h2.25m.386-6.364l1.591 1.591"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
            {{ isDark ? 'Light Mode' : 'Dark Mode' }}
          </button>
        </ClientOnly>
      </div>
    </div>
  </nav>
</template>

<script setup>
defineProps({
  isDark: Boolean,
});
defineEmits(['toggle-dark-mode']);

const mobileOpen = ref(false);

const navLinks = [
  { label: 'Home', to: '#home' },
  { label: 'About', to: '#about' },
  { label: 'Skills', to: '#skills' },
  { label: 'Apps', to: '#apps' },
  { label: 'Web Projects', to: '#web-projects' },
  { label: 'Contact', to: '#contact' },
];

const siteLinks = [
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms of Service', to: '/terms' },
];

const scrollToSection = (to) => {
  if (to.startsWith('#')) {
    const el = document.querySelector(to);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
};
</script>
