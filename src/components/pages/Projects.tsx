import { projects } from "@/assets/data/projects";
import ProjectCard from "../ProjectCard";
import Heading from "../Heading";
import Tagline from "../Tagline";

function Projects() {
  return (
    <section id="project" className="sm:p-12 my-12">
      <Heading heading="Latest Works" />

      <Tagline
        className="mb-10"
        tagline="Crafting sleek, high-performance web experiences with modern UI
        components and seamless interactivity."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
