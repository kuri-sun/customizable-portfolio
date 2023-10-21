import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export default function Hiro() {
  return (
    <>
      <div
        id="home"
        className="flex w-full h-screen flex-col md:flex-row gap-5 items-center justify-center text-white relative"
      >
        <div
          className="flex flex-col gap-4 md:w-6/6"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-offset="100"
        >
          <div className="flex flex-col w-full mt-8">
            <div className="flex flex-row items-center gap-2">
              <h1 className="text-3xl text-black">Hi, I'm</h1>
              <h1 className="text-3xl font-bold text-black">Haruki Kuriwada</h1>
            </div>
            <p className="text-3xl font-bold mt-2">
              <mark className="text-white py-1 px-2 bg-indigo-500">
                Software Engineer / Cloud Engineer
              </mark>
            </p>
            <br />
            <p className="text-xl font-light text-gray-600">
              <strong className="font-bold">x4</strong> AWS certified Software
              Engineer who has <strong className="font-bold">2+ years</strong>{" "}
              of professional experience. Combined with the comprehensive cloud
              knowledge, I can dig deeper into problems and solve them
              efficiently.
              <br /> I am looking for more experience in IT industry.
            </p>
          </div>

          <ul className="flex mt-2 gap-4 items-center">
            <li>
              <a
                href="https://github.com/kuri-sun"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon
                  size="2xl hover:scale-110 transition duration-100"
                  icon={faGithub}
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/harukikuriwada/"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon
                  size="2xl hover:scale-110 transition duration-100"
                  icon={faLinkedinIn}
                />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/ha.ruki.k/"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon
                  size="2xl hover:scale-110 transition duration-100"
                  icon={faInstagram}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
