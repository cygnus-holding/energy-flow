import create from 'zustand';

export const useOutflowStore = create(set => ({
  data: {
    medium: '',
    value: '',
    unit: '',
    temperature: '',
    pressure: '',
  },
  setOutflowData: (newData) => set(state => ({ data: newData })),
}));
