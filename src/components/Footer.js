export default function Footer() {
  return (
    <div className="w-full flex flex-col items-center gap-8 text-white bg-gray-200 py-8">
      <ul className="flex items-center gap-8 text-center">
        <li>
          <a href="#home" className="hover:underline font-medium text-gray-700">
            About
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className="hover:underline font-medium text-gray-700"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="hover:underline font-medium text-gray-700"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#certs"
            className="hover:underline font-medium text-gray-700"
          >
            Certfications
          </a>
        </li>
      </ul>
      <p className="text-sm font-light text-center text-gray-700">
        Copyright © 2023 Haruki Kuriwada
      </p>
    </div>
  );
}
