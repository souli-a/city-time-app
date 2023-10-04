import { create } from 'zustand';

type TypeTimeAndDateStore = {
  date: string;
  time: string;
  day: string;
  setDate: (date: string) => void;
  setTime: (time: string) => void;
  setDay: (day: string) => void;
};

const useTimeAndDate = create<TypeTimeAndDateStore>((set) => ({
  date: '',
  time: '',
  day: '',
  setDate: (date) => set({ date }),
  setTime: (time) => set({ time }),
  setDay: (day) => set({ day }),
}));

export default useTimeAndDate;
