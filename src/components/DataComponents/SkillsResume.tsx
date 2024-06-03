import { Typography } from "@mui/material";
import SkillsResumeComponent from "./SkillsResumeComponent";
import { resume } from "../../data/resume";

export default function SkillsResume() {
  return (
    <>
      <Typography variant="h2">Skills</Typography>
      {resume.skills.map((item, index) => {
        return <SkillsResumeComponent key={index} {...item} />;
      })}
    </>
  );
}
