document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__menu');
    const nav = document.querySelector('.header__nav');
    const actions = document.querySelector('.header__actions');

    if (menu && nav && actions) {
        menu.addEventListener('click', () => {
            const isOpen = menu.getAttribute('aria-expanded') === 'true';
            menu.setAttribute('aria-expanded', String(!isOpen));
            nav.classList.toggle('header__nav--open', !isOpen);
            actions.classList.toggle('header__actions--open', !isOpen);
        });
    }

    document.querySelectorAll('.product-card__favorite').forEach((button) => {
        button.addEventListener('click', () => {
            button.classList.toggle('product-card__favorite--active');
            button.textContent = button.classList.contains('product-card__favorite--active') ? '♥' : '♡';
        });
    });

    const form = document.querySelector('[data-newsletter-form]');
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const notice = document.querySelector('[data-newsletter-notice]');
            if (notice) notice.textContent = '¡Gracias por unirte a ASFALTO!';
            form.reset();
        });
    }

    const count = document.querySelector('[data-cart-count]');
    const add = document.querySelector('[data-add-cart]');
    if (count && add) {
        add.addEventListener('click', () => {
            count.textContent = String(Number(count.textContent) + 1);
            add.textContent = 'AÑADIDO A LA BOLSA ✓';
        });
    }
});