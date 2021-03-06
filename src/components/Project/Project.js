import "./Project.css";
import "../../App.css"

export default function Project(props) {
  const {
    image,
    alt,
    title,
    description,
    site,
    github
  } = props
  
  return (
    <div className="project-card">
      <a href={site} className="project-image-link">
        <img src={image} alt={alt} className="project-image" />
      </a>
      <article className="project-description">
        <h3>{title}</h3>
        <p className="project-paragraph">{description}</p>
        <div className="project-links">
          <a href={site} className="link-button">Live Site</a>
          <a href={github} className="link-button">GitHub</a>
        </div>
      </article>
    </div>
  )
}