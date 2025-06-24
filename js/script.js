document.addEventListener('DOMContentLoaded', function() {
    // Desplazamiento suave para los enlaces de navegación
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Previene el comportamiento por defecto del enlace
            const targetId = this.getAttribute('href'); // Obtiene el ID del destino (ej. "#intro")
            const targetElement = document.querySelector(targetId); // Selecciona el elemento objetivo
            if (targetElement) {
                // Desplaza la vista hacia el elemento de forma suave
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Funcionalidad de cambio de tema (claro/oscuro)
    const themeToggleBtn = document.getElementById('theme-toggle'); // Botón de cambio de tema
    const htmlElement = document.documentElement; // Elemento raíz del documento (<html>)

    // Comprueba la preferencia de tema guardada o establece el tema predeterminado (claro)
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
        htmlElement.classList.add('dark-mode'); // Aplica la clase para el modo oscuro
        themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i> Modo Claro'; // Cambia el texto del botón
    } else {
        themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i> Modo Oscuro'; // Cambia el texto del botón
    }

    // Agrega un escuchador de eventos al botón de cambio de tema
    themeToggleBtn.addEventListener('click', () => {
        if (htmlElement.classList.contains('dark-mode')) {
            htmlElement.classList.remove('dark-mode'); // Elimina la clase de modo oscuro
            localStorage.setItem('theme', 'light'); // Guarda la preferencia
            themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i> Modo Oscuro'; // Actualiza el texto
        } else {
            htmlElement.classList.add('dark-mode'); // Añade la clase de modo oscuro
            localStorage.setItem('theme', 'dark'); // Guarda la preferencia
            themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i> Modo Claro'; // Actualiza el texto
        }
    });

    // Observer de Intersección para el efecto de fade-in en las secciones
    const sections = document.querySelectorAll('section'); // Todas las secciones
    const options = {
        root: null, // Relativo a la ventana (viewport)
        rootMargin: '0px',
        threshold: 0.1 // El 10% de la sección debe ser visible para activar
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Añade la clase 'visible'
                observer.unobserve(entry.target); // Deja de observar una vez que es visible
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section); // Empieza a observar cada sección
    });

    // Funcionalidad del menú hamburguesa para dispositivos móviles
    const hamburger = document.querySelector('.hamburger'); // Botón hamburguesa
    const navMenu = document.querySelector('.nav-menu'); // Menú de navegación

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active'); // Alterna la clase 'active' en el menú
            hamburger.classList.toggle('active'); // Alterna la clase 'active' en el botón hamburguesa
        });

        // Cierra el menú cuando se hace clic en un enlace (para móviles)
        document.querySelectorAll('.nav-menu li a').forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    hamburger.classList.remove('active');
                }
            });
        });
    }

    // Reproducción de audio para elementos con data-audio (ej. sección de audio)
    document.querySelectorAll('button.play-button[data-audio]').forEach(button => {
        button.addEventListener('click', function() {
            const audioSrc = this.dataset.audio; // Obtiene la ruta del audio del atributo data-audio
            if (audioSrc) {
                const audio = new Audio(audioSrc); // Crea un nuevo objeto Audio
                audio.play().catch(e => console.error("Error al reproducir audio:", e)); // Reproduce y captura errores
            } else {
                console.warn("No se definió la fuente de audio para este botón.");
            }
        });
    });

    // Reproducción de audio para elementos con data-text (texto a voz)
    document.querySelectorAll('button.play-button[data-text]').forEach(button => {
        button.addEventListener('click', function() {
            const textToSpeak = this.dataset.text; // Obtiene el texto del atributo data-text
            if (textToSpeak) {
                window.speakText(textToSpeak); // Llama a la función global para hablar texto
            } else {
                console.warn("No se definió texto para este botón para hablar.");
            }
        });
    });

    // Función para hablar texto usando la API de voz del navegador
    window.speakText = function(text) {
        if ('speechSynthesis' in window) { // Comprueba si la API está disponible
            const synth = window.speechSynthesis;
            const utterance = new SpeechSynthesisUtterance(text); // Crea una nueva 'utterance'
            utterance.lang = 'es-LA'; // Establece el idioma a español latinoamericano

            // Intenta encontrar una voz femenina en español latinoamericano
            let voice = synth.getVoices().find(v => v.lang === 'es-LA' && v.name.includes('female'));
            if (!voice) { // Si no la encuentra, busca femenina en cualquier español
                voice = synth.getVoices().find(v => v.lang.startsWith('es') && v.name.includes('female'));
            }
            if (!voice) { // Si aún no la encuentra, busca cualquier voz en español
                voice = synth.getVoices().find(v => v.lang.startsWith('es'));
            }
            utterance.voice = voice; // Asigna la voz encontrada

            synth.speak(utterance); // Inicia la reproducción de voz
        } else {
            console.warn("La síntesis de voz no es compatible con este navegador.");
        }
    };

    // Funcionalidad del Constructor de frases (datos de ejemplo)
    const pronouns = {
        Ena: "Yo",
        Lun: "Yo (poético)",
        Bua: "Tú",
        Sual: "Él/Ella",
        Nual: "Nosotros"
    };

    const verbs = {
        Ta: "Ser",
        Ni: "Estar",
        Kel: "Tener",
        Mir: "Hacer",
        Bin: "Sentir",
        Jan: "Ir",
        Vael: "Decir",
        Zar: "Saber",
        Katun: "Querer",
        Solv: "Poder"
    };

    const objects = {
        Katen: "mi amor",
        Tovar: "voz",
        Naviirsa: "su pareja",
        Kuren: "amigo",
        Non: "dónde"
    };

    const tenses = {
        presente: { suffix: "", personal: { Ena: "o", Bua: "ua", Sual: "ai", Nual: "anal" } },
        pasado: { suffix: "or" },
        futuro: { suffix: "el" }
    };

    // Elementos del DOM para el constructor
    const pronounSelect = document.getElementById('pronoun-select');
    const verbSelect = document.getElementById('verb-select');
    const tenseSelect = document.getElementById('tense-select');
    const objectSelect = document.getElementById('object-select');
    const negationCheckbox = document.getElementById('negation-checkbox');
    const moodSelect = document.getElementById('mood-select');
    const affixSelect = document.getElementById('affix-select');
    const emotionSelect = document.getElementById('emotion-select');
    const randomizeCheckbox = document.getElementById('randomize-checkbox');
    const buildPhraseBtn = document.getElementById('build-phrase-btn');
    const speakConstructedPhraseBtn = document.getElementById('speak-constructed-phrase-btn');

    const kibotashiPhraseOutput = document.getElementById('kibotashi-phrase');
    const ipaPhraseOutput = document.getElementById('ipa-phrase');
    const meaningPhraseOutput = document.getElementById('meaning-phrase');
    const constructorOutputDiv = document.getElementById('constructor-output');


    // Función para poblar elementos select
    function populateSelect(selectElement, data, addEmptyOption = true) {
        if (!selectElement) {
            console.error("populateSelect: el elemento select es nulo para los datos", data);
            return;
        }
        selectElement.innerHTML = ''; // Limpia las opciones existentes
        if (addEmptyOption) {
            const option = document.createElement('option');
            option.value = "";
            option.textContent = data === pronouns ? "Selecciona un pronombre" :
                                 data === verbs ? "Selecciona un verbo" :
                                 data === objects ? "Selecciona un objeto" :
                                 "Selecciona";
            selectElement.appendChild(option); // Añade la opción vacía
        }
        for (const key in data) {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = data[key];
            selectElement.appendChild(option); // Añade las opciones de datos
        }
    }

    // Pobla todos los select iniciales
    populateSelect(pronounSelect, pronouns);
    populateSelect(verbSelect, verbs);
    populateSelect(objectSelect, objects);

    // Pobla el select de tiempo manualmente (estructura diferente)
    if (tenseSelect) {
        tenseSelect.innerHTML = `
            <option value="">Selecciona un tiempo</option>
            <option value="presente">Presente</option>
            <option value="pasado">Pasado</option>
            <option value="futuro">Futuro</option>
        `;
    } else {
        console.error("tenseSelect es nulo");
    }

    // Pobla el select de emociones manualmente
    if (emotionSelect) {
        emotionSelect.innerHTML = `
            <option value="tono neutro">Tono Neutro</option>
            <option value="alegre">Alegre</option>
            <option value="triste">Triste</option>
            <option value="enojado">Enojado</option>
            <option value="sorprendido">Sorprendido</option>
        `;
    } else {
        console.error("emotionSelect es nulo");
    }

    // Función principal para construir la frase
    window.buildPhrase = function() {
        // Lógica para la frase aleatoria
        if (randomizeCheckbox && randomizeCheckbox.checked) {
            const randomPronounKey = Object.keys(pronouns)[Math.floor(Math.random() * Object.keys(pronouns).length)];
            const randomVerbKey = Object.keys(verbs)[Math.floor(Math.random() * Object.keys(verbs).length)];
            const randomTenseKey = Object.keys(tenses)[Math.floor(Math.random() * Object.keys(tenses).length)];
            const randomObjectKey = Object.keys(objects)[Math.floor(Math.random() * Object.keys(objects).length)];

            if (pronounSelect) pronounSelect.value = randomPronounKey;
            if (verbSelect) verbSelect.value = randomVerbKey;
            if (tenseSelect) tenseSelect.value = randomTenseKey;
            if (objectSelect) objectSelect.value = randomObjectKey;
            if (negationCheckbox) negationCheckbox.checked = Math.random() > 0.5; // Aleatorio true/false
            if (moodSelect) moodSelect.value = Math.random() > 0.5 ? 'indicativo' : 'condicional';
            // Asegura que affixSelect y emotionSelect tengan opciones antes de aleatorizar
            if (affixSelect && affixSelect.options.length > 0) {
                 affixSelect.value = affixSelect.options[Math.floor(Math.random() * affixSelect.options.length)].value;
            }
            if (emotionSelect && emotionSelect.options.length > 0) {
                emotionSelect.value = emotionSelect.options[Math.floor(Math.random() * emotionSelect.options.length)].value;
            }
        }

        // Obtiene los valores seleccionados (con comprobaciones de nulidad)
        const selectedPronoun = pronounSelect ? pronounSelect.value : '';
        const selectedVerb = verbSelect ? verbSelect.value : '';
        const selectedTense = tenseSelect ? tenseSelect.value : '';
        const selectedObject = objectSelect ? objectSelect.value : '';
        const isNegated = negationCheckbox ? negationCheckbox.checked : false;
        const selectedMood = moodSelect ? moodSelect.value : '';
        const selectedAffix = affixSelect ? affixSelect.value : '';
        const selectedEmotion = emotionSelect ? emotionSelect.value : '';


        // Valida que se hayan seleccionado los componentes básicos
        if (!selectedPronoun || !selectedVerb || !selectedTense) {
            if(kibotashiPhraseOutput) kibotashiPhraseOutput.textContent = "Por favor, selecciona un pronombre, verbo y tiempo.";
            if(ipaPhraseOutput) ipaPhraseOutput.textContent = "";
            if(meaningPhraseOutput) meaningPhraseOutput.textContent = "";
            if(constructorOutputDiv) constructorOutputDiv.style.display = 'block';
            return;
        }

        let kibotashiVerb = selectedVerb;
        let translatedVerb = verbs[selectedVerb];
        let phraseMeaning = "";
        let ipaPronunciation = "";

        // Aplica el tiempo verbal
        if (selectedTense === "presente") {
            const personalSuffix = tenses.presente.personal[selectedPronoun];
            if (personalSuffix) {
                kibotashiVerb += personalSuffix;
            }
            phraseMeaning = `${pronouns[selectedPronoun]} ${translatedVerb}${personalSuffix ? personalSuffix : ' (presente)'}`;
        } else {
            kibotashiVerb += tenses[selectedTense].suffix;
            phraseMeaning = `${pronouns[selectedPronoun]} ${translatedVerb}${tenses[selectedTense].suffix ? ' (en ' + selectedTense + ')' : ''}`;
        }

        // Aplica la negación
        if (isNegated) {
            kibotashiVerb = "Ne" + kibotashiVerb;
            phraseMeaning = `No ${phraseMeaning}`;
        }

        // Aplica el modo (simplificado)
        if (selectedMood === "condicional") {
            kibotashiVerb += "-ka"; // Sufijo de ejemplo condicional
            phraseMeaning += " (condicional)";
        }

        // Aplica el sufijo afectivo
        if (selectedAffix) {
            // Esta es una aplicación simplificada. El sufijo real podría cambiar la palabra.
            kibotashiVerb += selectedAffix;
            phraseMeaning += ` con ${selectedAffix} (${affixSelect.options[affixSelect.selectedIndex].textContent})`;
        }

        // Aplica la emoción (simplificado para el significado de la frase)
        if (selectedEmotion && selectedEmotion !== "tono neutro") {
            phraseMeaning += ` [Tono: ${emotionSelect.options[emotionSelect.selectedIndex].textContent}]`;
        }

        let fullKibotashiPhrase = kibotashiVerb;
        let fullMeaning = phraseMeaning;

        // Añade el objeto si está seleccionado
        if (selectedObject) {
            fullKibotashiPhrase += ` ${selectedObject}`;
            fullMeaning += ` ${objects[selectedObject]}`;
        }

        // IPA de marcador de posición (se necesitaría un sistema más complejo para generar IPA real)
        ipaPronunciation = `/${fullKibotashiPhrase.toLowerCase().replace(/[^a-z]/g, '')}/`;

        // Actualiza los elementos de salida del constructor
        if(kibotashiPhraseOutput) kibotashiPhraseOutput.textContent = fullKibotashiPhrase;
        if(ipaPhraseOutput) ipaPhraseOutput.textContent = ipaPronunciation;
        if(meaningPhraseOutput) meaningPhraseOutput.textContent = fullMeaning;
        if(constructorOutputDiv) constructorOutputDiv.style.display = 'block';

        // --- NUEVO: Activa la búsqueda en el glosario con la frase construida ---
        // Establece el valor del input de búsqueda del glosario
        if (filtroPalabraInput) {
            filtroPalabraInput.value = fullKibotashiPhrase;
        }
        // Reinicia la página actual y renderiza el glosario para aplicar la búsqueda
        currentPage = 1;
        renderGlossary();
        // Desplázate a la sección del glosario para una retroalimentación inmediata
        const glosarioSection = document.getElementById('glosario');
        if (glosarioSection) {
            glosarioSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Función para reproducir la frase construida
    window.speakConstructedPhrase = function() {
        const textToSpeak = kibotashiPhraseOutput.textContent;
        if (textToSpeak) {
            window.speakText(textToSpeak);
        }
    };

    // Escuchadores de eventos para cambios en los select del constructor
    if (pronounSelect) pronounSelect.addEventListener('change', window.buildPhrase);
    if (verbSelect) verbSelect.addEventListener('change', window.buildPhrase);
    if (tenseSelect) tenseSelect.addEventListener('change', window.buildPhrase);
    if (objectSelect) objectSelect.addEventListener('change', window.buildPhrase);
    if (negationCheckbox) negationCheckbox.addEventListener('change', window.buildPhrase);
    if (moodSelect) moodSelect.addEventListener('change', window.buildPhrase);
    if (affixSelect) affixSelect.addEventListener('change', window.buildPhrase);
    if (emotionSelect) emotionSelect.addEventListener('change', window.buildPhrase);
    if (randomizeCheckbox) randomizeCheckbox.addEventListener('change', window.buildPhrase);

    // Escuchadores de eventos para los botones del Constructor
    if (buildPhraseBtn) {
        buildPhraseBtn.addEventListener('click', window.buildPhrase);
    }
    if (speakConstructedPhraseBtn) {
        speakConstructedPhraseBtn.addEventListener('click', window.speakConstructedPhrase);
    }

    // Función para desplazarse a la parte superior de la página
    window.scrollToTop = function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Muestra/oculta el botón "Volver arriba"
    window.onscroll = function() {
        const btnTop = document.getElementById("btnTop");
        if (btnTop) {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                btnTop.style.display = "block";
            } else {
                btnTop.style.display = "none";
            }
        }
    };

    // --- Datos del Glosario y Lógica de Paginación ---

    // Todos los datos del glosario (tu vocabulario)
    const allGlossaryData = [
        // Vocabulario existente
        { espanol: "Amor", kibotashi: "Kat", categoria: "Emoción" },
        { espanol: "Casa", kibotashi: "Hana", categoria: "Hogar" },
        { espanol: "Comer", kibotashi: "Men", categoria: "Acción" },
        { espanol: "Agua", kibotashi: "Zarun", categoria: "Naturaleza" },
        { espanol: "puerta", kibotashi: "narel", categoria: "Hogar" },
        { espanol: "techo", kibotashi: "vuren", categoria: "Hogar" },
        { espanol: "pared", kibotashi: "kashi", categoria: "Hogar" },
        { espanol: "piso", kibotashi: "lomu", categoria: "Hogar" },
        { espanol: "escalera", kibotashi: "zarel", categoria: "Hogar" },
        { espanol: "lámpara", kibotashi: "shavi", categoria: "Hogar" },
        { espanol: "cajón", kibotashi: "turen", categoria: "Hogar" },
        { espanol: "alfombra", kibotashi: "mirel", categoria: "Hogar" },
        { espanol: "jabón", kibotashi: "navi", categoria: "Higiene" },
        { espanol: "champú", kibotashi: "shoru", categoria: "Higiene" },
        { espanol: "Alegría", kibotashi: "Biné", categoria: "Emociones" },
        { espanol: "Ternura", kibotashi: "Kol", categoria: "Emociones" },
        { espanol: "Ternura íntima", kibotashi: "Tin", categoria: "Emociones" },
        { espanol: "Calma interior", kibotashi: "Mior", categoria: "Emociones" },
        { espanol: "Dolor emocional", kibotashi: "Harun", categoria: "Emociones" },
        { espanol: "Esperanza", kibotashi: "Zinar", categoria: "Emociones" },
        { espanol: "Coraje", kibotashi: "Brel", categoria: "Emociones" },
        { espanol: "Bien / equilibrio", kibotashi: "Kéa", categoria: "Emociones" },
        { espanol: "Malestar", kibotashi: "Ruom", categoria: "Emociones" },
        { espanol: "Tierra", kibotashi: "Feol", categoria: "Naturaleza" },
        { espanol: "Viento", kibotashi: "Vaar", categoria: "Naturaleza" },
        { espanol: "Sol", kibotashi: "Kuar", categoria: "Naturaleza" },
        { espanol: "Roca", kibotashi: "Drin", categoria: "Naturaleza" },
        { espanol: "Corazón físico", kibotashi: "Barin", categoria: "Cuerpo y acción" },
        { espanol: "Mano / hacer", kibotashi: "Lerun", categoria: "Cuerpo y acción" },
        { espanol: "Boca / voz", kibotashi: "Tovar", categoria: "Cuerpo y acción" },
        { espanol: "Movimiento", kibotashi: "Runel", categoria: "Cuerpo y acción" },
        { espanol: "Pensar", kibotashi: "Néur", categoria: "Mente y cognición" },
        { espanol: "Conocer profundamente", kibotashi: "Serin", categoria: "Mente y cognición" },
        { espanol: "Imaginar", kibotashi: "Luem", categoria: "Mente y cognición" },
        { espanol: "Decidir", kibotashi: "Tivar", categoria: "Mente y cognición" },
        { espanol: "Persona", kibotashi: "Nirel", categoria: "Gente" },
        { espanol: "Compañero/a", kibotashi: "Maran", categoria: "Gente" },
        { espanol: "Amigo/a", kibotashi: "Kuren", categoria: "Gente" },
        { espanol: "Pareja", kibotashi: "Naviir", categoria: "Gente" },
        { espanol: "Madre", kibotashi: "Tareni", categoria: "Gente" },
        { espanol: "Padre", kibotashi: "Soren", categoria: "Gente" },
        { espanol: "Hijo/a", kibotashi: "Mirat", categoria: "Gente" },
        { espanol: "Familia", kibotashi: "Tarenel", categoria: "Gente" },
        { espanol: "Cuidar", kibotashi: "Zalin", categoria: "Verbos relacionales" },
        { espanol: "Extrañar", kibotashi: "Relur", categoria: "Verbos relacionales" },
        { espanol: "Acompañar", kibotashi: "Mivar", categoria: "Verbos relacionales" },
        { espanol: "Confiar", kibotashi: "Folin", categoria: "Verbos relacionales" },
        { espanol: "Abrazar", kibotashi: "Rener", categoria: "Verbos relacionales" },
        { espanol: "ventana", kibotashi: "lurei", categoria: "Hogar" },
        { espanol: "interruptor", kibotashi: "zavin", categoria: "Hogar" },
        { espanol: "espejo", kibotashi: "mirei", categoria: "Hogar" },
        { espanol: "toalla", kibotashi: "shanu", categoria: "Higiene" },
        { espanol: "pasta dental", kibotashi: "kirel", categoria: "Higiene" },
        { espanol: "despertador", kibotashi: "valor", categoria: "Hogar" },
        { espanol: "cucharón", kibotashi: "tavun", categoria: "Utensilio" },
        { espanol: "horno", kibotashi: "zuren", categoria: "Utensilio" },
        { espanol: "colchón", kibotashi: "narelun", categoria: "Hogar" },
        { espanol: "pañuelo", kibotashi: "shiren", categoria: "Higiene" },
        { espanol: "desayuno", kibotashi: "maviel", categoria: "Comida" },
        { espanol: "almuerzo", kibotashi: "taviel", categoria: "Comida" },
        { espanol: "cena", kibotashi: "lurel", categoria: "Comida" },
        { espanol: "cuchara", kibotashi: "kiren", categoria: "Utensilio" },
        { espanol: "tenedor", kibotashi: "zavinel", categoria: "Utensilio" },
        { espanol: "vaso", kibotashi: "muren", categoria: "Utensilio" },
        { espanol: "olla a presión", kibotashi: "sharil", categoria: "Utensilio" },
        { espanol: "batidora", kibotashi: "valesh", categoria: "Utensilio" },
        { espanol: "sal", kibotashi: "tariun", categoria: "Comida" },
        { espanol: "azúcar", kibotashi: "zanei", categoria: "Comida" },
        { espanol: "vinagre", kibotashi: "lurash", categoria: "Comida" },
        { espanol: "especias", kibotashi: "mireth", categoria: "Comida" },
        { espanol: "olla pequeña", kibotashi: "naku", categoria: "Utensilio" },
        { espanol: "tabla de cortar", kibotashi: "kavrel", categoria: "Utensilio" },
        { espanol: "colador", kibotashi: "shuren", categoria: "Higiene" },
        // Nuevas entradas de glosario (de pasos anteriores)
        { espanol: "ventilador", kibotashi: "furel", categoria: "Hogar" },
        { espanol: "balcón", kibotashi: "zavinel", categoria: "Hogar" },
        { espanol: "cortina", kibotashi: "mireth", categoria: "Hogar" },
        { espanol: "escritorio", kibotashi: "kavren", categoria: "Hogar" },
        { espanol: "reloj", kibotashi: "taviel", categoria: "Objeto" },
        { espanol: "bolígrafo", kibotashi: "sharen", categoria: "Objeto" },
        { espanol: "calculadora", kibotashi: "nureth", categoria: "Objeto" },
        { espanol: "mapa", kibotashi: "lurenai", categoria: "Objeto" },
        { espanol: "teléfono", kibotashi: "zaviel", categoria: "Tecnología" },
        { espanol: "pantalla", kibotashi: "mirelth", categoria: "Tecnología" },
        { espanol: "ratón", kibotashi: "kireth", categoria: "Tecnología" },
        { espanol: "teclado", kibotashi: "valesh", categoria: "Tecnología" },
        { espanol: "cable", kibotashi: "shavun", categoria: "Tecnología" },
        { espanol: "cargador", kibotashi: "nuviel", categoria: "Tecnología" },
        { espanol: "internet", kibotashi: "zurenai", categoria: "Tecnología" },
        { espanol: "correo", kibotashi: "maviel", categoria: "Comunicación" },
        { espanol: "mensaje", kibotashi: "tavren", categoria: "Comunicación" },
        { espanol: "voz", kibotashi: "lireth", categoria: "Comunicación" },
        { espanol: "escuchar", kibotashi: "shaviel", categoria: "Acción" },
        { espanol: "mirar", kibotashi: "kurelth", categoria: "Acción" },
        { espanol: "tocar", kibotashi: "naviel", categoria: "Acción" },
        { espanol: "oler", kibotashi: "zavun", categoria: "Acción" },
        { espanol: "saborear", kibotashi: "mirelsh", categoria: "Acción" },
        { espanol: "sentir", kibotashi: "tavunel", categoria: "Acción" },
        { espanol: "pensamiento", kibotashi: "kaviel", categoria: "Acción mental" },
        { espanol: "lluvia suave", kibotashi: "zariel", categoria: "Naturaleza" },
        { espanol: "lluvia intensa", kibotashi: "zarunel", categoria: "Naturaleza" },
        { espanol: "corriente", kibotashi: "zareth", categoria: "Naturaleza" },
        { espanol: "charco", kibotashi: "zaril", categoria: "Naturaleza" },
        { espanol: "río", kibotashi: "zarunor", categoria: "Naturaleza" },
        { espanol: "humedad", kibotashi: "zarim", categoria: "Entorno" },
        { espanol: "niebla húmeda", kibotashi: "zarvai", categoria: "Entorno" },
        { espanol: "gota", kibotashi: "zari", categoria: "Naturaleza" },
        { espanol: "mar", kibotashi: "zaruai", categoria: "Lugar" },
        { espanol: "agua bendita", kibotashi: "zarael", categoria: "Valor" },
        { espanol: "suelo fértil", kibotashi: "feolin", categoria: "Naturaleza" },
        { espanol: "polvo", kibotashi: "feolar", categoria: "Naturaleza" },
        { espanol: "terreno", kibotashi: "feoren", categoria: "Lugar" },
        { espanol: "piedra", kibotashi: "feorun", categoria: "Naturaleza" },
        { espanol: "montículo", kibotashi: "feolai", categoria: "Lugar" },
        { espanol: "ceniza", kibotashi: "feolun", categoria: "Naturaleza" },
        { espanol: "lodo", kibotashi: "zarfeol", categoria: "Combinado" },
        { espanol: "caverna", kibotashi: "feolur", categoria: "Lugar" },
        { espanol: "raíz", kibotashi: "feomir", categoria: "Naturaleza" },
        { espanol: "semilla", kibotashi: "feonel", categoria: "Naturaleza" },
        { espanol: "tormenta", kibotashi: "vaareth", categoria: "Naturaleza" },
        { espanol: "brisa", kibotashi: "vaarel", categoria: "Entorno" },
        { espanol: "susurro de aire", kibotashi: "vaarin", categoria: "Entorno" },
        { espanol: "remolino", kibotashi: "vaalur", categoria: "Naturaleza" },
        { espanol: "aliento", kibotashi: "vaor", categoria: "Cuerpo" },
        { espanol: "norte", kibotashi: "vaaron", categoria: "Ubicación" },
        { espanol: "viento cálido", kibotashi: "vaarun", categoria: "Entorno" },
        { espanol: "eco del viento", kibotashi: "vaelei", categoria: "Entorno" },
        { espanol: "vuelo", kibotashi: "vaelen", categoria: "Acción" },
        { espanol: "aire puro", kibotashi: "vaerel", categoria: "Valor" },
        // Nuevas entradas de glosario relacionadas con el sol y el tiempo
        { espanol: "amanecer", kibotashi: "kuarin", categoria: "Tiempo" },
        { espanol: "mediodía", kibotashi: "kuarev", categoria: "Tiempo" },
        { espanol: "rayos del sol", kibotashi: "kuariel", categoria: "Naturaleza" },
        { espanol: "brillo", kibotashi: "kuaren", categoria: "Valor" },
        { espanol: "calor del sol", kibotashi: "kuareth", categoria: "Entorno" },
        { espanol: "resplandor", kibotashi: "kuavir", categoria: "Naturaleza" },
        { espanol: "sequía", kibotashi: "kuarun", categoria: "Naturaleza" },
        { espanol: "día soleado", kibotashi: "kuarai", categoria: "Entorno" },
        { espanol: "solsticio", kibotashi: "kuarvel", categoria: "Tiempo" },
        { espanol: "claridad", kibotashi: "kuanev", categoria: "Valor" }
    ];

    console.log("Longitud de allGlossaryData al inicio:", allGlossaryData.length);

    const itemsPerPage = 10;
    let currentPage = 1;
    let filteredGlossary = [];

    const glosarioBody = document.getElementById('glosario-body');
    const filtroPalabraInput = document.getElementById('filtro-palabra');
    const filtroCategoriaSelect = document.getElementById('filtro-categoria');
    const buscarPalabraBtn = document.getElementById('buscar-palabra-btn');
    const prevPageBtn = document.getElementById('prev-page');
    const nextPageBtn = document.getElementById('next-page');
    const pageInfoSpan = document.getElementById('page-info');

    // Función para renderizar la tabla del glosario con paginación y filtros
    function renderGlossary() {
        console.log("renderGlossary llamado.");
        const textFilter = filtroPalabraInput ? filtroPalabraInput.value.toLowerCase() : '';
        const categoryFilter = filtroCategoriaSelect ? filtroCategoriaSelect.value : '';

        console.log("Filtro de texto (valor actual):", textFilter);
        console.log("Filtro de categoría (valor actual):", categoryFilter);


        // Aplica los filtros
        filteredGlossary = allGlossaryData.filter(item => {
            const matchesText = (textFilter === "" || item.espanol.toLowerCase().includes(textFilter) || item.kibotashi.toLowerCase().includes(textFilter));
            const matchesCategory = (categoryFilter === "" || item.categoria === categoryFilter);
            return matchesText && matchesCategory;
        });

        // Ordena el glosario filtrado por categoría y luego por palabra en español
        filteredGlossary.sort((a, b) => {
            if (a.categoria < b.categoria) return -1;
            if (a.categoria > b.categoria) return 1;
            if (a.espanol < b.espanol) return -1;
            if (a.espanol > b.espanol) return 1;
            return 0;
        });

        const totalPages = Math.ceil(filteredGlossary.length / itemsPerPage);

        console.log("Longitud del glosario filtrado:", filteredGlossary.length);
        console.log("Elementos por página:", itemsPerPage);
        console.log("Total de páginas:", totalPages);
        console.log("Página actual (antes del ajuste):", currentPage);


        // Ajusta la página actual si está fuera de los límites después de filtrar
        if (currentPage > totalPages && totalPages > 0) {
            currentPage = totalPages;
        } else if (totalPages === 0) {
            currentPage = 0; // No hay páginas si no hay resultados
        } else if (currentPage === 0 && totalPages > 0) {
            currentPage = 1; // Reinicia a la primera página si no hay página seleccionada pero hay resultados
        }

        console.log("Página actual (después del ajuste):", currentPage);


        // Obtiene los elementos para la página actual
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const itemsToDisplay = filteredGlossary.slice(startIndex, endIndex);

        console.log("Elementos a mostrar (slice):", itemsToDisplay);


        // Limpia las filas existentes de la tabla
        if(glosarioBody) glosarioBody.innerHTML = '';

        // Rellena la tabla con los elementos a mostrar
        if (itemsToDisplay.length === 0) {
            if (glosarioBody) {
                const noResultsRow = glosarioBody.insertRow();
                const cell = noResultsRow.insertCell(0);
                cell.colSpan = 4;
                cell.textContent = "No se encontraron resultados.";
                cell.style.textAlign = "center";
                cell.style.padding = "20px";
            }
        } else {
            itemsToDisplay.forEach(item => {
                if (glosarioBody) {
                    const row = glosarioBody.insertRow();
                    row.innerHTML = `
                        <td>${item.espanol}</td>
                        <td>${item.kibotashi}</td>
                        <td>${item.categoria}</td>
                        <td><audio src="audios/placeholder.mp3" preload="auto"></audio><button class="play-button" data-audio="audios/placeholder.mp3">Reproducir</button></td>
                    `;
                }
            });
        }

        // Actualiza la información de paginación
        if(pageInfoSpan) pageInfoSpan.textContent = `Página ${currentPage || 0} de ${totalPages || 0}`;

        // Habilita/deshabilita los botones de paginación
        if(prevPageBtn) prevPageBtn.disabled = currentPage <= 1;
        if(nextPageBtn) nextPageBtn.disabled = currentPage >= totalPages;

        // Vuelve a adjuntar los escuchadores de eventos para los botones de reproducción recién creados
        glosarioBody.querySelectorAll('button.play-button[data-audio]').forEach(button => {
            button.addEventListener('click', function() {
                const audio = this.previousElementSibling; // Obtiene la etiqueta de audio
                audio.play().catch(e => console.error("Error al reproducir audio:", e));
            });
        });
    }

    // Escuchadores de eventos para la paginación
    if(prevPageBtn) {
        prevPageBtn.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                renderGlossary();
            }
        });
    }

    if(nextPageBtn) {
        nextPageBtn.addEventListener('click', () => {
            const totalPages = Math.ceil(filteredGlossary.length / itemsPerPage);
            if (currentPage < totalPages) {
                currentPage++;
                renderGlossary();
            }
        });
    }

    // Escuchador de eventos para el clic en el botón "Buscar"
    if(buscarPalabraBtn) {
        buscarPalabraBtn.addEventListener('click', () => {
            currentPage = 1; // Reinicia a la primera página al cambiar el filtro
            renderGlossary();
        });
    }

    // Escuchador de eventos para el cambio de filtro de categoría (también activa el renderizado inmediato)
    if(filtroCategoriaSelect) {
        filtroCategoriaSelect.addEventListener('change', () => {
            currentPage = 1; // Reinicia a la primera página al cambiar el filtro
            renderGlossary();
        });
    }

    // Renderizado inicial del glosario (muestra las primeras 10 palabras por defecto)
    renderGlossary();

    // Lógica para el botón "Entrar al Mundo" y las intros de audio/scroll
    const enterWorldButton = document.getElementById('enter-world-button');
    const gameStartAudio = document.getElementById('game-start-audio');
    const heroicIntroAudio = document.getElementById('heroic-intro-audio');
    const voiceIntroAudio = document.getElementById('voice-intro-audio');
    const mainContent = document.getElementById('main-content');
    const introSection = document.getElementById('intro'); // Referencia a la sección de intro para el scroll

    if (enterWorldButton && gameStartAudio && heroicIntroAudio && voiceIntroAudio && mainContent && introSection) {
        enterWorldButton.addEventListener('click', async function(event) {
            event.preventDefault(); // Previene el comportamiento de ancla por defecto

            // Reanuda el AudioContext de Tone.js con el gesto del usuario
            if (Tone.context.state !== 'running') {
                await Tone.start();
                console.log('AudioContext de Tone.js reanudado!');
            }

            // Reproduce el audio de inicio de juego (efecto de sonido corto)
            gameStartAudio.play().catch(e => console.error("Error al reproducir el audio de inicio de juego:", e));

            // Desactiva el silencio y reproduce la música de intro heroica
            // ¡Importante! Asegúrate de que 'heroic-intro.mp3' tenga el atributo 'loop' en tu HTML si quieres que se repita hasta que la voz termine.
            heroicIntroAudio.muted = false;
            heroicIntroAudio.play().catch(e => console.error("Error al reproducir la música de intro heroica:", e));

            // Desactiva el silencio y reproduce el audio de voz de la intro
            voiceIntroAudio.muted = false;
            voiceIntroAudio.play().catch(e => console.error("Error al reproducir el audio de voz de la intro:", e));

            // Muestra el contenido principal y desplaza INMEDIATAMENTE
            mainContent.style.display = 'block'; // Muestra el resto del contenido
            introSection.scrollIntoView({ behavior: 'smooth' }); // Desplaza a la sección de intro

            // Cuando el audio de voz de la intro termina, pausa la música heroica
            voiceIntroAudio.onended = function() {
                console.log("El audio de voz de la intro ha terminado. Pausando música heroica.");
                heroicIntroAudio.pause();
                heroicIntroAudio.currentTime = 0; // Reinicia la música para futuras reproducciones
            };

            // Fallback: Si por alguna razón el evento 'onended' de voiceIntroAudio no se dispara,
            // nos aseguramos de que la música heroica se detenga después de un tiempo prudencial.
            // Esto es una medida de seguridad, ya que la reproducción y los eventos pueden ser complejos en diferentes navegadores.
            setTimeout(() => {
                if (!voiceIntroAudio.paused && !voiceIntroAudio.ended) { // Si la voz sigue sonando (o nunca terminó)
                    console.warn("Fallback: La voz de la intro no terminó. Pausando música heroica después de 44 segundos.");
                    heroicIntroAudio.pause();
                    heroicIntroAudio.currentTime = 0;
                }
            }, 44000); // Ajusta este tiempo si tu 'voice-intro.wav' dura más de 15 segundos.
        });
    }

    // Oculta el contenido principal inicialmente
    if (mainContent) {
        mainContent.style.display = 'none';
    }
});
