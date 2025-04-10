import React from 'react';
import { getHollandJobs } from '../../utils/hollandUtils';

interface Props {
  code: string;
}

const HollandJobs: React.FC<Props> = ({ code }) => {
  const jobs = getHollandJobs(code); // trả về { title, reason }

  return (
    <div style={{ textAlign: 'justify', fontSize: '16px', lineHeight: '1.5', marginLeft: '-20px' }}>
      {jobs.map(({ title, reason }, idx) => (
        <div
          key={idx}
          style={{
            paddingLeft: '12px',
            paddingTop: '8px'
          }}
        >
          <p
            style={{
              fontWeight: 700,
              fontSize: '18px',
              color: '#333',
              marginBottom: '5px',
              marginLeft: '-5px'
            }}
          >
            {title}
          </p>
          <p style={{ margin: 0, color: '#333' }}>{reason}</p>
        </div>
      ))}
    </div>
  );
};

export default HollandJobs;
