import { Link, Typography, useTheme } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";

interface HeaderLinkItemProps {
  to: string;
  title: string;
  disabled?: boolean;
}

export default function HeaderLinkItem(props: HeaderLinkItemProps) {
  const location = useLocation();
  const currentPath = location.pathname || "/";
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
      component={RouterLink}
      to={props.to}
      underline="none"
      onClick={handleClick}
      sx={{
        pointerEvents: props.disabled ? "none" : "auto",
        cursor: props.disabled ? "not-allowed" : "pointer",
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
    </Link>
  );
}
