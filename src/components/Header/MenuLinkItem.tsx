import { Button, Link, Typography, useTheme } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";

interface MenuLinkItemProps {
  to: string;
  title: string;
  disabled?: boolean;
}

export default function MenuLinkItem(props: MenuLinkItemProps) {
  const location = useLocation();
  const currentPath = location.pathname || "/";
  const { palette } = useTheme();

  return (
    <Link
      component={RouterLink}
      to={props.to}
      underline="none"
      sx={{
        pointerEvents: props.disabled ? "none" : "auto",
        cursor: props.disabled ? "not-allowed" : "pointer",
        "& .MuiPaper-root": {
          backgroundColor: palette.primary.main,
          borderRadius: "12px",
        },
      }}
    >
      <Button
        sx={{
          width: "100%",
          backgroundColor: palette.secondary.main,
          justifyContent: "flex-start",
          pl: "30px",
          pt: "15px",
          pb: "15px",
          borderRadius: "0px",
          "&:hover": {
            backgroundColor: palette.primary.main,
          },
        }}
      >
        <Typography
          textAlign="center"
          variant="h4"
          sx={{
            fontWeight: 600,
            color:
              currentPath === props.to
                ? palette.secondary.dark
                : palette.secondary.light,
          }}
        >
          {props.title}
        </Typography>
      </Button>
    </Link>
  );
}
