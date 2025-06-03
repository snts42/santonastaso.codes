import React from 'react';

const SummaryItem = ({ name, description, link }) => (
  <div className="mb-6">
    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary hover:underline transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
        >
          {name}
        </a>
      ) : (
        name
      )}
    </h3>
    <p className="text-base text-gray-600 dark:text-gray-300">{description}</p>
  </div>
);

export default SummaryItem;