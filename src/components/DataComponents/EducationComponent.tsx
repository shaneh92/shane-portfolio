import { Typography } from "@mui/material";

interface EducationComponentProps {
  school: string;
  graduationYear: string;
  degree: string;
}

export default function EducationComponent(props: EducationComponentProps) {
  return (
    <>
      <Typography variant="h2">Education</Typography>
      <Typography variant="h1">{props.school}</Typography>
      <Typography variant="h1">{props.graduationYear}</Typography>
      <Typography variant="body1">{props.degree}</Typography>
    </>
  );
}
