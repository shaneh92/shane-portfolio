import EducationComponent from "./EducationComponent";
import AwardsComponent from "./AwardsComponent.tsx";
import CertificationComponent from "./CertificationComponent.tsx";
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
          sx={{ color: palette.secondary.dark, textTransform: "capitalize" }}
        >
          Education
        </Typography>

        {resume.education.map((item, index) => {
          return (
            <ListItem
              key={`${item.school}-${item.degree}-${index}`}
              disableGutters
            >
              <EducationComponent
                key={`${item.school}-${item.degree}`}
                school={item.school}
                degree={item.degree}
              />
            </ListItem>
          );
        })}

        {resume.education.map((item, index) => {
          return (
            <ListItem key={`${item.school}-${index}`}>
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
      <CardContent>
        <Typography
          variant="h3"
          sx={{ color: palette.secondary.dark, textTransform: "capitalize" }}
        >
          Certifications
        </Typography>

        {resume.certifications.map((item, index) => {
          return (
            <ListItem
              key={`${item.certificationName}-${item.credentialID}-${index}`}
              disableGutters
            >
              <ListItemIcon>
                <CircleIcon
                  sx={{ color: palette.secondary.light, fontSize: "6px" }}
                />
              </ListItemIcon>
              <CertificationComponent
                key={`${item.certificationName}-${item.credentialID}`}
                certification={item.certificationName}
                credentialID={item.credentialID}
              />
            </ListItem>
          );
        })}
      </CardContent>
    </Card>
  );
}
