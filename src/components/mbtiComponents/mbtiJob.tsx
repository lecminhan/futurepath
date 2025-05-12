// components/mbtiComponents/MBTIJobs.tsx
import { getMBTIJobs } from '../../utils/mbtiUtils';
import { Typography, Box } from '@mui/material';

interface Props {
  result: string;
}

const MBTIJobs: React.FC<Props> = ({ result }) => {
  const jobs = getMBTIJobs(result);

  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 600, mb: 1, ml: -2 }}>
        NGHỀ NGHIỆP PHÙ HỢP VỚI {result}
      </Typography>

      <Box sx={{ ml: 4 }}>
        {jobs.map((job, index) => (
          <Box key={index} sx={{ mb: 2 }}>
            <Typography variant="h6" sx={{ color: '#333333', fontWeight: 600, ml: -6 }}>
              {job.title}
            </Typography>
            <Typography variant="body1" sx={{ ml: -6, color: '#333333', lineHeight: 1.5 }}>
              {job.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default MBTIJobs;
