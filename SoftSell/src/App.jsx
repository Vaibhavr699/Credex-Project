// App.js
import { useState, useEffect } from 'react';
import Home from './pages/Home';
import sunIcon from './assets/sunny.png';
import moonIcon from './assets/moon.png';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme === 'dark';
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
    window.scrollTo(0, 0);
  }, [isDarkMode]);

  return (
    <div className={`${isDarkMode ? 'dark' : ''} transition-colors duration-300 overflow-y-hidden`}>
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="fixed top-4 right-4 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg transition duration-300"
        aria-label="Toggle Dark Mode"
      >
        <img
          src={isDarkMode ? moonIcon : sunIcon}
          alt={isDarkMode ? 'Moon Icon' : 'Sun Icon'}
          className="w-6 h-6"
        />
      </button>
      <Home isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
