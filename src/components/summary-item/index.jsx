import React from 'react';

const SummaryItem = ({ name, description, link, featured, type = "project" }) => {
  // Base styles for all items - mobile-optimized spacing
  const baseStyles = "mb-4 md:mb-4 group transition-all duration-300 ease-out";
  const titleStyles = "text-lg md:text-xl font-semibold font-display transition-all duration-300";
  const descriptionStyles = "text-sm md:text-base font-display font-light transition-all duration-300";
  const linkStyles = "focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded";

  if (featured && link) {
    // Featured project - entire card is clickable with prominent hover effects
    // Special case: Secure File Sharing opens in same tab
    const shouldOpenInSameTab = name === 'Secure File Sharing';
    
    return (
      <a
        href={link}
        target={shouldOpenInSameTab ? "_self" : "_blank"}
        rel={shouldOpenInSameTab ? undefined : "noopener noreferrer"}
        className={`${baseStyles} block cursor-pointer hover:transform hover:scale-[1.02] ${linkStyles}
          rounded-lg transition-all duration-300 ease-out
          hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 dark:hover:from-cyan-950/30 dark:hover:to-blue-950/30 
          hover:-translate-y-0.5
          active:scale-[0.98] active:bg-gradient-to-r active:from-cyan-50 active:to-blue-50`}
      >
        <h3 className={`${titleStyles} text-gray-900 dark:text-gray-100 group-hover:text-cyan-500 dark:group-hover:text-cyan-300`}>
          {name}
          <span className="ml-2 text-sm font-normal bg-cyan-100 dark:bg-cyan-950/50 text-cyan-800 dark:text-cyan-300 px-2 py-1 rounded-full group-hover:bg-cyan-200 dark:group-hover:bg-cyan-900/60 transition-colors duration-300 no-underline">LIVE</span>
        </h3>
        <p className={`${descriptionStyles} text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300`}>
          {description}
        </p>
      </a>
    );
  }

  if (featured && !link) {
    // Featured project without link - visual emphasis but not clickable
    return (
      <div className={`${baseStyles} rounded-lg transition-all duration-300 ease-out
        hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 dark:hover:from-cyan-950/30 dark:hover:to-blue-950/30 
        hover:-translate-y-0.5`}>
        <h3 className={`${titleStyles} text-gray-900 dark:text-gray-100 group-hover:text-cyan-500 dark:group-hover:text-cyan-300`}>
          {name}
          <span className="ml-2 text-sm font-normal bg-cyan-100 dark:bg-cyan-950/50 text-cyan-800 dark:text-cyan-300 px-2 py-1 rounded-full group-hover:bg-cyan-200 dark:group-hover:bg-cyan-900/60 transition-colors duration-300 no-underline">LIVE</span>
        </h3>
        <p className={`${descriptionStyles} text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300`}>{description}</p>
      </div>
    );
  }

  if (!featured && link) {
    // Only projects get cards and hover effects
    if (type === "project") {
      return (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`${baseStyles} block cursor-pointer ${linkStyles}
            rounded-lg transition-all duration-300 ease-out
            hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 dark:hover:from-cyan-900/20 dark:hover:to-blue-900/20
            hover:transform hover:scale-[1.02] hover:-translate-y-0.5
            active:scale-[0.98] active:bg-gradient-to-r active:from-cyan-50 active:to-blue-50`}
        >
          <h3 className={`${titleStyles} text-gray-900 dark:text-gray-100 group-hover:text-cyan-500 dark:group-hover:text-cyan-300 inline-flex items-center gap-1`}>
            {name}
            <svg 
              className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </h3>
          <p className={`${descriptionStyles} text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300`}>{description}</p>
        </a>
      );
    }

    // Non-project items with links - no card, just text with link
    return (
      <div className={baseStyles}>
        <h3 className={`${titleStyles} text-gray-900 dark:text-gray-100`}>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`${linkStyles} hover:text-cyan-600 dark:hover:text-cyan-400 inline-flex items-center gap-1`}
          >
            {name}
            <svg 
              className="w-4 h-4 opacity-60 hover:opacity-100 transition-all duration-300 hover:translate-x-0.5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </h3>
        <p className={`${descriptionStyles} text-gray-600 dark:text-gray-400`}>{description}</p>
      </div>
    );
  }

  // Non-featured item without link - cards and zoom only for projects
  if (type === "project") {
    return (
      <div className={`${baseStyles} rounded-lg transition-all duration-300 ease-out
        hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 dark:hover:from-cyan-900/20 dark:hover:to-blue-900/20
        hover:transform hover:scale-[1.02] hover:-translate-y-0.5`}>
        <h3 className={`${titleStyles} text-gray-900 dark:text-gray-100 group-hover:text-gray-700 dark:group-hover:text-gray-200`}>{name}</h3>
        <p className={`${descriptionStyles} text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300`}>{description}</p>
      </div>
    );
  }

  // Skills and other non-project items - no card, no zoom
  return (
    <div className={baseStyles}>
      <h3 className={`${titleStyles} text-gray-900 dark:text-gray-100`}>{name}</h3>
      <p className={`${descriptionStyles} text-gray-600 dark:text-gray-400`}>{description}</p>
    </div>
  );
};

export default SummaryItem;