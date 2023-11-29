import React from "react";
import Experience from "./Experience";

export default function Experiences({ isDarkMode }) {
  return (
    <div id="exp" className="mt-4 text-white">
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
          startDate={"Sep 2022"}
          endDate={"Nov 2023"}
          roleDescriptions={[
            "Produced a 200% user increase through a UI migration across web and mobile applications with React, React Native, Redux, Mbox, Tailwind CSS, Webpack, Babel, and ES6, following 8px grid system methodology and collaborating with the UI/UX designers through Figma. The memory consumption is 30% less than the previous one by bringing knowledge like Lazy-loading.",
            "Increased user satisfaction by 90% by trimming the application’s query search response time from 4 seconds to 1 second by integrating ElasticSearch to the backend system with Java, Spring, JWT, and MySQL. Received over 100 great feedbacks.",
            "Saved an estimated $10k annually by enhancing application deployment efficiency from manual operations to CI/CD automation using AWS CodePipeline, aligning testings with Testing Library, Jest, and JUnit, and deploying to ECS Docker containers.",
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
          endDate={"Aug 2022"}
          roleDescriptions={[
            "Demonstrated software development proficiency in Git, Agile, and Test Driven development by maintaining the application with React, Express.js, MongoDB, Node.js, Apollo, and GraphQL solving over 50 Jira tickets.",
            "Reduced 30 files and enhanced code transparency by transitioning to 3rd party REST API for mobile payments using Clover and Moneris, eliminating the need for SDK integration in the MERN application.",
            "Optimized web interfaces and developed Reusable UI components that expedited onboarding for new developers and improved the overall Developer Experience(DX). Reduced the UI bugs and errors by 40%.",
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
          endDate={"Jun 2019"}
          roleDescriptions={[
            "Drove over $100 million yearly revenue by maintaining Japan's No.1 patients' Personal Identification Information(PII) tracking system using technologies like TypeScript, React, Python, Flask, PostgreSQL, Redis, S3, Athena, and Redshift.",
            "Designing and implementing scalable background workers for live streaming that achieved a response time of under 100ms for 95% of requests, using AWS SQS and Lambda for task dispatching and DynamoDB for data storage. Monitored and tracked system performance, achieving 99.9% uptime and handling a peak load of 10,000 requests per minute with minimal errors.",
          ]}
        />
      </div>
    </div>
  );
}
