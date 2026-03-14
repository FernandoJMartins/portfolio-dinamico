// Rastrear movimento do mouse para o radial-gradient
document.addEventListener('mousemove', (e) => {
    const body = document.body;
    const x = e.clientX;
    const y = e.clientY + window.scrollY;
    
    body.style.setProperty(
        '--mouse-x',
        `${x}px`
    );
    body.style.setProperty(
        '--mouse-y',
        `${y}px`
    );
});

// Fazer project-cards clicáveis
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        const link = card.querySelector('.project-link');
        if (link) {
            window.open(link.href, '_blank');
        }
    });
});

// Destacar nav link quando seção está visível
function highlightNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav a');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', highlightNavLink);
highlightNavLink(); // Executar ao carregar
