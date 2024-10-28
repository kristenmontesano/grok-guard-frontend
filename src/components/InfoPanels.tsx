import React from 'react';

const InfoPanels: React.FC = () => {
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
        {/* You'll add your project description text here */}
      </div>
      
      <div className="categories-panel">
        <h2>Moderation Categories</h2>
        {categories.map((category) => (
          <div key={category.code} className="category-item">
            <span className="category-code">{category.code}:</span>
            {category.desc}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoPanels;