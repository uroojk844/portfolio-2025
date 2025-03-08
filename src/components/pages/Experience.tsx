import "@/css/Experience.css";
import ExperienceCard from "../ExperienceCard";
import Heading from "../Heading";
import Tagline from "../Tagline";
import { cards } from "@/assets/data/experience";

function Experience() {
  return (
    <section id="experience" className="sm:p-12 grid content-center min-h-dvh">
      <Heading heading="Professional Experience" />
      <Tagline
        tagline="Bringing years of expertise in front-end and full-stack development,
        delivering high-quality digital solutions."
      />

      <div className="card-container grid max-w-max mx-auto sm:-translate-x-1/2 gap-8 sm:gap-16 sm:py-12 my-12 max-sm:border-l max-sm:pl-8 sm:pr-8">
        {cards.map((card, index) => (
          <ExperienceCard key={index} card={card} />
        ))}
      </div>
    </section>
  );
}

export default Experience;
