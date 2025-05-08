// App.js
import { useState, useEffect } from 'react';
import Home from './pages/Home';
import sunIcon from './assets/sunny.png';   // 🌞 Your custom sun image
import moonIcon from './assets/moon.png'; // 🌙 Your custom moon image

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Load from localStorage on first render
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

    // Scroll to the top when the page is loaded (to prevent scroll issue)
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
      <Home isDarkMode={isDarkMode} /> {/* Pass isDarkMode to Home */}
    </div>
  );
}

export default App;
