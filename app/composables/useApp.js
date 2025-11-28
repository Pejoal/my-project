import { computed, onUnmounted, ref } from 'vue';

export const useAppData = () => {
  // Apps data based on your React Native code
  const allApps = ref([
    // German Learning Apps
    {
      id: 'myapp',
      iosId: 'deutschlernen-a1-c2-offline/id6754511381',
      title: 'Learn German A1-C2',
      description: 'Comprehensive German learning app with offline support',
      icon: 'https://play-lh.googleusercontent.com/GW36JH7z2AVc5tW4PGn17y8vMJ-xyJf6db40HNFUsKMJuMVZN_v7VJXTbFCigMBDRBjxDlrc06r-U3mriUHAlQ=w240-h480-rw',
      srcset:
        'https://play-lh.googleusercontent.com/GW36JH7z2AVc5tW4PGn17y8vMJ-xyJf6db40HNFUsKMJuMVZN_v7VJXTbFCigMBDRBjxDlrc06r-U3mriUHAlQ=w480-h960-rw 2x',
      category: 'german',
    },
    {
      id: 'a1_a2_german_grammar',
      iosId: 'a1-a2-german-grammar-trainer/id6754821464',
      title: 'A1-A2 German Grammar',
      description: 'Master German grammar fundamentals',
      icon: 'https://play-lh.googleusercontent.com/gXuYsnuQeR4p92gxaOyDU09MeqAerKDp0vUS-awevahqwHFI8lHakPEhkHom9T6lFTA6kuJbagkm6wATzZzb4Hk=w480-h960-rw',
      category: 'german',
    },
    {
      id: 'german_for_nurses',
      iosId: null,
      title: 'German for Nurses',
      description: 'Specialized German course for healthcare professionals',
      icon: 'https://play-lh.googleusercontent.com/zl3uC30SnfKJlxAXGbn4-gm5NWTQwfWQOTRw17FqUBADnErYWfp16SZXlO_ja4n6SBIzQm2CCCJDkdi7K_5Iqg=w480-h960-rw',
      category: 'german',
    },
    {
      id: 'learn_german_from_stories',
      iosId: null,
      title: 'German Stories',
      description: 'Learn German through engaging stories',
      icon: '📖',
      category: 'german',
    },
    // English Learning Apps
    {
      id: 'learn_english_app',
      iosId: 'learn-english-a1-c2/id6754513056',
      title: 'Learn English A1-C2',
      description: 'Complete English learning course',
      icon: 'https://play-lh.googleusercontent.com/9SDTTXsWCNsEj0Xn6ncDrjPHETHwfJHgRDO_goNc6U272GjUvzs_CrjLFAocknWt-c5POlt8ieHdGKDu7JakoA=w480-h960-rw',
      category: 'english',
    },
    {
      id: 'a1_a2_english_grammar',
      iosId: 'a1-a2-english-grammar/id6754511839',
      title: 'A1-A2 English Grammar',
      description: 'English grammar trainer for beginners',
      icon: 'https://play-lh.googleusercontent.com/5M8qhSvPY24uX0jGa7yNWYnWxg_a-KAaFDjmBDtzxeLZ0AFKWnb4bMxBtL66XSqfTVHCgidp5cSwU4qnJ9EcAFE=w480-h960-rw',
      category: 'english',
    },
    // Spanish Learning Apps
    {
      id: 'learn_spanish_app',
      iosId: 'تعلم-الإسبانية/id6754511440',
      title: 'Learn Spanish',
      description: 'Master Spanish with interactive lessons',
      icon: 'https://play-lh.googleusercontent.com/tlmFlmDOE9Oqg_NdJiC-9OHsvptRFIy3qgUu7Mdk_CTlJkDTgPa2YTATWuHlPohTVrpQD9eIuKdPq2174NifR-o=w480-h960-rw',
      category: 'spanish',
    },
    {
      id: 'a1_a2_spanish_grammar',
      iosId: null,
      title: 'A1-A2 Spanish Grammar',
      description: 'Spanish grammar fundamentals',
      icon: 'https://play-lh.googleusercontent.com/H6VC2opj0_aYspEvyTQ_j1KE6b8D1WbeQmkZgYYUqO3dAjwSWb-_NOwMsF7jxB6iqgBSusalcqI78t57TUSp=w480-h960-rw',
      category: 'spanish',
    },
    {
      id: 'learn_spanish_from_stories',
      iosId: 'learn-spanish-with-stories/id6754769339',
      title: 'Spanish Stories',
      description: 'Learn Spanish through captivating stories',
      icon: 'https://play-lh.googleusercontent.com/VWh3S-gzTYaYs4h-c0_5R98Hw_uBfUtfJmG9FUXwd5lDjD8I00WOh6WYvHOMDQZuEd-_gvGRu2KBFycYuQOxgA=w480-h960-rw',
      category: 'spanish',
    },
    // Italian Learning Apps
    {
      id: 'learn_italian_app',
      iosId: 'تعلم-الإيطالية/id6754513406',
      title: 'Learn Italian',
      description: 'Discover Italian language and culture',
      icon: 'https://play-lh.googleusercontent.com/kKaYxO8ads0_4VCsyQ7-KMWvaOyOwOuuPVLRNdIwgTxnR6U2YZVz6gLdlZzuge7T5N61BTiEZHduZR9-dOdZ4Qw=w480-h960-rw',
      category: 'italian',
    },
    {
      id: 'a1_a2_italian_grammar',
      iosId: 'a1-a2-italian-grammar/id6754820225',
      title: 'A1-A2 Italian Grammar',
      description: 'Italian grammar essentials',
      icon: 'https://play-lh.googleusercontent.com/HRc3EIAc93VtDBgBdzhFWMjTe-cHC9wfcANtBM8CmhxRE62fu29YnvEmY_AWqgeN94WktGSriHjsbqOG9yAv=w480-h960-rw',
      category: 'italian',
    },
    {
      id: 'learn_italian_from_stories',
      iosId: 'learn-italian-with-stories/id6754609859',
      title: 'Italian Stories',
      description: 'Learn Italian with engaging stories',
      icon: 'https://play-lh.googleusercontent.com/JTqP5i8KW7mkG-UXtckhXU0ld5EgG-F3u9WBnTfdXhOTDYSu-5Lafu1RoGKjlII_THjgb4aojHBbwgHbBBP_hWo=w480-h960-rw',
      category: 'italian',
    },
    // Other Languages
    {
      id: 'learn_french_app',
      iosId: 'apprendre-le-français/id6754800257',
      title: 'Learn French',
      description: 'Master French language with ease',
      icon: 'https://play-lh.googleusercontent.com/FTg1fGLFqAQR0YbkHb03xubut-H5Fy5L92o36MJOVdrLpgVOmQXshPr2FnYdBpytg9djJxjIrUMfMKcf8c0-SdI=w480-h960-rw',
      category: 'other',
    },
    {
      id: 'learn_russian',
      iosId: 'تعلم-الروسية-بدون-نت/id6754518388',
      title: 'Learn Russian',
      description: 'Russian language course offline',
      icon: 'https://github-production-user-asset-6210df.s3.amazonaws.com/105957829/520255176-30393c78-61cd-4c42-9b0b-031bb7e30445.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20251128%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20251128T172531Z&X-Amz-Expires=300&X-Amz-Signature=08a38e5349917ba7af68b024c7a454506064b11c42e62b0b5552ea730b911f65&X-Amz-SignedHeaders=host',
      category: 'other',
    },
    // Utility Apps
    {
      id: 'qr_manager',
      iosId: 'qr-manager-pro/id6754516032',
      title: 'QR Manager Pro',
      description: 'Advanced QR code scanner and generator',
      icon: 'https://github-production-user-asset-6210df.s3.amazonaws.com/105957829/520257609-e80589ad-5c97-4ac0-8d3b-40a5f363097a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20251128%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20251128T173450Z&X-Amz-Expires=300&X-Amz-Signature=706c0b522c9a1da78666131c22a07c1bd8e8c4048c0c7eb766a43a31b7697b1b&X-Amz-SignedHeaders=host',
      category: 'utility',
    },
    {
      id: 'videoplayer',
      iosId: null,
      title: 'Video Player Pro',
      description: 'Professional video player with advanced features',
      icon: 'https://github-production-user-asset-6210df.s3.amazonaws.com/105957829/520255732-b1622c37-cf9e-4bc8-9328-ec7c222be7a6.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20251128%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20251128T172740Z&X-Amz-Expires=300&X-Amz-Signature=56096048e2febe969083a5b9d6457100268fbaea562fcaf19d4347bcde1a8ed7&X-Amz-SignedHeaders=host',
      category: 'utility',
    },
    {
      id: 'password_manager',
      iosId: 'password-manager-pro-offline/id6754517449',
      title: 'Password Manager Pro',
      description: 'Secure offline password management',
      icon: 'https://github-production-user-asset-6210df.s3.amazonaws.com/105957829/520256045-f9aa7de8-5c5c-49ff-bb60-749663db8c2b.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20251128%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20251128T172906Z&X-Amz-Expires=300&X-Amz-Signature=198e05586faef761c9d55517181fb3044e6467b50c8ed198ba10f6d18f0d8a88&X-Amz-SignedHeaders=host',
      category: 'utility',
    },
    // Test Apps
    {
      id: 'iq_test',
      iosId: 'app/pro-iq-test/id6754533659',
      title: 'Pro IQ Test',
      description: 'Professional IQ assessment tool',
      icon: '🧠',
      category: 'test',
    },
    {
      id: 'trivia_test',
      iosId: 'trivia-test-pro/id6754518491',
      title: 'Trivia Test Pro',
      description: 'Challenge your knowledge with trivia',
      icon: '🎯',
      category: 'test',
    },
    {
      id: 'personality_test',
      iosId: 'personality-test-offline/id6754801097',
      title: 'Personality Test',
      description: 'Discover your personality type',
      icon: '✨',
      category: 'test',
    },
    // Games
    {
      id: 'puzzle',
      iosId: 'slides-puzzle/id6754782354',
      title: 'Slides Puzzle',
      description: 'Classic sliding puzzle game',
      icon: 'https://github-production-user-asset-6210df.s3.amazonaws.com/105957829/520252756-5aaa0bf5-5eb4-4074-8045-d1b40b03fb2a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20251128%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20251128T171749Z&X-Amz-Expires=300&X-Amz-Signature=0be3386e5cf42d7979b7e620132de9f3baf134c1c57cc788b338ea6728138d21&X-Amz-SignedHeaders=host',
      category: 'game',
    },
    {
      id: 'drop_2048',
      iosId: 'drop-2048-tile-merge-puzzle/id6755253445',
      title: 'Drop 2048',
      description: 'Merge tiles to reach 2048',
      icon: 'https://github-production-user-asset-6210df.s3.amazonaws.com/105957829/520253388-78771fd1-2f5d-4b54-afc8-66b7bfb8e8d0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20251128%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20251128T171940Z&X-Amz-Expires=300&X-Amz-Signature=4d20b01b46e51c34a2dde66cb0fd4273fb7883d934d3a1109ac76ff18ba11908&X-Amz-SignedHeaders=host',
      category: 'game',
    },
    {
      id: 'connect_2048',
      iosId: null,
      title: 'Connect 2048',
      description: 'Connect & Chain tiles to reach 2048',
      icon: 'https://github-production-user-asset-6210df.s3.amazonaws.com/105957829/520251913-0b9e4783-3377-4a19-989c-9b1d6c141178.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20251128%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20251128T171451Z&X-Amz-Expires=300&X-Amz-Signature=7b5eba23d5b0215652bb38e034246de607dc058503c718238dfd2e5661e19b3d&X-Amz-SignedHeaders=host',
      category: 'game',
    },
  ]);

  // Computed properties for filtered apps
  const germanApps = computed(() => allApps.value.filter((app) => app.category === 'german'));
  const englishApps = computed(() => allApps.value.filter((app) => app.category === 'english'));
  const spanishApps = computed(() => allApps.value.filter((app) => app.category === 'spanish'));
  const italianApps = computed(() => allApps.value.filter((app) => app.category === 'italian'));
  const otherLanguageApps = computed(() => allApps.value.filter((app) => app.category === 'other'));
  const utilityApps = computed(() => allApps.value.filter((app) => app.category === 'utility'));
  const testApps = computed(() => allApps.value.filter((app) => app.category === 'test'));
  const gameApps = computed(() => allApps.value.filter((app) => app.category === 'game'));

  return {
    allApps,
    germanApps,
    englishApps,
    spanishApps,
    italianApps,
    otherLanguageApps,
    utilityApps,
    testApps,
    gameApps,
  };
};

export const useDarkMode = () => {
  const isDark = ref(false);

  // Initialize dark mode with proper SSR handling
  const initializeDarkMode = () => {
    if (process.client) {
      // Check for saved preference or system preference
      const savedTheme = localStorage.getItem('darkMode');
      if (savedTheme !== null) {
        isDark.value = savedTheme === 'true';
      } else {
        // Use system preference
        isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
      }

      // Apply the theme immediately
      document.documentElement.classList.toggle('dark', isDark.value);
    }
  };

  const toggleDarkMode = () => {
    isDark.value = !isDark.value;

    if (process.client) {
      // Update DOM
      document.documentElement.classList.toggle('dark', isDark.value);

      // Save preference
      localStorage.setItem('darkMode', isDark.value.toString());
    }
  };

  // Initialize on client side
  if (process.client) {
    initializeDarkMode();

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = (e) => {
      // Only update if no manual preference is saved
      if (localStorage.getItem('darkMode') === null) {
        isDark.value = e.matches;
        document.documentElement.classList.toggle('dark', isDark.value);
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);

    // Cleanup listener when component unmounts
    onUnmounted(() => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    });
  }

  return {
    isDark,
    toggleDarkMode,
  };
};
