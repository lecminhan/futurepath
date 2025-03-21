
import '../styles/global.css'
import MainLayout from '../layouts/MainLayout'
import HeroSection from '../components/HeroSection'
import HowItWorks from '../components/HowItWorks';
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function Home() {
   
  return (
    <MainLayout>
<HeroSection
        title="Unlock the future you"
        description="Say hello to CareerExplorer, the world’s leading career advancement platform."
        buttonText="Get Started"
        buttonLink="/get-started"
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
      <section className="section-4 py-5">
      
      <Container>
        <h2 className="text-center mb-4">For every career stage</h2>
        <Row className="no-gutters">
          {/* Working Professionals */}
          <Col md={6} className="mb-4">
            <Card className="career-card">
              <Row className="no-gutters">
                <Col md={4}>
                  <Card.Img variant="top" src="/images/working-professionals.jpg" />
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title>Working Professionals</Card.Title>
                    <Card.Text>
                      Be your best self at work. Learn what makes you unique and how well-suited you are to your past, current, and future career choices.
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>

          {/* College Students & Graduates */}
          <Col md={6} className="mb-4">
            <Card className="career-card">
              <Row className="no-gutters">
                <Col md={4}>
                  <Card.Img variant="top" src="/images/college-students.jpg" />
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title>College Students & Graduates</Card.Title>
                    <Card.Text>
                      Unsure about what to do after college? See the range of careers you can pursue with your interests, personality, and education.
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>

          {/* Career Changers */}
          <Col md={6} className="mb-4">
            <Card className="career-card">
              <Row className="no-gutters">
                <Col md={4}>
                  <Card.Img variant="top" src="/images/career-changers.jpg" />
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title>Career Changers</Card.Title>
                    <Card.Text>
                      Looking to make a career change? Thinking about going back to school? CareerExplorer will point you in the right direction.
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>

          {/* High School Students */}
          <Col md={6} className="mb-4">
            <Card className="career-card">
              <Row className="no-gutters">
                <Col md={4}>
                  <Card.Img variant="top" src="/images/high-school-students.jpg" />
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title>High School Students</Card.Title>
                    <Card.Text>
                      Discover your potential and all of the options you have after high school. Then see which path is right for you.
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
    </MainLayout>
  );
}
