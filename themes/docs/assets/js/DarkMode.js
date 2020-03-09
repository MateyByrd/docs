/* Little script to follow the color scheme preferences of the user (set in the os) */

// Preferences
const darkClass = 'dark-mode';
const defaultTheme = 'light';

// State variables
const container = document.body;
let currentTheme = defaultTheme;


function enableDarkMode() {
    container.classList.add(darkClass);
    currentTheme = 'dark';
}

function enableLightMode() {
    container.classList.remove(darkClass);
    currentTheme = 'light';
}

function toggle() {
    if (currentTheme === 'light') {
        enableDarkMode();
    } else if (currentTheme === 'dark') {
        enableLightMode()
    }
}

const colorSchemeDarkMatch = window.matchMedia('(prefers-color-scheme: dark)');
const colorSchemeLightMatch = window.matchMedia('(prefers-color-scheme: light)');

// Set value based on current system color scheme.
if (colorSchemeDarkMatch.matches) {
    enableDarkMode();
} else if (colorSchemeLightMatch.matches) {
    enableLightMode()
}

// Add listeners for color scheme changes.
colorSchemeDarkMatch.addListener( e => {
    if (e.matches) enableDarkMode();
});
colorSchemeLightMatch.addListener( e => {
    if (e.matches) enableLightMode();
});