import React, { useState, useEffect } from "react";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Apply dark mode styles when the component mounts
    applyDarkModeStyles();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const applyDarkModeStyles = () => {
    // Check if dark mode is enabled in local storage
    const savedDarkMode = localStorage.getItem("darkMode");

    // Set dark mode based on local storage or system preference
    setIsDarkMode(savedDarkMode === "true" || window.matchMedia("(prefers-color-scheme: dark)").matches);
  };

  const toggleDarkMode = () => {
    // Toggle dark mode state
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;

      // Save dark mode preference to local storage
      localStorage.setItem("darkMode", newMode);

      // Apply dark mode styles
      applyDarkModeStyles();

      return newMode;
    });
  };

  const handleScroll = () => {
    // Handle scroll events when dark mode is active
    // You can add your custom logic here
  };

  // Add scroll event listener when dark mode is active
  useEffect(() => {
    if (isDarkMode) {
      window.addEventListener("scroll", handleScroll);
    }

    // Clean up the event listener when dark mode changes
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isDarkMode]);

  return (
    <div className={`dark-mode-switcher ${isDarkMode ? "dark" : ""}`}>
      <div className="dark-mode-switch animated dark" onClick={toggleDarkMode}>
      <svg
              className="dark-mode-icon-dark"
              data-name="Layer 1"
              fill="#000000"
              height="20px"
              viewBox="0 0 64 64"
              width="20px"
              x="0px"
              xmlns="http://www.w3.org/2000/svg"
              y="0px"
            >
              <title>essential</title>
              <path d="M33.28,58.24A26.95,26.95,0,0,1,24,6l.39-.13a2,2,0,0,1,2.4,2.87,22.42,22.42,0,0,0-1.51,18.75h0A22.47,22.47,0,0,0,54.09,40.8l.76-.3a2,2,0,0,1,2.24.48,2,2,0,0,1,.35,2.24,27,27,0,0,1-24.16,15ZM21.11,11.85a22.94,22.94,0,1,0,30,33.91A26.46,26.46,0,0,1,21.53,28.87h0A26.4,26.4,0,0,1,21.11,11.85Z"></path>
            </svg>
            <svg
              className="dark-mode-icon-light"
              fill="#000000"
              height="20px"
              style={{enableBackground: "new 0 0 100 100;"}}
              version="1.1"
              viewBox="0 0 100 100"
              width="20px"
              x="0px"
              xmlSpace="preserve"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              y="0px"
            >
              <g>
                <path d="M50,75c-13.8,0-25-11.2-25-25s11.2-25,25-25s25,11.2,25,25S63.8,75,50,75z M50,33.3c-9.2,0-16.7,7.5-16.7,16.7   c0,9.2,7.5,16.7,16.7,16.7c9.2,0,16.7-7.5,16.7-16.7C66.7,40.8,59.2,33.3,50,33.3z"></path>
              </g>
              <g>
                <path d="M50,100c-2.3,0-4.2-1.9-4.2-4.2v-8.3c0-2.3,1.9-4.2,4.2-4.2c2.3,0,4.2,1.9,4.2,4.2v8.3C54.2,98.1,52.3,100,50,100z    M17.5,86.7c-1.1,0-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.3,0-5.9l5.8-5.8c1.6-1.6,4.3-1.6,5.9,0c1.6,1.6,1.6,4.3,0,5.9l-5.8,5.8   C19.6,86.3,18.6,86.7,17.5,86.7z M82.5,86.7c-1.1,0-2.1-0.4-2.9-1.2l-5.8-5.8c-1.6-1.6-1.6-4.3,0-5.9s4.3-1.6,5.9,0l5.8,5.8   c1.6,1.6,1.6,4.3,0,5.9C84.6,86.3,83.6,86.7,82.5,86.7z M95.8,54.2h-8.3c-2.3,0-4.2-1.9-4.2-4.2c0-2.3,1.9-4.2,4.2-4.2h8.3   c2.3,0,4.2,1.9,4.2,4.2C100,52.3,98.1,54.2,95.8,54.2z M12.5,54.2H4.2C1.9,54.2,0,52.3,0,50c0-2.3,1.9-4.2,4.2-4.2h8.3   c2.3,0,4.2,1.9,4.2,4.2C16.7,52.3,14.8,54.2,12.5,54.2z M76.7,27.5c-1.1,0-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.3,0-5.9l5.8-5.8   c1.6-1.6,4.3-1.6,5.9,0c1.6,1.6,1.6,4.3,0,5.9l-5.8,5.8C78.8,27.1,77.7,27.5,76.7,27.5z M23.3,27.5c-1.1,0-2.1-0.4-2.9-1.2   l-5.8-5.8c-1.6-1.6-1.6-4.3,0-5.9c1.6-1.6,4.3-1.6,5.9,0l5.8,5.8c1.6,1.6,1.6,4.3,0,5.9C25.5,27.1,24.4,27.5,23.3,27.5z M50,16.7   c-2.3,0-4.2-1.9-4.2-4.2V4.2C45.8,1.9,47.7,0,50,0c2.3,0,4.2,1.9,4.2,4.2v8.3C54.2,14.8,52.3,16.7,50,16.7z"></path>
              </g>
            </svg>
      </div>
    </div>
  );
};

export default DarkModeToggle;
