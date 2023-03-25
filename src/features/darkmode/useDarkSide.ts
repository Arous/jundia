import { useEffect, useState } from "react";


type Theme = 'dark' | 'light';

export default function useDarkSide(): [Theme, (newTheme: Theme) => void] {
  const [theme, setTheme] = useState(localStorage.theme as Theme);
  const colorTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect( ()=> {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);


    localStorage.setItem('theme', theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
}