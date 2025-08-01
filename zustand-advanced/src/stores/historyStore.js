import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer'; // 

export const useHistoryStore = create(
  devtools(
    immer((set) => ({
      history: [],

      addHistoryEntry: (noteId, action) =>
        set((state) => {
          state.history.push({
            noteId,
            action,
            timestamp: Date.now(),
          });
        }),

      clearHistory: () =>
        set((state) => {
          state.history = [];
        }),
    }))
  )
);
