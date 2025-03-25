import '../styles/global.css'
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="footer mt-5">
      {/* Phần trên: Call to action */}
      <div className="footer-top d-flex">
        <div className="left-section">
          <h2>Go ahead, Explore.</h2>
          <p>Take the free assessment and uncover things you didn’t know about yourself.</p>
          <Link to={'/login'} className="btn btn-light">Get Started Now</Link>
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

      {/* Phần dưới: Liên kết */}
      <div className="footer-bottom">
        <div className="footer-links">
          <div>
            <h6>FOR INDIVIDUALS</h6>
            <ul>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/login">Login</a></li>
              <li><a href="/signup">Sign Up</a></li>
              <li><a href="/test">The CareerExplorer Career Test</a></li>
            </ul>
          </div>
          <div>
            <h6>EXPLORE</h6>
            <ul>
              <li><a href="/careers">Career Collections</a></li>
              <li><a href="/quiz">What Career is Right for Me?</a></li>
              <li><a href="/finance">Careers in Finance</a></li>
              <li><a href="/medicine">Careers in Medicine</a></li>
              <li><a href="/psychology">Careers in Psychology</a></li>
              <li><a href="/travel">Careers in Travel</a></li>
            </ul>
          </div>
          <div>
            <h6>FOR ORGANIZATIONS</h6>
            <ul>
              <li><a href="/organizations">CareerExplorer for Organizations</a></li>
            </ul>
          </div>
          <div>
            <h6>© SOKANU INTERACTIVE INC. 2025</h6>
            <ul>
              <li><a href="/about">About CareerExplorer</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/faq">FAQ Knowledge Base</a></li>
              <li><a href="/terms">Terms & Conditions</a></li>
              <li><a href="/privacy">Privacy</a></li>
              <li><a href="/accessibility">Accessibility</a></li>
              <li><a href="/donot-sell">Do Not Sell My Personal Information</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
