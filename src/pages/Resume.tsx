import { AboutResume } from "../components/DataComponents/AboutResume";
import EducationResume from "../components/DataComponents/EducationResume";
import SkillsResume from "../components/DataComponents/SkillsResumeComponent";
import WorkExperienceResume from "../components/DataComponents/WorkExperienceResume";

export default function Resume() {
  return (
    <>
      <AboutResume />
      <EducationResume />
      <SkillsResume />
      <WorkExperienceResume />
    </>
  );
}
