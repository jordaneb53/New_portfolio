function typeWriter(id, text, speed = 100) {
    const element = document.getElementById(id);
    let index = 0;

    // Fonction récursive pour écrire lettre par lettre
    function writeCharacter() {
        if (index < text.length) {
            element.textContent += text[index];
            index++;
            setTimeout(writeCharacter, speed);
        }
    }

    // Commence l'animation de texte
    element.textContent = ""; // Réinitialise le texte
    writeCharacter();
}

// Détection du scroll pour animer les textes
const scrollAnimations = [
    { id: "output", text: "Je suis un développeur web passionné !", visible: false },
    { id: "output2", text: "Compétences et Expériences", visible: false },
    { id: "output3", text: "Citations de Développeurs", visible: false },
    { id: "output4", text: "Mes Projets", visible: false },
];

window.addEventListener("scroll", () => {
    scrollAnimations.forEach((animation) => {
        const element = document.getElementById(animation.id);

        if (element) {
            const rect = element.getBoundingClientRect();
            const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

            if (isVisible && !animation.visible) {
                // Si l'élément est visible et n'est pas encore animé
                typeWriter(animation.id, animation.text, 100);
                animation.visible = true; // Marque l'élément comme visible
            } else if (!isVisible && animation.visible) {
                // Si l'élément n'est plus visible, réinitialise
                element.textContent = "";
                animation.visible = false; // Marque l'élément comme invisible
            }
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    
    // Code pour le thème sombre/clair
    const toggleSwitch = document.getElementById('theme-toggle');
    const body = document.body;

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark');
        toggleSwitch.checked = true;
    }

    toggleSwitch.addEventListener('change', () => {
        if (toggleSwitch.checked) {
            body.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    });

    // Code pour le thème sombre/clair 
    const body2 = document.body;

    const savedTheme2 = localStorage.getItem('theme');
    if (savedTheme2 === 'dark') {
        body2.classList.add('dark');
        document.getElementsByClassName('noir')[0].checked = true;
    }

    document.getElementsByClassName('noir')[0].addEventListener('change', () => {
        if (document.getElementsByClassName('noir')[0].checked) {
            body2.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            body2.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    });

   // Fonction pour animer les barres de progression
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');

    progressBars.forEach(function (bar) {
        const value = bar.getAttribute('aria-valuenow');
        const rect = bar.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

        // Si la barre est visible, on la remplit
        if (isVisible && !bar.classList.contains('animated')) {
            bar.style.width = value + '%';
            bar.classList.add('animated'); // Empêche de ré-animer si déjà fait
        } else if (!isVisible && bar.classList.contains('animated')) {
            // Réinitialise si elle sort de l'écran
            bar.style.width = '0%';
            bar.classList.remove('animated');
        }
    });
}

// Ajoute un écouteur de scroll pour déclencher l'animation
window.addEventListener('scroll', animateProgressBars);
    // Code pour les citations
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
        if (!quoteElement) return;

        quoteElement.classList.remove('show');
        setTimeout(() => {
            quoteElement.innerText = quotes[currentQuoteIndex];
            quoteElement.classList.add('show');
        }, 500);

        currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    }
    showQuote();
    setInterval(showQuote, 5000);

    // Code pour le bouton de téléchargement
    document.getElementById('downloadCvBtn').addEventListener('click', () => {
        window.location.href = 'path/to/your-cv.pdf';
    });

    // Code pour le menu hamburger
    const hamburger = document.querySelector(".hamburger");
    const navList = document.querySelector(".nav-list");

    if (hamburger && navList) {
        hamburger.addEventListener("click", () => {
            navList.classList.toggle("active");
        });
    } else {
        console.error("Le bouton hamburger ou la nav-list n'a pas été trouvé.");
    }
});

document.getElementById('btnmenu').addEventListener('mouseover', () => {
    document.getElementById('btnmenu').style.transition = 'all 0.2s'
    document.getElementById('btnmenu').style.transform = 'rotate(1turn)'
    setTimeout(function(){ 
    document.getElementById('navigationtel').style.display = 'block' 
    },400)
})

document.getElementById('navigationtel').addEventListener('mouseover', () => {
    document.getElementById('navigationtel').style.display = 'block'
})

document.getElementById('navigationtel').addEventListener('mouseout', () => {
    document.getElementById('navigationtel').style.display = 'none' 
})

function remonteFleche(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

window.addEventListener('scroll', () => {
        if(window.scrollY > 100){
            document.getElementById('remonteFleche').style.display = 'block'
        }else{
            document.getElementById('remonteFleche').style.display = 'none'
        }
    })
    particlesJS("particles-js", {
        particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#35a0ff" },
        shape: {
            type: "circle",
            stroke: { width: 0, color: "#35a0ff" },
            polygon: { nb_sides: 8 },
            image: { src: "img/github.svg", width: 100, height: 100 }
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
        },
        size: {
            value: 3,
            random: true,
            anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#35a0ff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 1200 }
        }
        },
        interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true
        },
        modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 }
        }
        },
        retina_detect: true
    });
    var count_particles, stats, update;
    stats = new Stats();
    stats.setMode(0);
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
    count_particles = document.querySelector(".js-count-particles");
    update = function () {
        stats.begin();
        stats.end();
        if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
        count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
        }
        requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
// Fonction d'animation d'écriture
