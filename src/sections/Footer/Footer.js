import React from "react";
// import { Button } from "../Button/Button";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      {/* <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the Plantlennial newsletter to receive our best plant
          information.
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section> */}
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            {/* <h2>About Us</h2> */}
            {/* <Link to='/sign-up'>How it works</Link> */}
            {/* <Link to='/'>Testimonials</Link> */}
            {/* <Link to='/'>Careers</Link> */}
            {/* <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link> */}
          </div>
          {/* <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div> */}
        </div>
        <div className="footer-link-wrapper">
          {/* <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div> */}
          <div className="footer-link-items">
            {/* <h2>Social Media</h2> */}
            {/* <Link to='/'>Instagram</Link> */}
            {/* <Link to='/'>LinkedIn</Link> */}
            {/* <Link to='/'>Youtube</Link> */}
            {/* <Link to='/'>Twitter</Link> */}
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              Nyheim Hunter
              {/* <i className="fas fa-seedling" /> */}
            </Link>
          </div>
          <ul className="nav-menu active">
            <div className="social-icons">
              <a href="https://www.youtube.com/channel/UCTq8qxFPY-igt7W-r3pAclg">
                <i class="fa-brands fa-youtube"></i>
              </a>
              <a href="https://www.linkedin.com/in/nyheimhunter/">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Footer;
