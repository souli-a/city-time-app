import { useEffect } from 'react';
import { Theme } from '../stores/useTheme';
import { Language } from '../stores/useLanguage';
import { City } from '../stores/useCity';

export type State = Language | Theme | City;

type LocalStorageItemName = 'language' | 'theme' | 'city';

interface UseLocalStorageProps {
  setter: (state: State) => void;
  localStorageItemName: LocalStorageItemName;
  state: State;
}

const useLocalStorage = ({
  setter,
  localStorageItemName,
  state,
}: UseLocalStorageProps) => {
  useEffect(() => {
    const localStorageValue = localStorage.getItem(
      `${localStorageItemName}`
    ) as State;

    const browserTheme = window.matchMedia('(prefers-color-scheme: light)')
      .matches
      ? 'light'
      : 'dark';

    const browserLanguage =
      navigator.language === 'fr' || navigator.language === 'fr-FR'
        ? 'fr-FR'
        : 'en-US';

    if (state && state !== localStorageValue) {
      localStorage.setItem(`${localStorageItemName}`, state);
    }

    if (!state && localStorageValue) {
      setter(localStorageValue);
    }

    if (localStorageItemName === 'theme' && !localStorageValue && !state) {
      setter(browserTheme);
      localStorage.setItem(`${localStorageItemName}`, browserTheme);
    }

    if (localStorageItemName === 'language' && !localStorageValue && !state) {
      setter(browserLanguage);
      localStorage.setItem(`${localStorageItemName}`, browserLanguage);
    }
  }, [state]);

  return null;
};

export default useLocalStorage;
