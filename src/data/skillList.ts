import javascriptLogo from "../assets/javascript-logo.png";
import reactLogo from "../assets/react-logo.png";
import cssLogo from "../assets/css-logo.png";
import autocadLogo from "../assets/autocad-logo.png";

interface SkillList {
  title: string;
  image: string;
}

export const skillList: SkillList[] = [
  {
    title: "JavaScript",
    image: javascriptLogo,
  },
  {
    title: "React",
    image: reactLogo,
  },
  {
    title: "Auto-CAD",
    image: autocadLogo,
  },
  {
    title: "CSS",
    image: cssLogo,
  },
];
