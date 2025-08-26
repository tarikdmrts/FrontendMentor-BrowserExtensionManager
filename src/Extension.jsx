import "./Extension.css";

export function Extension({ logo, name, description, darkMode, isActive }) {
  return (
    <div className={`extension-container ${darkMode ? "dark" : ""}`}>
      <div className="extension-details">
        <img src={logo} alt={`${name} logo`} className="extension-logo" />
        <div className="extension-spacer">
          <h2 className="extension-name">{name}</h2>
          <p className="extension-description">{description}</p>
        </div>
      </div>
      <div className="extension-interactions">
        <button className={`extension-toggle-btn ${darkMode ? "dark" : ""}`}>Remove</button>
        <label className="switch">
          <input type="checkbox" tabIndex={-1}></input>
          <span className={`slider ${darkMode ? "dark" : ""} ${isActive ? "active" : ""}`}></span>
        </label>
      </div>
    </div>
  );
}
