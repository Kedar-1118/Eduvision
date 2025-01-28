import React from "react";
import { useSpring, animated } from "react-spring";
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaFileAlt,
  FaBlog,
} from "react-icons/fa";
import { SiPerplexity } from "react-icons/si";
import landingImg from "/logo.svg";
import {
  GITHUB_URL,
  LINKEDIN_URL,
  YOUTUBE_URL,
  RESUME_URL,
  BLOG_URL,
  PERPLEXITY_URL,
} from "../constants";

export default function Home() {
  const logoSpring = useSpring({
    from: { opacity: 0, transform: "scale(0.5)" },
    to: { opacity: 1, transform: "scale(1)" },
  });

  const iconSpring = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { tension: 300, friction: 20 },
    delay: 300,
  });

  return (
    <div
      id="home"
      className="container mx-auto bg-gray-300 flex flex-col items-center justify-center min-h-screen"
    >
      <animated.div style={logoSpring} className="flex flex-col items-center">
        <h1 className="text-4xl font-bold text-darkDesert mb-4 sm:text-3xl">
          Hi, I'm <span className="text-goldDesert">Kedar</span>
        </h1>
        <h2 className="text-2xl text-tealDesert mb-4 sm:text-xl">
          SY-CSE Student at Walchand College of Engineering
        </h2>
      </animated.div>

      <animated.div style={iconSpring} className="flex flex-col mt-2 space-x-6">
        <div className="flex mt-2 space-x-6">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={GITHUB_URL}
            className="text-blue-500 hover:text-black transition-colors duration-300"
          >
            <FaGithub className="w-10 h-10" />
            <span className="sr-only">GitHub account</span>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={LINKEDIN_URL}
            className="text-blue-500 hover:text-black transition-colors duration-300"
          >
            <FaLinkedin className="w-10 h-10" />
            <span className="sr-only">LinkedIn account</span>
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href={RESUME_URL}
            className="text-blue-500 hover:text-black transition-colors duration-300"
          >
            <FaFileAlt className="w-10 h-10" />
            <span className="sr-only">Resume</span>
          </a>

        </div>
      </animated.div>
    </div>
  );
}
