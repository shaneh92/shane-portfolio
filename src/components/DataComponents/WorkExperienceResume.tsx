import {
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { resume } from "../../data/resume";
import WorkExperienceComponent from "./WorkExperienceComponent";
import CircleIcon from "@mui/icons-material/Circle";

export default function WorkExperienceResume() {
  return (
    <>
      {resume.workExperience.map((item) => {
        return (
          <Card
            key={`${item.company}-${item.position}-${item.startDate}-${item.endDate}`}
          >
            <CardContent>
              <WorkExperienceComponent {...item} />
              <List>
                {item.description.map((desc, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <CircleIcon sx={{ color: "white", fontSize: "6px" }} />
                    </ListItemIcon>
                    <ListItemText primary={desc} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        );
      })}
    </>
  );
}
