import "./AboutMe.css";


export default function AboutMe({ windowDimension }) {
  const downloadFile = () => {
    window.location.href =
      "https://drive.google.com/file/d/1GlcaeC_vkJVOtvKLWzao41YzMEbtAqr5/view?usp=sharing";
  };

  const isDesktop = windowDimension >= 1200;

  return (
    <section className="about-section">
      <h2>
        <span id="about-me"> &nbsp; </span>
        About me
      </h2>
      {isDesktop ? (
        <div className="about-container-desktop">
          <div className="desktop-nested">
            <p className="about-description">
-Bio-
            </p>
            <div className="about-details">
              {/* <a
                href="https://drive.google.com/file/d/1GlcaeC_vkJVOtvKLWzao41YzMEbtAqr5/view?usp=sharing"
                target="_blank"
              >
                Download Resume
              </a> */}
              <h4 className="tech-stack">Tech Stack:</h4>
              <p className="tech-stack">
                HTML | CSS | Javascript | React | Express | MongoDB | Ruby |
                Rails | Python | PostgreSQL{" "}
              </p>
            </div>
          </div>
          <img
            src="/assets/heim.jpg"
            alt="Nyheim Hunter"
            className="profile-pic"
          />
        </div>
      ) : (
        <div className="about-container-mobile-tablet">
          <p className="about-description">
-Bio-
          </p>
          <div className="mobile-tablet-nested">
            <div className="about-details">
              <button onClick={downloadFile} className="resume-button">
                download resume
              </button>
              <h4 className="tech-stack">Tech Stack:</h4>
              <p className="tech-stack">
                HTML | CSS | Javascript | React | Express | MongoDB | Ruby |
                Rails | Python | PostgreSQL {" "}
              </p>
            </div>
            <img
              src="/assets/heim.jpg"
              alt="Nyheim Hunter"
              className="profile-pic"
            />
          </div>
        </div>
      )}
    </section>
  );
}
