import { create } from 'zustand';

const themes = ['dark', 'light', ''] as const;

type Theme = (typeof themes)[number];

type TypeThemeStore = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const useTheme = create<TypeThemeStore>((set) => ({
  theme: '',
  setTheme: (theme) => set({ theme }),
}));

export { useTheme, type Theme };
