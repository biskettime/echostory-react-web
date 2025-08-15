/**
 * Language Detection and Management Module
 * Handles automatic language detection and multi-language support
 */

export type SupportedLanguage = 'ko' | 'en' | 'ja' | 'zh' | 'es' | 'fr' | 'de' | 'ru' | 'pt' | 'ar';

interface LanguageConfig {
  code: SupportedLanguage;
  name: string;
  nativeName: string;
  direction: 'ltr' | 'rtl';
  responseInstruction: string;
  exampleGreeting: string;
}

export class LanguageDetector {
  // Language configurations
  private static readonly LANGUAGES: Record<SupportedLanguage, LanguageConfig> = {
    ko: {
      code: 'ko',
      name: 'Korean',
      nativeName: '한국어',
      direction: 'ltr',
      responseInstruction: '한국어로 자연스럽게 대답하세요. 존댓말을 사용하세요.',
      exampleGreeting: '안녕하세요'
    },
    en: {
      code: 'en',
      name: 'English',
      nativeName: 'English',
      direction: 'ltr',
      responseInstruction: 'Respond naturally in English. Use appropriate formality based on context.',
      exampleGreeting: 'Hello'
    },
    ja: {
      code: 'ja',
      name: 'Japanese',
      nativeName: '日本語',
      direction: 'ltr',
      responseInstruction: '日本語で自然に返答してください。敬語を適切に使用してください。',
      exampleGreeting: 'こんにちは'
    },
    zh: {
      code: 'zh',
      name: 'Chinese',
      nativeName: '中文',
      direction: 'ltr',
      responseInstruction: '请用中文自然地回复。使用适当的礼貌用语。',
      exampleGreeting: '你好'
    },
    es: {
      code: 'es',
      name: 'Spanish',
      nativeName: 'Español',
      direction: 'ltr',
      responseInstruction: 'Responde naturalmente en español. Usa el nivel de formalidad apropiado.',
      exampleGreeting: 'Hola'
    },
    fr: {
      code: 'fr',
      name: 'French',
      nativeName: 'Français',
      direction: 'ltr',
      responseInstruction: 'Répondez naturellement en français. Utilisez le niveau de formalité approprié.',
      exampleGreeting: 'Bonjour'
    },
    de: {
      code: 'de',
      name: 'German',
      nativeName: 'Deutsch',
      direction: 'ltr',
      responseInstruction: 'Antworten Sie natürlich auf Deutsch. Verwenden Sie die angemessene Höflichkeitsform.',
      exampleGreeting: 'Hallo'
    },
    ru: {
      code: 'ru',
      name: 'Russian',
      nativeName: 'Русский',
      direction: 'ltr',
      responseInstruction: 'Отвечайте естественно на русском языке. Используйте подходящий уровень формальности.',
      exampleGreeting: 'Привет'
    },
    pt: {
      code: 'pt',
      name: 'Portuguese',
      nativeName: 'Português',
      direction: 'ltr',
      responseInstruction: 'Responda naturalmente em português. Use o nível de formalidade apropriado.',
      exampleGreeting: 'Olá'
    },
    ar: {
      code: 'ar',
      name: 'Arabic',
      nativeName: 'العربية',
      direction: 'rtl',
      responseInstruction: 'أجب بشكل طبيعي باللغة العربية. استخدم مستوى الرسمية المناسب.',
      exampleGreeting: 'مرحبا'
    }
  };

  // Language detection patterns
  private static readonly LANGUAGE_PATTERNS: Record<SupportedLanguage, RegExp[]> = {
    ko: [
      /[가-힣]/,
      /[ㄱ-ㅎㅏ-ㅣ]/,
      /\b(안녕|하세요|감사|죄송|네|아니요)\b/
    ],
    ja: [
      /[ぁ-ん]/,  // Hiragana
      /[ァ-ヴ]/,  // Katakana
      /[一-龯]/,  // Kanji (overlaps with Chinese)
      /\b(こんにちは|ありがとう|すみません|はい|いいえ)\b/
    ],
    zh: [
      /[一-龯]/,  // Chinese characters
      /\b(你好|谢谢|对不起|是|不是|吗|的|了)\b/
    ],
    en: [
      /\b(hello|hi|thanks|sorry|yes|no|the|is|are|what|how)\b/i
    ],
    es: [
      /\b(hola|gracias|perdón|sí|no|qué|cómo|está)\b/i,
      /[áéíóúñ]/i
    ],
    fr: [
      /\b(bonjour|merci|pardon|oui|non|comment|quoi)\b/i,
      /[àâäéèêëïîôùûüÿç]/i
    ],
    de: [
      /\b(hallo|danke|entschuldigung|ja|nein|was|wie)\b/i,
      /[äöüß]/i
    ],
    ru: [
      /[а-яёА-ЯЁ]/,
      /\b(привет|спасибо|извините|да|нет|что|как)\b/i
    ],
    pt: [
      /\b(olá|obrigado|desculpe|sim|não|que|como)\b/i,
      /[àáâãçéêíóôõú]/i
    ],
    ar: [
      /[\u0600-\u06FF]/,  // Arabic script
      /[\u0750-\u077F]/,  // Arabic supplement
    ]
  };

  /**
   * Detect language from text
   */
  static detectLanguage(text: string): SupportedLanguage {
    if (!text || text.trim().length === 0) {
      return 'en'; // Default to English
    }

    const scores: Record<string, number> = {};
    
    // Check each language pattern
    for (const [lang, patterns] of Object.entries(this.LANGUAGE_PATTERNS)) {
      scores[lang] = 0;
      for (const pattern of patterns) {
        const matches = text.match(pattern);
        if (matches) {
          scores[lang] += matches.length;
        }
      }
    }

    // Special handling for CJK languages
    // If both Chinese and Japanese patterns match, use additional heuristics
    if (scores['ja'] > 0 && scores['zh'] > 0) {
      // Japanese usually has hiragana/katakana
      if (/[ぁ-んァ-ヴ]/.test(text)) {
        scores['ja'] += 10;
      }
      // Chinese-specific particles
      if (/[的了吗呢啊吧]/.test(text)) {
        scores['zh'] += 10;
      }
    }

    // Find language with highest score
    let detectedLang: SupportedLanguage = 'en';
    let maxScore = 0;
    
    for (const [lang, score] of Object.entries(scores)) {
      if (score > maxScore) {
        maxScore = score;
        detectedLang = lang as SupportedLanguage;
      }
    }

    return detectedLang;
  }

  /**
   * Get language configuration
   */
  static getLanguageConfig(language: SupportedLanguage): LanguageConfig {
    return this.LANGUAGES[language] || this.LANGUAGES['en'];
  }

  /**
   * Get response instruction for language
   */
  static getResponseInstruction(language: SupportedLanguage): string {
    const config = this.getLanguageConfig(language);
    return config.responseInstruction;
  }

  /**
   * Determine response language based on multiple factors
   */
  static determineResponseLanguage(
    userMessage: string,
    webSelectedLanguage?: SupportedLanguage,
    conversationLanguage?: SupportedLanguage
  ): SupportedLanguage {
    // Priority order:
    // 1. Detected language from user message
    // 2. Previously used language in conversation
    // 3. Web interface selected language
    // 4. Default to English

    const detectedLang = this.detectLanguage(userMessage);
    
    // If user is clearly using a different language, switch to it
    if (detectedLang !== 'en' && this.isStrongLanguageSignal(userMessage, detectedLang)) {
      return detectedLang;
    }

    // If conversation has been in a specific language, maintain it
    if (conversationLanguage && conversationLanguage !== 'en') {
      return conversationLanguage;
    }

    // Use web selected language if available
    if (webSelectedLanguage) {
      return webSelectedLanguage;
    }

    // Use detected language
    return detectedLang;
  }

  /**
   * Check if the language signal is strong enough to switch
   */
  private static isStrongLanguageSignal(text: string, language: SupportedLanguage): boolean {
    const patterns = this.LANGUAGE_PATTERNS[language];
    let matchCount = 0;
    
    for (const pattern of patterns) {
      if (pattern.test(text)) {
        matchCount++;
      }
    }
    
    // Consider it a strong signal if multiple patterns match
    // or if the text is predominantly in that language
    const languageChars = text.match(patterns[0]);
    const charRatio = languageChars ? languageChars.length / text.length : 0;
    
    return matchCount >= 2 || charRatio > 0.5;
  }

  /**
   * Translate common UI elements
   */
  static translateUIElement(element: string, language: SupportedLanguage): string {
    const translations: Record<string, Record<SupportedLanguage, string>> = {
      'typing': {
        ko: '입력 중...',
        en: 'Typing...',
        ja: '入力中...',
        zh: '输入中...',
        es: 'Escribiendo...',
        fr: 'En train d\'écrire...',
        de: 'Schreibt...',
        ru: 'Печатает...',
        pt: 'Digitando...',
        ar: 'يكتب...'
      },
      'send': {
        ko: '보내기',
        en: 'Send',
        ja: '送信',
        zh: '发送',
        es: 'Enviar',
        fr: 'Envoyer',
        de: 'Senden',
        ru: 'Отправить',
        pt: 'Enviar',
        ar: 'إرسال'
      },
      'error': {
        ko: '오류가 발생했습니다',
        en: 'An error occurred',
        ja: 'エラーが発生しました',
        zh: '发生错误',
        es: 'Ocurrió un error',
        fr: 'Une erreur s\'est produite',
        de: 'Ein Fehler ist aufgetreten',
        ru: 'Произошла ошибка',
        pt: 'Ocorreu um erro',
        ar: 'حدث خطأ'
      }
    };

    return translations[element]?.[language] || translations[element]?.['en'] || element;
  }

  /**
   * Get formality level instruction for language
   */
  static getFormalityInstruction(language: SupportedLanguage, formalityLevel: 'formal' | 'casual' | 'auto'): string {
    const instructions: Record<SupportedLanguage, Record<string, string>> = {
      ko: {
        formal: '존댓말(습니다체)을 사용하세요.',
        casual: '반말(해체)을 사용하세요.',
        auto: '상황에 맞게 존댓말 또는 반말을 사용하세요.'
      },
      ja: {
        formal: '敬語（です・ます調）を使用してください。',
        casual: 'タメ口（だ・である調）を使用してください。',
        auto: '状況に応じて敬語またはタメ口を使用してください。'
      },
      zh: {
        formal: '使用敬语和礼貌用语。',
        casual: '使用日常口语。',
        auto: '根据情况使用适当的语言风格。'
      },
      en: {
        formal: 'Use formal language and polite expressions.',
        casual: 'Use casual, friendly language.',
        auto: 'Adjust formality based on context.'
      },
      es: {
        formal: 'Use usted y lenguaje formal.',
        casual: 'Use tú y lenguaje informal.',
        auto: 'Ajusta el nivel de formalidad según el contexto.'
      },
      fr: {
        formal: 'Utilisez le vouvoiement et un langage formel.',
        casual: 'Utilisez le tutoiement et un langage informel.',
        auto: 'Ajustez le niveau de formalité selon le contexte.'
      },
      de: {
        formal: 'Verwenden Sie "Sie" und formelle Sprache.',
        casual: 'Verwenden Sie "du" und informelle Sprache.',
        auto: 'Passen Sie die Formalität an den Kontext an.'
      },
      ru: {
        formal: 'Используйте "Вы" и формальный язык.',
        casual: 'Используйте "ты" и неформальный язык.',
        auto: 'Адаптируйте уровень формальности к контексту.'
      },
      pt: {
        formal: 'Use "você/senhor(a)" e linguagem formal.',
        casual: 'Use "tu/você" e linguagem informal.',
        auto: 'Ajuste o nível de formalidade conforme o contexto.'
      },
      ar: {
        formal: 'استخدم اللغة الرسمية والتعابير المهذبة.',
        casual: 'استخدم اللغة العامية والودية.',
        auto: 'اضبط مستوى الرسمية حسب السياق.'
      }
    };

    return instructions[language]?.[formalityLevel] || instructions['en']['auto'];
  }
}