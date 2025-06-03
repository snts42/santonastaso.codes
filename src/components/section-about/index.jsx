import React from 'react';
import Section from '../section';

const SectionAbout = ({ about }) => {
  return (
    <Section title="About Me">
      <div className="mb-6 text-gray-700 dark:text-gray-200">
        <p className="text-gray-600 dark:text-gray-400">{about}</p>
      </div>
    </Section>
  );
};

export default SectionAbout;