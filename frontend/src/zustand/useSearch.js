import { create } from 'zustand';

const useSearch = create((set) => ({
  search: '',
  setSeacrh: (search) => set({ search }),
}));

export default useSearch;
