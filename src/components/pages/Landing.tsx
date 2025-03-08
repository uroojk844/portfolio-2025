import "@/css/App.css";
import "@/css/Landing.css";
import { Icon } from "@iconify/react";
import { OrbitingCirclesDemo } from "@/components/Circles";

const links = ["Me", "Skills", "Project", "Experience", "Contact"];

const socials = [
  { name: "logos:whatsapp-icon", href: "http://wa.me/+918114076364" },
  { name: "logos:google-gmail", href: "mailto:uroojk844@gmail.com" },
  {
    name: "logos:github-icon",
    href: "https://github.com/uroojk844",
    class: "invert",
  },
  {
    name: "logos:linkedin-icon",
    href: "https://www.linkedin.com/in/uroojk844",
  },
];

function Landing({
  setActive,
  active,
}: {
  setActive: Function;
  active: string;
}) {
  return (
    <section
      id="me"
      className="grid min-h-dvh content-center justify-items-center"
    >
      <nav
        className="hidden py-3 px-6 rounded-full sm:flex gap-8 items-center border border-slate-800"
      >
        {links.map((link, index) => (
          <a
            href={`#${link.toLowerCase()}`}
            key={index}
            onClick={() => setActive(link)}
            className={`cursor-pointer ${
              active == link ? "text-white" : "text-gray-300"
            }`}
          >
            {link}
          </a>
        ))}
      </nav>
      <OrbitingCirclesDemo />
      <h1 className="flex flex-wrap justify-center items-center gap-[1rem] text-5xl sm:text-6xl font-bold">
        Hi, I am{" "}
        <div className="gradient">
          {"Urooj Khan".split("").map((ch, index) => (
            <span
              key={index}
              className="typing-effect"
              style={{ "--i": index } as React.CSSProperties}
            >
              {ch}
            </span>
          ))}
        </div>
      </h1>
      <p
        style={{ "--s": 0 } as React.CSSProperties}
        className="slideUp sm:text-xl max-w-2xl text-center mb-8 mt-4"
      >
        Highly skilled and results-driven Full-Stack Developer with 5+ years of
        hands-on experience crafting robust and scalable web applications.
      </p>

      <div className=" flex flex-wrap justify-center items-center gap-8 mb-12">
        {socials.map((social, index) => (
          <a
            style={{ "--s": index + 1 } as React.CSSProperties}
            className="slideUp"
            href={social.href}
            key={social.name}
            target="_blank"
          >
            <Icon icon={social.name} fontSize={28} className={social?.class} />
          </a>
        ))}
      </div>
    </section>
  );
}

export default Landing;
