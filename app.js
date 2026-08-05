import { Header } from "./components/Header.js";
import { DarkModeToggle } from "./components/DarkModeToggle.js";
import { SocialCard } from "./components/SocialCard.js";
import { OverviewCard } from "./components/OverviewCard.js";

function App(data) {
  const socialCards = data.mainStats.map((item) => SocialCard(item)).join("");
  const overviewCards = data.overviewToday.map((item) => OverviewCard(item)).join("");

  return `
    ${Header(data.totalFollowers, DarkModeToggle())}
    <main class="content">
      <section class="social-cards-grid">
        ${socialCards}
      </section>

      <section class="overview-section">
        <h2 class="section-title">Overview - Today</h2>
        <div class="overview-grid">
          ${overviewCards}
        </div>
      </section>
    </main>
  `;
}

async function init() {
  try {
    const res = await fetch('./data.json');
    const data = await res.json();
    document.getElementById('root').innerHTML = App(data);
  } catch (e) {
    console.error('Failed to load data.json', e);
    document.getElementById('root').innerHTML = '<p>Failed to load data.</p>';
  }
}

init();