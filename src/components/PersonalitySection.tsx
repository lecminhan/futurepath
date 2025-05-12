import { Container } from 'react-bootstrap';
import './styles/PersonalitySection.css'; // Import CSS file cho các animation

const PersonalitySection: React.FC = () => {
  return (
    <section className="personality-section">
      <Container>
        <div className="content">
          {/* Chèn ảnh Personality */}
          <div className="image-container" style={{ position: 'relative', marginTop: '40vh' }}>
            <img src="/images/Personality.png" alt="Personality" className="image" style={{ width: '100%', height: 'auto' }} />

            {/* Ảnh ở trên chồng lên */}
            <img src="/images/home-toptext.png" alt="Top Image" className="top-image" />

            {/* Ảnh ở dưới chồng lên */}
            <img src="/images/home-bottomtext.png" alt="Bottom Image" className="bottom-image" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PersonalitySection;
