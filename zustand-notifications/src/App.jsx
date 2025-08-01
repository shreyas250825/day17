import React from 'react';
import useNotificationStore from './store/notificationStore';
import NotificationList from './components/NotificationList';

function App() {
  const { addNotification, clearNotifications } = useNotificationStore();

  const handleAdd = (type) => {
    const messages = {
      info: "Here's some information.",
      success: "Operation was successful!",
      error: "Something went wrong.",
    };
    addNotification(messages[type], type);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Zustand Notifications</h1>

      <div style={{ marginBottom: '1rem' }}>
        <button onClick={() => handleAdd('info')}>Add Info</button>
        <button onClick={() => handleAdd('success')}>Add Success</button>
        <button onClick={() => handleAdd('error')}>Add Error</button>
        <button onClick={clearNotifications}>Clear All</button>
      </div>

      <NotificationList />
    </div>
  );
}

export default App;
