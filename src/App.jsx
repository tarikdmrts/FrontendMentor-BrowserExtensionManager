import { useState } from "react";
import "./App.css";
import { Logo } from "./Logo.jsx";
import DarkButtonLogo from "./assets/images/icon-moon.svg";
import LightButtonLogo from "./assets/images/icon-sun.svg";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <div className={`main ${darkMode ? "dark" : ""}`}>
      <div className={`header ${darkMode ? "dark ": ""}`}>
        <Logo darkMode={darkMode} />
        <button
          onClick={toggleDarkMode}
          style={{
            background: darkMode ? "hsl(226, 11%, 37%)" : "hsl(0, 0%, 93%)",
            padding:"10px 12px 8px 12px",
            borderRadius:"10px",
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
    </div>
  );
}

export default App;
