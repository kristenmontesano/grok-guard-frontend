import React, { useState, useEffect } from 'react';
import { getChatCompletion } from '../ai/groqClient';

interface LlamaGuardProps {
  comment: string;
}

// Component that analyzes text using LlamaGuard for content safety
const LlamaGuard: React.FC<LlamaGuardProps> = ({ comment }) => {
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [lastRequestTime, setLastRequestTime] = useState<number>(0);

  // Reset response when comment changes
  useEffect(() => {
    setResponse(null);
  }, [comment]);

  const sendToLlamaGuard = async () => {
    const now = Date.now();
    const timeSinceLastRequest = now - lastRequestTime;
    // Rate limit requests to prevent API overload
    const needsCooldown = timeSinceLastRequest < 2000;
    
    setLoading(true);
    setLastRequestTime(now);

    if (needsCooldown) {
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    try {
      const result = await getChatCompletion(comment);
      setResponse(result);
    } catch (error) {
      setResponse('Failed to fetch response');
    } finally {
      setLoading(false);
    }
  };

  // Determine CSS class based on safety assessment in response
  const getResponseClass = () => {
    if (!response) return 'response-container';
    return response.toLowerCase().includes('unsafe') 
      ? 'response-container unsafe'
      : response.toLowerCase().includes('safe')
        ? 'response-container safe'
        : 'response-container';
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
        <div className={getResponseClass()}>
          <p className="response-text">{response}</p>
        </div>
      )}
    </div>
  );
};

export default LlamaGuard;
