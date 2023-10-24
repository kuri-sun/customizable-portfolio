import React from "react";
import Experience from "./Experience";

export default function Experiences({ isDarkMode }) {
  return (
    <div id="certs" className="mt-4 text-white">
      <h1 className="text-3xl font-bold text-indigo-500">Experience</h1>
      <p
        className={`text-xl font-light ${
          isDarkMode ? "text-white" : "text-gray-500"
        }`}
      >
        Here is my experience
      </p>

      <div className="flex flex-col gap-8 mt-4">
        {/* Fieldshare.io */}
        <Experience
          isDarkMode={isDarkMode}
          jobTitle={"Full Stack Developer"}
          company={"Fieldshare.io"}
          companyLocation={"Vancouver, BC, CA"}
          companyLink={"https://fieldshare.io"}
          startDate={"Sep 2021"}
          endDate={"Present"}
          roleDescriptions={[
            "Produced a 200% user increase through a UI transition across web and mobile applications with React and React Native, following 8px grid system methodology and collaborating with the UI/UX designers with Figma",
            "Over 40 great feedbacks by trimming the application’s query search response time from 4 seconds to 1.5 seconds by integrating ElasticSearch.",
            "Enhanced application deployment efficiency from manual operations to full automation by CI/CD pipeline, aligning testings with Testing Library, Jest and JUnit, and deploying to ECS docker-containers.",
          ]}
        />
        {/* Goopter eCommerce Solutions */}
        <Experience
          isDarkMode={isDarkMode}
          jobTitle={"Software Developer Internship"}
          company={"Goopter eCommerce Solutions"}
          companyLocation={"Burnaby, BC, CA"}
          companyLink={"https://www.goopter.com/"}
          startDate={"Apr 2021"}
          endDate={"Aug 2021"}
          roleDescriptions={[
            "Achieved a 10% decline in the mobile application RAM consumption by proposing a Multithreading to lighten the burden on the UI thread.",
            "Reduced 30 code files and enhanced code transparency by transitioning to REST API with Clover for mobile payments, eliminating the need for SDK integration.",
            "Developed reusable UI components that expedited onboarding for new developers and improved the overall Developer Experience(DX).",
          ]}
        />
        {/* Wiseman */}
        <Experience
          isDarkMode={isDarkMode}
          jobTitle={"Software Developer Internship"}
          company={"Wiseman"}
          companyLocation={"Morioka, IW, JA"}
          companyLink={"https://www.wiseman.co.jp/"}
          startDate={"Mar 2019"}
          endDate={"Apr 2019"}
          roleDescriptions={[
            "Maintained Janapese No.1 patients' Personal Identification Information(PII) tracking system with Spring by solving 50 Jira tickets and reviewing and offering feedback on peer Pull Requests.",
          ]}
        />
      </div>
    </div>
  );
}
