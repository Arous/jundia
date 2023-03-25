import React, { useState } from 'react';
import useDarkSide from './useDarkSide';
import { DarkModeSwitch } from 'react-toggle-dark-mode';


interface ToggleDarkMode {
  (checked: boolean | ((prevState: boolean) => boolean)): void;
}


export default function DarkLighButton() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState( colorTheme === "light" ? true : false);

  const toggleDarkMode: ToggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <>
      <div className='flex flex-col items-center'>
        <DarkModeSwitch
          checked={darkSide}
          onChange={toggleDarkMode}
          size={20}
        />
        {/* <h3 className='text-gray-800 dark:text-gray-300'>
          {
            colorTheme === 'light' ? 'Dark mode' : 'Light mode'
          }
        </h3> */}
      </div>
    </>
  )
}