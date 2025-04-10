import React from 'react';
import { getHollandPairOverview } from '../../utils/hollandUtils';

interface Props {
  code: string;
}

const HollandOverview: React.FC<Props> = ({ code }) => {
  const pairOverview = code.length === 2 ? getHollandPairOverview(code) : undefined;

  return (
    <div style={{ textAlign: 'justify', paddingLeft: '5px', fontSize: '18px', borderLeft: '3px solid #0E5399', color: '#0E5399', lineHeight: '1.6' }}>
      {pairOverview && (
        <div style={{ marginBottom: '24px', borderRadius: '8px' }}>
          <p>{pairOverview}</p>
        </div>
      )}
    </div>
  );
};

export default HollandOverview;
