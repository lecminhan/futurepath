// components/mbtiComponents/MBTITypeSlider.tsx
import React from 'react';
import { getMBTIName, getMBTIIntro, getMBTIGradient } from '../../utils/mbtiUtils';
import { Box, Typography } from '@mui/material';
import '../styles/mbtiSlider.css'; // Đảm bảo bạn đã import CSS

const MBTITypeSlider: React.FC = () => {
  const mbtiCodes = ['ENFJ', 'ENFP', 'ENTJ', 'ENTP', 'ESFJ', 'ESFP', 'ESTJ', 'ESTP', 'INFJ', 'INFP', 'INTJ', 'INTP', 'ISFJ', 'ISFP', 'ISTJ', 'ISTP'];

  return (
    <Box sx={{ mt: 4 }}>
      {/* Horizontal Scroll Container */}
      <Box className="scroll-container">
        {/* Hiển thị các nhóm tính cách MBTI */}
        {mbtiCodes.map((code, index) => (
          <Box key={index} className="scroll-item" style={{ background: getMBTIGradient(code) }}>
            {/* Hiển thị ảnh */}
            <img
              src={`/images/mbti/${code}.png`} // Dùng code để tạo đường dẫn ảnh
              alt={code}
              style={{
                width: '100px',
                height: '100px',
                marginRight: '20px'
              }}
            />
            {/* Tên nhóm tính cách */}
            <div>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, textAlign: 'justify', ml: 1 }}>
                {getMBTIName(code)} {/* Tên nhóm tính cách */}
              </Typography>
              {/* Mô tả nhóm tính cách */}
              <Typography variant="body2" sx={{ fontSize: '0.9rem', color: '#4d4d4d', ml: 0.5, textAlign: 'justify', mr: 0.5 }}>
                {getMBTIIntro(code)} {/* Mô tả nhóm tính cách */}
              </Typography>
            </div>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default MBTITypeSlider;
