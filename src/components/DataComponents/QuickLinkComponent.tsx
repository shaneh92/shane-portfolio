import { Box, Button, Grid, Link, Typography, useTheme } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

interface QuickLinkComponentProps {
  title: string;
  image: string;
  description: string;
  to: string;
  disabled?: boolean;
}

export default function QuickLinkComponent(props: QuickLinkComponentProps) {
  const { palette } = useTheme();

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (props.disabled) {
      event.preventDefault();
    }
  };

  return (
    <Link
      onClick={handleClick}
      component={RouterLink}
      to={props.to}
      underline="none"
    >
      <Button
        sx={{
          backgroundColor: palette.secondary.main,
          boxShadow: "0 0 8px rgba(0, 0, 0, 0.7)",
          borderRadius: "5px",
          display: "flex",
          width: "100%",
          padding: "15px",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container alignItems="center">
              <Grid item xs={10}>
                <Typography
                  variant="h3"
                  sx={{
                    textAlign: "justify",
                    textTransform: "none",
                    color: palette.secondary.dark,
                  }}
                >
                  {props.title}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Box style={{ display: "flex", alignItems: "center" }}>
                  <img src={props.image} style={{ height: "30px" }}></img>
                </Box>
              </Grid>
            </Grid>
            <Typography
              variant="body1"
              sx={{ textAlign: "justify", textTransform: "none" }}
            >
              {props.description}
            </Typography>
          </Grid>
        </Grid>
      </Button>
    </Link>
  );
}
