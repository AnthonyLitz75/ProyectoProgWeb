document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);

    const name = params.get('name') || '';
    const phone = params.get('phone') || '';
    const email = params.get('email') || '';
    const guests = params.get('guests') || '';
    const date = params.get('date') || '';
    const time = params.get('time') || '';
    const zone = params.get('zone') || '';
    const occasion = params.get('occasion') || '';
    const notes = params.get('notes') || '';

    const titleEl = document.getElementById('confirmationTitle');
    const messageEl = document.getElementById('confirmationMessage');
    const ticketSection = document.getElementById('reservationTicket');

    const hasData = Boolean(name || phone || email || date);

    if (hasData && ticketSection) {
        ticketSection.hidden = false;

        if (name && titleEl) {
            titleEl.textContent = `¡Reservación Registrada, ${name.trim()}!`;
        }

        // Generar código único para el comprobante
        const randomCode = Math.floor(10000 + Math.random() * 90000);
        const codeEl = document.getElementById('ticketCode');
        if (codeEl) codeEl.textContent = `#INT-${randomCode}`;

        // Asignación segura con textContent (Prevención estricta de XSS)
        const nameEl = document.getElementById('ticketName');
        if (nameEl) nameEl.textContent = name || 'No especificado';

        const dateTimeEl = document.getElementById('ticketDateTime');
        if (dateTimeEl) {
            if (date) {
                const parts = date.split('-');
                let formattedDate = date;
                if (parts.length === 3) {
                    formattedDate = `${parts[2]}/${parts[1]}/${parts[0]}`;
                }
                dateTimeEl.textContent = `${formattedDate} — ${time || 'Horario por coordinar'}`;
            } else {
                dateTimeEl.textContent = time || 'Horario por coordinar';
            }
        }

        const guestsEl = document.getElementById('ticketGuests');
        if (guestsEl) {
            const guestLabels = {
                '1': '1 Persona',
                '2': '2 Personas (Pareja)',
                '3': '3 Personas',
                '4': '4 Personas',
                '5': '5 Personas',
                '6': '6 Personas',
                '7': '7 a 10 Personas (Grupo)',
                '11+': 'Más de 10 Personas'
            };
            guestsEl.textContent = guestLabels[guests] || (guests ? `${guests} Personas` : 'Por coordinar');
        }

        const zoneEl = document.getElementById('ticketZone');
        if (zoneEl) {
            const zoneLabels = {
                'terraza': 'Terraza Rústica con Vista a Viñedos',
                'salon': 'Salón Principal Climatizado',
                'cava': 'Cava de Vinos Privada'
            };
            zoneEl.textContent = zoneLabels[zone] || 'Terraza Rústica (Estándar)';
        }

        const phoneEl = document.getElementById('ticketPhone');
        if (phoneEl) phoneEl.textContent = phone || 'No especificado';

        const emailEl = document.getElementById('ticketEmail');
        if (emailEl) emailEl.textContent = email || 'No especificado';

        const notesContainer = document.getElementById('ticketNotesContainer');
        const notesEl = document.getElementById('ticketNotes');
        if (notes && notes.trim() && notesContainer && notesEl) {
            notesContainer.hidden = false;
            notesEl.textContent = notes.trim();
        }
    } else if (messageEl) {
        // Mensaje de cortesía ante acceso directo sin envío previo de formulario
        messageEl.textContent = 'Bienvenido(a) a El Intipalka. Si deseas solicitar una reservación en nuestros viñedos o restaurante, te invitamos a completar nuestro formulario.';
    }
});
