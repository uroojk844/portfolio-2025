import { IProjectCard } from "@/interface";
import BadgeList from "./BadgeList";
import Description from "./Description";
import Title from "./Title";

function ProjectCard({ project }: { project: IProjectCard }) {
  return (
    <a
      key={project.title}
      href={project.url}
      target="_blank"
      className="slideUpscroll py-5 px-4 project-card rounded-xl grid border border-slate-800 bg-slate-900/90"
    >
      <div className="group overflow-hidden rounded-md mb-3">
        <img
          src={project.poster}
          alt={project.poster}
          loading="lazy"
          className="group-hover:scale-110 aspect-video object-cover transition-transform duration-500 max-w-full"
        />
      </div>
      <Title title={project.title} />
      <Description description={project.description} />
      <BadgeList list={project.skills.split(",")} />
    </a>
  );
}

export default ProjectCard;
