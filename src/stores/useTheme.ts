import { create } from 'zustand';

const themes = ['dark', 'light', ''] as const;

export type Theme = (typeof themes)[number];

export type TypeThemeStore = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const useTheme = create<TypeThemeStore>((set) => ({
  theme: '',
  setTheme: (theme) => set({ theme }),
}));

export { useTheme };
