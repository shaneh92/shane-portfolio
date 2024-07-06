import EducationComponent from "./EducationComponent";
import AwardsComponent from "./AwardsComponent.tsx";
import { resume } from "../../data/resume.ts";
import {
  Card,
  CardContent,
  ListItem,
  ListItemIcon,
  Typography,
  useTheme,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

export default function EducationResume() {
  const { palette } = useTheme();
  return (
    <Card>
      <CardContent>
        <Typography
          variant="h3"
          sx={{ color: palette.secondary.light, textTransform: "capitalize" }}
        >
          Education
        </Typography>

        {resume.education.map((item) => {
          return (
            <ListItem disableGutters>
              <EducationComponent
                key={`${item.school}-${item.degree}-${item.graduationYear}`}
                school={item.school}
                degree={item.degree}
                graduationYear={item.graduationYear}
              />
            </ListItem>
          );
        })}

        {resume.education.map((item, index) => {
          return (
            <ListItem>
              <ListItemIcon>
                <CircleIcon
                  sx={{ color: palette.secondary.light, fontSize: "6px" }}
                />
              </ListItemIcon>
              <AwardsComponent key={index} {...item} />
            </ListItem>
          );
        })}
      </CardContent>
    </Card>
  );
}
