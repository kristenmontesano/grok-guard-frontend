import React, { useState } from 'react';
import { getChatCompletion } from '../ai/groqClient';

interface LlamaGuardProps {
  comment: string;
}

const LlamaGuard: React.FC<LlamaGuardProps> = ({ comment }) => {
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const sendToLlamaGuard = async () => {
    setLoading(true);
    try {
      const result = await getChatCompletion(comment);
      setResponse(result);
    } catch (error) {
      setResponse('Failed to fetch response');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button 
        className="llama-guard-button"
        onClick={sendToLlamaGuard} 
        disabled={loading}
      >
        {loading ? (
          <>
            <span className="loading-spinner"></span>
            Analyzing...
          </>
        ) : (
          'Analyze with Llama Guard'
        )}
      </button>
      {response && (
        <div className="response-container">
          <p className="response-text">{response}</p>
        </div>
      )}
    </div>
  );
};

export default LlamaGuard;