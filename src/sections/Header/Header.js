import "./Header.css";

export default function Header({ windowDimension }) {

  const isDesktop = windowDimension >= 720;
  return (
    <header id="home">
      {isDesktop ? (
        <img
          src="../../assets/header-desktop.jpg"
          alt="header-background"
          className="header-background desktop-background"
        />
      ) : (
        <img
          src="../../assets/header-tablet-mobile.jpg"
          alt="header-background"
          className="header-background mobile-background"
        />
      )}
        <h1 className="header-text">
          Welcome to my portfolio.
        </h1>
    </header>
  )
}