import EducationComponent from "./EducationComponent";
import AwardsComponent from "./AwardsComponent.tsx";
import { resume } from "../../data/resume.ts";

export default function EducationResume() {
  return (
    <>
      {resume.education.map((item) => {
        return (
          <EducationComponent
            key={`${item.school}-${item.graduationYear}-${item.degree}`}
            {...item}
          />
        );
      })}
      {resume.education.map((item, index) => {
        return <AwardsComponent key={index} {...item} />;
      })}
    </>
  );
}
