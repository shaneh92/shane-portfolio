import AboutComponent from "./AboutComponent";

import { resume } from "../../data/resume.ts";
import shaneAvatar from "../../assets/shaneAvatar.jpeg";

export function AboutResume() {
  return (
    <AboutComponent
      key={
        (resume.resumeIntro.name,
        resume.resumeIntro.email,
        resume.resumeIntro.title)
      }
      {...resume.resumeIntro}
      image={shaneAvatar}
    />
  );
}
