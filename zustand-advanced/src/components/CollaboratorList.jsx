// src/components/CollaboratorList.jsx
import React, { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useCollaboratorStore } from '../stores/collaboratorStore';

export function CollaboratorList() {
  const collaborators = useCollaboratorStore((state) => state.collaborators);
  const setCollaborators = useCollaboratorStore((state) => state.setCollaborators);

  const { data, isLoading, error } = useQuery({
    queryKey: ['collaborators'],
    queryFn: async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!res.ok) throw new Error('Failed to fetch');
      return res.json();
    },
  });

  // 🔒 Update Zustand only if necessary, once, in useEffect
  useEffect(() => {
    if (data && data.length > 0) {
      const same =
        collaborators.length === data.length &&
        collaborators.every((c, i) => c.id === data[i].id);
      if (!same) {
        setCollaborators(data);
      }
    }
  }, [data]);

  if (isLoading) return <p>Loading collaborators...</p>;
  if (error) return <p>Error fetching collaborators</p>;

  return (
    <ul>
      {collaborators.length === 0 ? (
        <li>No collaborators found</li>
      ) : (
        collaborators.map((c) => (
          <li key={c.id}>
            {c.name} — {c.email}
          </li>
        ))
      )}
    </ul>
  );
}
