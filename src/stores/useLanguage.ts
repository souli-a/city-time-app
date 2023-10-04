import { create } from 'zustand';

const languages = ['en-US', 'fr-FR', ''] as const;

export type Language = (typeof languages)[number];

type TypeLanguageStore = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const useLanguage = create<TypeLanguageStore>((set) => ({
  language: '',
  setLanguage: (language) => set({ language }),
}));

export { useLanguage };
