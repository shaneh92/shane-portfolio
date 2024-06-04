import {
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import SkillsResumeComponent from "./SkillsResumeComponent";
import { resume } from "../../data/resume";
import CircleIcon from "@mui/icons-material/Circle";

export default function SkillsResume() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h2">Skills</Typography>
        <Grid container spacing={2}>
          <List>
            {resume.skills.map((item, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <ListItem>
                  <ListItemIcon>
                    <CircleIcon sx={{ color: "white", fontSize: "6px" }} />
                  </ListItemIcon>
                  <ListItemText>
                    <SkillsResumeComponent skill={item} />
                  </ListItemText>
                </ListItem>
              </Grid>
            ))}
          </List>
        </Grid>
      </CardContent>
    </Card>
  );
}
