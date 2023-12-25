import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { useTheme } from "../hooks/useTheme";

export default function Footer() {
  const { theme } = useTheme();

  return (
    <div
      className={`w-full flex flex-col items-center gap-8 text-white py-8 mt-32 ${
        theme === "dark"
          ? "bg-dark-700 text-white"
          : "bg-gray-200 text-gray-700"
      }`}
    >
      <ul
        className={`flex flex-col md:flex-row items-center gap-8 text-center`}
      >
        <li>
          <a href="#skills" className="hover:underline font-medium">
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:underline font-medium">
            Projects
          </a>
        </li>
        <li>
          <a href="#certs" className="hover:underline font-medium">
            Certfications
          </a>
        </li>
      </ul>
      <div className="flex flex-row gap-8">
        <FontAwesomeIcon
          className={`hidden md:flex`}
          size="2xl hover:scale-110 cursor-pointer transition duration-100"
          color={`${theme === "dark" ? "white" : "black"}`}
          icon={faGithub}
          onClick={() => {
            window.open("https://github.com/kuri-sun", "_blank");
          }}
        />
        <FontAwesomeIcon
          className={`hidden md:flex`}
          size="2xl hover:scale-110 cursor-pointer transition duration-100"
          icon={faLinkedinIn}
          color={theme === "dark" ? "white" : `#0a66c2`}
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/harukikuriwada/",
              "_blank"
            );
          }}
        />
      </div>
      <p
        className={`text-sm font-light text-center ${
          theme === "dark" ? "text-white" : "text-gray-700"
        }`}
      >
        Copyright © 2023 Haruki Kuriwada
      </p>
    </div>
  );
}
