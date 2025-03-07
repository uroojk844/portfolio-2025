import { Icon } from "@iconify/react";
import Heading from "../Heading";
import Tagline from "../Tagline";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Skills() {
  const skills = [
    {
      icon: "vscode-icons:file-type-html",
      name: "front end",
      tools: [
        {
          icon: "vscode-icons:file-type-html",
          name: "HTML",
        },
        {
          icon: "vscode-icons:file-type-css",
          name: "CSS",
        },
        {
          icon: "vscode-icons:file-type-js-official",
          name: "JavaScript",
        },
        {
          icon: "vscode-icons:file-type-tailwind",
          name: "tailwind",
        },
      ],
    },
    {
      icon: "vscode-icons:file-type-vite",
      name: "Framework & library",
      tools: [
        {
          icon: "vscode-icons:file-type-vue",
          name: "vue",
        },
        {
          icon: "vscode-icons:file-type-nuxt",
          name: "nuxt",
        },
        {
          icon: "vscode-icons:file-type-reactjs",
          name: "react",
        },
        {
          icon: "logos:nextjs-icon",
          name: "next",
        },
      ],
    },
    {
      icon: "mdi:server",
      name: "Back end",
      tools: [
        {
          icon: "vscode-icons:file-type-node",
          name: "Node.js",
        },
        {
          icon: "lineicons:expressjs",
          name: "Express",
        },
        {
          icon: "vscode-icons:file-type-php",
          name: "php",
        },
        {
          icon: "vscode-icons:file-type-python",
          name: "python",
        },
      ],
    },
    {
      icon: "vscode-icons:file-type-db",
      name: "database",
      tools: [
        {
          icon: "logos:supabase-icon",
          name: "supabase",
        },
        {
          icon: "logos:firebase",
          name: "firebase",
        },
        {
          icon: "logos:mongodb-icon",
          name: "mongoDB",
        },
        {
          icon: "logos:mysql-icon",
          class: "invert",
          name: "mySQL",
        },
      ],
    },
    {
      icon: "material-symbols:devices",
      name: "App developement",
      tools: [
        {
          icon: "logos:flutter",
          name: "Flutter",
        },
        {
          icon: "logos:dart",
          name: "dart",
        },
        {
          icon: "logos:google-cloud",
          name: "google cloud",
        },
      ],
    },
    {
      icon: "fluent:brain-circuit-20-filled",
      name: "AI & IoT",
      tools: [
        {
          icon: "logos:opencv",
          name: "openCV",
        },
        {
          icon: "logos:arduino",
          name: "Arduino",
        },
        {
          icon: "logos:python",
          name: "python",
        },
        {
          icon: "logos:numpy",
          name: "Numpy",
        },
      ],
    },
    {
      icon: "vscode-icons:file-type-c",
      name: "Programming languages",
      tools: [
        {
          icon: "logos:c-plusplus",
          name: "C++",
        },
        {
          icon: "logos:java",
          name: "java",
        },
        {
          icon: "logos:python",
          name: "python",
        },
        {
          icon: "logos:typescript-icon",
          name: "typescript",
        },
      ],
    },
    {
      icon: "mdi:tools",
      name: "tools developement",
      tools: [
        {
          icon: "logos:git-icon",
          name: "Git",
        },
        {
          icon: "logos:jira",
          name: "jira",
        },
        {
          icon: "logos:bitbucket",
          name: "bitbucket",
        },
        {
          icon: "logos:visual-studio-code",
          name: "VS Code",
        },
      ],
    },
  ];

  const container1 = useRef<null | HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".skill-card", {
        duration: 1,
        y: 100,
        opacity: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".skill-card",
          start: "top 700px",
          end: "bottom 500px",
          scrub: true,
        },
      });
    },
    { scope: container1 }
  );

  return (
    <section id="skills" className="min-h-dvh sm:p-12">
      <Heading heading="Tools & Technologies" />
      <Tagline
        className="mb-10"
        tagline="Leveraging cutting-edge frameworks and tools to build scalable,
        efficient, and visually stunning applications."
      />

      <div
        ref={container1}
        className="grid justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {skills.map((category) => {
          return (
            <div
              key={category.name}
              className="skill-card p-4 bg-slate-900 rounded-md grid grid-cols-2 content-start gap-4"
            >
              <h3 className="col-span-2 flex items-center gap-2 text-xl">
                <Icon icon={category.icon} fontSize={24} />{" "}
                <span className="capitalize text-[18px] truncate">
                  {category.name}
                </span>
              </h3>

              {category.tools?.map((tool, index) => {
                return (
                  <div
                    key={index}
                    className="aspect-[4/3] bg-slate-800/50 hover:bg-slate-800 hover:scale-105 transition-all grid rounded place-content-center place-items-center"
                  >
                    <Icon
                      icon={tool.icon}
                      className={`${tool?.class} max-w-8`}
                      fontSize={32}
                    />
                    <p className="text-sm mt-1.5 capitalize">{tool.name}</p>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
