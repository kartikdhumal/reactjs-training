import { useContext } from "react";
import { ThemeContext, ThemeProvider } from "./context/ThemeContext";

function App() {
  const ThemeToggleButton = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
      <button onClick={toggleTheme} style={{
        padding: "10px",
        margin: "20px",
        backgroundColor: theme === "light" ? "#000" : "#fff",
        color: theme === "light" ? "#fff" : "#000",
        border: "none",
        cursor: "pointer"
      }}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    );
  };
  return (
    <ThemeProvider>
      <div>
        <h1>Theme Switcher</h1>
        <ThemeToggleButton />
      </div>
    </ThemeProvider>
  )
}

export default App
