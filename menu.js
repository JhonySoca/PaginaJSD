// Menú responsivo interactivo

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.createElement('button');
    menuToggle.classList.add('menu-toggle');
    menuToggle.innerHTML = '☰';
    menuToggle.setAttribute('aria-label', 'Alternar menú');

    const nav = document.querySelector('.header__nav');
    nav.insertBefore(menuToggle, nav.firstChild);

    const menu = document.querySelector('.nav__menu');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('nav__menu--active');
        menuToggle.classList.toggle('menu-toggle--active');
        
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
        menuToggle.setAttribute('aria-expanded', !isExpanded);
    });

    // Ajustar estilos para el menú responsivo
    const style = document.createElement('style');
    style.textContent = `
        @media screen and (max-width: 768px) {
            .menu-toggle {
                display: block;
                background: none;
                border: none;
                font-size: 2rem;
                cursor: pointer;
                position: fixed;
                top: 1rem;
                left: 1rem;
                z-index: 1001;
                color: #166F5E;
                transition: all 0.3s ease;
            }
            .logo{
                display: none;
            }
            .menu-toggle:hover {
                transform: scale(1.1);
            }
            .nav__menu {
                display: none;
                flex-direction: column;
                position: fixed;
                top: 0;
                left: 0;
                width: 300px;
                height: 100vh;
                background-color: #D9EBD1;
                padding: 5rem 2rem 2rem;
                box-shadow: -5px 0 15px rgba(0,0,0,0.1);
                transform: translateX(-100%) scale(0.8);
                transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                z-index: 1000;
                overflow-y: auto;
                opacity: 0;
            }
            .nav__menu--active {
                display: flex;
                transform: translateX(0) scale(1);
                opacity: 1;
            }
            .menu-toggle--active {
                color: #EA7F4A;
            }
            .nav__menu li {
                margin-bottom: 1.5rem;
                opacity: 0;
                transform: translateY(20px) scale(0.9);
                transition: all 0.3s ease;
            }
            .nav__menu--active li {
                opacity: 1;
                transform: translateY(0) scale(1);
                transition-delay: 0.2s;
            }
            .nav__menu a {
                font-size: 1.3rem;
                color: #166F5E;
                text-decoration: none;
                transition: all 0.3s ease;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 0.5rem;
            }
            .nav__menu a:hover {
                color: #EA7F4A;
                transform: scale(1.05);
            }
        }
        @media screen and (min-width: 769px) {
            .menu-toggle {
                display: none;
            }
        }
    `;
    document.head.appendChild(style);
});
