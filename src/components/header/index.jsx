import { Link } from 'gatsby';
import React from 'react';
import profileImg from '../../images/profile.jpg';

const classes = {
  wrapper: 'block mb-6 md:flex pt-0',
  imageWrapper: 'relative w-full max-w-150 md:h-auto h-16 overflow-hidden md:mt-0',
  image: 'absolute md:static bottom-0 w-full rounded-full transition-shadow duration-300',
  contentWrapper: 'flex-none pt-6 md:pt-1 md:flex-1 md:pl-20 animate-fade-in-up',
  name: 'text-4xl text-gray-900 dark:text-gray-100 font-bold leading-tight hover:text-black dark:hover:text-white',
  description: 'text-gray-600 dark:text-gray-400',
  list: 'mt-6 uppercase tracking-wider',
  item: 'inline list-none pr-4',
  link: 'inline-block py-2 font-semibold text-xs text-gray-600 dark:text-gray-400 transition-colors duration-150 hover:text-primary dark:hover:text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary',
};

const Header = ({ metadata = {} }) => {
  const github = metadata.github;
  const linkedin = metadata.linkedin;
  const resume = metadata.resume;

  return (
    <div className={classes.wrapper}>
      <div className={classes.imageWrapper}>
        <img className={classes.image} src={profileImg} alt={metadata.name} />
      </div>
      <div className={classes.contentWrapper}>
        <h1 className={classes.name}>
          <Link to="/">{metadata.name}</Link>
        </h1>
        <p className={classes.description}>{metadata.description}</p>
        <ul className={classes.list}>
          {github && (
            <li className={classes.item}>
              <a className={classes.link} href={github}>
                GitHub
              </a>
            </li>
          )}
          {linkedin && (
            <li className={classes.item}>
              <a className={classes.link} href={linkedin}>
                LinkedIn
              </a>
            </li>
          )}
          {resume && (
            <li className={classes.item}>
              <a className={classes.link} href={resume} target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;