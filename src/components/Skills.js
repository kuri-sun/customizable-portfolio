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
import sass from "../assets/skills/sass.svg";
import ts from "../assets/skills/typescript.svg";
import kubernetes from "../assets/skills/kubernetes.svg";
import aws from "../assets/skills/aws.svg";
import java from "../assets/skills/java.svg";
import redux from "../assets/skills/redux.svg";
import gc from "../assets/skills/gc.svg";
import jira from "../assets/skills/jira.svg";
import swift from "../assets/skills/swift.svg";
import kotlin from "../assets/skills/kotlin.svg";
import spring from "../assets/skills/spring.svg";
import azure from "../assets/skills/azure.svg";
import tailwind from "../assets/skills/tailwind.svg";

export default function Skills() {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <div id="skills" className="mt-4 text-indigo-500">
      <h1 className="text-2xl font-bold underline">Skills</h1>
      <p className="font-light text-gray-500">Here are some of my Skills</p>
      <div className="mt-4">
        <Slider {...settings}>
          <SkillCard name="Javascript" experience="2+ years" img={javascript} />
          <SkillCard name="TypeScript" experience="2+ years" img={ts} />
          <SkillCard name="Python" experience="Familiar" img={python} />
          <SkillCard name="Java" experience="2+ years" img={java} />
          <SkillCard name="Swift" experience="<1 year" img={swift} />
          <SkillCard name="Kotlin" experience="<1 year" img={kotlin} />
          <SkillCard name="Bash" experience="2+ years" img={bash} />

          <SkillCard name="Sass" experience="2+ years" img={sass} />
          <SkillCard name="Tailwind" experience="2+ years" img={tailwind} />
          <SkillCard name="React" experience="2+ years" img={reactIcon} />
          <SkillCard name="Redux" experience="2+ years" img={redux} />
          <SkillCard name="Spring" experience="2+ years" img={spring} />

          <SkillCard name="Docker" experience="2+ years" img={docker} />
          <SkillCard name="Kubernetes" experience="Familiar" img={kubernetes} />

          <SkillCard name="AWS" experience="2+ years" img={aws} />
          <SkillCard name="Azure" experience="Familiar" img={azure} />
          <SkillCard name="Google Cloud " experience="Familiar" img={gc} />

          <SkillCard name="Windows" experience="2+ years" img={windows} />
          <SkillCard name="Linux" experience="2+ years" img={linux} />

          <SkillCard name="Git" experience="2+ years" img={git} />
          <SkillCard name="Jira" experience="2+ years" img={jira} />
        </Slider>
      </div>
    </div>
  );
}
