import React from 'react';
import Section from '../section';

const SectionContact = ({ email, phone }) => {
  if (!email && !phone) return null;

  return (
    <Section title="Contact">
      <div className="grid grid-cols-[auto,1fr] gap-x-4 gap-y-1 text-lg text-gray-600 font-light">
        {email && (
          <>
            <span>Email:</span>
            <a
              href={`mailto:${email}`}
              className="underline text-gray-900 dark:text-gray-100 hover:text-primary hover:underline transition-colors focus:outline-none focus:ring-2 focus:ring-primary break-all"
            >
              {email}
            </a>
          </>
        )}
        {phone && (
          <>
            <span>Phone:</span>
            <a
              href={`tel:${phone}`}
              className="underline text-gray-900 dark:text-gray-100 hover:text-primary hover:underline transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {phone}
            </a>
          </>
        )}
      </div>
    </Section>
  );
};

export default SectionContact;