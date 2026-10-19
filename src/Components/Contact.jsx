import { FiArrowUpRight, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import SpotlightCard from "./SpotlightCard";

const items = [
  {
    label: "Email",
    value: "muneeburrahman096@gmail.com",
    href: "mailto:muneeburrahman096@gmail.com",
    icon: FiMail,
  },
  {
    label: "Phone",
    value: "0311-9846336",
    href: "tel:+923119846336",
    icon: FiPhone,
  },
  {
    label: "Location",
    value: "Karachi, Pakistan",
    icon: FiMapPin,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-20">
      <SectionHeading index="05" eyebrow="Contact" title="Contact" />

      <Reveal>
        <div className="relative mb-8 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-600/20 via-transparent to-cyan-500/20 p-8 text-center md:p-12">
          <div className="absolute -left-10 -top-10 h-40 w-40 animate-blob rounded-full bg-violet-500/30 blur-3xl" />
          <div className="absolute -bottom-10 -right-10 h-40 w-40 animate-blob rounded-full bg-cyan-400/30 blur-3xl [animation-delay:-8s]" />

          <h3 className="relative text-2xl font-bold tracking-tight md:text-4xl">
            Let&apos;s build something <span className="text-gradient">reliable</span> together.
          </h3>
          <a
            href="mailto:muneeburrahman096@gmail.com"
            className="btn-shine relative mt-7 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 px-7 py-3 text-sm font-semibold text-black shadow-lg shadow-violet-500/30 transition hover:scale-105"
          >
            Say hello <FiArrowUpRight />
          </a>
        </div>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-3">
        {items.map(({ label, value, href, icon: Icon }, i) => {
          const body = (
            <SpotlightCard className="h-full p-6 text-center">
              <div className="mx-auto mb-4 grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-lg text-cyan-300 transition duration-300 group-hover:scale-110 group-hover:text-white">
                <Icon />
              </div>
              <p className="mb-2 text-xs uppercase tracking-widest text-gray-400">{label}</p>
              <p className="break-all text-sm font-medium text-gray-200 md:text-base">{value}</p>
            </SpotlightCard>
          );

          return (
            <Reveal key={label} delay={i * 0.1} className="h-full">
              {href ? (
                <a href={href} className="group block h-full">
                  {body}
                </a>
              ) : (
                <div className="group h-full">{body}</div>
              )}
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
