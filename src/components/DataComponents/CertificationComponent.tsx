import { ListItem, List, Typography } from "@mui/material";

interface CertificationComponentProps {
  certification: string;
  credentialID?: string;
}

export default function CertificationComponent(
  props: CertificationComponentProps
) {
  return (
    <>
      <List>
        <ListItem>
          {" "}
          <Typography variant="body1">{props.certification}</Typography>
        </ListItem>

        {props.credentialID && (
          <ListItem>
            <Typography variant="body1">
              Credential ID: {props.credentialID}
            </Typography>
          </ListItem>
        )}
      </List>
    </>
  );
}
