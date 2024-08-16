import {
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import SkillsResumeComponent from "./SkillsResumeComponent";
import { resume } from "../../data/resume";
import CircleIcon from "@mui/icons-material/Circle";

export default function SkillsResume() {
  const { palette } = useTheme();
  return (
    <Card>
      <CardContent>
        <Typography
          variant="h3"
          sx={{ color: palette.secondary.dark, textTransform: "capitalize" }}
        >
          Skills
        </Typography>
        <Grid container justifyContent="center">
          <Grid item>
            <List sx={{ columnCount: 2 }}>
              {resume.skills.map((item, index) => (
                <Grid item sm={6} key={index}>
                  <ListItem>
                    <ListItemIcon>
                      <CircleIcon
                        sx={{ color: palette.secondary.light, fontSize: "6px" }}
                      />
                    </ListItemIcon>
                    <ListItemText>
                      <SkillsResumeComponent skill={item} />
                    </ListItemText>
                  </ListItem>
                </Grid>
              ))}
            </List>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
