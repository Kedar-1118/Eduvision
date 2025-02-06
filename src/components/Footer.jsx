import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiPerplexity } from "react-icons/si";
import {
  GITHUB_URL,
  LINKEDIN_URL,
  PERSONAL_WEBSITE_URL,
  CURRENT_YEAR,
  PERPLEXITY_URL,
} from "../constants/index";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-xl font-bold mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {['FAQ', 'Privacy Policy', 'Terms of Service', 'Careers'].map((link) => (
              <a key={link} href={`#${link}`} className="hover:text-[#e74c3c] transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-4">Contact</h4>
          <p className="mb-2">support@eduvision.com</p>
          <p>+1 (800) 123-4567</p>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-4">Follow Us</h4>
          <div className="flex gap-4">
            {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social) => (
              <a
                key={social}
                href={`#${social}`}
                className="hover:text-[#e74c3c] transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-400">
        <p>© 2023 EduVision Academy. All rights reserved.</p>
      </div>
    </footer>
  );
}
