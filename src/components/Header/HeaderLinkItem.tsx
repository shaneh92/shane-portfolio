import { Link, Typography, useTheme } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";

interface HeaderLinkItemProps {
  to: string;
  title: string;
}

export default function HeaderLinkItem(props: HeaderLinkItemProps) {
  const location = useLocation();
  const currentPath = location.pathname || "/";
  const { palette } = useTheme();

  return (
    <Link component={RouterLink} to={props.to} underline="none">
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
