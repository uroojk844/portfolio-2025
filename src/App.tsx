import Landing from "./components/pages/Landing";
import Projects from "./components/pages/Projects";
import Skills from "./components/pages/Skills";
import Contact from "./components/pages/Contact";
import Experience from "./components/pages/Experience";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { ReactLenis, useLenis } from "lenis/react";

function App() {
  useLenis();

  const [active, setActive] = useState("Me");

  return (
    <ReactLenis root>
      <main className="p-6 max-w-[1400px] mx-auto">
        <Landing active={active} setActive={setActive} />
        <Skills />
        <Projects />
        <Experience />
        <Contact />

        {active != "Me" && (
          <a
            href="#me"
            onClick={() => setActive("Me")}
            className="fixed bottom-10 right-10 size-12 rounded-full bg-slate-800 text-2xl grid place-items-center cursor-pointer"
          >
            <Icon icon="mdi:chevron-up" />
          </a>
        )}
      </main>
    </ReactLenis>
  );
}

export default App;
