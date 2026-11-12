document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const categories = document.querySelectorAll('.menu-category');
    const searchInput = document.getElementById('menuSearch');
    const clearBtn = document.getElementById('clearSearchBtn');
    const noResults = document.getElementById('noResultsMessage');
    const resetBtn = document.getElementById('resetSearchBtn');

    if (!filterButtons.length || !categories.length) return;

    let activeCategory = 'all';

    // Función para normalizar texto eliminando diacríticos (tildes) y convirtiendo a minúsculas
    function normalizeText(text) {
        return (text || '')
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase()
            .trim();
    }

    function applyFilters() {
        let totalVisibleDishes = 0;
        const rawSearch = searchInput ? searchInput.value : '';
        const normalizedSearch = normalizeText(rawSearch);

        categories.forEach(category => {
            const categoryName = category.dataset.category || '';
            const matchesCategory = (activeCategory === 'all' || categoryName === activeCategory);

            if (!matchesCategory) {
                category.classList.add('is-filtered-out');
                return;
            }

            const dishes = category.querySelectorAll('.dish-card');
            let visibleInThisCategory = 0;

            dishes.forEach(dish => {
                const title = normalizeText(dish.querySelector('h3')?.textContent || '');
                const desc = normalizeText(dish.querySelector('p')?.textContent || '');
                const price = normalizeText(dish.querySelector('.price')?.textContent || '');

                const matchesSearch = !normalizedSearch ||
                    title.includes(normalizedSearch) ||
                    desc.includes(normalizedSearch) ||
                    price.includes(normalizedSearch);

                if (matchesSearch) {
                    dish.classList.remove('is-filtered-out');
                    visibleInThisCategory++;
                    totalVisibleDishes++;
                } else {
                    dish.classList.add('is-filtered-out');
                }
            });

            if (visibleInThisCategory > 0) {
                category.classList.remove('is-filtered-out');
            } else {
                category.classList.add('is-filtered-out');
            }
        });

        if (noResults) {
            noResults.hidden = totalVisibleDishes > 0;
        }
    }

    // Eventos de botones de categoría
    const filterArray = Array.from(filterButtons);
    filterButtons.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-selected', 'false');
                b.setAttribute('tabindex', '-1');
            });

            btn.classList.add('active');
            btn.setAttribute('aria-selected', 'true');
            btn.setAttribute('tabindex', '0');
            activeCategory = btn.dataset.filter || 'all';

            applyFilters();
        });

        // Navegación accesible por teclado según WAI-ARIA Tabs pattern
        btn.addEventListener('keydown', (e) => {
            let nextIndex = null;
            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                e.preventDefault();
                nextIndex = (index + 1) % filterArray.length;
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                e.preventDefault();
                nextIndex = (index - 1 + filterArray.length) % filterArray.length;
            } else if (e.key === 'Home') {
                e.preventDefault();
                nextIndex = 0;
            } else if (e.key === 'End') {
                e.preventDefault();
                nextIndex = filterArray.length - 1;
            }

            if (nextIndex !== null) {
                filterArray[nextIndex].focus();
                filterArray[nextIndex].click();
            }
        });
    });

    // Eventos del buscador en tiempo real
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            if (clearBtn) {
                clearBtn.hidden = !searchInput.value.trim();
            }
            applyFilters();
        });

        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && searchInput.value) {
                searchInput.value = '';
                if (clearBtn) clearBtn.hidden = true;
                applyFilters();
            }
        });
    }

    // Botón de limpiar búsqueda (X)
    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            if (searchInput) {
                searchInput.value = '';
                searchInput.focus();
            }
            clearBtn.hidden = true;
            applyFilters();
        });
    }

    // Botón para restablecer búsqueda en estado vacío
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            if (searchInput) {
                searchInput.value = '';
                searchInput.focus();
            }
            if (clearBtn) clearBtn.hidden = true;
            const allBtn = document.querySelector('.filter-btn[data-filter="all"]');
            if (allBtn) allBtn.click();
            applyFilters();
        });
    }
});
