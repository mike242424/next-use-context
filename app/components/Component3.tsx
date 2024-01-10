import React, { useContext } from 'react';
import { ThemeContext } from '../context/DataContext';

const Component4 = () => {
  const { theme, handleTheme } = useContext(ThemeContext);

  const handleClick = () => {
    document.body.style.backgroundColor = theme === 'light' ? 'black' : 'white';
    handleTheme();
  };

  return (
    <div className="text-left">
      <button
        onClick={handleClick}
        className={`p-4 rounded
          ${theme === 'light' ? 'bg-black text-white' : 'bg-white text-black'}
        `}
      >
        {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
};

export default Component4;
