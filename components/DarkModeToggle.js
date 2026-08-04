const STORAGE_KEY = "darkModeStorage";
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");

let isDarkMode = false;
let hasUserPreference = false;
let initialized = false;

function getInitialTheme() {
  const storedTheme = localStorage.getItem(STORAGE_KEY);

  if (storedTheme === "dark") {
    hasUserPreference = true;
    return true;
  }

  if (storedTheme === "light") {
    hasUserPreference = true;
    return false;
  }

  hasUserPreference = false;
  return systemTheme.matches;
}

function updateKnob() {
  const knob = document.getElementById("dark-mode-knob");
  const toggle = document.getElementById("dark-mode-toggle");

  if (!knob || !toggle) {
    return;
  }

  knob.style.marginLeft = isDarkMode ? "calc(100% - 18px)" : "0";

  toggle.setAttribute("aria-checked", String(isDarkMode));
}

function applyTheme(darkMode) {
  isDarkMode = darkMode;

  document.documentElement.setAttribute(
    "data-theme",
    isDarkMode ? "dark" : "light",
  );

  updateKnob();
}

function toggleTheme() {
  const nextTheme = !isDarkMode;

  hasUserPreference = true;

  localStorage.setItem(STORAGE_KEY, nextTheme ? "dark" : "light");

  applyTheme(nextTheme);
}

function handleSystemThemeChange(event) {
  // Ikke overstyr brukerens eksplisitte valg.
  if (hasUserPreference) {
    return;
  }

  applyTheme(event.matches);
}

function initializeDarkModeToggle() {
  if (initialized) {
    updateKnob();
    return;
  }

  initialized = true;

  const toggle = document.getElementById("dark-mode-toggle");

  if (!toggle) {
    return;
  }

  toggle.addEventListener("click", toggleTheme);
  systemTheme.addEventListener("change", handleSystemThemeChange);

  updateKnob();
}

export function DarkModeToggle() {
  isDarkMode = getInitialTheme();

  // Temaet kan settes før komponentens HTML er montert.
  applyTheme(isDarkMode);

  // Kjøres etter at App() er satt inn med innerHTML.
  queueMicrotask(initializeDarkModeToggle);

  return `
    <div class="dark-mode-container">
      <span class="text-preset-5">Dark Mode</span>

      <button
        type="button"
        id="dark-mode-toggle"
        class="dark-mode-toggler"
        role="switch"
        aria-label="Toggle dark mode"
        aria-checked="${isDarkMode}"
      >
        <span
          id="dark-mode-knob"
          class="dark-mode-knob"
          style="margin-left: ${isDarkMode ? "calc(100% - 18px)" : "0"}"
        ></span>
      </button>
    </div>
  `;
}
