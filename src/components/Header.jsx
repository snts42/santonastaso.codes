import React from 'react';
import { Link } from 'gatsby';
import DarkModeToggle from './DarkModeToggle';

// Code brackets logo — transparent, adapts to light/dark via the container
const CodeLogo = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-7 h-7 md:w-12 md:h-12 relative z-10 transition-transform duration-300 group-hover:scale-110">
    <path d="M18 14L8 24L18 34" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M30 14L40 24L30 34" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M27 11L21 37" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.5"/>
  </svg>
);

const GitHubIcon = () => (
  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const ResumeIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const Header = ({ metadata = {} }) => {
  const github = metadata.github;
  const linkedin = metadata.linkedin;
  const resume = metadata.resume;

  return (
    <div className="flex items-center gap-4 mb-8 md:mb-12 md:flex md:pt-0 animate-fade-in-up">
      {/* Logo circle - links to homepage for cross-site navigation */}
      <div className="flex-shrink-0 md:w-full md:max-w-150 md:flex md:items-center md:justify-center">
        <Link
          to="/"
          className="w-14 h-14 md:w-24 md:h-24 rounded-full flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-black border-2 border-cyan-400/60 hover:border-cyan-400 shadow-lg hover:shadow-cyan-400/30 transition-all duration-300 hover:scale-105 text-cyan-600 dark:text-cyan-400 group"
          aria-label="Home"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/15 to-cyan-500/15 dark:from-cyan-400/25 dark:to-cyan-500/25 rounded-full group-hover:from-cyan-400/30 group-hover:to-cyan-500/30 dark:group-hover:from-cyan-400/40 dark:group-hover:to-cyan-500/40 transition-all duration-300"></div>
          <CodeLogo />
        </Link>
      </div>
      <div className="flex-1 md:pl-20">
        <h1 className="text-2xl md:text-4xl font-display font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
          <Link to="/" className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-300">{metadata.name}</Link>
        </h1>
        <p className="mt-1 text-sm md:text-base text-gray-600 dark:text-gray-400 font-display font-light">{metadata.description}</p>
        <div className="flex items-center justify-between mt-3 md:mt-5">
          <ul className="flex flex-nowrap whitespace-nowrap overflow-visible uppercase tracking-wider">
            {github && (
              <li className="inline list-none pr-3 md:pr-4">
                <a className="inline-flex items-center gap-1.5 py-1 md:py-2 font-display font-semibold text-[11px] md:text-xs text-gray-600 dark:text-gray-400 transition-all duration-300 hover:!text-cyan-400 dark:hover:!text-cyan-400 hover:underline focus:outline-none focus:ring-2 focus:ring-cyan-400 transform hover:scale-105 rounded" href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
                  <GitHubIcon />
                  GitHub
                </a>
              </li>
            )}
            {linkedin && (
              <li className="inline list-none pr-3 md:pr-4">
                <a className="inline-flex items-center gap-1.5 py-1 md:py-2 font-display font-semibold text-[11px] md:text-xs text-gray-600 dark:text-gray-400 transition-all duration-300 hover:!text-cyan-400 dark:hover:!text-cyan-400 hover:underline focus:outline-none focus:ring-2 focus:ring-cyan-400 transform hover:scale-105 rounded" href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
                  <LinkedInIcon />
                  LinkedIn
                </a>
              </li>
            )}
            {resume && (
              <li className="inline list-none pr-3 md:pr-4">
                <a className="inline-flex items-center gap-1.5 py-1 md:py-2 font-display font-semibold text-[11px] md:text-xs text-gray-600 dark:text-gray-400 transition-all duration-300 hover:!text-cyan-400 dark:hover:!text-cyan-400 hover:underline focus:outline-none focus:ring-2 focus:ring-cyan-400 transform hover:scale-105 rounded" href={resume} target="_blank" rel="noopener noreferrer" aria-label="Download resume">
                  <ResumeIcon />
                  <span className="block md:hidden">CV</span>
                  <span className="hidden md:block">Resume</span>
                </a>
              </li>
            )}
          </ul>
          
          {/* Mobile dark mode toggle */}
          <div className="md:hidden">
            <DarkModeToggle mobile={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;