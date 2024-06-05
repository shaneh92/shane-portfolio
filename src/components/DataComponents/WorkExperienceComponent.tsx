import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

interface WorkExperienceComponentProps {
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
}

export default function WorkExperienceComponent(
  props: WorkExperienceComponentProps
) {
  const { palette } = useTheme();
  const wordHighlight = {
    color: palette.secondary.light,
  };
  return (
    <Box sx={{ marginTop: "10px" }}>
      <Typography variant="h4" sx={{ color: palette.secondary.dark }}>
        {props.position} {props.company} {props.location}{" "}
        <span style={wordHighlight}>
          ({props.startDate} - {props.endDate})
        </span>
      </Typography>
      <List>
        {props.description.map((desc, index) => (
          <ListItem key={index} sx={{ alignItems: "flex-start" }}>
            <ListItemIcon>
              <Box sx={{ marginTop: "0.5em" }}>
                <CircleIcon
                  sx={{ color: palette.secondary.light, fontSize: "6px" }}
                />
              </Box>
            </ListItemIcon>
            <Typography variant="body1"></Typography>
            <ListItemText>
              {/* currently doesnt change font */}
              <Typography variant="body1">{desc}</Typography>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
