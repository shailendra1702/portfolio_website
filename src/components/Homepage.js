import React from "react";
import Title from "./Title";
import About from "./About";
import Projects from "./ProjectSection";
import SkillSection from "./SkillSection";
import RecommendationSection from "./RecommendationSection";

function Homepage() {
  return (
    <div>
      <Title name="Shailendra kumar" leadText="I am a freelancer from India" />
      <RecommendationSection />
      <SkillSection />
      <Projects />
      <About />
    </div>
  );
}
export default Homepage;