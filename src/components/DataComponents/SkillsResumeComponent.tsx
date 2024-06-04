import { Typography } from "@mui/material";

interface SkillComponentProps {
  skill: string;
}

export default function SkillsResumeComponent(props: SkillComponentProps) {
  return (
    <>
      <Typography variant="body1">{props.skill}</Typography>
    </>
  );
}
