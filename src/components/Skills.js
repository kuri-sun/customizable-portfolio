import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SkillCard from "./SkillCard.js";

import javascript from "../assets/skills/javascript.svg";
import python from "../assets/skills/python.svg";
import reactIcon from "../assets/skills/react.svg";
import docker from "../assets/skills/docker.svg";
import git from "../assets/skills/git.svg";
import ts from "../assets/skills/typescript.svg";
import kubernetes from "../assets/skills/kubernetes.svg";
import aws from "../assets/skills/aws.svg";
import java from "../assets/skills/java.svg";
import redux from "../assets/skills/redux.svg";
import gc from "../assets/skills/gc.svg";
import jira from "../assets/skills/jira.svg";
import spring from "../assets/skills/spring.svg";
import azure from "../assets/skills/azure.svg";
import tailwind from "../assets/skills/tailwind.svg";
import figma from "../assets/skills/figma.svg";

export default function Skills(props) {
  const isDarkMode = props.isDarkMode;
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <div id="skills" className="mt-4 text-indigo-500">
      <h1 className="text-3xl font-bold">Skills</h1>
      <p
        className={`text-xl font-light ${
          isDarkMode ? "text-white" : "text-gray-500"
        }`}
      >
        Here are some of my Skills
      </p>
      <div className="mt-4 px-4">
        <Slider {...settings}>
          <SkillCard name="Javascript" experience="3+ years" img={javascript} />
          <SkillCard name="TypeScript" experience="3+ years" img={ts} />
          <SkillCard name="Python" experience="Familiar" img={python} />
          <SkillCard name="Java" experience="3+ years" img={java} />

          <SkillCard name="Tailwind" experience="3+ years" img={tailwind} />
          <SkillCard name="React" experience="3+ years" img={reactIcon} />
          <SkillCard name="Redux" experience="3+ years" img={redux} />
          <SkillCard name="Spring" experience="3+ years" img={spring} />

          <SkillCard name="Docker" experience="2+ years" img={docker} />
          <SkillCard name="Kubernetes" experience="Familiar" img={kubernetes} />

          <SkillCard name="AWS" experience="3+ years" img={aws} />
          <SkillCard name="Azure" experience="Familiar" img={azure} />
          <SkillCard name="Google Cloud " experience="Familiar" img={gc} />

          <SkillCard name="Git" experience="3+ years" img={git} />
          <SkillCard name="Jira" experience="3+ years" img={jira} />
          <SkillCard name="Figma" experience="3+ years" img={figma} />
        </Slider>
      </div>
    </div>
  );
}
