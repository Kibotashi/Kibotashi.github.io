/* Variables de color para modo claro */
:root {
    --fondo: #ffffff; /* Color de fondo principal */
    --texto: #111111; /* Color de texto principal */
    --acento: #d2b48c; /* Color de acento (sepia claro) */
    --gris: #f5f5f5; /* Gris claro para encabezados y pies de página */
    --borde: #e0e0e0; /* Color de borde */
    --oscuro: #2a2a2a; /* Fondo oscuro para el constructor */
    --texto-claro: #f0f0f0; /* Texto claro para el constructor */
    --constructor-bg-output: #3a3a3a; /* Fondo del área de salida del constructor */
    --gris-rgb: 245, 245, 245; /* RGB para #f5f5f5 */
    --acento-rgb: 210, 180, 140; /* RGB para #d2b48c (necesario para rgba) */
}
/* Variables de color para modo oscuro */
html.dark-mode {
    --fondo: #1a1a1a;
    --texto: #e0e0e0;
    --acento: #f0c080; /* Un acento más brillante para el modo oscuro */
    --gris: #222222;
    --borde: #444444;
    --oscuro: #111111;
    --texto-claro: #ffffff;
    --constructor-bg-output: #2b2b2b;
    --gris-rgb: 34, 34, 34; /* RGB para #222222 */
    --acento-rgb: 240, 192, 128; /* RGB para #f0c080 */
}
/* Estilos base del cuerpo */
body {
    margin: 0;
    font-family: 'Outfit', sans-serif;
    background-color: var(--fondo);
    color: var(--texto);
    line-height: 1.7;
    overflow-x: hidden; /* Evita el scroll horizontal */
    scroll-behavior: smooth; /* Habilita el scroll suave para los enlaces ancla */
    padding-top: 80px; /* Espacio para el header fijo */
}
/* Cinematic Hero Section Styles */
#hero {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* Ruta de la imagen de fondo: se recomienda usar la versión .webp y optimizar su tamaño */
    background-image: url('../images/montanas-flotantes.webp'); /* CORREGIDO: Ruta relativa */
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    position: relative;
    overflow: hidden;
    text-align: center;
    color: var(--texto-claro); /* Adjusted for dark background */
    background-blend-mode: multiply; /* Darkens the image slightly */
    background-color: rgba(0, 0, 0, 0.4); /* Add a subtle dark overlay */
}
#hero h1 {
    font-size: 4rem;
    font-weight: 700;
    letter-spacing: 6px;
    color: #fff; /* White text for contrast on dark background */
    /* Painterly text effect */
    text-shadow:
        2px 2px 4px rgba(0, 0, 0, 0.7),
        -2px -2px 4px rgba(0, 0, 0, 0.7),
        4px 4px 8px rgba(0, 0, 0, 0.5),
        -4px -4px 8px rgba(0, 0, 0, 0.5),
        6px 6px 12px rgba(0, 0, 0, 0.3);
    animation: fadeIn 1.5s ease-out;
}
#hero p {
    font-size: 1.2rem;
    color: #ccc; /* Lighter gray for contrast */
    margin-top: 1rem;
    animation: fadeIn 2s ease-out 0.5s forwards;
    opacity: 0; /* Starts hidden for animation */
}
#hero a {
    margin-top: 2.5rem;
    padding: 1rem 2rem;
    border: 2px solid var(--acento);
    color: #fff; /* White text for button */
    background-color: rgba(0,0,0,0.3); /* Semi-transparent background for the button */
    font-weight: bold;
    text-decoration: none;
    transition: background-color 0.3s, color 0.3s; /* Smooth transition for hover */
    border-radius: 8px; /* Rounded corners for the button */
}
#hero a:hover {
    background-color: var(--acento);
    color: var(--oscuro); /* Dark text on accent background for contrast */
}
/* Keyframes for fade-in animation */
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

/* Estilos del encabezado */
header {
    padding: 4rem 2rem;
    text-align: center;
    background-color: transparent; /* Changed to transparent */
    border-bottom: 4px solid var(--acento);
    max-width: 1000px;
    margin: auto;
    margin-top: 2rem; /* Give some space below the fixed nav */
}
/* Estilos del título del encabezado */
header h1 {
    font-size: 3rem;
    letter-spacing: 2px;
    margin: 0;
}
/* Estilos de la barra de navegación */
nav {
    display: flex;
    justify-content: space-between; /* Distribute items with space between them */
    align-items: center; /* Vertically align items */
    padding: 1rem 2rem; /* More padding, especially horizontal */
    /* --- NEW/UPDATED FOR VALORANT STYLE --- */
    position: fixed; /* Make it stick to the top */
    width: 100%; /* Take full width */
    top: 0;
    left: 0;
    z-index: 100; /* Ensure it stays on top of other content */
    background-color: rgba(var(--gris-rgb), 0.95); /* Slightly transparent background */
    backdrop-filter: blur(5px); /* Optional: add a blur effect */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
    transition: background-color 0.3s ease, box-shadow 0.3s ease; /* Smooth transition */
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%; /* Ensure it spans the container */
    max-width: 1400px; /* Aumentado para dar más espacio a los enlaces */
    margin: 0 auto; /* Center the content */
}

.logo {
    font-size: 1.8rem; /* Slightly larger logo */
    font-weight: 700;
    color: var(--acento); /* Use accent color for the logo */
    letter-spacing: 1px;
}

/* Estilos de la barra de navegación */
.nav-menu {
    list-style: none; /* Remove bullet points */
    margin: 0;
    padding: 0;
    display: flex; /* Display horizontally by default */
    gap: 1.5rem; /* Space between links */
}

.nav-menu li {
    margin: 0; /* Remove default list item margin */
}

/* Estilos de los enlaces de navegación */
nav a {
    text-decoration: none;
    color: var(--texto);
    font-weight: 700;
    font-size: 0.95rem;
    transition: color 0.3s ease, transform 0.2s ease; /* Transición suave para el hover */
    position: relative; /* For underline effect */
    padding-bottom: 5px; /* Space for underline */
}
/* Efecto hover de los enlaces de navegación */
nav a:hover {
    color: var(--acento);
    transform: translateY(-2px); /* Pequeño efecto de elevación */
}

/* Underline effect on hover */
nav a::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    background-color: var(--acento);
    left: 0;
    bottom: 0;
    transition: width 0.3s ease;
}

nav a:hover::after {
    width: 100%;
}

/* Botón de cambio de tema */
#theme-toggle {
    background-color: var(--acento);
    color: var(--texto-claro);
    border: none;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 700; /* Añadido para consistencia */
    transition: background-color 0.3s ease, transform 0.2s ease;
    margin-left: 20px; /* Espacio para el botón */
}
#theme-toggle:hover {
    background-color: #c0a07c;
    transform: translateY(-2px);
}

/* Hamburger icon styles */
.hamburger {
    display: none; /* Hidden by default on desktop */
    background: none;
    border: none;
    font-size: 2rem;
    color: var(--texto);
    cursor: pointer;
    z-index: 101; /* Ensure it's above the menu when open */
    line-height: 1; /* Adjust vertical alignment of the icon */
    padding: 0.5rem; /* Add some padding for easier clicking */
}

/* Styles for hamburger icon animation (optional) */
.hamburger.is-active::before {
    content: '\2715'; /* 'X' character */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.hamburger.is-active {
    font-size: 1.8rem; /* Smaller 'X' */
    transform: rotate(0deg); /* No rotation needed if using 'X' char */
}

/* Media query for smaller screens (e.g., mobile) */
@media (max-width: 992px) { /* Adjust breakpoint as needed */
    .nav-menu {
        flex-direction: column; /* Stack links vertically */
        position: fixed; /* Use fixed for full screen overlay */
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh; /* Full height when open */
        background-color: rgba(var(--gris-rgb), 0.95); /* Background for mobile menu */
        justify-content: center;
        align-items: center;
        transform: translateX(100%); /* Hide off-screen by default */
        transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
        opacity: 0; /* Start hidden */
        pointer-events: none; /* Disable interaction when hidden */
        display: flex; /* Ensure it's flex when active, even if hidden initially */
    }

    .nav-menu.active {
        transform: translateX(0); /* Slide in */
        opacity: 1;
        pointer-events: all; /* Enable interaction when active */
    }

    .nav-menu li {
        margin: 1rem 0; /* Space out vertical links */
    }

    .nav-menu a {
        font-size: 1.5rem; /* Larger links for touch */
        padding-bottom: 8px; /* More space for underline on mobile */
    }

    #theme-toggle {
        margin-top: 1.5rem; /* Space toggle button from links */
        display: block; /* Explicitly ensure it's a block element in mobile menu */
    }

    .hamburger {
        display: block; /* Show hamburger icon on mobile */
    }

    /* Hide the default hamburger icon when .is-active for 'X' effect */
    .hamburger.is-active {
        content: ''; /* Hide default hamburger bars */
    }
}

/* NEW: Adjustments for navigation menu on medium screens */
@media (min-width: 993px) and (max-width: 1200px) {
    .nav-menu {
        gap: 0.8rem; /* Reduce gap between menu items */
    }
    nav a {
        font-size: 0.9rem; /* Slightly smaller font size for links */
        padding: 0 5px; /* Reduce horizontal padding */
    }
    #theme-toggle {
        margin-left: 10px; /* Reduce margin for theme toggle */
        padding: 0.4rem 0.8rem; /* Slightly smaller padding */
    }
}


/* Estilos de las secciones */
section {
    max-width: 1000px;
    margin: auto;
    padding: 3rem 2rem;
    border-bottom: 1px solid var(--borde);
    /* Animación de fade-in para secciones */
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}
section.visible {
    opacity: 1;
    transform: translateY(0);
}
/* Estilos de las tablas */
table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 1.5rem;
    /* Eliminado opacity: 0 y transform: translateY(10px) aquí para que sean visibles por defecto */
    /* La animación de fade-in se aplicará cuando la sección sea visible */
    transition: opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s;
}
/* Clase visible para tablas, si se desea animar individualmente al aparecer con la sección */
table.visible {
    opacity: 1;
    transform: translateY(0);
}
/* Estilos del encabezado y celdas de tabla */
th, td {
    padding: 1rem;
    border-bottom: 1px solid var(--borde); /* Usar --borde para consistencia */
    text-align: left;
}
/* Estilos específicos del encabezado de tabla */
th {
    color: var(--acento);
    text-transform: uppercase;
    font-size: 0.9rem;
}
/* Estilos del pie de página */
footer {
    background-color: var(--gris);
    text-align: center;
    padding: 2rem;
    font-size: 0.9rem;
    color: #666;
}
/* Estilo para el botón de reproducción de audio */
.play-button, .play-output-button {
    background-color: var(--acento);
    color: white;
    border: none;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 700; /* Añadido para consistencia */
    transition: background-color 0.3s ease, transform 0.2s ease;
}
.play-button:hover, .play-output-button:hover {
    background-color: #c0a07c; /* Acennto ligeramente más oscuro */
    transform: translateY(-2px); /* Pequeño efecto de elevación */
}
/* Estilos para la sección del constructor de frases */
.constructor-container {
    background-color: var(--oscuro);
    color: var(--texto-claro);
    padding: 3rem 2rem;
    text-align: center;
    border-bottom: 1px solid var(--borde);
}
.constructor-container h2 {
    color: var(--texto-claro);
    border-left-color: var(--acento);
}
.constructor-container p {
    color: var(--texto-claro);
    margin-bottom: 2rem;
    font-size: 1.1rem;
}
.constructor-inputs {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 2rem;
}
.constructor-inputs select {
    padding: 0.75rem 1rem;
    border-radius: 5px;
    border: 1px solid var(--borde);
    background-color: var(--fondo);
    color: var(--texto);
    font-family: 'Outfit', sans-serif;
    font-size: 1rem;
    cursor: pointer;
    min-width: 180px;
}
.constructor-inputs button {
    background-color: var(--acento);
    color: white;
    border: none;
    border-radius: 5px;
    padding: 0.75rem 1.5rem;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 700;
    transition: background-color 0.3s ease;
}
.constructor-inputs button:hover {
    background-color: #c0a07c;
}
.constructor-output {
    background-color: var(--constructor-bg-output); /* Usar variable para consistencia */
    border-radius: 8px;
    padding: 2rem;
    margin-top: 2rem;
    color: var(--texto-claro);
    border: 1px solid #555;
}
.constructor-output h3 {
    color: var(--acento);
    margin-top: 0;
    font-size: 1.5rem;
}
.constructor-output p {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
}
.constructor-output .ipa {
    font-family: monospace;
    color: #aaa;
    font-size: 1.1rem;
}
.constructor-output .meaning {
    font-style: italic;
    color: #ccc;
    margin-bottom: 1rem;
}
/* NUEVO: Estilo para el mensaje de estado de palabra existente */
.word-status {
    font-weight: bold;
    color: var(--acento); /* Usa el color de acento para que resalte */
    margin-top: 1rem;
    font-size: 0.95rem;
    display: none; /* Oculto por defecto, se muestra con JS */
}

/* Nuevos estilos para los tonos emocionales */
.constructor-output.poetico {
    background: #3a3040;
    box-shadow: 0 0 15px rgba(180, 100, 200, 0.5); /* Sombra púrpura suave */
}
.constructor-output.afectivo {
    background: #41302f;
    box-shadow: 0 0 15px rgba(255, 100, 100, 0.5); /* Sombra rojiza suave */
}
.constructor-output.melancolico {
    background: #2a2f38;
    box-shadow: 0 0 15px rgba(100, 150, 255, 0.5); /* Sombra azul suave */
}

/* Estilos para la animación de caracteres */
.character-cell {
    cursor: grab; /* Cambiado a grab para indicar que es arrastrable */
    transition: transform 0.3s ease, text-shadow 0.3s ease;
    font-size: 2rem; /* Aumenta el tamaño para que el efecto sea visible */
    padding: 0.5rem;
    border: 1px solid var(--borde);
    border-radius: 5px;
    background-color: var(--fondo);
    color: var(--texto);
    display: inline-block; /* Para que ocupen el espacio justo */
    margin: 5px; /* Pequeño margen */
}
.character-cell:hover {
    transform: scale(1.1); /* Ligeramente más grande al pasar el ratón */
    text-shadow: 0 0 10px var(--acento); /* Efecto de brillo */
    background-color: var(--gris);
}
.character-cell:active {
    cursor: grabbing; /* Cambia a grabbing al arrastrar */
}


/* Estilos para el constructor de caracteres interactivo */
.character-builder-area {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 2rem;
    flex-wrap: wrap; /* Permite que los elementos se envuelvan en pantallas pequeñas */
}

.drop-zone {
    width: 100px;
    height: 100px;
    border: 2px dashed var(--acento);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    color: var(--texto);
    background-color: rgba(var(--gris-rgb), 0.2); /* Fondo semi-transparente */
    transition: background-color 0.3s ease, border-color 0.3s ease;
    flex-shrink: 0; /* Evita que se encojan en flexbox */
}

.drop-zone.hover {
    background-color: rgba(var(--acento-rgb), 0.2); /* Usa el acento con opacidad */
    border-color: var(--acento);
}

.drop-zone.filled {
    background-color: var(--constructor-bg-output);
    border-style: solid;
}

.drop-zone span.dropped-char {
    font-size: 3rem; /* Carácter grande dentro de la zona de caída */
    color: var(--texto-claro);
}

/* Estilos para el modal personalizado */
.custom-modal {
    position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
    background-color: var(--fondo); color: var(--texto);
    padding: 20px; border: 1px solid var(--borde); border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1); z-index: 1000;
    text-align: center; font-family: 'Outfit', sans-serif;
}
.custom-modal button {
    background-color: var(--acento); color: white; border: none; border-radius: 5px;
    padding: 8px 15px; cursor: pointer; margin-top: 10px;
    transition: background-color 0.3s ease;
}
.custom-modal button:hover {
    background-color: #c0a07c;
}
/* Styles for the "Scroll to Top" button */
#btnTop {
    position: fixed;
    bottom: 40px;
    right: 30px;
    z-index: 99;
    background-color: var(--acento); /* Use accent color */
    color: var(--fondo); /* Use background color for contrast */
    border: none;
    padding: 12px 18px;
    border-radius: 50%;
    font-size: 18px;
    cursor: pointer;
    opacity: 0.8;
    transition: background 0.3s, transform 0.3s, opacity 0.3s;
    display: none; /* Hidden by default, shown on scroll */
}
#btnTop:hover {
    background-color: #c0a07c; /* Slightly darker accent for hover */
    transform: scale(1.1);
}

/* Styles for glossary search and filter inputs */
#filtro-palabra, #filtro-categoria {
    padding: 0.75rem 1rem;
    border-radius: 5px;
    border: 1px solid var(--borde);
    background-color: var(--fondo);
    color: var(--texto);
    font-family: 'Outfit', sans-serif;
    font-size: 1rem;
    margin-right: 10px;
    margin-bottom: 1rem; /* Spacing for responsiveness */
    max-width: 300px;
}

#filtro-categoria {
    min-width: 200px;
}

/* Responsive adjustments for glossary controls */
@media (max-width: 768px) {
    #filtro-palabra, #filtro-categoria, #buscar-palabra-btn {
        width: calc(100% - 20px); /* Adjust for padding/margin */
        margin-right: 0;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    #buscar-palabra-btn {
        margin-top: 10px;
        margin-bottom: 1rem;
    }
}

/* Table wrapper for horizontal scrolling on small screens */
.table-wrapper {
    overflow-x: auto;
    width: 100%;
}

/* Pagination controls */
.pagination-controls {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-top: 2rem;
}

.pagination-controls button {
    background-color: var(--acento);
    color: white;
    border: none;
    border-radius: 5px;
    padding: 0.75rem 1.5rem;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 700;
    transition: background-color 0.3s ease;
}

.pagination-controls button:hover {
    background-color: #c0a07c;
}

.pagination-controls span {
    font-size: 1rem;
    color: var(--texto);
}
