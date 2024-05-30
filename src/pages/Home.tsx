import SkillsComponent from "../components/DataComponents/SkillComponent";
import { skillList } from "../data/skillList";

export default function Home() {
  return (
    <>
      {skillList.map((skill, index) => (
        <SkillsComponent key={index} image={skill.image} title={skill.title} />
      ))}
    </>
  );
}
