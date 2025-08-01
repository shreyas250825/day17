import React from 'react'
import { NotificationsPanel } from './components/NotificationsPanel'
import { useNotificationStore } from './stores/notificationsSlice'

function App() {
  const addNotification = useNotificationStore((s) => s.addNotification)

  return (
    <div>
      <h1>Zustand Notifications</h1>
      <button onClick={() => addNotification("📬 New message arrived!")}>
        Add Notification
      </button>
      <NotificationsPanel />
    </div>
  )
}

export default App
