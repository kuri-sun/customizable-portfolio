import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SkillCard from "./SkillCard.js";

import html from "../assets/skills/html.svg";
import javascript from "../assets/skills/javascript.svg";
import python from "../assets/skills/python.svg";
import reactIcon from "../assets/skills/react.svg";
import docker from "../assets/skills/docker.svg";
import git from "../assets/skills/git.svg";
import github from "../assets/skills/github.svg";
import ts from "../assets/skills/typescript.svg";
import aws from "../assets/skills/aws.svg";
import java from "../assets/skills/java.svg";
import redux from "../assets/skills/redux.svg";
import jira from "../assets/skills/jira.svg";
import spring from "../assets/skills/spring.svg";
import nodejs from "../assets/skills/nodejs.svg";
import tailwind from "../assets/skills/tailwind.svg";
import jest from "../assets/skills/jest.svg";
import figma from "../assets/skills/figma.svg";
import css from "../assets/skills/css.svg";
import junit from "../assets/skills/junit.svg";
import gql from "../assets/skills/graphql.svg";
import { useTheme } from "../hooks/useTheme.js";

export default function Skills() {
  const { theme } = useTheme();
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
          theme === "dark" ? "text-white" : "text-gray-500"
        }`}
      >
        Here is my technical skills.
      </p>
      <div className="mt-4 px-4">
        <Slider {...settings}>
          <SkillCard name="HTML" img={html} />
          <SkillCard name="CSS" img={css} />
          <SkillCard name="Javascript" img={javascript} />
          <SkillCard name="TypeScript" img={ts} />
          <SkillCard name="Python" img={python} />
          <SkillCard name="Java" img={java} />

          <SkillCard name="Tailwind" img={tailwind} />
          <SkillCard name="React" img={reactIcon} />
          <SkillCard name="Redux" img={redux} />
          <SkillCard name="GraphQL" img={gql} />
          <SkillCard name="Spring" img={spring} />
          <SkillCard name="Node.js" img={nodejs} />

          <SkillCard name="Jest" img={jest} />
          <SkillCard name="Junit" img={junit} />

          <SkillCard name="Docker" img={docker} />

          <SkillCard name="AWS" img={aws} />

          <SkillCard name="Git" img={git} />
          <SkillCard name="GitHub" img={github} />
          <SkillCard name="Jira" img={jira} />
          <SkillCard name="Figma" img={figma} />
        </Slider>
      </div>
    </div>
  );
}
