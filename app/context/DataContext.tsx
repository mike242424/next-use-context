import { ReactNode, createContext, useContext, useState } from 'react';
import { Theme } from '../interfaces/Theme';

export const ThemeContext = createContext({
  theme: 'light',
  handleTheme: () => {},
});

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('light');

  const handleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

// custom hook to get theme
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context.theme;
};

// custom hook to change theme
export const useSetTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useSetTheme must be used within a ThemeProvider');
  }
  return context.handleTheme;
};
