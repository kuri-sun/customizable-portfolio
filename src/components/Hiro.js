import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import avatar from "../assets/hero/avatar.png";

export default function Hiro(props) {
  const isDarkMode = props.isDarkMode;

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
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                <h1 className={`text-3xl`}>
                  Hi, I'm <span className="font-bold">Haruki Kuriwada</span>
                </h1>
              </div>
              <div className="bg-white md:bg-indigo-500 mt-2 md:px-2 py-1 w-fit">
                <p className="text-3xl text-indigo-500 md:text-white font-bold">
                  Software Engineer / Cloud Engineer
                </p>
              </div>
              <br />
              <p
                className={`text-xl font-light text-gray-600 ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                <strong className="font-bold">x4</strong> AWS certified Software
                Engineer who has{" "}
                <strong className="font-bold">2+ years </strong>
                of professional experience. <br />
                Combined with web&mobile development and the comprehensive cloud
                knowledge, I can dig deeper into problems and solve them
                efficiently.
                <br /> I am looking for more experience in IT industry.
              </p>
              <br />
            </div>
          </div>
          {/* Avator section */}
          <img
            src={avatar}
            className="h-48"
            alt="my portfolio avatar"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-offset="100"
          />
        </div>
        {/* Social media */}
        <ul
          className={`flex mt-2 gap-4 items-center ${
            isDarkMode ? "text-white" : "text-black"
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
          <FontAwesomeIcon
            size="2xl hover:scale-110 cursor-pointer transition duration-100"
            icon={faInstagram}
            onClick={() => {
              window.open("https://instagram.com/ha.ruki.k/", "_blank");
            }}
          />
        </ul>
      </div>
    </>
  );
}
