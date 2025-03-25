
import '../styles/global.css'
import MainLayout from '../layouts/MainLayout'
import HeroSection from '../components/HeroSection'
import HowItWorks from '../components/HowItWorks';
import React from 'react';
import PersonalitySection from '../components/PersonalitySection';
import { Container, Row, Col, Card,  } from 'react-bootstrap';
import MovingText from '../components/MovingText';
import FormatQuoteSharpIcon from '@mui/icons-material/FormatQuoteSharp';
export default function Home() {
  const cardStyle = {
    border: 'none',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
  };
  const bodyStyle = {
    padding: '20px',
  };
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
        <h1 className="text-center mb-5" >For every career stage</h1>
        <Row className="no-gutters">
          {/* Working Professionals */}
          <Col md={6} className="mb-4">
      <Card style={cardStyle}>
        <Row className="no-gutters">
          {/* Col cho ảnh */}
          <Col md={4}>
            <Card.Img variant="top" src="/images/card-image-1.png" style={{  objectFit: 'cover',height: '100%',width: '100%',borderRadius: '10px 0 0 10px',}}  />
          </Col>

          {/* Col cho nội dung */}
          <Col md={8}>
            <Card.Body style={bodyStyle}>
              <Card.Title>Working Professionals</Card.Title>
              <Card.Text>
              Be your best self at work. Learn what makes you uniqueand how well-suited you are to your past, current, and future career choices.
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Col>

    <Col md={6} className="mb-4">
      <Card style={cardStyle}>
        <Row className="no-gutters">
          {/* Col cho ảnh */}
          <Col md={4}>
            <Card.Img variant="top" src="/images/card-image-3.png" style={{  objectFit: 'cover',height: '100%',width: '100%',borderRadius: '10px 0 0 10px',}}  />
          </Col>

          {/* Col cho nội dung */}
          <Col md={8}>
            <Card.Body style={bodyStyle}>
              <Card.Title>College Students & Graduates</Card.Title>
              <Card.Text>
                Unsure about what to do after college? See the range of careers you can pursue with your interests, personality, and education.
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Col>

    <Col md={6} className="mb-4">
      <Card style={cardStyle}>
        <Row className="no-gutters">
          {/* Col cho ảnh */}
          <Col md={4}>
            <Card.Img variant="top" src="/images/card-image-2.png" style={{  objectFit: 'cover',height: '100%',width: '100%',borderRadius: '10px 0 0 10px',}}  />
          </Col>

          {/* Col cho nội dung */}
          <Col md={8}>
            <Card.Body style={bodyStyle}>
              <Card.Title>High School Students</Card.Title>
              <Card.Text>
              Discover your true potential and all of the options you have after high school. Then see which path is right for you.
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Col>


    <Col md={6} className="mb-4">
      <Card style={cardStyle}>
        <Row className="no-gutters">
          {/* Col cho ảnh */}
          <Col md={4}>
            <Card.Img variant="top" src="/images/card-image-4.png" style={{  objectFit: 'cover',height: '100%',width: '100%',borderRadius: '10px 0 0 10px',}}  />
          </Col>

          {/* Col cho nội dung */}
          <Col md={8}>
            <Card.Body style={bodyStyle}>
              <Card.Title>Career Changers</Card.Title>
              <Card.Text>
              Looking to make a career change? Thinking about going back to school? CareerExplorer will point you in the right direction.
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Col>
  {/* Section 5 */}
        </Row>
        <h1 style={{ textAlign: 'center', marginTop:'150px',marginBottom:'50px' }}>Why trust us?</h1>
        <Row>
          {/* Column 1 */}
          <Col sm={12} md={4} className="text-center mb-4">
            <h3 style={{textAlign:'justify',marginBottom: '20px'}} >Built by data scientists and expert psychologists</h3>
            <p style={{textAlign:'justify'}}>
            Our questions and algorithms are unique to us and are built on decades of study in vocational testing.
            </p>
          </Col>

          {/* Column 2 */}
          <Col sm={12} md={4} className="text-center mb-4" >
            <h3 style={{textAlign:'justify',marginBottom: '20px'}} >Over 400 million questions answered</h3>
            <p style={{textAlign:'justify'}}>
            The world of work changes in real time — and so do our analytics. Our algorithms continuously improve with millions of daily data points to give you real-time accuracy.
            </p>
          </Col>

          {/* Column 3 */}
          <Col sm={12} md={4} className="text-center mb-4">
            <h3 style={{textAlign:'justify',marginBottom: '50px'}} >Your data is safe with us</h3>
            <p style={{textAlign:'justify'}}>
            We firmly believe that you own your data, not us. We never sell your personal data to third parties.
            </p>
          </Col>
        </Row>
        <h1 style={{ textAlign: 'center', marginTop:'150px',marginBottom:'30px' }}>
          Join millions who have <br/> taken our assessment
        </h1>
        <p style={{  textAlign: 'center' }}>
          What sets you apart in the workplace? Discover the behavioral traits that shape <br/>how you think and how you work with others.
        </p>
        {/* section5 3 */}
        <PersonalitySection/>
        <Row>
          {/* First Person */}
          <Col md={6} className="mb-4">
            <div
              style={{
                position: 'relative',
                borderRadius: '5px',
                  overflow: 'hidden',
              }}
            >
              <img
                src="/images/person1.png"
                alt="Person 1"
                style={{
                  width: '70%',
                  height: 'auto',
                  display: 'block',
                  borderRadius:'5px',
                  marginTop:'150px'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '40%',
                  left: '54%',
                  transform: 'translate(-12%, -80%)',
                  color: 'white',
                  borderRadius: '10px',
                  width: '80%',
                }}
              >
                <ul>
                <li style={{ fontSize: '1.6rem',color:'black' }}>
                    Scholar
                  </li>
                  <li style={{ fontSize: '1.6rem',color:'black' }}>
                    Disciplined
                  </li>
                  <li style={{ fontSize: '1.6rem',color:'black' }}>
                    Tempered
                  </li>
                  <li style={{ fontSize: '1.6rem',color:'black' }}>
                    Courageous
                  </li>
                  <li style={{ fontSize: '1.6rem',color:'black' }}>
                    Deliberate
                  </li>
                </ul>
              </div>
              <div style={{fontSize:'0.7rem'}}>Elijah, Architect in London</div>
            </div>
          </Col>

          {/* Second Person */}
          <Col md={6} className="mb-4">
                
            <div
              style={{
                position: 'relative',
                borderRadius: '5px',
                overflow: 'hidden',
              }}
            >
              <div style={{fontSize:'0.7rem',paddingTop:'155px'}}>Jørgen, Engineer in Vancouver</div>
              <img
                src="/images/person2.png"
                alt="Person 2"
                style={{
                  width: '70%',
                  height: 'auto',
                  display: 'block',
                  borderRadius:'5px'
                }}
              />
              
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-10%, 60%)',
                  borderRadius: '5px',
                }}
              >
                <ul >
                  <li style={{ fontSize: '1.6rem', color: 'white', }}>
                    Groundbreaker
                  </li>
                  <li style={{ fontSize: '1.6rem', color: 'white', }}>
                    Competitive
                  </li>
                  <li style={{ fontSize: '1.6rem', color: 'white', }}>
                    Dominant
                  </li>
                  <li style={{ fontSize: '1.6rem', color: 'white', }}>
                    Values-Oriented
                  </li>
                  <li style={{ fontSize: '1.6rem', color: 'white', }}>
                    Dutiful
                  </li>
                </ul>
              </div>
            </div>
          </Col>

          {/* Third Person */}
          <Col md={6} className="mb-4">
          
            <div
              style={{
                position: 'relative',
                overflow: 'hidden',
                marginTop:'100px'
              }}
            >
                       <div style={{fontSize:'0.7rem',textAlign:'center'}}>Maya, Professor in Chicago</div>   

              <img
                src="/images/person3.png"
                alt="Person 3"
                style={{
                  width: '70%',
                  height: 'auto',
                  display: 'block',
                  borderRadius: '5px',
                  marginLeft: '70px',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '70%',
                  left: '40%',
                  transform: 'translate(-50%, -50%)',
                  width: '80%',
                }}
              >
                <ul >
                <li style={{ fontSize: '1.6rem', color: 'white' }}>
                Mastermind
                  </li>
                  <li style={{ fontSize: '1.6rem', color: 'white' }}>
                  Candid
                  </li>
                  <li style={{ fontSize: '1.6rem', color: 'white' }}>
                  Mentoring
                  </li>
                  <li style={{ fontSize: '1.6rem', color: 'white' }}>
                  Trusting
                  </li>
                  <li style={{ fontSize: '1.6rem', color: 'white' }}>
                  Altruistic
                  </li>
                </ul>
              </div>
            </div>
          </Col>

          {/* Fourth Person */}
          <Col md={6} className="mb-4">
            <div
              style={{
                position: 'relative',
                borderRadius: '10px',
                marginTop:'150px',
                marginLeft:'60px'
              }}
            >
              <img
                src="/images/person4.png"
                alt="Person 4"
                style={{
                  width: '85%',
                  borderRadius:'5px'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '10%',
                  left: '90%',
                  transform: 'translate(-50%, -50%)',
                  width: '80%',
                }}
              >
                <ul >
                  <li style={{ fontSize: '1.6rem',color: 'black', margin: '5px 0' }}>
                    Guardian
                  </li>
                  <li style={{ fontSize: '1.6rem',color: 'black', margin: '5px 0' }}>
                    Nurturing
                  </li>
                  <li style={{ fontSize: '1.6rem',color: 'black', margin: '5px 0' }}>
                    Analytical
                  </li>
                  <li style={{ fontSize: '1.6rem',color: 'black', margin: '5px 0' }}>
                    Social Butterfly
                  </li>
                  <li style={{ fontSize: '1.6rem',color: 'black', margin: '5px 0' }}>
                    Leader
                  </li>
                </ul>
              </div>
              <div style={{fontSize:'0.7rem'}}>Levi, Mechanical Engineer in Eugene</div>
            </div>
          </Col>
        </Row>
        
        <MovingText/>
        
      </Container>
      
    </section>
    {/* last section */}
    <section style={{ textAlign: 'center', padding: '50px 0', backgroundColor: '#ffffff' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '30px', color: '#000' }}>
        People say great things <br /> about us
      </h1>

      {/* Icon FormatQuoteSharp */}
        <FormatQuoteSharpIcon style={{ fontSize: '3rem',color:'#4A2B68'}} />

      {/* Testimonial paragraph */}
      <p style={{ fontSize: '1.25rem', textAlign: 'center' }}>
        What an amazing tool to help you understand yourself and get an idea of potential jobs that you're
        <br />
        suited for!
      </p>
      <p style={{ fontSize: '1.25rem', textAlign: 'center' }}>— Ashley</p>

      {/* Container with Testimonials */}
      <Container>
        <Row>
          {/* Testimonial 1 */}
          <Col md={6}  className="mb-4">
            <Card style={{ border: 'none',backgroundColor: 'transparent' }}>
              <Card.Body>
                <blockquote style={{ fontSize: '1.25rem',color: '#333', }}>
                <FormatQuoteSharpIcon style={{ fontSize: '3rem',color:'#4A2B68'}} />
                  <p style={{ fontStyle: 'italic',textAlign:'justify' }}>
                  I like how in-depth it was. Not just, "what are you interested in? "but how your personality and personal preferences play into career fit.
                  </p>
                  <footer>— Leah</footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>

          {/* Testimonial 2 */}
          <Col md={6}  className="mb-4">
            <Card style={{ border: 'none', backgroundColor: 'transparent' }}>
              <Card.Body>
                <blockquote style={{ fontSize: '1.25rem', color: '#333' }}>
                <FormatQuoteSharpIcon style={{ fontSize: '3rem',color:'#4A2B68'}} />
                <p style={{ fontStyle: 'italic',textAlign:'justify' }}>
                We have been using CareerExplorer with our college students for years. Students express how much they learn from this assessment, both about their interests and themselves. 5 stars!
                  </p>
                  <footer>— Suzanne</footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>

          {/* Testimonial 3 */}
          <Col md={6}  className="mb-4">
            <Card style={{ border: 'none', backgroundColor: 'transparent' }}>
              <Card.Body>
                <blockquote style={{ fontSize: '1.25rem', color: '#333' }}>
                <FormatQuoteSharpIcon style={{ fontSize: '3rem',color:'#4A2B68'}} />
                <p style={{ fontStyle: 'italic',textAlign:'justify' }}>
                "Really cool. I can see my characteristics and all the jobs that I can obtain. I'm currently a student and I've always wondered what I would be good at. Now I can see options right in front of me."
                  </p>
                  <footer>— JC</footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>

          {/* Testimonial 4 */}
          <Col md={6} className="mb-4">
            <Card style={{ border: 'none', backgroundColor: 'transparent' }}>
              <Card.Body>
                <blockquote style={{ fontSize: '1.25rem', color: '#333' }}>
                <FormatQuoteSharpIcon style={{ fontSize: '3rem',color:'#4A2B68'}} />
                <p style={{ fontStyle: 'italic',textAlign:'justify' }}>
                "This is a great tool! It is extremely accurate as well. I want to go to law school and get into politics to change the laws/policy in the U.S. regarding homelessness. I am finishing my Human Services Associate of Arts degree in January and plan on becoming a Homeless Advocate. Like I said, great test. Couldn't be any more accurate!"
                  </p>
                  <footer>— Sabrena</footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
    <section>
    <div className="footer-top d-flex" >
          <div className="left-section">
            <h2>Go ahead, Explore.</h2>
            <p>Take the free assessment and uncover things you didn’t know about yourself.</p>
            <button className="btn btn-light">Get Started Now</button>
          </div>
          <div className="right-section">
            <blockquote>
              <p>
                <span className="quote-symbol">“</span> Whatever Sokanu is doing, it seems to be clicking with folks. 
                More than 70% of those who start the test complete it right away.
              </p>
              <div className="quote-source">
                <span>FASTCOMPANY</span> &nbsp; <span>Forbes</span> &nbsp; <span>RBC Royal Bank</span>
              </div>
            </blockquote>
          </div>
        </div>
        </section>
    </MainLayout>

  );
}
