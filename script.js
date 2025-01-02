// mode sombre/clair

const toggleSwitch = document.getElementById('theme-toggle');
const body = document.body;

// Vérifier et appliquer le thème sauvegardé dans le localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark');
    toggleSwitch.checked = true;
}

// Basculer entre mode sombre et clair
toggleSwitch.addEventListener('change', () => {
    if (toggleSwitch.checked) {
        body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
});