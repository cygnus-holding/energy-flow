// store.js
import create from 'zustand';

export const useStore = create((set) => ({
  medium: '',
  value: '',
  unit: '',
  temperature: '',
  pressure: '',
  setMedium: (medium) => set((state) => ({ medium })),
  setValue: (value) => set((state) => ({ value })),
  setUnit: (unit) => set((state) => ({ unit })),
  setTemperature: (temperature) => set((state) => ({ temperature })),
  setPressure: (pressure) => set((state) => ({ pressure })),
}));
