<!-- pages/privacy-policy.vue -->
<template>
  <div
    class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 pt-24 px-4"
  >
    <div class="max-w-4xl mx-auto">
      <NuxtLink to="/" class="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-8">
        <Icon name="heroicons:arrow-left" class="w-5 h-5" />
        Back to Portfolio
      </NuxtLink>

      <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-6">Privacy Policy</h1>
      <p class="text-sm text-gray-500 dark:text-gray-400 mb-8">Last updated: November 08, 2025</p>

      <div class="prose prose-lg dark:prose-invert max-w-none">
        <p class="dark:text-gray-300">
          At <strong>Pejoal Dev Studio</strong>, we respect your privacy. This policy explains how we collect, use, and
          protect your information when you use our apps and website.
        </p>

        <h2 class="dark:text-white">1. Information We Collect</h2>
        <ul class="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
          <li><strong>Personal Data:</strong> Name, email (only if you contact us).</li>
          <li><strong>Usage Data:</strong> App crashes, analytics (anonymized via Firebase/Expo).</li>
          <li><strong>No Ads or Tracking:</strong> We do not use third-party ads or sell data.</li>
        </ul>

        <h2 class="dark:text-white">2. How We Use Your Data</h2>
        <p class="dark:text-gray-300">To improve app performance, fix bugs, and respond to support requests.</p>

        <h2 class="dark:text-white">3. Data Storage</h2>
        <p class="dark:text-gray-300">Stored securely on encrypted servers. Retained only as needed.</p>

        <h2 class="dark:text-white">4. Your Rights</h2>
        <p class="dark:text-gray-300">
          You can request data deletion by emailing:
          <a href="mailto:pejoal.business@gmail.com" class="text-blue-600">pejoal.business@gmail.com</a>
        </p>

        <h2 class="dark:text-white">5. Contact</h2>
        <p class="dark:text-gray-300">
          Email: <a href="mailto:pejoal.business@gmail.com" class="text-blue-600">pejoal.business@gmail.com</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Privacy Policy - Pejoal Hanna',
  description: 'Learn how Pejoal protects your privacy in apps and website.',
});
</script>
