import { getMBTIOverview } from '../../utils/mbtiUtils';

const MBTIDescription = ({ result }: { result: string }) => {
  const overviews = getMBTIOverview(result); // Lấy danh sách các đặc điểm
  return (
    <div
      style={{
        borderRadius: '10px',
        textAlign: 'left',
        marginLeft: '-20px'
      }}
    >
      {overviews.map((overview, index) => (
        <div key={index}>
          <h3 style={{ fontWeight: 'bold', fontSize: '20px', color: '#333333' }}>{overview.overview}</h3>
          <p style={{ lineHeight: '1.2', color: '#333333' }}>{overview.description}</p>
        </div>
      ))}
    </div>
  );
};
export default MBTIDescription;
