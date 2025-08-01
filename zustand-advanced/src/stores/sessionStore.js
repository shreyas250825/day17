import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const useSessionStore = create(
  persist(
    (set) => ({
      userId: '',
      token: '',
      expiresAt: 0,
      role: 'user', // new field with default

      setSession: (userId, token, expiresAt, role = 'user') =>
        set({ userId, token, expiresAt, role }),

      clearSession: () => set({ userId: '', token: '', expiresAt: 0, role: 'user' }),
    }),
    {
      name: 'session-storage',
      version: 2,

      partialize: (state) => ({
        userId: state.userId,
        token: state.token,
      }),

      migrate: (persistedState, version) => {
        if (version < 2) {
          return {
            ...persistedState,
            role: 'user',
          };
        }
        return persistedState;
      },

      storage: createJSONStorage(() => localStorage),
    }
  )
);
