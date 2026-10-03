import React from "react";
import SectionLabel from "../components/SectionLabel";
import Timeline from "../components/Timeline";
import { activities, experience } from "../data";

const Experience: React.FC = () => (
  <>
    <section id="experience" className="section">
      <SectionLabel icon="briefcase">Research & Experience</SectionLabel>
      <Timeline entries={experience} defaultOpen={experience[0]?.org} />
    </section>
    <section className="section">
      <SectionLabel icon="sparkle">Activities</SectionLabel>
      <Timeline entries={activities} />
    </section>
  </>
);

export default Experience;
