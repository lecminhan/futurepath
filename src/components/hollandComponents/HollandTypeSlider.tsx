import { Box, Typography } from '@mui/material';
import '../styles/mbtiSlider.css';
import { getHollandInfo,getHollandGradient} from '../../utils/hollandUtils';

const hollandCodes = [
  'RI', 'RA', 'RS', 'RE', 'RC',
  'IA', 'IS', 'IE', 'IC',
  'AS', 'AE', 'AC',
  'SE', 'SC', 'EC'
];

const HollandTypeSlider: React.FC = () => {
  return (
    <Box sx={{ mt: 4 }}>
      <Box className="scroll-container">
        {hollandCodes.map((code) => {
          const { alias, tagline } = getHollandInfo(code);

          return (
            <Box key={code} className="scroll-item" style={{ background: getHollandGradient(code) }}>
              <img
                src={`/images/holland/${code}.png`}
                alt={code}
                style={{ width: 100, height: 100, marginRight: 20 ,}}
              />
              <div>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                  {alias}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontSize: '0.9rem', color: '#4d4d4d' }}
                >
                  {tagline}
                </Typography>
              </div>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default HollandTypeSlider;

