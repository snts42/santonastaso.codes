import React from 'react';

const classes = {
  wrapper: 'pt-8 md:pt-12 md:flex',
  title: 'pb-3 md:pb-0 md:w-full md:max-w-150 md:p-0 animate-fade-in-up',
  heading: 'font-display font-light tracking-widest text-sm text-gray-600 dark:text-gray-400 leading-normal uppercase',
  content: 'flex-none text-lg text-gray-600 dark:text-gray-400 font-display font-light md:flex-1 md:pl-20',
};

const Section = ({ title, children, titleDelay = '', contentDelay = '' }) => {
  const titleClasses = `${classes.title} ${titleDelay}`;
  const contentClasses = `${classes.content} ${contentDelay}`;
  
  return (
    <section className={classes.wrapper}>
      <div className={titleClasses}>
        <h2 className={classes.heading}>{title}</h2>
      </div>
      <div className={contentClasses}>{children}</div>
    </section>
  );
};

export default Section;