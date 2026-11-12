const track = document.querySelector('.carousel-track');

if (track) {
    const container = track.closest('.carousel-container') || track;
    const cards = [...track.querySelectorAll('.dish-card')];
    const pages = [...track.querySelectorAll('.carousel-page')];
    const previous = document.querySelector('.carousel-prev');
    const next = document.querySelector('.carousel-next');
    const status = document.querySelector('.carousel-status');
    const mobile = window.matchMedia('(max-width: 768px)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const AUTOPLAY_DELAY = 4500;
    let scrollFrame;
    let autoplayTimer = null;

    function offset(element) {
        return element.getBoundingClientRect().left
            - track.getBoundingClientRect().left + track.scrollLeft;
    }

    function currentIndex() {
        let nearest = 0;
        cards.forEach((card, index) => {
            if (Math.abs(offset(card) - 16 - track.scrollLeft)
                < Math.abs(offset(cards[nearest]) - 16 - track.scrollLeft)) {
                nearest = index;
            }
        });
        return nearest;
    }

    function currentPageIndex() {
        let nearest = 0;
        pages.forEach((page, index) => {
            if (Math.abs(offset(page) - track.scrollLeft)
                < Math.abs(offset(pages[nearest]) - track.scrollLeft)) {
                nearest = index;
            }
        });
        return nearest;
    }

    function updateControls() {
        if (!mobile.matches) return;
        const index = currentIndex();
        previous.disabled = index === 0;
        next.disabled = index === cards.length - 1;
        const message = `Plato ${index + 1} de ${cards.length}`;
        if (status.textContent !== message) status.textContent = message;
    }

    function goTo(index) {
        const card = cards[Math.max(0, Math.min(index, cards.length - 1))];
        track.scrollTo({
            left: offset(card) - 16,
            behavior: reducedMotion.matches ? 'instant' : 'smooth'
        });
    }

    function goToPage(index) {
        const page = pages[Math.max(0, Math.min(index, pages.length - 1))];
        if (page) {
            track.scrollTo({
                left: offset(page),
                behavior: reducedMotion.matches ? 'instant' : 'smooth'
            });
        }
    }

    function stepNext() {
        if (mobile.matches) {
            if (cards.length === 0) return;
            const nextIndex = (currentIndex() + 1) % cards.length;
            goTo(nextIndex);
        } else if (pages.length > 0) {
            const nextPageIndex = (currentPageIndex() + 1) % pages.length;
            goToPage(nextPageIndex);
        }
    }

    function startAutoplay() {
        if (reducedMotion.matches) return;
        stopAutoplay();
        autoplayTimer = setInterval(stepNext, AUTOPLAY_DELAY);
    }

    function stopAutoplay() {
        if (autoplayTimer) {
            clearInterval(autoplayTimer);
            autoplayTimer = null;
        }
    }

    if (previous) {
        previous.addEventListener('click', () => {
            goTo(currentIndex() - 1);
            startAutoplay();
        });
    }
    if (next) {
        next.addEventListener('click', () => {
            goTo(currentIndex() + 1);
            startAutoplay();
        });
    }
    track.addEventListener('scroll', () => {
        cancelAnimationFrame(scrollFrame);
        scrollFrame = requestAnimationFrame(updateControls);
    }, { passive: true });
    track.addEventListener('keydown', event => {
        if (!mobile.matches || event.target !== track) return;
        if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
            event.preventDefault();
            goTo(currentIndex() + (event.key === 'ArrowRight' ? 1 : -1));
            startAutoplay();
        }
    });
    window.addEventListener('resize', updateControls);

    document.querySelectorAll('.carousel-arrow').forEach(arrow => {
        arrow.addEventListener('click', event => {
            event.preventDefault();
            const target = document.querySelector(arrow.getAttribute('href'));
            if (target) {
                track.scrollTo({
                    left: offset(target),
                    behavior: reducedMotion.matches ? 'instant' : 'smooth'
                });
                startAutoplay();
            }
        });
    });

    container.addEventListener('mouseenter', stopAutoplay);
    container.addEventListener('mouseleave', startAutoplay);
    container.addEventListener('focusin', stopAutoplay);
    container.addEventListener('focusout', startAutoplay);
    track.addEventListener('touchstart', stopAutoplay, { passive: true });
    track.addEventListener('touchend', startAutoplay, { passive: true });

    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            stopAutoplay();
        } else {
            startAutoplay();
        }
    });

    reducedMotion.addEventListener('change', () => {
        if (reducedMotion.matches) {
            stopAutoplay();
        } else {
            startAutoplay();
        }
    });

    updateControls();
    startAutoplay();
}
