import "./Extension.css";

export function Extension({ logo, name, description, darkMode, isActive, onToggle, onRemove }) {
  return (
    <div className={`extension-container ${darkMode ? "dark" : ""}`}>
      <div className="extension-details">
        <img src={logo} alt={`${name} logo`} className="extension-logo" />
        <div className="extension-spacer">
          <h2 className="extension-name">{name}</h2>
          <p className={`extension-description ${darkMode ? "dark" : ""}`}>
            {description}
          </p>
        </div>
      </div>
      <div className="extension-interactions">
        <button className={`extension-toggle-btn ${darkMode ? "dark" : ""}`} onClick={onRemove}>
          Remove
        </button>
        <label className="switch">
          <input
            type="checkbox"
            checked={isActive}
            onChange={onToggle}
          ></input>
          <span className={`slider ${darkMode ? "dark" : ""}`}></span>
        </label>
      </div>
    </div>
  );
}