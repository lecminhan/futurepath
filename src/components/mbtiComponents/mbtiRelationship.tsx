import React from 'react';
import { getMBTIRelationships } from '../../utils/mbtiUtils';
import { Typography, Box } from '@mui/material';

interface Props {
  result: string;
}

const MBTIRelationship: React.FC<Props> = ({ result }) => {
  const relations = getMBTIRelationships(result);

  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 600, ml: -2 }}>
        MỐI QUAN HỆ CỦA {result}
      </Typography>

      <Box sx={{ mb: 1.5 }}>
        <Typography variant="h6" sx={{ color: '#333333', fontWeight: 600, mb: 1, ml: -2 }}>
          Tình bạn
        </Typography>
        <Typography variant="body1" sx={{ color: '#333333', lineHeight: 1.5, ml: -2 }}>
          {relations.friendship.description}
        </Typography>
        <Typography variant="body1" sx={{ color: '#333333', lineHeight: 1.5, ml: -2,marginTop:1 }}>
          {relations.friendship.details}
        </Typography>
      </Box>
      <Box sx={{ mb: 1.5 }}>
        <Typography variant="h6" sx={{ color: '#333333', fontWeight: 600, mb: 1, ml: -2 }}>
          Tình yêu
        </Typography>
        <Typography variant="body1" sx={{ color: '#333333', lineHeight: 1.5, ml: -2 }}>
          {relations.love.description}
        </Typography>
        <Typography variant="body1" sx={{ color: '#333333', lineHeight: 1.5, ml: -2 ,marginTop:1}}>
          {relations.love.details}
        </Typography>
      </Box>

      <Box sx={{ mb: 1.5 }}>
        <Typography variant="h6" sx={{ color: '#333333', fontWeight: 600, mb: 1, ml: -2 }}>
          Làm cha mẹ
        </Typography>
        <Typography variant="body1" sx={{ color: '#333333', lineHeight: 1.5, ml: -2 }}>
          {relations.parenting.description}
        </Typography>
        <Typography variant="body1" sx={{ color: '#333333', lineHeight: 1.5, ml: -2,marginTop:1 }}>
          {relations.parenting.details}
        </Typography>
      </Box>
    </Box>
  );
};

export default MBTIRelationship;
