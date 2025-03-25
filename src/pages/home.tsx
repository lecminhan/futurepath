
import '../styles/global.css'
import MainLayout from '../layouts/MainLayout'
import HeroSection from '../components/HeroSection'
import HowItWorks from '../components/HowItWorks';
export default function Home() {

  return (
    <MainLayout>
      <HeroSection
        title="Unlock the future you"
        description="Say hello to CareerExplorer, the world’s leading career advancement platform."
        buttonText="Get Started"
        buttonLink="/login"
        learnMoreText="Learn More About CareerExplorer"
        learnMoreLink="/about"
        imageSrc="/images/hero-image.png"
        overlayImageSrc="/images/career-explorer.png"
      />
      {/* Section 2: Features */}
      <section className="features-section text-center">
        <div className="container">
          <h2>
            Described as <span className="highlight">“shockingly accurate,”</span> we’ve helped millions of people find their ideal careers.
          </h2>

          <div className="row mt-4">
            {/* Feature 1 */}
            <div className="col-md-4">
              <h4>Assessment</h4>
              <p>Refine your ideal experiences and top values, and learn what makes you tick.</p>
            </div>

            {/* Feature 2 */}
            <div className="col-md-4">
              <h4>Matches</h4>
              <p>The system finds top fits for you based on your strengths, interests, and personality.</p>
            </div>

            {/* Feature 3 */}
            <div className="col-md-4">
              <h4>Library</h4>
              <p>Browse over 1000 careers and see key details on them instantly.</p>
            </div>
          </div>
        </div>
      </section>
      <HowItWorks />
    </MainLayout>
  );
}
