import React from 'react';
import DarkModeToggle from '../DarkModeToggle';

const Layout = ({ children }) => {
  return (
    <div className="
      relative min-h-screen 
      bg-gradient-to-b 
      from-[#1d74a8] 
      via-[#24aeb1] 
      to-[#b4f1f7] 
      text-gray-900 
      dark:from-[#152d3b] 
      dark:via-[#192a3a] 
      dark:to-[#20394c] 
      dark:text-gray-200
      antialiased overflow-hidden
    ">
      <DarkModeToggle />
      {/* Underwater blobs */}
      <div className="absolute top-[-140px] left-[-90px] w-[420px] h-[420px] bg-[#1d87c4] opacity-30 blur-3xl rounded-full -z-10 dark:opacity-20" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[320px] h-[320px] bg-[#33b2c8] opacity-30 blur-2xl rounded-full -z-10 dark:opacity-20" />
      <div className="absolute top-[30%] left-[60%] w-[280px] h-[280px] bg-[#b0ebf6] opacity-20 blur-2xl rounded-full -z-10 dark:opacity-10" />
      {/* Subtle sunbeam overlay */}
      <div className="absolute inset-0 pointer-events-none z-0"
           style={{
             background: "linear-gradient(180deg, rgba(255,255,255,0.13) 0%, rgba(255,255,255,0) 80%)"
           }} />
      {/* Content container */}
      <main className="relative z-10 container mx-auto px-4 sm:px-6 md:px-12 pt-0 md:pt-12 pb-12 max-w-6xl bg-white md:shadow-xl md:rounded-3xl
        dark:bg-[#1d2736] dark:shadow-2xl
      ">
        {children}
      </main>
    </div>
  );
};

export default Layout;