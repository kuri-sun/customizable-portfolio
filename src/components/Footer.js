import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useTheme } from "../hooks/useTheme";

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer
      className={`w-full flex flex-col items-center gap-8 text-white py-8 mt-32 ${
        theme === "dark"
          ? "bg-dark-700 text-white"
          : "bg-gray-200 text-gray-700"
      }`}
    >
      <menu
        aria-label="This site navigation menu in the footer."
        className={`flex flex-col md:flex-row items-center gap-8 text-center`}
      >
        <li>
          <a
            aria-roledescription="my technical skill section"
            href="#skills"
            className="hover:underline font-medium"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            aria-roledescription="my project list section"
            href="#projects"
            className="hover:underline font-medium"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            aria-roledescription="my project list section"
            href="#certs"
            className="hover:underline font-medium"
          >
            Certfications
          </a>
        </li>
      </menu>
      <div
        role="list"
        aria-label="my soical media account links"
        className="flex flex-row gap-8"
      >
        <button
          aria-roledescription="this is my GitHub account URL."
          onClick={() => {
            window.open("https://github.com/kuri-sun", "_blank");
          }}
        >
          <FontAwesomeIcon
            size="2xl hover:scale-110 cursor-pointer transition duration-100"
            icon={faGithub}
            color={`${theme === "dark" ? "white" : "black"}`}
          />
        </button>
        <button
          aria-roledescription="this is my LinkedIn account URL."
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/harukikuriwada/",
              "_blank"
            );
          }}
        >
          <FontAwesomeIcon
            size="2xl hover:scale-110 cursor-pointer transition duration-100"
            icon={faLinkedinIn}
            color={theme === "dark" ? "white" : `#0a66c2`}
          />
        </button>
        <button
          aria-roledescription="this is my Twitter account URL."
          onClick={() => {
            window.open("https://twitter.com/HK88395", "_blank");
          }}
        >
          <FontAwesomeIcon
            size="2xl hover:scale-110 cursor-pointer transition duration-100"
            icon={faTwitter}
            color={theme === "dark" ? "white" : `#1DA1F2`}
          />
        </button>
      </div>
      <p
        role="note"
        aria-roledescription="copyright for this web site."
        className={`text-sm font-light text-center ${
          theme === "dark" ? "text-white" : "text-gray-700"
        }`}
      >
        Copyright © 2023 Haruki Kuriwada
      </p>
    </footer>
  );
}
