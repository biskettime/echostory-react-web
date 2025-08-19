/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_AI_BASE_URL: string
  readonly VITE_AI_API_KEY: string
  readonly VITE_AI_MODEL: string
  readonly VITE_AI_MAX_TOKENS: string
  readonly VITE_AI_TEMPERATURE: string
  readonly VITE_AI_TOP_P: string
  readonly VITE_AI_FREQUENCY_PENALTY: string
  readonly VITE_AI_PRESENCE_PENALTY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
