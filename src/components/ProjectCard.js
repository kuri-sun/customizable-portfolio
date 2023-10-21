import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProjectCard(props) {
  const githubLink = props.githubLink;
  const img = props.img;
  const projectName = props.projectName;
  const desc = props.desc;

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-offset="100"
      className="hover:bg-dark-100 w-full h-full bg-dark-200 rounded-md py-4 px-4"
    >
      <img
        src={img}
        className="w-full h-56 mx-auto object-cover"
        alt={projectName}
      ></img>
      <div className="mt-2">
        <div className="flex flex-row gap-2 items-center">
          <h1 className="font-bold md:text-xl">{projectName}</h1>
          {githubLink && (
            <FontAwesomeIcon
              size="xl hover:scale-110 transition duration-100 cursor-pointer"
              icon={faGithub}
              onClick={() => {
                window.open(githubLink, "_blank");
              }}
            />
          )}
        </div>
        <p className="font-light text-gray-300">{desc}</p>
      </div>
    </div>
  );
}
