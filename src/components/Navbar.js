import resume from "../assets/resume.pdf";

export default function Navbar() {
  return (
    <div className="navbar-container fixed z-50 bg-dark-500 w-full top-0 left-0 px-8 py-4 lg:px-20 xl:px-36">
      <div className="flex justify-between items-center text-white">
        <ul className="hidden md:flex">
          <li className="p-4">
            <a href="#home" className="hover:underline">
              About
            </a>
          </li>
          <li className="p-4">
            <a href="#skills" className="hover:underline">
              Skills
            </a>
          </li>
          <li className="p-4">
            <a href="#certs" className="hover:underline">
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
