// src/ToggleButton.tsx
import React from 'react';

import SunIcon from '@/components/icons/Sun';

interface ToggleButtonProps {
  onClick: () => void;
  theme: string;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ onClick, theme }) => {
  return (
    <button
      onClick={onClick}
      className={` transition duration-500 ease-in-out bg-gray-300 dark:bg-gray-700 rounded-full p-2 focus:outline-none`}
    >
      {/* {theme === 'light' ? '🌞' : '🌙'} */}
      {theme === 'light' ? <SunIcon /> : <SunIcon />}

    </button>
  );
};

export default ToggleButton;
