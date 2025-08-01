# Zustand Day17 — Advanced State Management Projects

This repository contains **three distinct Zustand-based projects** to demonstrate real-world usage of:
- Middleware & persistence
- Zustand slices & modular store
- React Query integration
- Notifications UI

Each folder contains one independent assignment. See below:

---

## Project Folders Overview

###  `zustand-advanced/`  
**Task**: Advanced State Management with Middleware, Persistence, and React Query

#### Features:
1. **Session Store (with Persistence & Migration)**  
   - Fields: `userId`, `token`, `expiresAt`, `role`
   - Only `userId` and `token` persisted using `zustand/persist`
   - Migration to version 2 adds `role: 'user' | 'admin'` (default: `user`)

2. **History Store (with Middleware)**  
   - Uses `zustand/middleware` for `immer` and `devtools`
   - Logs entries as: `{ noteId, action, timestamp }`
   - Actions: `addHistoryEntry`, `clearHistory`

3. **Collaborators (React Query + Zustand)**  
   - Fetch collaborators from API (`jsonplaceholder.typicode.com/users`)
   - Store them in Zustand on success
   - Display in a UI component

---

###  `zustand-notifications/`  
**Task**: Notification List UI with Type and Read Status

#### Features:
1. Zustand store with:
   - Fields: `id`, `message`, `type` (`info`, `success`, `error`), `read`
   - Actions: `addNotification`, `markAsRead`, `clearNotifications`

2. `NotificationList` component:
   - Displays unread notifications
   - Allows marking notifications as read
   - Styled with icons and simple CSS

---

###  `zustand-notify-app/`  
**Task**: Zustand Slices & Modular Store Architecture

#### Features:
1. Zustand slice: `notificationsSlice.js`
   - State: `notifications: { id, message, read }[]`
   - Actions: `addNotification`, `markAsRead`, `clearNotifications`

2. Main store:
   - Slices combined using `zustand`
   - Clean modular pattern

3. UI Panel:
   - `NotificationsPanel` component
   - Shows only unread notifications
   - Marks notifications as read
   - Clear all notifications button

---

## 🛠️ Setup for Any Project

```bash
# Navigate into the folder
cd zustand-advanced  # or zustand-notifications or zustand-notify-app

# Install dependencies
npm install

# Run the development server
npm run dev

 Tech Stack Used
React 18+

Zustand (core, middleware, persist)

React Query (for API integration)

UUID for generating notification IDs

Vite (for fast dev builds)

Vanilla CSS (no Tailwind)

Author
Shreyas Salian
Advanced Zustand Assignments — August 2025