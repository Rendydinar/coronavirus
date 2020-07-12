import React from 'react';
import Toggle from './Toggle';
import useDarkMode from 'use-dark-mode';

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <div className="dark-mode-toggle" style={{'textAlign': 'right', 'marginTop': '80px', 'marginRight': '1rem' }}>
      <span className="modeTriger" type="button" onClick={darkMode.disable} >
        ☀
      </span>
      <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
      <span className="modeTriger" type="button" onClick={darkMode.enable}>
        ☾
      </span>
      <br/>
      <br/>
    </div>
  );
};

export default DarkModeToggle;
