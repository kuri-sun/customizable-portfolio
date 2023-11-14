import ProjectCard from "./ProjectCard";

export default function Projects(props) {
  const isDarkMode = props.isDarkMode;

  return (
    <div id="projects" className="mt-4 text-white text-indigo-500">
      <h1 className="text-3xl font-bold">Projects</h1>
      <p
        className={`text-xl font-light ${
          isDarkMode ? "text-white" : "text-gray-500"
        }`}
      >
        Here are some of my Projects
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 justify-center mt-4 gap-5">
        {/* AI Image Analyzer */}
        <ProjectCard
          githubLink={"https://github.com/kuri-sun/ai_image_analyzer"}
          img={
            "https://github.com/kuri-sun/portfolio/assets/62743644/187d6139-6819-4ba0-b022-4c75040320c2"
          }
          projectName={"AI Image Analyzer"}
          desc={
            "Uploading a human face image to the serverless backend that consists of API Gateway and Lambda sends the image to the trained data model which can scan the image, analyze it and generate JSON. The React application hosted by S3 shows the analyzed result."
          }
        />
        {/* NPM react-kantan-img */}
        <ProjectCard
          githubLink={"https://github.com/kuri-sun/react-kantan-img"}
          img={
            "https://github.com/kuri-sun/react-kantan-img/assets/62743644/b4ebeb25-44ac-4a17-a02d-7413bf86c099"
          }
          projectName={"react-kantan-img"}
          desc={
            "npm package(React UI library) that helps developers expand the HTML image component's functionalities powered by JavaScript."
          }
        />
      </div>
    </div>
  );
}
