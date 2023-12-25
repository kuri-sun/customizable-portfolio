import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import avatar from "../assets/hero/avator.jpeg";
import { useTheme } from "../hooks/useTheme";

export default function Hiro() {
  const { theme } = useTheme();

  return (
    <>
      <div
        id="home"
        className={`flex md:h-screen w-full items-center md:items-start justify-center flex-col gap-5 text-white`}
      >
        <div className="flex flex-col md:flex-row gap-5 items-center justify-center text-white">
          {/* Hero section */}
          <div
            className="flex flex-col gap-4 md:w-6/6"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-offset="100"
          >
            <div className="flex flex-col w-full mt-8">
              <div
                className={`flex flex-row items-center gap-2 ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}
              >
                <h1 className="text-4xl">
                  Hi, I'm <span className="font-bold">Haruki Kuriwada</span>
                </h1>
              </div>
              <div
                className={` ${
                  theme === "dark" ? "bg-dark-200" : "bg-white"
                } md:bg-indigo-500 mt-2 md:px-2 py-1 w-fit`}
              >
                <p className="text-4xl text-indigo-500 md:text-white font-bold">
                  Front End / Full Stack Developer
                </p>
              </div>
              <br />
              <p
                className={`text-xl font-light text-gray-600 ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}
              >
                Having professional experience in frontend, backend and mobile
                application development with 4 AWS Cloud Certifications.
                <br />
                Combining all this knowledge, I can tackle problems from various
                perspectives.
              </p>
              <br />
            </div>
          </div>
          {/* Avator section */}
          <img
            src={avatar}
            className="h-48 rounded-full"
            alt="my portfolio avatar"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-offset="100"
          />
        </div>
        {/* Social media */}
        <ul
          className={`flex mt-2 gap-4 items-center ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          <FontAwesomeIcon
            size="2xl hover:scale-110 cursor-pointer transition duration-100"
            icon={faGithub}
            onClick={() => {
              window.open("https://github.com/kuri-sun", "_blank");
            }}
          />
          <FontAwesomeIcon
            size="2xl hover:scale-110 cursor-pointer transition duration-100"
            icon={faLinkedinIn}
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/harukikuriwada/",
                "_blank"
              );
            }}
          />

        </ul>
        <div className="h-20" />
      </div>
    </>
  );
}
