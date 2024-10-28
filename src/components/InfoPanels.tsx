import React from 'react';

const InfoPanels: React.FC = () => {
    // The categories of unsafe content that LlamaGuard can detect
    // we send these in the request to the API in groqClient.ts
  const categories = [
    { code: 'S1', desc: 'Violent Crimes' },
    { code: 'S2', desc: 'Non-Violent Crimes' },
    { code: 'S3', desc: 'Sex Crimes' },
    { code: 'S4', desc: 'Child Exploitation' },
    { code: 'S5', desc: 'Defamation' },
    { code: 'S6', desc: 'Specialized Advice' },
    { code: 'S7', desc: 'Privacy' },
    { code: 'S8', desc: 'Intellectual Property' },
    { code: 'S9', desc: 'Indiscriminate Weapons' },
    { code: 'S10', desc: 'Hate' },
    { code: 'S11', desc: 'Self-Harm' },
    { code: 'S12', desc: 'Sexual Content' },
    { code: 'S13', desc: 'Elections' },
  ];

  return (
    <div className="right-panels">
      <div className="info-panel">
        <h2>About This Project</h2>
        This project demonstrates the use for <span style={{color: '#98FB98'}}>Llama Guard</span> 3 8B powered by <span style={{color: '#98FB98'}}>Groq</span> in moderating the comments on a children's coding education prlatform. On the platform, <a href="https://jippity.pro/" style={{color: '#ec4899'}}>Jippity.Pro</a>, children code and publish projects. They can play and comment on one another's published projects as well. In this demo, we ran actual data from our database through <span style={{color: '#98FB98'}}>Groq</span> with <span style={{color: '#98FB98'}}>Llama Guard</span> to assess it's ability to moderate comments. Potential impact is integrating this into the current moderation systems of the product to help us either prevent users from posting comments flagged by <span style={{color: '#98FB98'}}>Llama Guard</span> or to forward links to a human admin to assess them at some regular interval.
      </div>
      
      <div className="categories-panel">
        <h2>Unsafe Content Categories</h2>
        <div className="categories-scroll">
          {categories.map((category) => (
            <div key={category.code} className="category-item">
              <span className="category-code">{category.code}:</span>
              {category.desc}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoPanels;
