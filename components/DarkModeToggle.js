export function DarkModeToggle() {
  
let darkMode = true; 

window.setDarkModeTheme = function(darkMode) {
  const htmlElement = document.documentElement;
  if (darkMode === true) {
    htmlElement.setAttribute("data-theme", "dark");
  } else {
    htmlElement.setAttribute("data-theme", "light");
  }
}

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const currentTheme = prefersDark ? 'dark' : 'light';

setDarkModeTheme(prefersDark);


window.toggleDarkMode = function() {
  const darkModeKnob = document.getElementById("dark-mode-knob");
  darkMode = !darkMode;
  if (darkMode === true) {
    setDarkModeTheme(true)
    darkModeKnob.style.marginLeft = "calc(100% - 18px)";
  } else {
        setDarkModeTheme(false)
    darkModeKnob.style.marginLeft = "0%";
  }
};

  return `<div class="dark-mode-container">
            <span class="text-preset-5">Dark Mode</span>
            <div onclick="toggleDarkMode()" class="dark-mode-toggler">
                <div style="${prefersDark ? "margin-left: calc(100% - 18px);" : ""}" id="dark-mode-knob" class="dark-mode-knob"></div>
            </div>
          </div>`;
}