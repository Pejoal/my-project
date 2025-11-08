<!-- pages/terms.vue -->
<template>
  <div
    class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 pt-24 px-4"
  >
    <div class="max-w-4xl mx-auto">
      <!-- Back Link -->
      <NuxtLink
        to="/"
        class="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 mb-8 font-medium transition"
      >
        <Icon name="heroicons:arrow-left" class="w-5 h-5" />
        Back to Portfolio
      </NuxtLink>

      <!-- Title -->
      <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Terms and Conditions</h1>
      <p class="text-sm text-gray-500 dark:text-gray-400 mb-10">Last updated: <strong>November 08, 2025</strong></p>

      <!-- Content -->
      <div class="prose prose-lg dark:prose-invert max-w-none space-y-8">
        <section>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">1. Acceptance of Terms</h2>
          <p class="dark:text-gray-300">
            By accessing and using this website (<strong>pejoal.com</strong>) and any mobile applications created by
            <strong>Pejoal Hanna</strong> (collectively, the "Services"), you accept and agree to be bound by these
            Terms and Conditions. If you do not agree, please do not use the Services.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">2. Use of Services</h2>
          <p class="dark:text-gray-300">
            You agree to use the Services only for lawful purposes and in accordance with these Terms. You must not:
          </p>
          <ul class="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
            <li>Violate any applicable laws or regulations</li>
            <li>Interfere with or disrupt the Services</li>
            <li>Attempt to gain unauthorized access to any part of the Services</li>
            <li>Use automated tools to scrape or extract data</li>
          </ul>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">3. Intellectual Property</h2>
          <p class="dark:text-gray-300">
            All content on this website and in our apps — including text, graphics, logos, code, and designs — is owned
            by <strong>Pejoal Hanna</strong> and protected by copyright, trademark, and other intellectual property
            laws.
          </p>
          <p class="dark:text-gray-300">You may not reproduce, modify, distribute, or create derivative works without prior written consent.</p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">4. User Content</h2>
          <p class="dark:text-gray-300">
            You retain ownership of any content you submit (e.g., feedback, reviews). By submitting, you grant Pejoal
            Hanna a worldwide, royalty-free, perpetual license to use, display, and distribute such content for
            improving the Services.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">5. Mobile Applications</h2>
          <p class="dark:text-gray-300">Our apps are available on:</p>
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
              <strong>Google Play Store</strong>: Subject to
              <a href="https://play.google.com/about/play-terms/" target="_blank" class="text-blue-600 hover:underline"
                >Google Play Terms</a
              >
            </li>
          </ul>
          <p class="dark:text-gray-300">
            We do not collect personal data beyond what is necessary for app functionality and analytics (anonymized via
            Expo/Firebase).
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">6. Disclaimer of Warranties</h2>
          <p class="dark:text-gray-300">
            The Services are provided "as is" and "as available" without warranties of any kind, express or implied. We
            do not guarantee that the Services will be error-free, secure, or always available.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">7. Limitation of Liability</h2>
          <p class="dark:text-gray-300">
            To the fullest extent permitted by law, Pejoal Hanna shall not be liable for any indirect, incidental,
            special, or consequential damages arising from your use of the Services.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">8. Third-Party Links</h2>
          <p class="dark:text-gray-300">
            The Services may contain links to third-party websites (e.g., App Store, GitHub). We are not responsible for
            the content or practices of these sites.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">9. Changes to Terms</h2>
          <p class="dark:text-gray-300">
            We may update these Terms at any time. Changes will be posted here with an updated "Last updated" date.
            Continued use of the Services after changes constitutes acceptance.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">10. Governing Law</h2>
          <p class="dark:text-gray-300">
            These Terms are governed by the laws of <strong>Germany</strong>, without regard to conflict of law
            principles.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">11. Contact Information</h2>
          <p class="dark:text-gray-300">
            For questions about these Terms, contact us at:<br />
            <a href="mailto:legal@pejoal.com" class="text-blue-600 hover:underline">legal@pejoal.com</a>
          </p>
        </section>
      </div>

      <!-- Footer CTA -->
      <div class="mt-16 text-center">
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
  description: "Legal terms governing the use of Pejoal Hanna's portfolio and mobile applications.",
  robots: 'noindex',
});
</script>

<style scoped></style>
