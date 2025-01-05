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

// PROGRESS BAR

document.addEventListener('DOMContentLoaded', function() {
    const progressBars = document.querySelectorAll('.progress-bar');

    progressBars.forEach(function(bar) {
        const value = bar.getAttribute('aria-valuenow');
        setTimeout(function() {
            bar.style.width = value + '%';
        }, 500);
    });
});
// CITATION ALEATOIRE

const quotes = [
    "Le code est comme de l'humour. Quand il faut l'expliquer, c'est mauvais. – Cory House",
    "La meilleure façon de prédire l'avenir est de l'inventer. – Alan Kay",
    "Les programmes doivent être écrits pour que les gens puissent les lire et seulement accessoirement pour que les machines puissent les exécuter. – Harold Abelson",
    "La simplicité est l'âme de l'efficacité. – Austin Freeman",
    "En programmation, la clarté est plus importante que la brièveté. – Inconnu",
    "Tout imbécile peut écrire du code que l'ordinateur peut comprendre. Les bons programmeurs écrivent du code que les humains peuvent comprendre. – Martin Fowler",
    "La programmation est une danse entre le code et la créativité. – Inconnu",
    "Il n'y a pas de code parfait. Il n'y a que des itérations. – Inconnu",
    "La meilleure façon de résoudre un problème est d'écrire un programme qui le résout. – Inconnu",
    "La passion et la curiosité sont les véritables moteurs d'un bon développeur. – Inconnu"
];

let currentQuoteIndex = 0;

function showQuote() {
    const quoteElement = document.getElementById('quote');
    if (!quoteElement) return; // Vérifie que l'élément existe

    quoteElement.classList.remove('show'); // Masque la citation actuelle

    setTimeout(() => {
        quoteElement.innerText = quotes[currentQuoteIndex];
        quoteElement.classList.add('show'); // Affiche la nouvelle citation
    }, 500); // Délai pour masquer la citation précédente

    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length; // Passe à la citation suivante
}

// Afficher la première citation au chargement de la page
showQuote();

// Ajouter un intervalle pour afficher une nouvelle citation toutes les 5 secondes
setInterval(showQuote, 5000);

document.getElementById('downloadCvBtn').addEventListener('click', () => {
    window.location.href = 'path/to/your-cv.pdf';
});