import { create } from 'zustand';

let nextId = 1;

const useNotificationStore = create((set) => ({
  notifications: [],

  addNotification: (message, type) =>
    set((state) => ({
      notifications: [
        ...state.notifications,
        { id: nextId++, message, type, read: false },
      ],
    })),

  markAsRead: (id) =>
    set((state) => ({
      notifications: state.notifications.map((n) =>
        n.id === id ? { ...n, read: true } : n
      ),
    })),

  clearNotifications: () => set({ notifications: [] }),
}));

export default useNotificationStore;
