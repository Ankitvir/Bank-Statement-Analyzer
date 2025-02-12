import React from "react";
function Header({ darkMode, setDarkMode }) {
    return (
      <header className="header">
        <h1>Bank Statement Analyzer</h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>
    );
  }
  
  export default Header;
  