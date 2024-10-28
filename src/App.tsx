import React from 'react';
import CommentList from './components/CommentList';
import LlamaGuard from './components/LlamaGuard';

function App() {
  const [selectedComment, setSelectedComment] = React.useState<string | null>(null);

  return (
    <div>
      <h1>Llama Guard Demo</h1>
      <CommentList onSelect={setSelectedComment} />
      {selectedComment && <LlamaGuard comment={selectedComment} />}
    </div>
  );
}

export default App;