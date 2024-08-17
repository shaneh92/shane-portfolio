import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  Typography,
  useTheme,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

interface ProjectComponentsProps {
  projectName: string;
  projectDescription: string;
  projectUrl: string;
  appURL?: string;
  projectImage: string;
  isComplete: boolean;
  projectTechnologies: string[];
}

export default function ProjectComponents(props: ProjectComponentsProps) {
  const { palette } = useTheme();
  return (
    <>
      <Typography
        variant="h3"
        sx={{
          color: palette.secondary.light,
          mb: "1em",
          mt: "1em",
          textTransform: "capitalize",
        }}
      >
        {props.projectName}
      </Typography>

      <Typography variant="body1">{props.projectDescription}</Typography>

      <Box>
        <img
          src={props.projectImage}
          alt={props.projectName}
          aria-label={props.projectName}
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "10px",
            boxShadow: `0px 0px 2px 0px ${palette.secondary.dark}`,
            marginTop: "1em",
          }}
        />
      </Box>

      <Box>
        <Typography
          variant="h3"
          sx={{
            color: palette.secondary.dark,
            textTransform: "capitalize",
            mt: "1em",
            mb: ".5em",
          }}
        >
          Tools:
        </Typography>

        <Grid container spacing={0} justifyContent="center">
          <List sx={{ columnCount: 2 }}>
            {props.projectTechnologies.map((technology) => (
              <Grid item xs={4} key={technology}>
                <ListItem>
                  <ListItemIcon
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <CircleIcon
                      sx={{
                        color: palette.secondary.light,
                        fontSize: "6px",
                        marginRight: "12px",
                      }}
                    />
                    <Typography variant="body1">{technology}</Typography>
                  </ListItemIcon>
                </ListItem>
              </Grid>
            ))}
          </List>
        </Grid>
      </Box>
    </>
  );
}
