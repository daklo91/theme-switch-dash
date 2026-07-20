export function DarkModeToggle() {
  let darkMode = true; 

  // Legg til at CSS root bytter til lightmode/darkmode da det toggles.

  window.toggleDarkMode = function() {
  
    darkMode = !darkMode;
  
    const darkModeKnob = document.getElementById("dark-mode-knob");

    if (darkMode === true)  {
      darkModeKnob.style.marginLeft = "calc(100% - 18px)"; 
    } else {
      darkModeKnob.style.marginLeft = "0%"; 
    }
  };

  return `<div class="dark-mode-container">
            <span class="text-preset-5">Dark Mode</span>
            <div onclick="toggleDarkMode()" class="dark-mode-toggler">
                <div style="margin-left: calc(100% - 18px);" id="dark-mode-knob" class="dark-mode-knob"></div>
            </div>
          </div>`;
}