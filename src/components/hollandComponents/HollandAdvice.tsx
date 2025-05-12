import { getHollandAdvices, getHollandPairAdvice } from '../../utils/hollandUtils';

interface Props {
  code: string;
}

const HollandAdvice: React.FC<Props> = ({ code }) => {
  const advices = getHollandAdvices(code); // Trả về mảng [{ title, description }]
  const pairAdvices = getHollandPairAdvice(code); // Trả về mô tả chuỗi tổ hợp 2 chữ Holland

  return (
    <div style={{ textAlign: 'justify', fontSize: '16px', lineHeight: '1.5', marginLeft: '-20px' }}>
      {/* Lời khuyên chi tiết theo từng chữ */}
      {advices.map(({ title, description }, idx) => (
        <div key={idx} style={{ paddingLeft: '12px', paddingTop: '8px' }}>
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
          <p style={{ margin: 0, color: '#333' }}>{description}</p>
        </div>
      ))}

      {/* Tổng kết theo tổ hợp */}
      {pairAdvices && (
        <>
          <h4 style={{ color: '#333', marginTop: '28px', marginBottom: '12px' }}>Tổng kết định hướng nghề nghiệp</h4>
          <div
            style={{
              marginLeft: '10px',
              borderLeft: '5px solid #0E5399',
              color: '#333'
            }}
          >
            <p style={{ margin: 10 }}>{pairAdvices}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default HollandAdvice;
