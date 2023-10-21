import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import avatar from "../assets/hero/avatar.png";
import instagram from "../assets/hero/instagram.svg";

export default function Hiro() {
  return (
    <>
      <div
        id="home"
        className="flex w-full h-screen items-center md:items-start justify-center flex-col gap-5 text-white"
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
              <div className="flex flex-row items-center gap-2">
                <h1 className="text-3xl text-black">Hi, I'm</h1>
                <h1 className="text-3xl font-bold text-black">
                  Haruki Kuriwada
                </h1>
              </div>
              <div className="bg-white md:bg-indigo-500 mt-2 md:px-2 py-1 w-fit">
                <p className="text-3xl text-indigo-500 md:text-white font-bold">
                  Software Engineer / Cloud Engineer
                </p>
              </div>
              <br />
              <p className="text-xl font-light text-gray-600">
                <strong className="font-bold">x4</strong> AWS certified Software
                Engineer who has <strong className="font-bold">2+ years</strong>{" "}
                of professional experience. Combined with the comprehensive
                cloud knowledge, I can dig deeper into problems and solve them
                efficiently.
                <br /> I am looking for more experience in IT industry.
              </p>
              <br />
            </div>
          </div>
          {/* Avator section */}
          <img
            src={avatar}
            className="h-48 hover:scale-110 cursor-pointer transition duration-100"
            alt="my portfolio avatar"
            onClick={(e) => {
              e.preventDefault();
              window.open(
                "https://docs.google.com/document/d/1qYN-J9AX7Xt_cM48pBJzIC8_WWa1Sy--2kYZOiltVwY/edit?usp=sharing",
                "_blank"
              );
            }}
          />
        </div>
        {/* Social media */}
        <ul className="flex mt-2 gap-4 items-center">
          <FontAwesomeIcon
            size="2xl text-black hover:scale-110 cursor-pointer transition duration-100"
            icon={faGithub}
            onClick={() => {
              window.open("https://github.com/kuri-sun", "_blank");
            }}
          />
          <FontAwesomeIcon
            size="2xl text-black hover:scale-110 cursor-pointer transition duration-100"
            icon={faLinkedinIn}
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/harukikuriwada/",
                "_blank"
              );
            }}
          />
          <FontAwesomeIcon
            size="2xl text-black hover:scale-110 cursor-pointer transition duration-100"
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
