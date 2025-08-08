import React from 'react';
import DarkModeToggle from '../DarkModeToggle';

const Layout = ({ children }) => {
  return (
    <div className="
      relative min-h-screen 
      bg-gradient-to-b
      from-[#e0f7fa] via-[#b2ebf2] via-60% via-[#a7e8f9] to-[#d0f0ff]
      dark:from-[#181f29] dark:via-[#1a2a3a] dark:via-40% dark:via-[#183c4a] dark:via-70% dark:to-[#0a2a3a]
      text-gray-900 
      dark:text-gray-200
      antialiased overflow-hidden
    ">
      <DarkModeToggle />
      {/* Cyber neon geometric blobs - structurally consistent in both modes */}
      <div className="absolute top-[-120px] left-[-80px] w-[340px] h-[340px] rounded-2xl rotate-12 blur-2xl -z-10
        bg-cyan-300 opacity-70 shadow-[0_0_80px_20px_rgba(0,255,255,0.35)]
        dark:bg-cyan-500 dark:opacity-60 dark:shadow-[0_0_80px_20px_rgba(0,255,255,0.25)]" />
      <div className="absolute bottom-[-80px] right-[-80px] w-[260px] h-[260px] rounded-3xl -rotate-12 blur-2xl -z-10
        bg-fuchsia-400 opacity-60 shadow-[0_0_80px_20px_rgba(255,0,255,0.25)]
        dark:bg-fuchsia-600 dark:opacity-50 dark:shadow-[0_0_80px_20px_rgba(255,0,255,0.18)]" />
      <div className="absolute top-[40%] left-[55%] w-[180px] h-[180px] rounded-xl rotate-6 blur-xl -z-10
        bg-blue-300 opacity-50 shadow-[0_0_60px_10px_rgba(0,128,255,0.18)]
        dark:bg-blue-600 dark:opacity-40 dark:shadow-[0_0_60px_10px_rgba(0,128,255,0.13)]" />
      {/* Subtle sunbeam overlay */}
      <div className="absolute inset-0 pointer-events-none z-0"
           style={{
             background: "linear-gradient(180deg, rgba(255,255,255,0.13) 0%, rgba(255,255,255,0) 80%)"
           }} />
      {/* Noise overlay for subtle texture */}
      <div className="bg-noise" />
      {/* Content container */}
      <main className="relative z-10 container mx-auto px-4 sm:px-6 md:px-12 pt-0 md:pt-12 pb-12 max-w-6xl
        bg-white/60 backdrop-blur-md md:border md:border-cyan-400 md:shadow-[0_0_32px_4px_rgba(0,255,255,0.18)] md:ring-1 md:ring-cyan-300/30 md:rounded-3xl
        dark:bg-[#232b36]/80 dark:backdrop-blur-lg dark:md:border-cyan-400 dark:md:shadow-[0_0_32px_4px_rgba(0,255,255,0.10)]
      ">
        {children}
      </main>
    </div>
  );
};

export default Layout;