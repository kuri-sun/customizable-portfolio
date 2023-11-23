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
        Here are some of Projects that I am contributing/maintaining.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 justify-center mt-4 gap-5">
        {/* Carbon Design System  */}
        <ProjectCard
          githubLink={"https://github.com/carbon-design-system/carbon"}
          img={
            "https://github.com/kuri-sun/customizable-portfolio/assets/62743644/f25c72da-d816-4253-90c1-fde803b75ecd"
          }
          projectName={"Carbon Design System (IBM)"}
          desc={
            "Maintained and contributed codes to the React UI component library from IBM with 110,000+ weekly downloads with React and TypeScript by discussing solutions with the maintainers and other contributors."
          }
        />
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
      </div>
    </div>
  );
}
