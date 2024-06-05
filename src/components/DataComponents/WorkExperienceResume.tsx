import {
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { resume } from "../../data/resume";
import WorkExperienceComponent from "./WorkExperienceComponent";
import CircleIcon from "@mui/icons-material/Circle";

export default function WorkExperienceResume() {
  const { palette } = useTheme();
  return (
    <Card>
      <CardContent>
        <Typography
          variant="h3"
          sx={{ color: palette.secondary.light, textTransform: "capitalize" }}
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
