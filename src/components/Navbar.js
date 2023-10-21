import resume from "../assets/resume.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
  return (
    <div className="navbar-container fixed z-50 bg-gray-200 w-full top-0 left-0 px-8 py-4 lg:px-20 xl:px-36 bg-gray-300">
      <div className="flex justify-between items-center text-white">
        <ul className="hidden md:flex">
          <li className="p-4">
            <a
              href="#home"
              className="hover:underline font-medium text-gray-700"
            >
              About
            </a>
          </li>
          <li className="p-4">
            <a
              href="#skills"
              className="hover:underline font-medium text-gray-700"
            >
              Skills
            </a>
          </li>
          <li className="p-4">
            <a
              href="#projects"
              className="hover:underline font-medium text-gray-700"
            >
              Projects
            </a>
          </li>
          <li className="p-4">
            <a
              href="#certs"
              className="hover:underline font-medium text-gray-700"
            >
              Certfications
            </a>
          </li>
        </ul>

        <div className="flex flex-row gap-8">
          <FontAwesomeIcon
            className="hidden md:flex"
            size="2xl text-black hover:scale-110 cursor-pointer transition duration-100"
            icon={faGithub}
            onClick={() => {
              window.open("https://github.com/kuri-sun", "_blank");
            }}
          />
          <FontAwesomeIcon
            className="hidden md:flex"
            size="2xl hover:scale-110 cursor-pointer transition duration-100"
            icon={faLinkedinIn}
            color="#0a66c2"
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/harukikuriwada/",
                "_blank"
              );
            }}
          />
          <a
            href={resume}
            rel="noreferrer"
            target="_blank"
            className="bg-teal-500 font-medium rounded-full px-4 py-1 hover:bg-teal-400 hover:scale-110 transition duration-100"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}
