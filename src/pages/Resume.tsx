import { Container, Grid } from "@mui/material";
import { AboutResume } from "../components/DataComponents/AboutResume";
import EducationResume from "../components/DataComponents/EducationResume";
import SkillsResume from "../components/DataComponents/SkillsResume";
import WorkExperienceResume from "../components/DataComponents/WorkExperienceResume";

export default function Resume() {
  return (
    <Container>
      <AboutResume />
      <Grid container spacing={2}>
        <Grid item xs={12} md={7}>
          <EducationResume />
        </Grid>
        <Grid item xs={12} md={5}>
          <SkillsResume />
        </Grid>
      </Grid>
      <WorkExperienceResume />
    </Container>
  );
}
/**TODO:
 * 1. Fix the font sizes
 * 2. Fix the gap in SkillsResume
 * 3. Add Download Resume Button
 * 4. Add Routes
 * 5. fix white space around application
 */
