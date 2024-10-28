import React from 'react';
import CommentList from './components/CommentList';
import LlamaGuard from './components/LlamaGuard';
import InfoPanels from './components/InfoPanels';

function App() {
  const [selectedComment, setSelectedComment] = React.useState<string | null>(null);
  
  return (
    <div className="container">
      <h1>Groq + LlamaGuard: Safe Peer Comments for EdTech</h1>
      <div className="comments-section">
        <CommentList onSelect={setSelectedComment} />
        {selectedComment && <LlamaGuard comment={selectedComment} />}
      </div>
      <InfoPanels />
    </div>
  );
}

export default App;
