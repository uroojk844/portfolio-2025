import "@/css/Circle.css";
import { Icon } from "@iconify/react";
import My from "/my.jpg";
import React from "react";

const circles = [
  "vscode-icons:file-type-vue",
  "vscode-icons:file-type-reactjs",
  "vscode-icons:file-type-flutter",
  "vscode-icons:file-type-typescript",
  "vscode-icons:file-type-js",
  "vscode-icons:file-type-php",
  "vscode-icons:file-type-mongo",
];

export function OrbitingCirclesDemo() {
  return (
    <div className="size-40 sm:size-48 my-24 sm:mb-28 sm:mt-32 grid place-items-center relative">
      <img src={My} className="w-full rounded-full" />

      <section
        className="absolute orbit w-60 sm:w-72"
        style={{ "--total": circles.length } as React.CSSProperties}
      >
        {circles.map((d, index) => {
          return (
            <div
              key={index}
              className="circle"
              style={{ "--i": index } as React.CSSProperties}
            >
              <Icon icon={d} />
            </div>
          );
        })}
      </section>
    </div>
  );
}
