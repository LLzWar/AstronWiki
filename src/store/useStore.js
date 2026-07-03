import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create(
  persist(
    (set) => ({
      // Theme State
      theme: 'dark',
      setTheme: (theme) => set({ theme }),
      toggleTheme: () => set((state) => {
        const nextTheme = state.theme === 'dark' ? 'warlord' : state.theme === 'warlord' ? 'light' : 'dark';
        return { theme: nextTheme };
      }),

      // UI States
      searchQuery: '',
      setSearchQuery: (query) => set({ searchQuery: query }),
      mobileMenuOpen: false,
      setMobileMenuOpen: (isOpen) => set({ mobileMenuOpen: isOpen }),

      // Modal States (JEI)
      activeRecipe: null,
      openRecipe: (id) => set({ activeRecipe: id }),
      closeRecipe: () => set({ activeRecipe: null }),
      
      activeItem: null,
      setActiveItem: (item) => set({ activeItem: item }),
    }),
    {
      name: 'astron-wiki-storage', // name of the item in the storage (must be unique)
      partialize: (state) => ({ theme: state.theme }), // Only persist the theme
    }
  )
);

export default useStore;
