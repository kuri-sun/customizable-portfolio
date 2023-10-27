import React from "react";

export default function Experience({
  isDarkMode,
  jobTitle,
  company,
  companyLink,
  companyLocation,
  startDate,
  endDate,
  roleDescriptions,
}) {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-offset="100"
      className="flex flex-row gap-4 text-black "
    >
      <div className="flex flex-col gap-1 items-center">
        <div className="w-4 h-4 rounded-full bg-indigo-600" />
        <div className="border border-indigo-200 w-0 flex-1" />
      </div>
      <div className="flex flex-col gap-1">
        <div>
          <div className="flex flex-col md:flex-row">
            <div
              className={`font-bold text-2xl ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              {jobTitle}{" "}
            </div>
            <div
              className={`font-bold text-2xl ${
                isDarkMode ? "text-gray-300" : "text-gray-500"
              }  cursor-pointer`}
              onClick={() => {
                window.open(companyLink, "_blank");
              }}
            >
              @{company} ({companyLocation})
            </div>
          </div>
          <div
            className={`text-xl ${
              isDarkMode ? "text-gray-200" : "text-gray-700"
            } `}
          >
            {startDate} - {endDate}
          </div>
        </div>
        <div>
          {roleDescriptions?.map((roleDescription) => {
            return (
              <div className="flex flex-row gap-2 top-8">
                <div
                  className={`font-light ${
                    isDarkMode ? "text-gray-300" : "text-gray-500"
                  } `}
                >
                  - {roleDescription}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
