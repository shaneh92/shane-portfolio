import { Box, Typography, useTheme } from "@mui/material";

interface SkillComponentProps {
  image: string;
  title: string;
}

export default function SkillsComponent(props: SkillComponentProps) {
  const { palette } = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: palette.secondary.main,
        boxShadow: "0 0 8px rgba(0, 0, 0, 0.7)",
        borderRadius: "5px",
        display: "flex",
        alignItems: "center",
        padding: "8px",
        width: "250px",
        height: "50px",
        textAlign: "center",
      }}
    >
      <img
        src={props.image}
        alt={props.title}
        style={{ width: "30px", marginLeft: "10px" }}
      />
      <Typography variant="h4" sx={{ margin: "5px 20px 5px 20px" }}>
        {props.title}
      </Typography>
    </Box>
  );
}
