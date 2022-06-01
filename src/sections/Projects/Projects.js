import "./Projects.css";
import Project from "../../components/Project/Project";
import { projectData } from "../../services/projectData.js";

export default function Projects() {
  const projectJSX = projectData.map((project, index) => (
    <Project
      key={index}
      image={project.image}
      alt={project.alt}
      title={project.title}
      description={project.description}
      site={project.site}
      github={project.github}
    />
  ));

  return (
    <div className="projects">
      <h5 className="title">Nyheim's Fun Time</h5>
      <div className="projects-div">
        {projectJSX}
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/lCkOj08fEsY"
          title="Unemployed to Software Engineer"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/mT7bH1EBeZc"
          title="How to Break Into Tech"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}
