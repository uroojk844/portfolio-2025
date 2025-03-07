import { IExperienceCard } from "@/interface";
import BadgeList from "./BadgeList";
import Description from "./Description";
import Title from "./Title";

function ExperienceCard({ card }: { card: IExperienceCard }) {
  return (
    <div className="card experience border border-slate-700 p-4 sm:even:translate-x-[calc(100%+64px)] sm:max-w-xs lg:max-w-md bg-slate-900 rounded-lg">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-medium leading-[1] text-blue-400">
          {card.title}
        </h3>
        <p className="text-sm max-sm:max-w-[7ch] truncate">{card.duration}</p>
      </div>
      <Title title={`@${card.company}`} />
      <Description className="line-clamp-3" description={card.description} />
      <BadgeList list={card.skills} />
    </div>
  );
}

export default ExperienceCard;
