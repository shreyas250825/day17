// src/components/NotificationsPanel.jsx
import React from 'react'
import { useNotificationStore } from '../stores/notificationsSlice'

export function NotificationsPanel() {
  const notifications = useNotificationStore((s) => s.notifications)
  const markAsRead = useNotificationStore((s) => s.markAsRead)
  const clearNotifications = useNotificationStore((s) => s.clearNotifications)

  const unread = notifications.filter((n) => !n.read)

  return (
    <div>
      <h2>🔔 Notifications</h2>

      {unread.length === 0 ? (
        <p>No unread notifications</p>
      ) : (
        <ul>
          {unread.map((n) => (
            <li key={n.id}>
              {n.message}
              <button onClick={() => markAsRead(n.id)}>Mark as Read</button>
            </li>
          ))}
        </ul>
      )}

      <button onClick={clearNotifications}>Clear All</button>
    </div>
  )
}
