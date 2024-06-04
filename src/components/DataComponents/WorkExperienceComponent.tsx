import { Typography } from "@mui/material";

interface WorkExperienceComponentProps {
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
}

export default function WorkExperienceComponent(
  props: WorkExperienceComponentProps
) {
  return (
    <>
      <Typography variant="h2">Work Experience</Typography>
      <Typography variant="h1">{props.company}</Typography>
      <Typography variant="h1">{props.position}</Typography>
      <Typography variant="h1">{props.startDate}</Typography>
      <Typography variant="h1">{props.endDate}</Typography>
      {/* <Typography variant="body1">{props.description}</Typography> */}
    </>
  );
}
