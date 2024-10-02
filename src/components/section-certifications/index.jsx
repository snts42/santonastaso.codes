import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionCertifications = ({ certifications }) => {
  return (
    <Section title="Certifications">
      {certifications.map((certification) => (
        <SummaryItem
          key={certification.name}
          name={certification.name}
          description={certification.description}
        />
      ))}
    </Section>
  );
};

export default SectionCertifications;
