import React from 'react';

const SummaryItem = ({ name, description, link, featured }) => {
  if (featured) {
    return (
      <div className="mb-6 p-4 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-lg border-l-4 border-cyan-400">
        <h3 className="text-xl font-semibold font-display text-cyan-600 dark:text-cyan-400">
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
          <span className="ml-2 text-sm font-normal bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 px-2 py-1 rounded-full">LIVE</span>
        </h3>
        <p className="text-base text-gray-600 dark:text-gray-400 font-display font-light">{description}</p>
      </div>
    );
  }

  return (
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
};

export default SummaryItem;