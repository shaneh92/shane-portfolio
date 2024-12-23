import { Card, CardContent, Typography, useTheme } from "@mui/material";
import { resume } from "../../data/resume";
import WorkExperienceComponent from "./WorkExperienceComponent";

export default function WorkExperienceResume() {
  const { palette } = useTheme();
  return (
    <Card>
      <CardContent>
        <Typography
          variant="h3"
          sx={{ color: palette.secondary.dark, textTransform: "capitalize" }}
        >
          Work Experience
        </Typography>
        {resume.workExperience.map((item) => (
          <WorkExperienceComponent
            {...item}
            key={`${item.company}-${item.position}-${item.startDate}-${item.endDate}`}
          />
        ))}
      </CardContent>
    </Card>
  );
}
