[![HTML5](https://img.shields.io/badge/HTML5-Semántico-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-Moderno-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla%20ES6+-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)

# Portal Web Gastronómico y Enoturístico — "El Intipalka"

### Hotel Viñas Queirolo · Valle de Ica, Perú

**Entrega Académica — Desarrollo Web Front-End**

> **🌐 Enlace del Sitio Web en Vivo (Producción):**  
> **[https://intipalka.vercel.app](https://intipalka.vercel.app)**

---

## 1. Ficha Técnica y Metadatos Académicos

| Campo                        | Detalle Institucional                                                                                |
| :--------------------------- | :--------------------------------------------------------------------------------------------------- |
| **Proyecto**                 | Portal Web Comercial y Gastronómico para Restaurante Local ("El Intipalka")                          |
| **Despliegue en Vivo (URL)** | [https://intipalka.vercel.app](https://intipalka.vercel.app)                                         |
| **Repositorio GitHub**       | [https://github.com/AnthonyLitz75/AV2---Intipalka](https://github.com/AnthonyLitz75/AV2---Intipalka) |
| **Entorno & Contexto**       | Restaurante & Bodega del Hotel Viñas Queirolo (Valle de Ica, Perú)                                   |
| **Asignatura / Curso**       | Desarrollo Web / Programación Front-End                                                              |
| **Tecnologías Base**         | HTML5 Semántico, CSS3 Moderno (Flexbox / Grid), JavaScript Vanilla (ES6+)                            |
| **Dependencias Externas**    | Ninguna (0 dependencias o frameworks JS externos; desarrollo nativo y accesible)                     |
| **Compatibilidad**           | Estándar Baseline Web (Chrome 105+, Firefox 100+, Edge 105+, Safari 15.4+)                           |
| **Diseño Responsivo**        | Mobile-First / Adaptativo (Móvil, Tableta, Portátil y Escritorio 4K)                                 |

---

## 2. Descripción del Proyecto

**"El Intipalka"** (_Valle del Sol_ en quechua) es la propuesta de alta cocina peruana y enoturismo del Hotel Viñas Queirolo. El presente proyecto académico consiste en el desarrollo integral de una plataforma web comercial que combina la identidad vitivinícola tradicional con estándares modernos de ingeniería de software front-end.

El portal permite a los usuarios:

1. Conocer la historia, el terruño y la experiencia gastronómica del viñedo.
2. Explorar una carta interactiva con filtrado en tiempo real, búsqueda inteligente y recomendaciones enológicas del Sommelier.
3. Gestionar solicitudes de reservación de mesa mediante formularios validados rigurosamente.
4. Obtener un comprobante o ticket digital personalizado generado dinámicamente.

---

## 3. Funcionalidades Principales de la Plataforma

La aplicación está distribuida en cuatro vistas interconectadas, cada una diseñada para satisfacer requerimientos funcionales específicos:

```
[ index.html ] ────► [ menu.html ] ────► [ reserva.html ] ────► [ confirmacion.html ]
   Portada &            Carta &             Formulario de          Ticket Digital
   Experiencia         Buscador             Reservación             Personalizado
```

---

### 3.1. Portada Institucional y Experiencia Enoturística (`index.html`)

- **Navegación Fluida y Menú Responsivo**: Barra superior fija con logotipo vectorial en alta definición y navegación accesible. En pantallas móviles se transforma en un menú desplegable accesible.
- **Hero Banner con Llamados a la Acción (CTA)**: Entrada visual de alto impacto que conecta de forma inmediata a los visitantes con la carta gastronómica (`menu.html`) y el sistema de reservas (`reserva.html`).
- **Storytelling Gastronómico y Enológico**:
  - _Nuestra Historia y Filosofía_: Sección dedicada a la tradición centenaria de Viñas Queirolo y la cocina criolla de autor.
  - _La Experiencia en Viñedos_: Bloque informativo sobre catas de vino, recorridos guiados por las parras y maridajes exclusivos.
- **Prueba Social y Testimonios**: Cuadrícula de reseñas reales de comensales y visitantes destacando servicio, ambiente y gastronomía.
- **Integración Geográfica**: Mapa interactivo de Google Maps embebido con la geolocalización exacta de las instalaciones en San José de Los Molinos, Ica.
- **Pie de Página Oficial**: Enlaces institucionales a las redes sociales oficiales del Hotel Viñas Queirolo (Facebook, Instagram y YouTube) con protección de navegación segura (`target="_blank"` y `rel="noopener noreferrer"`).

---

### 3.2. Carta Gastronómica Interactiva (`menu.html`)

La carta culinaria del restaurante implementa componentes interactivos desarrollados exclusivamente en JavaScript nativo:

#### A. Filtro por Categorías en Tiempo Real (WAI-ARIA Tabs)

- Pestañas interactivas organizadas por secciones:
  - **Todos**: Despliega la oferta gastronómica completa.
  - **Entradas**: Selección de cebiches, causas, tiraditos y aperitivos.
  - **Platos Fuertes**: Carnes al pisco, pastas artesanales y especialidades del chef.
  - **Postres & Vinos**: Dulces peruanos y la colección enológica Intipalka (Gran Reserva, Reserva y Varietales).
- **Accesibilidad WAI-ARIA**: Estructurado con `role="tablist"` y `role="tab"`, permitiendo el cambio de categorías mediante teclado (flechas izquierda/derecha, inicio y fin).
- **Transiciones Visuales Suaves**: Filtrado no destructivo que oculta secciones sin generar saltos abruptos de scroll.

#### B. Buscador Inteligente en Tiempo Real

- **Filtrado Instantáneo**: Campo de texto que evalúa coincidencias conforme el usuario escribe, buscando sobre títulos de platos, descripciones, ingredientes y sugerencias de maridaje.
- **Normalización Diacrítica (`String.prototype.normalize`)**: El motor de búsqueda ignora diferencias entre mayúsculas, minúsculas, tildes y diéresis (por ejemplo, buscar _"ceviche"_, _"cebiche"_, _"aji"_ o _"ají"_ arroja resultados consistentes).
- **Botón de Limpieza Rápida**: Control `✕` que borra el término de búsqueda de inmediato. También responde a la tecla `Escape`.
- **Manejo de Estado Vacío**: Si ningún plato coincide con la búsqueda, se muestra una alerta visual accesible con un botón de reinicio (_"Restablecer carta"_) que recupera la vista completa en un solo clic.

#### C. Carrusel Automático de Platos Fuertes

- **Avance Temporal Cíclico**: Desplazamiento automático cada **4.5 segundos** con rotación infinita (_wrap-around_), navegando entre páginas en escritorio y tarjetas individuales en dispositivos móviles.
- **Controles Manuales**: Botones accesibles de avance y retroceso (`Anterior` / `Siguiente`) con etiquetas para lectores de pantalla (`aria-label`).
- **Pausa Inteligente ante Interacción Humana**: El temporizador se detiene automáticamente cuando el cursor se sitúa sobre el carrusel (`mouseenter`), cuando un usuario navega por teclado (`focusin`), durante gestos táctiles en pantallas móviles (`touchstart`) o cuando la pestaña del navegador pasa a segundo plano (`visibilitychange`).
- **Respeto a la Preferencia del Usuario**: Detecta si el sistema operativo tiene activada la opción de reducción de movimiento (`prefers-reduced-motion`) y desactiva el avance automático en conformidad con las pautas de accesibilidad WCAG.

#### D. Modal de Recomendación del Sommelier

- **Ventana Emergente Nativa (`<dialog>`)**: Ventana modal semántica activada desde el banner destacado de la carta.
- **Contenido Especializado**: Ficha de maridaje con notas de cata del vino insignia (_Intipalka N° 1_) y sugerencia de plato principal (_Lomo Saltado al Pisco Queirolo_).
- **Comportamiento Accesible**:
  - Cierre por triple vía: botón circular de salida (`✕`), pulsación de la tecla `Escape` o clic directo sobre el fondo semitransparente (_backdrop_).
  - Retención de foco (_focus trap_) mientras el modal está abierto y devolución del foco al botón detonador al cerrarse.
  - Bloqueo de desplazamiento del fondo (`document.body.style.overflow = 'hidden'`) para impedir scroll accidental en la página principal.
  - Botón de acción directa que redirige al formulario de reservas con la sugerencia preseleccionada.

#### E. Badges Gastronómicos y Guía Visual

- **Insignias Culinarias (`.dish-badge`)**: Etiquetas elegantes sobre las especialidades de la casa (_"Pesca del Día"_, _"Especialidad de la Casa"_, _"Recomendado del Valle"_ y _"100% Cacao Peruano"_), facilitando el escaneo visual rápido y complementando la búsqueda en tiempo real.
- **Armonía Cromática**: Diferenciación intencional entre los botones dorados institucionales (`.btn-gold`, tono oro viejo `#c59b27`) y los botones de conversión crítica (`.btn-reserve`, verde bosque `#1e7e4e`).

---

### 3.3. Sistema de Solicitud de Reservaciones (`reserva.html`)

- **Formulario Estructurado y Semántico**:
  - Datos del titular: Nombre completo, correo electrónico y número de teléfono.
  - Parámetros de visita: Fecha de reserva, turno de atención (Almuerzo o Cena) y número de comensales.
  - Selección de Ambiente: Salón Principal Barricas, Terraza con Vista a Viñedos o Cava Privada de Degustación.
  - Requerimientos especiales: Área de texto para observaciones, alergias o solicitudes de celebración.
- **Validación Rigurosa en Tiempo Real (`validacion.js`)**:
  - **Protección contra fechas pasadas**: El selector de fecha bloquea dinámicamente cualquier fecha anterior al día en curso mediante cálculo del atributo `min`.
  - **Formato de Contacto**: Validación de teléfono nacional o internacional con un mínimo estricto de 9 dígitos numéricos y comprobación de sintaxis de correo electrónico mediante expresión regular RFC 5322.
  - **Validación de Nombres**: Verificación de longitud mínima (3 caracteres) para evitar envíos con iniciales o campos truncados.
  - **Feedback Visual Inmediato**: Mensajes de error claros e interactivos integrados en cada campo mediante la API de validación nativa (`setCustomValidity`).
- **Envío Seguro**: Al superar todas las validaciones, los datos se transmiten ordenadamente hacia la vista de confirmación.

---

### 3.4. Emisión de Comprobante / Ticket Digital (`confirmacion.html`)

- **Extracción Segura de Parámetros (`URLSearchParams`)**: Lectura de los datos remitidos desde el formulario de reserva sin almacenamiento inseguro en almacenamiento local o cookies.
- **Generación de Ticket Único**: Creación programática de un código de reservación alfanumérico irrepetible (formato `#INT-XXXXX`).
- **Mitigación Estricta de Vulnerabilidades XSS**: Todos los valores ingresados por el usuario (nombres, fechas, zona, notas) se inyectan en el DOM utilizando exclusivamente la propiedad `textContent`, neutralizando cualquier intento de inyección de código malicioso o marcado HTML.
- **Diseño Tipo Comprobante Gastronómico**: Presentación formal tipo tarjeta de embarque / ticket de servicio con desglose de fecha formateada en lenguaje natural, comensales y turno seleccionado.
- **Acciones y Microinteracciones de Usuario**:
  - Botón de **Impresión / Descarga PDF**: Dispara el diálogo de impresión del navegador (`window.print()`).
  - **Hoja de Estilos de Impresión (`@media print`)**: Al imprimir o exportar a PDF, se aíslan los datos del comprobante y se ocultan automáticamente la barra de navegación, footer, mapa y botones decorativos.
  - **Copia Rápida al Portapapeles**: Botón interactivo junto al código de reserva (`#INT-XXXXX`) que permite copiar el localizador al portapapeles del dispositivo con confirmación visual accesible (`role="status"`).
  - Botón de **Retorno al Inicio**: Redirección rápida a la portada principal.

---

## 4. Estructura de Archivos del Proyecto

El proyecto mantiene una estructura modular, separando estrictamente la presentación (HTML), el diseño visual (CSS), la lógica de negocio (JavaScript) y los recursos multimedia:

```text
AV2 - Intipalka/
├── README.md                          # Documentación académica principal del proyecto
├── .vscode/
│   └── settings.json                  # Configuración predeterminada de Live Server (puerto 5501)
└── Intipalka/                         # Código fuente del portal web
    ├── index.html                     # Portada institucional, historia y contacto
    ├── menu.html                      # Carta gastronómica interactiva y buscador
    ├── reserva.html                   # Formulario de solicitud de reservaciones
    ├── confirmacion.html              # Vista de confirmación y ticket dinámico
    ├── assets/
    │   ├── icons/                     # Iconografía vectorial SVG optimizada (incluye logo-intipalka.svg)
    │   └── images/                    # Fotografías de alta resolución (platos, viñedos, bodega)
    ├── css/
    │   ├── styles.css                 # Variables globales, tipografías, navbar, footer, skip-link y utilidades A11y
    │   ├── index.css                  # Estilos específicos de la portada, historia y tours
    │   ├── menu.css                   # Cuadrículas de platos, carrusel, filtros, modal sommelier y badges
    │   ├── reserva.css                # Estilos del formulario de reservaciones
    │   ├── contacto.css               # Estilos de la sección de contacto, horarios y mapa
    │   └── confirmacion.css           # Estilos del comprobante digital, botón de copiado y @media print
    ├── js/
        ├── carrusel.js                # Lógica del carrusel: autoplay, wrap-around y pausa inteligente
        ├── menu-filtros.js            # Lógica de filtrado por categoría y buscador normalizado
        ├── modal-destacado.js         # Lógica accesible del elemento <dialog> del Sommelier
        ├── validacion.js              # Validación personalizada del formulario de reservas
        └── confirmacion.js            # Procesamiento de URLSearchParams, copiado e impresión

```

---

## 5. Decisiones Técnicas y Estándares de Calidad

1. **JavaScript Vanilla (Cero Dependencias)**:
   Se priorizó el uso de APIs nativas del navegador (ES6+, `URLSearchParams`, `<dialog>`, `matchMedia`, `Intl`) sin incurrir en librerías externas pesadas (jQuery, React o Bootstrap JS), maximizando la velocidad de carga y garantizando un control absoluto del ciclo de vida del DOM.

2. **Accesibilidad Web (WCAG 2.1 Nivel AA)**:
   - Contrastes cromáticos validados sobre paleta institucional (dorado `#d4af37`, vinotinto `#85182a` y fondos oscuros).
   - Soporte completo de navegación por teclado en elementos interactivos (carrusel, pestañas de menú y modal).
   - Uso de atributos y roles semánticos WAI-ARIA (`role="tablist"`, `role="tab"`, `aria-selected`, `aria-label`).
   - Adaptación activa a la directiva de accesibilidad `prefers-reduced-motion`.

3. **Seguridad Front-End**:
   - Mitigación de Cross-Site Scripting (XSS) al inyectar parámetros de URL mediante `.textContent`.
   - Enlaces externos con directivas de seguridad `rel="noopener noreferrer"`.

---

## 6. Guía de Ejecución Local

Para visualizar y evaluar el proyecto en un entorno local, se recomienda utilizar un servidor web local para garantizar el funcionamiento correcto de rutas relativas y módulos:

### Método 1: Visual Studio Code con Live Server (Recomendado)

1. Abrir la carpeta del proyecto en **Visual Studio Code**:
   ```bash
   code .
   ```
2. Instalar la extensión **Live Server** (`ritwickdey.liveserver`) si no estuviese instalada.
3. Hacer clic derecho sobre el archivo `Intipalka/index.html` y seleccionar **"Open with Live Server"**.
4. El navegador predeterminado se abrirá automáticamente en:
   ```text
   http://127.0.0.1:5501/Intipalka/index.html
   ```

### Método 2: Servidor Local con Python

Si cuenta con Python 3 instalado, ejecute desde la terminal en la raíz del proyecto:

```bash
python -m http.server 5501
```

Luego ingrese a: `http://localhost:5501/Intipalka/index.html`

### Método 3: Servidor Local con Node.js

Si dispone de Node.js, puede inicializar un servidor ligero mediante:

```bash
npx serve . -p 5501
```

Luego ingrese a: `http://localhost:5501/Intipalka/index.html`

---

## 7. Créditos y Conclusión

Este proyecto demuestra la viabilidad de construir un portal web comercial elegante, interactivo, accesible y de alto rendimiento utilizando exclusivamente tecnologías web estándar, cumpliendo a cabalidad con los requerimientos pedagógicos y profesionales de la materia.
