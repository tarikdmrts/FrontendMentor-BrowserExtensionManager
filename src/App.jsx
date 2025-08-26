import { useState } from "react";
import "./App.css";
import { Logo } from "./Logo.jsx";
import { Extension } from "./Extension.jsx";
import DarkButtonLogo from "./assets/images/icon-moon.svg";
import LightButtonLogo from "./assets/images/icon-sun.svg";
import Data from "./data.json";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <div className={`main ${darkMode ? "dark" : ""}`}>
      <div className={`header ${darkMode ? "dark " : ""}`}>
        <Logo darkMode={darkMode} />
        <button
          onClick={toggleDarkMode}
          style={{
            background: darkMode ? "hsl(225, 23%, 24%)" : "hsl(0, 0%, 93%)",
            padding: "10px 12px 8px 12px",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer",
          }}
        >
          <img
            src={darkMode ? LightButtonLogo : DarkButtonLogo}
            alt="Button Logo"
            width="20"
          />
        </button>
      </div>
      <div className={`extension-list-container ${darkMode ? "dark" : ""}`}>
        <div className="extension-list-header">
          <h1 className={`extension-list-title ${darkMode ? "dark" : ""}`}>
            Extensions List
          </h1>
          <div className={`extension-list-buttons ${darkMode ? "dark" : ""}`}>
            <button className="extension-list-btn">All</button>
            <button className="extension-list-btn">Active</button>
            <button className="extension-list-btn">Inactive</button>
          </div>
        </div>
        <div className={`extensions ${darkMode ? "dark" : ""}`}>
          {Data.map((ext) => (
            <Extension
              key={`${ext.name}-key`}
              logo={ext.logo}
              name={ext.name}
              description={ext.description}
              darkMode={darkMode}
              isActive={ext.isActive}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
