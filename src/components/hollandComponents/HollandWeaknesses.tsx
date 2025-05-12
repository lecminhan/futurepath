import { getHollandWeaknesses } from '../../utils/hollandUtils';

interface Props {
  code: string;
}

const HollandWeaknesses: React.FC<Props> = ({ code }) => {
  const strengths = getHollandWeaknesses(code); // trả về mảng các {title, description}

  return (
    <div style={{ textAlign: 'justify', fontSize: '16px', lineHeight: '1.5', marginLeft: '-20px' }}>
      {strengths.map(({ title, description }, idx) => (
        <div
          key={idx}
          style={{
            paddingLeft: '12px',
            paddingTop: '8px'
          }}
        >
          <p style={{ fontWeight: 700, fontSize: '18px', color: '#333', marginBottom: '5px', marginLeft: '-5px' }}>{title}</p>
          <p style={{ margin: 0, color: '#333' }}>{description}</p>
        </div>
      ))}
    </div>
  );
};

export default HollandWeaknesses;
