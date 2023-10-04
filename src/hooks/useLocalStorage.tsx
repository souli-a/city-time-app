import { useEffect } from 'react';
import { City } from '../stores/useCity';
import { Language } from '../stores/useLanguage';
import { Theme } from '../stores/useTheme';

interface UseLocalStorageProps {
  setter: (valueToSave: any) => void;
  localStorageItemName: 'language' | 'theme' | 'city';
  valueToSave: City | Language | Theme;
}

const useLocalStorage = ({
  setter,
  localStorageItemName,
  valueToSave,
}: UseLocalStorageProps): null => {
  useEffect(() => {
    const savedValue = localStorage.getItem(`${localStorageItemName}`);
    if (savedValue && !valueToSave) {
      setter(savedValue);
    }
    if (!savedValue || savedValue !== valueToSave) {
      localStorage.setItem(`${localStorageItemName}`, valueToSave);
    }
  }, [valueToSave]);

  return null;
};

export default useLocalStorage;
