import {
  List,
  ListItem,
  ListItemIcon,
  Typography,
  useTheme,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

interface EducationComponentProps {
  school: string;
  degree: string;
}

export default function EducationComponent(props: EducationComponentProps) {
  const { palette } = useTheme();
  return (
    <List>
      <ListItem>
        <ListItemIcon>
          <CircleIcon
            sx={{ color: palette.secondary.light, fontSize: "6px" }}
          />
        </ListItemIcon>
        <Typography variant="body1">{props.school}</Typography>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          {/**No Icon so we are aligned with other points*/}
        </ListItemIcon>
      </ListItem>
    </List>
  );
}
