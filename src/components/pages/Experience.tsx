import "@/css/Experience.css";
import ExperienceCard from "../ExperienceCard";
import Heading from "../Heading";
import Tagline from "../Tagline";
import { cards } from "@/assets/data/experience";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Experience() {
  const container2 = useRef<null | HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".experience", {
        duration: 1.5,
        y: 200,
        opacity: 0,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".experience",
          start: "top bottom",
          end: "bottom center",
          scrub: true,
        },
      });
    },
    { scope: container2 }
  );

  return (
    <section
      ref={container2}
      id="experience"
      className="sm:p-12 grid content-center min-h-dvh"
    >
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
