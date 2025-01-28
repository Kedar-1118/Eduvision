import { useTrail, animated } from "react-spring";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaNpm,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiVisualstudiocode,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiVite,
  SiMysql,
  SiCplusplus,
  SiPython,
  SiC,
} from "react-icons/si";
import { DiGithubBadge } from "react-icons/di";

const skills = [
  { id: "html", Component: FaHtml5, url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { id: "css", Component: FaCss3Alt, url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { id: "javascript", Component: SiJavascript, url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { id: "bootstrap", Component: FaBootstrap, url: "https://getbootstrap.com/" },
  { id: "react", Component: FaReact, url: "https://react.dev/" },
  { id: "tailwind", Component: SiTailwindcss, url: "https://tailwindcss.com/" },
  { id: "node", Component: FaNodeJs, url: "https://nodejs.org/en/" },
  { id: "sql", Component: SiMysql, url: "https://www.mysql.com/" },
  { id: "npm", Component: FaNpm, url: "https://www.npmjs.com/" },
  { id: "cplusplus", Component: SiCplusplus, url: "https://cplusplus.com/" },
  { id: "c", Component: SiC, url: "https://www.cprogramming.com/" },
  { id: "python", Component: SiPython, url: "https://www.python.org/" },
  { id: "mongodb", Component: SiMongodb, url: "https://www.mongodb.com/" },
  { id: "vite", Component: SiVite, url: "https://vitejs.dev/" },
  { id: "vscode", Component: SiVisualstudiocode, url: "https://code.visualstudio.com/" },
  { id: "github", Component: DiGithubBadge, url: "https://github.com/" },
];

export default function Skills() {
  const trail = useTrail(skills.length, {
    from: { transform: "translate3d(0,-80px,0)", opacity: 0 },
    to: { transform: "translate3d(0,0px,0)", opacity: 1 },
  });

  return (
    <div
      id="skills"
      className="bg-gray-300 rounded-lg shadow-md flex items-center justify-center min-h-screen"
    >
      <div className="text-center max-w-2xl w-full mx-auto">
        <h1 className="text-4xl font-bold text-darkDesert mb-6 opacity-80">Tech-Skills</h1>
        <div className="grid mt-20 grid-cols-4 gap-12 my-4 justify-items-center">
          {trail.map((props, index) => {
            const { Component } = skills[index];
            return (
              <animated.div
                style={props}
                className="text-5xl text-blue-500 hover:text-black transition-all duration-300 transform hover:scale-110 "
                key={skills[index].id}
                onClick={() => window.open(skills[index].url, "_blank")}
                onMouseOver={(e) => (e.target.value = skills[index].id)}
              >

                <Component />
              </animated.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
