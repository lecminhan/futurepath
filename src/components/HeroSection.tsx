import '../styles/global.css'

interface HeroSectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  learnMoreText?: string;
  learnMoreLink?: string;
  imageSrc: string;
  overlayImageSrc: string; // Thêm ảnh Career Explorer ở giữa
}

export default function HeroSection({
  title,
  description,
  buttonText,
  buttonLink,
  learnMoreText,
  learnMoreLink,
  imageSrc,
  overlayImageSrc,
}: HeroSectionProps) {
  return (
    <section className="hero-section d-flex align-items-center">
      {/* Hình ảnh chính */}
      <div className="hero-image position-relative">
        <img src={imageSrc} alt="Hero Background" className="img-fluid hero-bg-image" style={{ width: "370px", height: "auto" }} />
        
        {/* Hình overlay (Career Explorer) */}
        <div className="overlay-image">
          <img src={overlayImageSrc} alt="Career Explorer Overlay" className="img-fluid" />
        </div>
      </div>

      {/* Nội dung text */}
      <div className="hero-content text-white" style={{marginLeft: "120px"}}>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="hero-buttons">
          <a href={buttonLink} className="btn btn-light">{buttonText}</a>
          {learnMoreText && learnMoreLink && (
            <a href={learnMoreLink} className="learn-more">{learnMoreText}</a>
          )}
        </div>
      </div>
    </section>
  );
}
