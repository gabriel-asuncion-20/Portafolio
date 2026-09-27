document.addEventListener('DOMContentLoaded', () => {

    // 1. CAMBIO DE TEMA (CLARO / OSCURO) + PERSISTENCIA (localStorage)
    const themeToggleBtn = document.getElementById('themeToggle');
    const currentTheme = localStorage.getItem('theme') || 'light';

    document.documentElement.setAttribute('data-theme', currentTheme);
    themeToggleBtn.textContent = currentTheme === 'dark' ? '☀️' : '🌙';

    themeToggleBtn.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        let newTheme = theme === 'light' ? 'dark' : 'light';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        themeToggleBtn.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    });

    // 2. MENÚ RESPONSIVE
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Cerrar menú al hacer click en un enlace
    document.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // 3. FILTRO DE PROYECTOS
    const filterButtons = document.querySelectorAll('.btn--filter');
    const projectCards = document.querySelectorAll('#proyectos .card-project');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            projectCards.forEach(card => {
                const categories = (card.getAttribute('data-category') || '').split(' ');
                if (filterValue === 'all' || categories.includes(filterValue)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // 4. BOTÓN "VOLVER ARRIBA"
    const backToTopBtn = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // 5. VALIDACIÓN EN TIEMPO REAL DEL FORMULARIO DE CONTACTO
    const contactForm = document.getElementById('contactForm');
    const nombreInput = document.getElementById('nombre');
    const emailInput = document.getElementById('email');
    const mensajeInput = document.getElementById('mensaje');
    const formFeedback = document.getElementById('formFeedback');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let isValid = true;

        // Limpiar errores previo
        document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
        formFeedback.textContent = '';

        if (nombreInput.value.trim() === '') {
            document.getElementById('errorNombre').textContent = 'El nombre es obligatorio.';
            isValid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            document.getElementById('errorEmail').textContent = 'Ingresa un correo válido.';
            isValid = false;
        }

        if (mensajeInput.value.trim().length < 10) {
            document.getElementById('errorMensaje').textContent = 'El mensaje debe tener al menos 10 caracteres.';
            isValid = false;
        }

        if (isValid) {
            formFeedback.style.color = 'var(--color-success)';
            formFeedback.textContent = '¡Mensaje enviado con éxito!';
            contactForm.reset();
        }
    });
});