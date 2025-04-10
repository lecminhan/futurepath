import React from 'react';
import { getHollandDescriptions, getHollandPairSummary } from '../../utils/hollandUtils';

interface Props {
  code: string;
}

const HollandDescription: React.FC<Props> = ({ code }) => {
  const descriptions = getHollandDescriptions(code);
  const pairCode = code.length === 2 ? code.toUpperCase() : '';
  const pairSummary = getHollandPairSummary(pairCode);

  return (
    <div style={{ textAlign: 'justify', fontSize: '16px', lineHeight: '1.6' }}>
      {pairSummary && (
        <div
          style={{
            paddingLeft: '5px',
            borderLeft: '5px solid #0E5399',
            marginLeft: '-20px',
            color: '#333'
          }}
        >
          <p>{pairSummary}</p>
        </div>
      )}
      <h4 style={{ marginLeft: '-20px' }}> Giải nghĩa các chữ cái trong nhóm: {code}</h4>
      {descriptions.map(({ type, description, subtypes }) => (
        <div key={type} style={{ marginLeft: '-20px', marginBottom: '24px', color: '#333' }}>
          <p>
            <strong style={{ fontSize: '18px', color: '#333' }}>{type} – </strong>
            {description}
          </p>
          <ul style={{ marginLeft: '10px', marginTop: '8px', color: '#333' }}>
            {subtypes.map((sub) => (
              <li key={sub.name} style={{ marginBottom: '6px' }}>
                <strong>{sub.name}:</strong> {sub.description}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default HollandDescription;
