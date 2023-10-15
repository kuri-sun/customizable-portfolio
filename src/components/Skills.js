import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SkillCard from "./SkillCard.js";

import javascript from "../assets/skills/javascript.svg";
import bash from "../assets/skills/bash.svg";
import linux from "../assets/skills/linux.svg";
import python from "../assets/skills/python.svg";
import reactIcon from "../assets/skills/react.svg";
import windows from "../assets/skills/windows.svg";
import docker from "../assets/skills/docker.svg";
import git from "../assets/skills/git.svg";

export default function Skills() {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <div id="skills" className="mt-4 text-white">
      <h1 className="text-2xl font-bold">Skills</h1>
      <p className="font-light text-gray-400">
        Here are some of my Certifications
      </p>
      <div className="mt-4">
        <Slider {...settings}>
          <SkillCard name="javascript" experience="2+ years" img={javascript} />
          <SkillCard name="python" experience="2+ years" img={python} />
          <SkillCard name="react" experience="2+ years" img={reactIcon} />
          <SkillCard name="docker" experience="2+ years" img={docker} />
          <SkillCard name="windows" experience="2+ years" img={windows} />
          <SkillCard name="linux" experience="2+ years" img={linux} />
          <SkillCard name="git" experience="2+ years" img={git} />
          <SkillCard name="bash" experience="2+ years" img={bash} />
        </Slider>
      </div>
    </div>
  );
}
