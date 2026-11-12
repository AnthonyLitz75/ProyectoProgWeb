document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modalDestacado');
    const openBtn = document.getElementById('openFeaturedModalBtn');
    const closeBtn = document.getElementById('closeFeaturedModalBtn');

    if (!modal) return;

    // Apertura del modal accesible
    if (openBtn) {
        openBtn.addEventListener('click', () => {
            if (typeof modal.showModal === 'function') {
                modal.showModal();
                document.body.style.overflow = 'hidden';
            } else {
                modal.setAttribute('open', '');
            }
        });
    }

    // Cierre mediante botón explícito (X)
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            if (typeof modal.close === 'function') {
                modal.close();
            } else {
                modal.removeAttribute('open');
                document.body.style.overflow = '';
                if (openBtn) openBtn.focus();
            }
        });
    }

    // Cierre al hacer clic en el backdrop oscurecido (fuera del diálogo)
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            if (typeof modal.close === 'function') {
                modal.close();
            } else {
                modal.removeAttribute('open');
                document.body.style.overflow = '';
                if (openBtn) openBtn.focus();
            }
        }
    });

    // Evento de cierre nativo (maneja tanto botón, backdrop como tecla Escape)
    modal.addEventListener('close', () => {
        document.body.style.overflow = '';
        if (openBtn) openBtn.focus();
    });
});
