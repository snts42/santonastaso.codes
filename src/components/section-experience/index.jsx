import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionExperience = ({ experience }) => {
  if (!experience.length) return null;

  return (
    <Section title="Experience" titleDelay="animate-fade-in-up-delay-300" contentDelay="animate-fade-in-up-delay-300">
      {experience.filter(Boolean).map((item) => (
      <SummaryItem
    key={item.name}
    name={item.name}
    description={item.description}
    link={item.link}
  />
))}
    </Section>
  );
};

export default SectionExperience;