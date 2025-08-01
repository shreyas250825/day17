// src/stores/collaboratorStore.js
import { create } from 'zustand';

export const useCollaboratorStore = create((set) => ({
  collaborators: [],
  setCollaborators: (collabs) => set(() => ({ collaborators: collabs })),
}));
