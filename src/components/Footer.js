import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default function Footer(props) {
  const isDarkMode = props.isDarkMode;

  return (
    <div
      className={`w-full flex flex-col items-center gap-8 text-white py-8 mt-32 ${
        isDarkMode ? "bg-dark-700 text-white" : "bg-gray-200 text-gray-700"
      }`}
    >
      <ul className={`flex items-center gap-8 text-center`}>
        <li>
          <a href="#home" className="hover:underline font-medium">
            About
          </a>
        </li>
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
          color={`${isDarkMode ? "white" : "black"}`}
          icon={faGithub}
          onClick={() => {
            window.open("https://github.com/kuri-sun", "_blank");
          }}
        />
        <FontAwesomeIcon
          className={`hidden md:flex`}
          size="2xl hover:scale-110 cursor-pointer transition duration-100"
          icon={faLinkedinIn}
          color={isDarkMode ? "white" : `#0a66c2`}
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
          isDarkMode ? "text-white" : "text-gray-700"
        }`}
      >
        Copyright © 2023 Haruki Kuriwada
      </p>
    </div>
  );
}
