export default function Footer() {
  return (
    <div className="flex flex-col items-center gap-8 mt-8 text-white px-8 py-4">
      <ul className="flex items-center gap-8 text-center">
        <li>
          <a href="#home" className="hover:underline">
            About
          </a>
        </li>
        <li>
          <a href="#skills" className="hover:underline">
            Skills
          </a>
        </li>
        <li>
          <a href="#certs" className="hover:underline">
            Certfications
          </a>
        </li>
      </ul>
      <p className="text-sm font-light text-center">
        Copyright © 2023 Haruki Kuriwada
      </p>
    </div>
  );
}
