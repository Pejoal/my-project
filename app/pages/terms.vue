<!-- pages/terms.vue -->
<template>
  <div
    class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 pt-24 px-4"
  >
    <div class="max-w-4xl mx-auto">
      <NuxtLink
        to="/"
        class="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 mb-8 font-medium"
      >
        <Icon name="heroicons:arrow-left" class="w-5 h-5" />
        Back to Portfolio
      </NuxtLink>

      <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Terms and Conditions</h1>
      <p class="text-sm text-gray-500 dark:text-gray-400 mb-10">Last updated: <strong>November 08, 2025</strong></p>

      <div class="max-w-none space-y-8 prose prose-lg dark:prose-invert">
        <section>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">1. Acceptance of Terms</h2>
          <p class="dark:text-gray-300">
            By using any app or website created by <strong>Pejoal Hanna</strong> (the "Services"), you agree to these
            Terms, <em>unless a specific app provides its own terms</em>.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">2. Use of Services</h2>
          <p class="dark:text-gray-300">You agree to use the Services lawfully and not to:</p>
          <ul class="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
            <li>Violate any laws</li>
            <li>Interfere with the Services</li>
            <li>Attempt unauthorized access</li>
            <li>Scrape or extract data automatically</li>
          </ul>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">3. Intellectual Property</h2>
          <p class="dark:text-gray-300">
            All content, code, and designs are owned by <strong>Pejoal Hanna</strong> and protected by copyright. You
            may not copy, modify, or distribute without permission.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">4. Mobile Applications</h2>
          <p class="dark:text-gray-300">Apps are distributed via:</p>
          <ul class="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
            <li>
              <strong>Apple App Store</strong>: Subject to
              <a
                href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
                target="_blank"
                class="text-blue-600 hover:underline"
                >Apple's EULA</a
              >
            </li>
            <li>
              <strong>Google Play</strong>: Subject to
              <a href="https://play.google.com/about/play-terms/" target="_blank" class="text-blue-600 hover:underline"
                >Google Play Terms</a
              >
            </li>
          </ul>
          <p class="dark:text-gray-300 mt-2 text-sm italic">
            <em>Additional terms may apply if explicitly stated in the app.</em>
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">5. No Warranties</h2>
          <p class="dark:text-gray-300">
            Services are provided "as is" without guarantees of availability, accuracy, or performance.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">6. Limitation of Liability</h2>
          <p class="dark:text-gray-300">
            To the fullest extent permitted by law, Pejoal Hanna is not liable for any damages from use of the Services.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">7. Changes to Terms</h2>
          <p class="dark:text-gray-300">We may update these Terms. Continued use after changes means acceptance.</p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">8. Governing Law</h2>
          <p class="dark:text-gray-300">Governed by the laws of <strong>Germany</strong>.</p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">9. Contact</h2>
          <p class="dark:text-gray-300">
            Questions? Email:
            <a href="mailto:pejoal.business@gmail.com" class="text-blue-600 hover:underline font-medium">
              pejoal.business@gmail.com
            </a>
          </p>
        </section>
      </div>

      <div class="mt-10 pb-4 text-center">
        <NuxtLink
          to="/privacy-policy"
          class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
        >
          ← View Privacy Policy
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Terms and Conditions - Pejoal Hanna',
  description: 'Flexible terms for Pejoal Hanna apps and portfolio. Per-app overrides allowed.',
  robots: 'noindex',
});
</script>
