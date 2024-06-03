import { Box, Typography } from "@mui/material";

interface AboutComponentProps {
  image: string;
  name: string;
  title: string;
  email: string;
}

export default function AboutComponent(props: AboutComponentProps) {
  return (
    <>
      <Box>
        <img src={props.image} alt={props.name}></img>
        <Typography variant="h1">{props.name}</Typography>
        <Typography variant="h1">{props.title}</Typography>
        <Typography variant="h1">{props.email}</Typography>
        <Typography variant="h2">About Me</Typography>
        <Typography variant="body1">Hello World</Typography>
      </Box>
    </>
  );
}
