// src/stores/notificationsSlice.js
import { create } from 'zustand'
import { v4 as uuidv4 } from 'uuid'

export const useNotificationStore = create((set) => ({
  notifications: [],

  addNotification: (message) =>
    set((state) => ({
      notifications: [
        ...state.notifications,
        { id: uuidv4(), message, read: false },
      ],
    })),

  markAsRead: (id) =>
    set((state) => ({
      notifications: state.notifications.map((n) =>
        n.id === id ? { ...n, read: true } : n
      ),
    })),

  clearNotifications: () =>
    set(() => ({
      notifications: [],
    })),
}))
