import { Button, Grid, useTheme } from "@mui/material";

interface ProjectButtonsProps {
  projectUrl: string;
  appURL?: string;
}

export default function ProjectButtons(props: ProjectButtonsProps) {
  const { palette, typography } = useTheme();
  return (
    <Grid container justifyContent="center">
      <Grid item xs={props.appURL ? 6 : 12}>
        <Button
          variant="contained"
          target="_blank"
          rel="noopener noreferrer"
          href={props.projectUrl}
          sx={{
            display: "block",
            margin: "0 auto",
            textAlign: "center",
            width: "150px",
            mt: "2em",
            backgroundColor: palette.secondary.dark,
            color: palette.secondary.main,
            fontFamily: typography.h6,
            textTransform: "none",
          }}
        >
          View Repo
        </Button>
      </Grid>
      <Grid item xs={6}>
        {props.appURL && (
          <Button
            variant="contained"
            target="_blank"
            rel="noopener noreferrer"
            href={props.appURL}
            sx={{
              display: "block",
              margin: "0 auto",
              textAlign: "center",
              width: "150px",
              mt: "2em",
              backgroundColor: palette.primary.dark,
              color: palette.secondary.dark,
              fontFamily: typography.h6,
              textTransform: "none",
              "&:hover": {
                backgroundColor: palette.secondary.dark,
                color: palette.primary.dark,
              },
            }}
          >
            View App
          </Button>
        )}
      </Grid>
    </Grid>
  );
}
