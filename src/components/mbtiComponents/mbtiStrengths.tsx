import React from 'react';
import { getMBTIStrengths } from '../../utils/mbtiUtils';
import { Typography, Box } from '@mui/material';

interface Props {
  result: string;
}

const MBTIStrengths: React.FC<Props> = ({ result }) => {
  const strengths = getMBTIStrengths(result); // Get strengths for the given result

  return (
    <Box>
      {strengths.map((s, index) => (
        <Box key={index} sx={{ mb: 1.5, ml: -1 }}>
          <Typography variant="h6" component="h3" sx={{ color: '#333333', fontWeight: 600, mb: 0.5, ml: -1 }}>
            {s.name}
          </Typography>
          <Typography variant="body1" sx={{ color: '#333333', lineHeight: 1.5, ml: -1 }}>
            {s.description}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default MBTIStrengths;
