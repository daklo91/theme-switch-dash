import { Header } from "./components/header.js";
import data from "./data.json" with { type: "json" };

function App() {
  return `
    ${Header(data.totalFollowers)}
    <main class="content">
    </main>
  `;
}

// Render the application root
document.getElementById("root").innerHTML = App();
