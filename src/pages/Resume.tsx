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
 * 2. fix education and skills card to be even at bottom
 * 3. Fix hamburger menu to be on the right side
 * 4. Fix skills list on home page to not overlap when screen shrinks
 * 5. Implement new header links and fix the hamburger menu links to work for the entire button rather than just the text
 * 6. Fix the Footer content: needs to move left for even spacing in margins, and the footer needs to be the entire width of container
 * 7. Make skills into a button that links to their generic webpage, IE: React will link to the React dev webpage
 * 8. Add more projects to the projects page
 */
