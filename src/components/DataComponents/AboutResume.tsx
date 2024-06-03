import AboutComponent from "./AboutComponent";
import { Box, Typography } from "@mui/material";
import { resume } from "../../data/resume.ts";
import shanePhoto from "../../assets/shane-photo.png";

export function AboutResume() {
  return (
    <Box>
      <AboutComponent
        key={
          (resume.resumeIntro.name,
          resume.resumeIntro.email,
          resume.resumeIntro.title)
        }
        {...resume.resumeIntro}
        image={shanePhoto}
      />
      ;
    </Box>
  );
}
