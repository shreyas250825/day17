import React from 'react';
import useNotificationStore from '../store/notificationStore';

const NotificationList = () => {
  const { notifications, markAsRead } = useNotificationStore();

  const unread = notifications.filter((n) => !n.read);

  if (unread.length === 0) {
    return <p>No unread notifications 🎉</p>;
  }

  return (
    <div>
      <h2>Unread Notifications</h2>
      <ul>
        {unread.map((notification) => (
          <li
            key={notification.id}
            style={{
              background: notification.type === 'error' ? '#fdd' :
                         notification.type === 'success' ? '#dfd' : '#ddf',
              margin: '8px 0',
              padding: '10px',
              borderRadius: '4px',
            }}
          >
            <strong>{notification.type.toUpperCase()}:</strong> {notification.message}
            <button
              onClick={() => markAsRead(notification.id)}
              style={{ marginLeft: '10px' }}
            >
              Mark as Read
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationList;
