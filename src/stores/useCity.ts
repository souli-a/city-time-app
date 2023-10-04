import { create } from 'zustand';

const cities = [
  'America/New_York',
  'America/Los_Angeles',
  'Europe/Paris',
  'Asia/Dubai',
  'Asia/Hong_Kong',
  'Asia/Seoul',
  '',
] as const;

export type City = (typeof cities)[number];

type TypeCityStore = {
  city: City;
  setCity: (city: City) => void;
};

const useCity = create<TypeCityStore>((set) => ({
  city: '',
  setCity: (city) => set({ city }),
}));

export { useCity };
