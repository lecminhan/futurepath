import React from 'react';
import { getMBTIWeaknesses } from '../../utils/mbtiUtils';
import { Typography, Box } from '@mui/material';

interface Weakness {
  name: string;
  description: string;
}

interface Props {
  result: string;
}

const MBTIWeaknesses: React.FC<Props> = ({ result }) => {
  const weaknesses: Weakness[] = getMBTIWeaknesses(result);

  return (
    <Box className="mbti-section mbti-weaknesses">
      {weaknesses.length > 0 ? (
        weaknesses.map((item, index) => (
          <Box key={index} sx={{ mb: 1.5 }}>
            <Typography variant="h6" component="h3" sx={{ color: '#333333', fontWeight: 600, ml: -2 }}>
              {item.name}
            </Typography>
            <Typography variant="body1" sx={{ color: '#333333', lineHeight: 1.5, ml: -2 }}>
              {item.description}
            </Typography>
          </Box>
        ))
      ) : (
        <Typography>Không có dữ liệu điểm yếu</Typography>
      )}
    </Box>
  );
};

export default MBTIWeaknesses;
