import { useState } from "react";
import "./App.css";
import { Logo } from "./Logo.jsx";
import { Extension } from "./Extension.jsx";
import DarkButtonLogo from "./assets/images/icon-moon.svg";
import LightButtonLogo from "./assets/images/icon-sun.svg";
import initialData from "./data.json";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => setDarkMode((prev) => !prev);
  const [data, setData] = useState(initialData);
  const [filter, setFilter] = useState("all");

  const filteredData = data.filter((ext) => {
    if (filter === "all") return true;
    if (filter === "active") return ext.isActive;
    if (filter === "inactive") return !ext.isActive;
  });

  const toggleExtensionActive = (name) => {
    setData(prev =>
      prev.map(ext =>
        ext.name === name ? { ...ext, isActive: !ext.isActive } : ext
      )
    );
  };
  
  const removeExtension = (name) => {
    setData(prev => prev.filter(ext => ext.name !== name));
  };

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
            <button
              className={`extension-list-btn ${
                filter === "all" ? "active" : ""
              }`}
              onClick={() => setFilter("all")}
            >
              All
            </button>
            <button
              className={`extension-list-btn ${
                filter === "active" ? "active" : ""
              }`}
              onClick={() => setFilter("active")}
            >
              Active
            </button>
            <button
              className={`extension-list-btn ${
                filter === "inactive" ? "active" : ""
              }`}
              onClick={() => setFilter("inactive")}
            >
              Inactive
            </button>
          </div>
        </div>
        <div className={`extensions ${darkMode ? "dark" : ""}`}>
          {filteredData.map((ext) => (
            <Extension
              key={`${ext.name}-key`}
              logo={ext.logo}
              name={ext.name}
              description={ext.description}
              darkMode={darkMode}
              isActive={ext.isActive}
              onToggle={() => toggleExtensionActive(ext.name)}
              onRemove={() => removeExtension(ext.name)} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
