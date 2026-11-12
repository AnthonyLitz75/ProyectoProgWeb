document.querySelectorAll(".reservation-form, .contact-form")
    .forEach(formulario => {
        // Permite que JavaScript controle la validación nativa con mensajes amigables
        formulario.noValidate = true;

        const campos = formulario.querySelectorAll(
            "input, select, textarea"
        );

        // Si existe un campo de fecha, restringir a fechas presentes o futuras
        const campoFecha = formulario.querySelector('input[type="date"]');
        if (campoFecha) {
            const hoy = new Date().toISOString().split('T')[0];
            campoFecha.min = hoy;
        }

        function validarCampo(campo) {
            campo.setCustomValidity("");
            const valor = campo.value.trim();

            // 1. Evita aceptar campos obligatorios vacíos o con solo espacios
            if (campo.required && !valor) {
                campo.setCustomValidity("Por favor, completa este campo.");
                return;
            }

            if (!valor) return;

            // 2. Validación de nombre
            if (campo.name === "name" || campo.id.includes("name")) {
                if (valor.length < 3) {
                    campo.setCustomValidity("Ingresa un nombre válido (mínimo 3 caracteres).");
                    return;
                }
            }

            // 3. Validación de correo electrónico
            if (campo.type === "email" || campo.name === "email") {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
                if (!emailRegex.test(valor)) {
                    campo.setCustomValidity("Ingresa un correo electrónico válido (ej. comensal@ejemplo.com).");
                    return;
                }
            }

            // 4. Validación de teléfono
            if (campo.type === "tel" || campo.name === "phone") {
                const digitos = valor.replace(/\D/g, "");
                if (digitos.length < 9) {
                    campo.setCustomValidity("Ingresa un número de contacto válido de al menos 9 dígitos.");
                    return;
                }
            }

            // 5. Validación de fecha (no permitir fechas pasadas)
            if (campo.type === "date" || campo.name === "date") {
                const hoy = new Date().toISOString().split('T')[0];
                if (valor < hoy) {
                    campo.setCustomValidity("La fecha de reserva no puede ser anterior al día de hoy.");
                    return;
                }
            }
        }

        campos.forEach(campo => {
            campo.addEventListener("input", () => {
                validarCampo(campo);
            });

            campo.addEventListener("change", () => {
                validarCampo(campo);
            });
        });

        formulario.addEventListener("submit", evento => {
            campos.forEach(validarCampo);

            if (!formulario.checkValidity()) {
                evento.preventDefault();
                formulario.reportValidity();
                return;
            }

            // El formulario de contacto en index.html muestra aviso en pantalla
            if (formulario.classList.contains("contact-form")) {
                evento.preventDefault();

                let aviso = formulario.querySelector(".form-status");

                if (!aviso) {
                    aviso = document.createElement("p");
                    aviso.className = "form-status";
                    aviso.setAttribute("role", "status");
                    formulario.appendChild(aviso);
                }

                aviso.textContent =
                    "Mensaje recibido con éxito. Nos pondremos en contacto contigo a la brevedad.";
            }
        });
    });
