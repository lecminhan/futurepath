import '../styles/global.css'
export default function Footer() {
    return (
      <footer className="footer ">
        <div className="footer-bottom" style={{width:'100vw'}}>
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
  