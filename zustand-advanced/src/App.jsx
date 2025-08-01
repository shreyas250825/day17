import React from 'react';
import { useSessionStore } from './stores/sessionStore';
import { useHistoryStore } from './stores/historyStore';
import { CollaboratorList } from './components/CollaboratorList';

function App() {
  const session = useSessionStore();
  const history = useHistoryStore();

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Zustand Advanced Assignment</h1>

      <h2>Session</h2>
      <button
        onClick={() =>
          session.setSession('123', 'token_abc', Date.now() + 3600 * 1000)
        }
      >
        Set Session
      </button>
      <button onClick={session.clearSession}>Clear Session</button>
      <pre>{JSON.stringify(session, null, 2)}</pre>

      <h2>History</h2>
      <button onClick={() => history.addHistoryEntry('note1', 'created')}>
        Add History
      </button>
      <button onClick={history.clearHistory}>Clear History</button>
      <pre>{JSON.stringify(history.history, null, 2)}</pre>

      <h2>Collaborators</h2>
      <CollaboratorList />
    </div>
  );
}

export default App;
