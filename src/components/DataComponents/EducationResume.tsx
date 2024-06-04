import EducationComponent from "./EducationComponent";
import AwardsComponent from "./AwardsComponent.tsx";
import { resume } from "../../data/resume.ts";
import { Card, CardContent, List, ListItem, ListItemIcon } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

export default function EducationResume() {
  return (
    <>
      <Card>
        <CardContent>
          {resume.education.map((item) => {
            return (
              <EducationComponent
                key={`${item.school}-${item.graduationYear}-${item.degree}`}
                {...item}
              />
            );
          })}

          <List>
            {resume.education.map((item, index) => {
              return (
                <ListItem>
                  <ListItemIcon>
                    <CircleIcon sx={{ color: "white", fontSize: "6px" }} />
                  </ListItemIcon>
                  <AwardsComponent key={index} {...item} />
                </ListItem>
              );
            })}
          </List>
        </CardContent>
      </Card>
    </>
  );
}
