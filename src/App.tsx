import React from 'react';
import CommentList from './components/CommentList';
import LlamaGuard from './components/LlamaGuard';

function App() {
  const [selectedComment, setSelectedComment] = React.useState<string | null>(null);
  return (
    <div style={{ marginLeft: '12px' }}>
      <h1>Groq + LlamaGuard: Safe Peer Comments for EdTech</h1>
      <CommentList onSelect={setSelectedComment} />
      {selectedComment && <LlamaGuard comment={selectedComment} />}
    </div>
  );
}

export default App;