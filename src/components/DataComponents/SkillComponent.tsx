import { Box, Typography, useTheme } from "@mui/material";

export default function SkillsComponent({
  image,
  title,
}: {
  image: string;
  title: string;
}) {
  const { palette } = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: palette.secondary.main,
        boxShadow: "0 0 8px rgba(0, 0, 0, 0.7)",
        borderRadius: "5px",
        display: "flex",
        alignItems: "center",
        padding: "10px",
        margin: "10px",
        width: "150px",
        height: "50px",
        textAlign: "center",
      }}
    >
      <img src={image} alt={title} style={{ width: "30px" }} />
      <Typography variant="h4" sx={{ margin: "5px 20px 5px 20px" }}>
        {title}
      </Typography>
    </Box>
  );
}
