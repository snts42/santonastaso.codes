import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionCertifications = ({ certifications }) => {
  return (
    <Section title="Certifications" titleDelay="animate-fade-in-up-delay-300" contentDelay="animate-fade-in-up-delay-300">
      {certifications.map((certification) => (
        <SummaryItem
          key={certification.name}
          name={certification.name}
          description={certification.description}
          link={certification.link}
          type="certification"
        />
      ))}
    </Section>
  );
};

export default SectionCertifications;
