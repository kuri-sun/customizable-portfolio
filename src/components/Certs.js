import awsCloudPrac from "../assets/certs/cloud_practitioner.jpeg";
import awsDeveloper from "../assets/certs/developer.jpeg";
import awsSolArch from "../assets/certs/sol_arch.jpeg";
import awsSysops from "../assets/certs/sysops_admin.jpeg";
import CertCard from "./CertCard.js";

export default function Certs() {
  return (
    <div id="certs" className="mt-4 text-white">
      <h1 className="text-2xl underline font-bold text-indigo-500">
        Certifications
      </h1>
      <p className="font-light text-gray-500">
        Here are some of my Certifications
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
        <CertCard
          certName="AWS Certified SysOps Administrator - Associate"
          img={awsSysops}
          link={
            "https://www.credly.com/badges/14f826cd-903e-42b4-9c35-f7c222b7159b/linked_in_profile"
          }
          issuedBy="AWS(Amazon Web Service)"
          fromDate="Jul 2023"
          toDate="Jul 2026"
        />
        <CertCard
          certName="AWS Certified Developer - Associate"
          img={awsDeveloper}
          link={
            "https://www.credly.com/badges/9fbe7c4d-3b51-481d-a419-f3733c861a7c/linked_in_profile"
          }
          issuedBy="AWS(Amazon Web Service)"
          fromDate="Mar 2023"
          toDate="Mar 2026"
        />
        <CertCard
          certName="AWS Certified Solutions Architect - Associate"
          img={awsSolArch}
          link={
            "https://www.credly.com/badges/f15bcabd-2484-45ef-bc5d-32662ff9f79c/linked_in_profile"
          }
          issuedBy="AWS(Amazon Web Service)"
          fromDate="Dec 2022"
          toDate="Dec 2025"
        />
        <CertCard
          certName="AWS Certified Cloud Practitioner"
          img={awsCloudPrac}
          link={
            "https://www.credly.com/badges/75f800d4-f64a-4e2b-bd71-1cead62b910a/linked_in_profile"
          }
          issuedBy="AWS(Amazon Web Service)"
          fromDate="Oct 2022"
          toDate="Jan 2026"
        />
      </div>
    </div>
  );
}
