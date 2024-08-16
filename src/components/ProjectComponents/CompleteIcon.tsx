import { Box, Typography, useTheme } from "@mui/material";

export default function CompleteIcon({ isComplete }: { isComplete: boolean }) {
  const { palette } = useTheme();
  const inProgressBackgroundColor = "#FFC107";
  const inProgressTextColor = "#333333";

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          width: "120px",
          textAlign: "center",
          backgroundColor: isComplete
            ? palette.secondary.dark
            : inProgressBackgroundColor,
          color: isComplete ? palette.primary.main : inProgressTextColor,
          padding: "8px",
          borderRadius: "25px",
        }}
      >
        <Typography variant="h6">
          {isComplete ? "Complete" : "In Progress"}
        </Typography>
      </Box>
    </Box>
  );
}
