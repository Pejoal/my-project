<template>
  <section id="apps" class="py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-16">
        <div
          class="inline-flex items-center gap-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-2xl mb-6"
        >
          <Icon name="heroicons:rocket-launch" class="w-6 h-6" />
          <span class="font-semibold">My Apps Portfolio</span>
        </div>
        <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-6">Discover My Apps</h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Explore my collection of educational and utility apps that have helped millions of users worldwide.
        </p>
      </div>

      <!-- German Learning Apps -->
      <AppSection
        title="🇩🇪 German Learning Apps"
        description="Comprehensive German language learning suite from A1 to C2 level"
        :apps="germanApps"
        color="blue"
      />

      <!-- English Learning Apps -->
      <AppSection
        title="🇺🇸 English Learning Apps"
        description="Master English with our interactive learning platform"
        :apps="englishApps"
        color="indigo"
      />

      <!-- Spanish Learning Apps -->
      <AppSection
        title="🇪🇸 Spanish Learning Apps"
        description="Learn Spanish effectively with our comprehensive course"
        :apps="spanishApps"
        color="red"
      />

      <!-- Italian Learning Apps -->
      <AppSection
        title="🇮🇹 Italian Learning Apps"
        description="Discover the beauty of Italian language through interactive lessons"
        :apps="italianApps"
        color="green"
      />

      <!-- Other Language Apps -->
      <AppSection
        title="🌍 Other Languages"
        description="Explore French, Russian and more languages"
        :apps="otherLanguageApps"
        color="purple"
      />

      <!-- Utility Apps -->
      <AppSection
        title="🛠️ Utility Apps"
        description="Powerful tools for productivity and daily tasks"
        :apps="utilityApps"
        color="emerald"
      />

      <!-- Test & Assessment Apps -->
      <AppSection
        title="🧠 Tests & Assessments"
        description="Challenge yourself with IQ tests, personality assessments, and trivia"
        :apps="testApps"
        color="violet"
      />

      <!-- Games -->
      <AppSection
        title="🎮 Games"
        description="Fun and engaging puzzle games for entertainment"
        :apps="gameApps"
        color="pink"
      />
    </div>
  </section>
</template>

<script setup>
defineProps({
  germanApps: Array,
  englishApps: Array,
  spanishApps: Array,
  italianApps: Array,
  otherLanguageApps: Array,
  utilityApps: Array,
  testApps: Array,
  gameApps: Array,
});
</script>
