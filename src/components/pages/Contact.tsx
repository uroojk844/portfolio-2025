import "@/css/contact.css";
import { Icon } from "@iconify/react/dist/iconify.js";
import { FormEvent, useRef } from "react";
import Heading from "../Heading";
import Tagline from "../Tagline";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const details = [
  {
    icon: "bxl:gmail",
    label: "Email",
    text: "uroojk844@gmail.com",
    href: "mailto:uroojk844@gmail.com",
  },
  {
    icon: "mdi:map-marker",
    label: "Location",
    text: "Lucknow, India",
  },
  {
    icon: "material-symbols:call",
    label: "Mobile",
    text: "+91 8114 076 364",
    href: "tel:+918114076364",
  },
];

function sendEmail(event: FormEvent) {
  event.preventDefault();
  let formData = new FormData(event.target as HTMLFormElement);
  let { fullname, mobile, message } = Object.fromEntries(formData.entries());
  let body = encodeURIComponent(`Name: ${fullname}
Mobile: ${mobile}
${message}`);
  window.open(
    `mailto:uroojk844@gmail.com?subject=Enquiry&body=${body}`,
    "_blank"
  );
  (event.target as HTMLFormElement).reset();
}

function Contact() {
  const container4 = useRef<null | HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".contact", {
        duration: 1,
        opacity: 0,
        scale: 0.7,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".contact",
          start: "top bottom",
          end: "center center",
          scrub: true,
        },
      });
    },
    { scope: container4 }
  );

  return (
    <section
      ref={container4}
      id="contact"
      className="sm:p-12 grid content-center min-h-dvh"
    >
      <Heading heading="Connect with me" />
      <Tagline
        className="mb-16"
        tagline="Let's collaborate! Reach out for projects, inquiries, or just to
        connect."
      />

      <div className="grid lg:grid-cols-[1.1fr_.9fr] gap-8 items-center">
        {/* contact */}
        <div className="contact grid gap-4 flex-1 bg-slate-900 px-8 py-10 rounded-xl">
          <div className="flex items-center gap-4 text-2xl font-medium">
            Contact details
          </div>

          {details.map((detail) => {
            return (
              <div key={detail.label} className="flex gap-4 items-center">
                <div className="bg-slate-700 size-11 grid place-items-center rounded">
                  <Icon icon={detail.icon} fontSize={24} className="max-w-6" />
                </div>
                <div className="grid">
                  <small className="text-blue-400">{detail.label}</small>
                  {detail.href ? (
                    <a href={detail.href}>{detail.text}</a>
                  ) : (
                    <p>{detail.text}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* meeting */}
        <div className="contact grid row-start-2 gap-6 flex-1 bg-slate-900 p-8 py-10 rounded-xl">
          <div className="text-2xl font-medium">Schedule a meeting with me</div>

          <a
            href="https://calendly.com/uroojk844/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex items-center gap-2 justify-center bg-blue-800 border-0 hover:bg-blue-700">
              <Icon icon="lineicons:google-meet" fontSize={20} /> Create now
            </button>
          </a>
        </div>

        <form
          // action="https://api.web3forms.com/submit"
          onSubmit={sendEmail}
          method="POST"
          className="contact grid row-span-2 gap-4 flex-1 bg-slate-900 px-8 py-8 rounded-xl"
        >
          <div className="flex items-center gap-4 text-2xl font-medium">
            Contact details
          </div>
          <input
            type="hidden"
            name="access_key"
            value="d7ccd6d0-dae4-4f5b-8f0e-b3221100513f"
          />
          <div>
            <label htmlFor="fullname">Name</label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              placeholder="Name"
              required
            />
          </div>

          <div>
            <label htmlFor="mobile">Mobile</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              placeholder="Mobile"
              required
            />
          </div>

          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows={4}
              name="message"
              placeholder="Message"
              required
            ></textarea>
          </div>
          <button className="bg-blue-800 border-0 hover:bg-blue-700">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
