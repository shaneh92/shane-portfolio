import QuickLinkComponent from "./QuickLinkComponent";
import arrow from "../../assets/arrow.png";
import { Grid } from "@mui/material";

export default function QuickLinksComponent() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <QuickLinkComponent
          to={"/resume"}
          title={"Resume"}
          image={arrow}
          description={"Click to view resume or download a PDF"}
        ></QuickLinkComponent>
      </Grid>
      <Grid item xs={12} md={6}>
        <QuickLinkComponent
          to="/api"
          title={"API & Databases"}
          image={arrow}
          description={"APIs and Database Diagrams"}
        ></QuickLinkComponent>
      </Grid>
      <Grid item xs={12} md={6}>
        <QuickLinkComponent
          to="/projects"
          title={"Projects"}
          image={arrow}
          description={"Projects and complied works"}
        ></QuickLinkComponent>
      </Grid>
      <Grid item xs={12} md={6}>
        <QuickLinkComponent
          to="/about"
          title={"About"}
          image={arrow}
          description={"Get to know Shane"}
        ></QuickLinkComponent>
      </Grid>
    </Grid>
  );
}
