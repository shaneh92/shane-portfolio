import { resume } from "../../data/resume";
import WorkExperienceComponent from "./WorkExperienceComponent";

export default function WorkExperienceResume() {
  return (
    <>
      {resume.workExperience.map((item) => {
        return (
          <WorkExperienceComponent
            key={`${item.company}-${item.position}-${item.startDate}-${item.endDate}-${item.description}`}
            {...item}
          />
        );
      })}
    </>
  );
}
