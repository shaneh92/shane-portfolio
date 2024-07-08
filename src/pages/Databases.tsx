import { Typography, useTheme } from "@mui/material";

export default function Databases() {
  const { palette } = useTheme();
  return (
    <>
      <Typography
        variant="h1"
        align="center"
        sx={{ mt: 10, color: palette.secondary.dark }}
      >
        This page is currently under construction!
      </Typography>
      <Typography
        variant="h1"
        align="center"
        sx={{ mt: 10, color: palette.secondary.dark }}
      >
        Check back soon for updates!
      </Typography>
    </>
  );
}
