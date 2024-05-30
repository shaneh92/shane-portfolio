import SkillComponent from "./SkillComponent";
import { skillList } from "../../data/skillList.ts";
import { Container } from "@mui/material";

export function SkillsComponent() {
  return (
    <Container
      style={{ display: "flex", flexWrap: "wrap", flexDirection: "row" }}
    >
      {skillList.map((item) => {
        return <SkillComponent key={item.title} {...item} />;
      })}
    </Container>
  );
}
