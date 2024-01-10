import React, { useContext } from 'react';
import Component4 from './Component4';
import { ThemeContext } from '../context/DataContext';

const Component3 = () => {
  const { theme, handleTheme } = useContext(ThemeContext);
  return (
    <div>
      {theme === 'light' ? (
        <button
          onClick={handleTheme}
          className="p-4 bg-black text-white rounded"
        >
          Dark
        </button>
      ) : (
        <button
          onClick={handleTheme}
          className="p-4 bg-blue-500 text-black rounded"
        >
          Light
        </button>
      )}
    </div>
  );
};

export default Component3;
