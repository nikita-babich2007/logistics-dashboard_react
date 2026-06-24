import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useFavoritesStore = create(
  persist(
    (set, get) => ({
      favoriteIds: [],
      addFavorite: (id) => set({ favoriteIds: [...get().favoriteIds, id] }),
      removeFavorite: (id) => set({ favoriteIds: get().favoriteIds.filter(fId => fId !== id) }),
      toggleFavorite: (id) => {
        const { favoriteIds, addFavorite, removeFavorite } = get();
        if (favoriteIds.includes(id)) {
          removeFavorite(id);
        } else {
          addFavorite(id);
        }
      }
    }),
    { name: 'favorites-storage' }
  )
);