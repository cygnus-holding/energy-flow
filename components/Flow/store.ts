import create from 'zustand';

const useInflowStore = create((set) => ({
  data: {
    medium: "",
    value: "",
    unit: "",
    temperature: "",
    pressure: ""
  },
  setInflowData: (updatedData) => set((state) => ({ data: { ...state.data, ...updatedData } })),
}));

const useOutflowStore = create((set) => ({
  data: {
    medium: "",
    value: "",
    unit: "",
    temperature: "",
    pressure: ""
  },
  setOutflowData: (updatedData) => set((state) => ({ data: { ...state.data, ...updatedData } })),
}));

export { useInflowStore, useOutflowStore };
