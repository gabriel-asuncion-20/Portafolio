/* ==========================================
   MAIN.JS — Lógica e interactividad
   Portafolio Gabriel Asunción
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {

    // ─────────────────────────────────────────────────
    // 1. CAMBIO DE TEMA (OSCURO / CLARO) + PERSISTENCIA
    // ─────────────────────────────────────────────────
    const themeToggleBtn = document.getElementById('themeToggle');
    const root = document.documentElement;

    // Tema guardado o 'dark' por defecto
    const savedTheme = localStorage.getItem('theme') || 'dark';
    root.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const current = root.getAttribute('data-theme');
            const next    = current === 'dark' ? 'light' : 'dark';
            root.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
            updateThemeIcon(next);
        });
    }

    function updateThemeIcon(theme) {
        if (!themeToggleBtn) return;
        const isDark = theme === 'dark';
        themeToggleBtn.textContent = isDark ? '☀️' : '🌙';
        themeToggleBtn.setAttribute(
            'aria-label',
            isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'
        );
    }

    // ─────────────────────────────────────────────────
    // 2. MENÚ RESPONSIVE (MÓVIL)
    // ─────────────────────────────────────────────────
    const menuToggle = document.getElementById('menuToggle');
    const navMenu    = document.getElementById('navMenu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = navMenu.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', String(isExpanded));
        });

        // Cerrar al hacer clic en cualquier enlace
        document.querySelectorAll('.nav__link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        });

        // Cerrar al hacer clic fuera del menú
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                navMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // ─────────────────────────────────────────────────
    // 3. FILTRO DINÁMICO DE PROYECTOS POR CATEGORÍA
    // ─────────────────────────────────────────────────
    const filterButtons = document.querySelectorAll('.btn--filter');
    const projectCards  = document.querySelectorAll('#proyectos .card-project');

    if (filterButtons.length > 0 && projectCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Actualizar botón activo
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const filterValue = button.getAttribute('data-filter');

                projectCards.forEach(card => {
                    const categories = (card.getAttribute('data-category') || '').split(' ');
                    const show = filterValue === 'all' || categories.includes(filterValue);

                    // Animación suave
                    if (show) {
                        card.style.display = 'flex';
                        card.style.opacity  = '0';
                        card.style.transform = 'translateY(16px)';
                        // Forzar reflow para activar la transición
                        void card.offsetWidth;
                        card.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
                        card.style.opacity  = '1';
                        card.style.transform = 'translateY(0)';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // ─────────────────────────────────────────────────
    // 4. BOTÓN FLOTANTE "VOLVER ARRIBA"
    // ─────────────────────────────────────────────────
    const backToTopBtn = document.getElementById('backToTop');

    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            backToTopBtn.style.display = window.scrollY > 400 ? 'flex' : 'none';
        }, { passive: true });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ─────────────────────────────────────────────────
    // 5. VALIDACIÓN EN TIEMPO REAL DEL FORMULARIO
    // ─────────────────────────────────────────────────
    const contactForm  = document.getElementById('contactForm');

    if (contactForm) {
        const nombreInput  = document.getElementById('nombre');
        const emailInput   = document.getElementById('email');
        const mensajeInput = document.getElementById('mensaje');
        const formFeedback = document.getElementById('formFeedback');

        // Limpiar error al escribir
        [nombreInput, emailInput, mensajeInput].forEach(input => {
            if (!input) return;
            input.addEventListener('input', () => {
                const errorId = 'error' + input.id.charAt(0).toUpperCase() + input.id.slice(1);
                const errorEl = document.getElementById(errorId);
                if (errorEl) errorEl.textContent = '';
                input.style.borderColor = '';
                if (formFeedback) formFeedback.textContent = '';
            });
        });

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;

            // Reset
            document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
            [nombreInput, emailInput, mensajeInput].forEach(input => {
                if (input) input.style.borderColor = '';
            });
            if (formFeedback) formFeedback.textContent = '';

            // Validar nombre (mínimo 3 caracteres)
            const nombre = nombreInput?.value.trim() ?? '';
            if (nombre.length === 0) {
                showError('errorNombre', nombreInput, 'El nombre es obligatorio.');
                isValid = false;
            } else if (nombre.length < 3) {
                showError('errorNombre', nombreInput, 'El nombre debe tener al menos 3 caracteres.');
                isValid = false;
            }

            // Validar email con regex
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const email = emailInput?.value.trim() ?? '';
            if (!emailRegex.test(email)) {
                showError('errorEmail', emailInput, 'Ingresa un correo electrónico válido.');
                isValid = false;
            }

            // Validar mensaje (mínimo 10 caracteres)
            const mensaje = mensajeInput?.value.trim() ?? '';
            if (mensaje.length < 10) {
                showError('errorMensaje', mensajeInput, 'El mensaje debe tener al menos 10 caracteres.');
                isValid = false;
            }

            // Envío exitoso
            if (isValid) {
                formFeedback.style.color = 'var(--color-success)';
                formFeedback.textContent = '¡Mensaje enviado con éxito! Gracias por contactarme. 🎉';
                contactForm.reset();
            }
        });
    }

    // ─────────────────────────────────────────────────
    // 6. HIGHLIGHT DE ENLACE DE NAV EN SCROLL (ACTIVE STATE)
    // ─────────────────────────────────────────────────
    const sections  = document.querySelectorAll('section[id]');
    const navLinks  = document.querySelectorAll('.nav__link');

    if (sections.length > 0 && navLinks.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    navLinks.forEach(link => {
                        const href = link.getAttribute('href');
                        link.classList.toggle('active', href === `#${id}`);
                    });
                }
            });
        }, {
            threshold: 0.35,
            rootMargin: '-80px 0px 0px 0px'
        });

        sections.forEach(section => observer.observe(section));
    }

    // ─── Helper: mostrar error de formulario ───
    function showError(errorId, inputEl, message) {
        const errEl = document.getElementById(errorId);
        if (errEl) errEl.textContent = message;
        if (inputEl) inputEl.style.borderColor = 'var(--color-error)';
    }

});
