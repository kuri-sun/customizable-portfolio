import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProjectCard({ githubLink, img, projectName, desc }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-offset="100"
      className="w-full h-full bg-indigo-100 rounded-md py-4 px-4"
    >
      <img
        src={img}
        className="w-full h-56 mx-auto object-cover"
        alt={projectName}
      ></img>
      <div className="mt-2">
        <div className="flex flex-row gap-2 items-center">
          <h1 className="font-bold md:text-xl text-gray-600">{projectName}</h1>
          {githubLink && (
            <FontAwesomeIcon
              size="xl hover:scale-110 text-black transition duration-100 cursor-pointer"
              icon={faGithub}
              onClick={(e) => {
                e.preventDefault();
                window.open(githubLink, "_blank");
              }}
            />
          )}
        </div>
        <p className="font-light text-gray-500">{desc}</p>
      </div>
    </div>
  );
}
