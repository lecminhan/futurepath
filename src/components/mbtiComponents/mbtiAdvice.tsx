// components/mbtiComponents/mbtiAdvice.tsx

import { getMBTIAdvice } from '../../utils/mbtiUtils';
import { Typography, Box } from '@mui/material';

interface Props {
  result: string;
}

const MBTIAdvice: React.FC<Props> = ({ result }) => {
  const advice = getMBTIAdvice(result);

  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, ml: -2 }}>
        LỜI KHUYÊN DÀNH CHO {result}
      </Typography>

      {advice.map((a, index) => (
        <Box sx={{ mb: 4 }} key={index}>
          <Typography variant="h6" sx={{ color: '#333333', fontWeight: 600, mb: 1, ml: -2 }}>
            {a.title}
          </Typography>
          <Typography variant="body1" sx={{ color: '#333333', lineHeight: 1.5, ml: -2 }}>
            {a.description}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default MBTIAdvice;
