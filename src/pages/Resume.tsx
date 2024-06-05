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
 * 1. Fix the font sizes for list items
 * 2. Fix the gap in SkillsResume list items
 * 3. Add Routes
 * 4. fix white space around application
 * 5. Add styles to drop down menu
 * 6. fix education and skills card to be even at bottom
 */
