export interface IExperienceCard {
  title: string;
  company: string;
  duration: string;
  description: string;
  skills: Array<string>;
}

export interface IProjectCard {
  title: string;
  description: string;
  skills: string;
  poster: string;
  url: string;
}
