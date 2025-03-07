import { projects } from "@/assets/data/projects";
import ProjectCard from "../ProjectCard";
import Heading from "../Heading";
import Tagline from "../Tagline";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

function Projects() {
  const container = useRef<null | HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".project-card", {
        duration: 1,
        y: 100,
        opacity: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".project-card",
          start: "top 700px",
          end: "bottom 500px",
          scrub: true,
        },
      });
    },
    { scope: container }
  );

  return (
    <section id="project" className="sm:p-12 my-12">
      <Heading heading="Latest Works" />

      <Tagline
        className="mb-10"
        tagline="Crafting sleek, high-performance web experiences with modern UI
        components and seamless interactivity."
      />

      <div ref={container} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
