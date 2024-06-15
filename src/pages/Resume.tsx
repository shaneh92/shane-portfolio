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
 * 3. Fix the header not highlighting when we click the buttons on the home page to navigate
 * 4. Add styles to drop down menu
 * 5. fix education and skills card to be even at bottom
 * 6. Fix hamburger menu to be on the right side
 * 7. Fix skills list on home page to not overlap when screen shrinks
 * 8. Implement new header links
 */
