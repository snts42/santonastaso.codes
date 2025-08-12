import React from 'react';

const SummaryItem = ({ name, description, link }) => (
  <div className="mb-6">
    <h3 className="text-xl font-semibold font-display text-gray-900 dark:text-gray-100">
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:!text-cyan-400 hover:underline focus:outline-none focus:ring-2 focus:ring-cyan-400 transform hover:scale-105 duration-150"
          style={{ transition: 'none' }}
        >
          {name}
        </a>
      ) : (
        name
      )}
    </h3>
    <p className="text-base text-gray-600 dark:text-gray-400 font-display font-light">{description}</p>
  </div>
);

export default SummaryItem;