import { Typography } from "@mui/material";

interface AwardsComponentProps {
  awards?: string[];
}

export default function AwardsComponent(props: AwardsComponentProps) {
  return (
    <>
      <Typography variant="body1">{props.awards}</Typography>
    </>
  );
}
