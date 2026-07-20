import { Header } from "./components/Header.js";
import { DarkModeToggle } from "./components/DarkModeToggle.js";
import data from "./data.json" with { type: "json" };

function App() {
  return `
    ${Header(data.totalFollowers, DarkModeToggle())}
    <main class="content">
    </main>
  `;
}

// Render the application root
document.getElementById("root").innerHTML = App();