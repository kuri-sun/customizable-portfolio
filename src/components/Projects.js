import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div id="certs" className="mt-4 text-white">
      <h1 className="text-2xl font-bold">Projects</h1>
      <p className="font-light text-gray-400">Here are some of my Projects</p>

      <div className="grid grid-cols-1 md:grid-cols-2 justify-center mt-4 gap-5">
        <ProjectCard
          githubLink={"https://github.com/kuri-sun/ai_image_analyzer"}
          appLink={"https://main--bright-quokka-aa4351.netlify.app/"}
          img={""}
          projectName={"AI Image Analyzer"}
          desc={
            "Uploading a human face image to the serverless backend that consists of API Gateway and Lambda sends the image to the trained data model which can scan the image, analyze it and generate JSON. The React application hosted by S3 shows the analyzed result."
          }
        />
      </div>
    </div>
  );
}
