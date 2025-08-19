import React from 'react';
import DarkModeToggle from '../DarkModeToggle';

const Layout = ({ children }) => {
  return (
    <div className="
      fixed inset-0
      bg-gradient-to-b
      from-[#f0fffe] via-[#e0f7ff] via-60% via-[#cef3ff] to-[#bae6fd]
      dark:from-[#0a0f1a] dark:via-[#0f1a2a] dark:via-30% dark:via-[#1a2a3a] dark:via-60% dark:to-[#0a1a2a]
      text-gray-900 
      dark:text-gray-200
      antialiased
      overflow-auto
    ">
      <DarkModeToggle />
      <div className="flex items-start justify-center min-h-screen pt-4 md:pt-12 pb-4 md:pb-12 px-4 md:px-12">
        <main className="relative z-10 w-full max-w-6xl px-3 sm:px-4 md:px-12 py-4 md:py-12
          md:bg-white/80 md:backdrop-blur-md md:rounded-3xl
          dark:md:bg-[#1e2936]/85 dark:md:backdrop-blur-lg
          focus:outline-none
        ">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;