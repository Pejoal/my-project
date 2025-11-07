import { computed, ref } from 'vue';

export const useAppData = () => {
  // Apps data based on your React Native code
  const allApps = ref([
    // German Learning Apps
    {
      id: 'myapp',
      iosId: 'deutschlernen-a1-c2-offline/id6754511381',
      title: 'Learn German A1-C2',
      description: 'Comprehensive German learning app with offline support',
      icon: '🇩🇪',
      category: 'german',
    },
    {
      id: 'a1_a2_german_grammar',
      iosId: 'a1-a2-german-grammar-trainer/id6754821464',
      title: 'A1-A2 German Grammar',
      description: 'Master German grammar fundamentals',
      icon: '📚',
      category: 'german',
    },
    {
      id: 'german_for_nurses',
      iosId: null,
      title: 'German for Nurses',
      description: 'Specialized German course for healthcare professionals',
      icon: '🏥',
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
      icon: '🇺🇸',
      category: 'english',
    },
    {
      id: 'a1_a2_english_grammar',
      iosId: 'a1-a2-english-grammar/id6754511839',
      title: 'A1-A2 English Grammar',
      description: 'English grammar trainer for beginners',
      icon: '📖',
      category: 'english',
    },
    // Spanish Learning Apps
    {
      id: 'learn_spanish_app',
      iosId: 'تعلم-الإسبانية/id6754511440',
      title: 'Learn Spanish',
      description: 'Master Spanish with interactive lessons',
      icon: '🇪🇸',
      category: 'spanish',
    },
    {
      id: 'a1_a2_spanish_grammar',
      iosId: null,
      title: 'A1-A2 Spanish Grammar',
      description: 'Spanish grammar fundamentals',
      icon: '📖',
      category: 'spanish',
    },
    {
      id: 'learn_spanish_from_stories',
      iosId: 'learn-spanish-with-stories/id6754769339',
      title: 'Spanish Stories',
      description: 'Learn Spanish through captivating stories',
      icon: '📚',
      category: 'spanish',
    },
    // Italian Learning Apps
    {
      id: 'learn_italian_app',
      iosId: 'تعلم-الإيطالية/id6754513406',
      title: 'Learn Italian',
      description: 'Discover Italian language and culture',
      icon: '🇮🇹',
      category: 'italian',
    },
    {
      id: 'a1_a2_italian_grammar',
      iosId: null,
      title: 'A1-A2 Italian Grammar',
      description: 'Italian grammar essentials',
      icon: '📖',
      category: 'italian',
    },
    {
      id: 'learn_italian_from_stories',
      iosId: 'learn-italian-with-stories/id6754609859',
      title: 'Italian Stories',
      description: 'Learn Italian with engaging stories',
      icon: '📚',
      category: 'italian',
    },
    // Other Languages
    {
      id: 'learn_french_app',
      iosId: 'apprendre-le-français/id6754800257',
      title: 'Learn French',
      description: 'Master French language with ease',
      icon: '🇫🇷',
      category: 'other',
    },
    {
      id: 'learn_russian',
      iosId: 'تعلم-الروسية-بدون-نت/id6754518388',
      title: 'Learn Russian',
      description: 'Russian language course offline',
      icon: '🇷🇺',
      category: 'other',
    },
    // Utility Apps
    {
      id: 'qr_manager',
      iosId: 'qr-manager-pro/id6754516032',
      title: 'QR Manager Pro',
      description: 'Advanced QR code scanner and generator',
      icon: '🔳',
      category: 'utility',
    },
    {
      id: 'videoplayer',
      iosId: null,
      title: 'Video Player Pro',
      description: 'Professional video player with advanced features',
      icon: '📱',
      category: 'utility',
    },
    {
      id: 'password_manager',
      iosId: 'password-manager-pro-offline/id6754517449',
      title: 'Password Manager Pro',
      description: 'Secure offline password management',
      icon: '🔐',
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
      icon: '🧩',
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

  const toggleDarkMode = () => {
    isDark.value = !isDark.value;
    document.documentElement.classList.toggle('dark', isDark.value);
  };

  return {
    isDark,
    toggleDarkMode,
  };
};
