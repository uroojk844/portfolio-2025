import MonacoEditor from "@/assets/projects/MonacoEditor.png";
import Editor from "@/assets/projects/editor.jpeg";
import Ahead from "@/assets/projects/ahead.png";
import Windows11 from "@/assets/projects/windows11.png";
import WeatherApp from "@/assets/projects/WeatherApp.png";
import Proficio from "@/assets/projects/proficio.png";
import Pixelle from "@/assets/projects/pixelle.png";
import Whatsapp from "@/assets/projects/whatsapp.png";
import TicTacToe from "@/assets/projects/TicTacToe.png";
import TrackSlider from "@/assets/projects/TrackSlider.png";
import Travel from "@/assets/projects/Travel.png";
import { IProjectCard } from "@/interface";

export const projects: Array<IProjectCard> = [
  {
    title: "Pixelle",
    description:
      "A component library with various components developed using pure HTML, CSS, and JavaScript.",
    skills: "Vue, Nuxt, TypeScript, Tailwind, PHP",
    poster: Pixelle,
    url: "https://pixelle.dev",
  },
  {
    title: "Proficio Softwarea Solutions",
    description:
      "Website for the coaching institue named Proficio Softwarea Solution, Lucknow using Vue, typescipt, taiwindcss.",
    skills: "Vue, TypeScript, Tailwind, Radix UI",
    poster: Proficio,
    url: "https://proficiosoftware.com/",
  },
  {
    title: "Monaco Editor (VS Code)",
    description:
      "It is a web editor that gives you real time output of your html, css, and javascript code. It can be used for beginners to learn web development. ",
    skills: "HTML, CSS, JavaScript, Vue, TypeScript",
    poster: MonacoEditor,
    url: "https://vscode-live.vercel.app/",
  },
  {
    title: "Live HTML,CSS editor",
    description:
      "It is a web editor that gives you real time output of your html, css, and javascript code. It can be used for beginners to learn web development. ",
    skills: "HTML, CSS, JavaScript",
    poster: Editor,
    url: "https://uroojk844.github.io/webeditor/",
  },
  {
    title: "Divya Travel website",
    description:
      "It is single page website developed by using Nuxt.js and JavaScript for a company of Varanasi.",
    poster: Travel,
    skills: "HTML, CSS, JavaScript, Vue.js, Nuxt.js",
    url: "https://divytravel.vercel.app",
  },
  {
    title: "Ahead app website",
    description:
      "It is single page website developed by using Nuxt.js and GSAP animation library.",
    poster: Ahead,
    skills: "CSS, JavaScript, Vue.js, Nuxt.js, GSAP",
    url: "https://magnificent-platypus-0ed517.netlify.app/",
  },
  {
    title: "Windows 11 clone",
    description:
      "Web based windows 11 Clone with multiple app like calendar, calculator, notepad, etc. Password: 123",
    poster: Windows11,
    skills: "HTML, CSS, JavaScript, Vue.js",
    url: "https://strong-griffin-e6167f.netlify.app/",
  },
  {
    title: "Weather app",
    description:
      "A weather forcasting app with beautiful UI developed by using HTML,CSS, JavaSript, and Vue.js.",
    poster: WeatherApp,
    skills: "HTML, CSS, JavaScript, Vue.js, API",
    url: "https://uroojk844.github.io/weather-app/",
  },
  {
    title: "Whatsapp Clone",
    description:
      "Whatsapp UI Clone app developed using dart and flutter. It includes Home, Status, Chat, Call, etc",
    poster: Whatsapp,
    skills: "Flutter, Dart, API",
    url: "https://steady-gingersnap-6ebe91.netlify.app/",
  },
  {
    title: "Live Tic-tac-Toe game",
    description:
      "Tic-tac-Toe game developed by flutter & dart.Currently, I'm working on online playing functionality.",
    poster: TicTacToe,
    skills: "Flutter, Dart, Provider, Firebase, Google Auth",
    url: "https://whimsical-lebkuchen-7cbc7e.netlify.app/",
  },
  {
    title: "Track Slider Flutter Package",
    description:
      "It is flutter slider widget with beautiful UI and a lot of customizations. It is published on pub.dev website.",
    poster: TrackSlider,
    skills: "Flutter, Dart",
    url: "https://pub.dev/packages/track_slider",
  },
];
