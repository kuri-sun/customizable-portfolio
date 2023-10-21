import resume from "../assets/resume.pdf";

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
  );
}
