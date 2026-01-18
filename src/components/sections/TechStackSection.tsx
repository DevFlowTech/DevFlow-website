"use client";

import { motion } from "framer-motion";

const technologies = [
  {
    name: "Next.js",
    icon: (
      <svg viewBox="0 0 180 180" fill="none" className="w-8 h-8">
        <mask
          id="mask0_408_134"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="180"
          height="180"
        >
          <circle cx="90" cy="90" r="90" fill="black" />
        </mask>
        <g mask="url(#mask0_408_134)">
          <circle cx="90" cy="90" r="90" fill="black" />
          <path
            d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
            fill="white"
          />
          <rect x="115" y="54" width="12" height="72" fill="white" />
        </g>
      </svg>
    ),
  },
  {
    name: "React",
    icon: (
      <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-8 h-8">
        <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
        <g stroke="#61dafb" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <svg viewBox="0 0 128 128" className="w-8 h-8">
        <path
          d="M1.5 63.9167C1.5 29.4674 29.4674 1.5 63.9167 1.5C98.366 1.5 126.333 29.4674 126.333 63.9167C126.333 98.366 98.366 126.333 63.9167 126.333C29.4674 126.333 1.5 98.366 1.5 63.9167Z"
          fill="#3178C6"
        />
        <path
          d="M74.1593 69.3093H66.969V98.1677H57.199V69.3093H50.0883V60.976H74.1593V69.3093ZM95.0395 72.8803C91.9547 71.0457 88.0772 70.3377 85.3257 70.3377C81.1983 70.3377 78.4883 71.8797 78.4883 75.3403C78.4883 78.0923 80.3643 79.5103 83.2827 80.3443L87.4523 81.5537C90.9547 82.5543 93.3717 84.1803 93.3717 88.0163C93.3717 93.4783 88.494 99.1677 79.9477 99.1677C75.236 99.1677 71.2825 97.4163 68.324 95.165L72.285 87.5577C74.6198 89.1423 77.292 90.7263 80.323 90.7263C83.8253 90.7263 85.9935 88.8923 85.9935 86.4317C85.9935 83.8463 84.4507 82.137 81.0312 81.1363L76.9038 79.8857C72.8178 78.6343 70.8165 76.591 70.8165 73.0887C70.8165 67.293 75.7365 62.4563 83.95 62.4563C88.0772 62.4563 91.4542 63.7903 94.0388 65.5003L95.0395 72.8803Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    name: "Node.js",
    icon: (
      <svg viewBox="0 0 32 32" className="w-8 h-8">
        <path
          d="M16 31.5l-14-8v-15l14-8 14 8v15z"
          fill="#333"
          stroke="#fff"
          strokeWidth="1"
        />
        <path d="M16 5.5l9 5.2v10.6l-9 5.2-9-5.2V10.7z" fill="#68a063" />
      </svg>
    ),
  },
  {
    name: "Tailwind",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#38bdf8">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    ),
  },
  {
    name: "AWS",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="white">
        <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.79-1.39L12 8.21l-2.79 1.4L12 11zm0 2.11l-3.35-1.68L2 15l10 5 10-5-6.65-3.57L12 13.11z" />
      </svg>
    ),
  },
  {
    name: "Python",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path
          d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-2.08l-.07-.27-.22-.6-.36-.78-.47-.8-.55-.72-.61-.56-.66-.35-.7-.14-.72.07-.35.09-.32.12-.28.14-.24.16-.2.17-.18.17-.14.17-.11.16-.09.16-.06.14-.04.13-.02.12V5.5l.08.4.15.35.2.28.25.2.27.13.29.07.28.02.26-.03.24-.08.2-.13.17-.17.13-.21.09-.24.06-.26.02-.27v-.22l-.02-.15-.05-.12-.08-.1-.1-.08-.12-.06-.13-.04-.15-.02h-.4l.16-.13.19-.11.21-.09.23-.07.24-.05.25-.03.25-.01h.52l.25.02.24.03.22.06.2.07.18.09.16.1.14.12.11.13.1.14.07.15.05.17.02.18v2.44h4.78v-1.12l.02-.27.05-.28.09-.29.13-.29.17-.3.21-.29.25-.29.29-.28.32-.27.35-.26.39-.24.41-.23.43-.22.44-.22.45-.21.45-.2.43-.2.4-.2.38-.21zM9.75 23.82l-.9-.2-.73-.26-.59-.3-.45-.32-.34-.34-.25-.34-.16-.33-.1-.3-.04-.26-.02-.2.01-.13v-5.28l.05-.63.13-.55.21-.46.26-.38.3-.31.33-.25.35-.19.35-.14.33-.1.3-.07.26-.04.21-.02h4.98l.69-.05.59-.14.5-.22.41-.27.33-.32.27-.35.2-.36.15-.37.1-.35.07-.32.04-.27.02-.21v-3.06h2.24l.21.03.28.07.32.12.35.18.36.26.36.36.35.46.32.59.28.73.21.88.14 1.05.05 1.23-.06 1.22-.16 1.04-.24.87-.32.71-.36.57-.4.44-.42.33-.42.24-.4.16-.36.1-.32.05-.24.01h-.16l-.06-.01h-8.16v2.08l.07.27.22.6.36.78.47.8.55.72.61.56.66.35.7.14.72-.07.35-.09.32-.12.28-.14.24-.16.2-.17.18-.17.14-.17.11-.16.09-.16.06-.14.04-.13.02-.12v-2.08l-.08-.4-.15-.35-.2-.28-.25-.2-.27-.13-.29-.07-.28-.02-.26.03-.24.08-.2.13-.17.17-.13.21-.09.24-.06.26-.02.27v.22l.02.15.05.12.08.1.1.08.12.06.13.04.15.02h.4l-.16.13-.19.11-.21.09-.23.07-.24.05-.25.03-.25.01h-.52l-.25-.02-.24-.03-.22-.06-.2-.07-.18-.09-.16-.1-.14-.12-.11-.13-.1-.14-.07-.15-.05-.17-.02-.18v-2.43h-4.78v1.12l-.02.27-.05.28-.09.29-.13.29-.17.3-.21.29-.25.29-.29.28-.32.27-.35.26-.39.24-.41.23-.43.22-.44.22-.45.21-.45.2-.43.2-.4.2-.38.21z"
          fill="#F7DC6F"
          fillRule="evenodd"
        />
        <path
          d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
          fill="none"
        />
      </svg>
    ),
  },
];

export default function TechStackSection() {
  return (
    <section className="py-12 bg-devflow-black border-b border-white/[0.04] overflow-hidden">
      <div className="flex items-center gap-4 mb-8 justify-center">
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-devflow-gray-500" />
        <span className="text-sm font-medium text-devflow-gray-500 uppercase tracking-widest">
          Powered By Modern Tech
        </span>
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-devflow-gray-500" />
      </div>

      <div className="relative flex overflow-x-hidden">
        {/* Gradients to fade edges */}
        <div className="absolute top-0 bottom-0 left-0 w-24 z-10 bg-gradient-to-r from-devflow-black to-transparent" />
        <div className="absolute top-0 bottom-0 right-0 w-24 z-10 bg-gradient-to-l from-devflow-black to-transparent" />

        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 py-4">
          {/* First Loop */}
          {technologies.map((tech, i) => (
            <div
              key={`tech-1-${i}`}
              className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
            >
              {tech.icon}
              <span className="text-lg font-semibold text-white">
                {tech.name}
              </span>
            </div>
          ))}
          {/* Second Loop (Duplicate for seamless scrolling) */}
          {technologies.map((tech, i) => (
            <div
              key={`tech-2-${i}`}
              className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
            >
              {tech.icon}
              <span className="text-lg font-semibold text-white">
                {tech.name}
              </span>
            </div>
          ))}
          {/* Third Loop (Duplicate for safety on wide screens) */}
          {technologies.map((tech, i) => (
            <div
              key={`tech-3-${i}`}
              className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
            >
              {tech.icon}
              <span className="text-lg font-semibold text-white">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
