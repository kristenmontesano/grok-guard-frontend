import React from 'react';

const LlamaGuard: React.FC<{ response: string }> = ({ response }) => {
  const responseClass = response.includes('unsafe') 
    ? 'response-container unsafe'
    : response.includes('safe')
      ? 'response-container safe'
      : 'response-container';

  return (
    <div className={responseClass}>
      <p className="response-text">{response}</p>
    </div>
  );
};

export default LlamaGuard;
