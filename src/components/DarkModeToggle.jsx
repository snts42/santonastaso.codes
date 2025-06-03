import React, { useEffect, useState } from 'react';

const getSystemTheme = () =>
  typeof window !== "undefined" && window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

const getInitialTheme = () => {
  if (typeof window === "undefined") return false;
  const stored = window.localStorage.getItem("theme");
  if (stored === "dark") return true;
  if (stored === "light") return false;
  return getSystemTheme();
};

const DarkModeToggle = () => {
  const [dark, setDark] = useState(getInitialTheme);

  // Listen to system preference changes if user never explicitly set
  useEffect(() => {
    const stored = typeof window !== "undefined" ? window.localStorage.getItem("theme") : null;
    if (!stored) {
      const media = window.matchMedia("(prefers-color-scheme: dark)");
      const systemListener = (e) => setDark(e.matches);
      media.addEventListener("change", systemListener);
      return () => media.removeEventListener("change", systemListener);
    }
  }, []);

  // Apply dark mode class and store preference
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    window.localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <button
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="
        fixed top-4 right-4 z-50
        bg-white dark:bg-gray-800
        border border-gray-300 dark:border-gray-700
        rounded-full shadow p-2
        transition-colors transition-transform duration-200
        hover:scale-110 active:scale-95
        focus:outline-none focus:ring-2 focus:ring-primary
      "
      onClick={() => setDark(!dark)}
      type="button"
    >
      {/* Show the icon for the *target* mode */}
      {dark ? (
        // Show sun (you're in dark, click for light)
        <span role="img" aria-label="Switch to light mode" className="text-2xl">🌞</span>
      ) : (
        // Show moon (you're in light, click for dark)
        <span role="img" aria-label="Switch to dark mode" className="text-2xl">🌙</span>
      )}
    </button>
  );
};

export default DarkModeToggle;