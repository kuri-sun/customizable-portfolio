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
              <h1 className="text-2xl text-gray-400">Hi, I'm</h1>
              <h1 className="text-2xl font-bold text-gray-100">
                Haruki Kuriwada
              </h1>
            </div>
            <p class="text-3xl font-bold">Software Engineer / Cloud Engineer</p>
            <p className="text-xl font-light text-gray-400 ">
              4 times AWS certified Software Engineer who has 2+ years of
              professional experience. Combined with the comprehensive cloud
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
