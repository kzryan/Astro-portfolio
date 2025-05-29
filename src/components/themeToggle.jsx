import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Check localStorage for a saved theme
    const savedTheme = localStorage.getItem('theme');

    // If none, check the system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Choose saved theme or fallback to system preference
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

    setTheme(initialTheme);

    // Apply it to the HTML tag
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <button onClick={toggleTheme} style={{padding: '10px' , borderRadius: '5px'}}>
      {theme === 'light' ? 'dark' : 'light'} mode
    </button>
  );
}