'use client';

import Component1 from './components/Component1';
import ThemeProvider, { ThemeContext } from './context/DataContext';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ThemeProvider>
        <Component1 />
      </ThemeProvider>
    </main>
  );
}
