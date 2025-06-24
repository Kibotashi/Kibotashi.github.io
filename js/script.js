document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Theme toggle functionality
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    // Check for saved theme preference or default to light
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
        htmlElement.classList.add('dark-mode');
        themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i> Modo Claro';
    } else {
        themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i> Modo Oscuro';
    }

    themeToggleBtn.addEventListener('click', () => {
        if (htmlElement.classList.contains('dark-mode')) {
            htmlElement.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
            themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i> Modo Oscuro';
        } else {
            htmlElement.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
            themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i> Modo Claro';
        }
    });

    // Intersection Observer for fade-in effect on sections
    const sections = document.querySelectorAll('section');
    const options = {
        root: null, // relative to the viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% of the section must be visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Hamburger menu functionality for mobile
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active'); // Toggle active class for hamburger too
        });

        // Close menu when a link is clicked (for mobile)
        document.querySelectorAll('.nav-menu li a').forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    hamburger.classList.remove('active');
                }
            });
        });
    }

    // Audio Playback for .play-button elements (for specific audio files like from audio section)
    document.querySelectorAll('button.play-button[data-audio]').forEach(button => {
        button.addEventListener('click', function() {
            const audioSrc = this.dataset.audio;
            if (audioSrc) {
                const audio = new Audio(audioSrc);
                audio.play().catch(e => console.error("Error playing audio:", e));
            } else {
                console.warn("No audio source defined for this button.");
            }
        });
    });

    // Audio Playback for .play-button elements that use text-to-speech
    document.querySelectorAll('button.play-button[data-text]').forEach(button => {
        button.addEventListener('click', function() {
            const textToSpeak = this.dataset.text;
            if (textToSpeak) {
                window.speakText(textToSpeak);
            } else {
                console.warn("No text defined for this button to speak.");
            }
        });
    });

    // Function to speak text using Web Speech API
    window.speakText = function(text) {
        if ('speechSynthesis' in window) {
            const synth = window.speechSynthesis;
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'es-LA'; // Set to Latin American Spanish

            // Find a suitable voice
            let voice = synth.getVoices().find(v => v.lang === 'es-LA' && v.name.includes('female'));
            if (!voice) {
                voice = synth.getVoices().find(v => v.lang.startsWith('es') && v.name.includes('female'));
            }
            if (!voice) {
                voice = synth.getVoices().find(v => v.lang.startsWith('es'));
            }
            utterance.voice = voice;

            synth.speak(utterance);
        } else {
            console.warn("Speech Synthesis not supported in this browser.");
        }
    };

    // Constructor functionality (example data - expand as needed)
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


    // Populate selects
    function populateSelect(selectElement, data, addEmptyOption = true) {
        if (!selectElement) {
            console.error("populateSelect: selectElement is null for data", data);
            return;
        }
        selectElement.innerHTML = '';
        if (addEmptyOption) {
            const option = document.createElement('option');
            option.value = "";
            option.textContent = data === pronouns ? "Selecciona un pronombre" :
                                 data === verbs ? "Selecciona un verbo" :
                                 data === objects ? "Selecciona un objeto" :
                                 "Selecciona";
            selectElement.appendChild(option);
        }
        for (const key in data) {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = data[key];
            selectElement.appendChild(option);
        }
    }

    populateSelect(pronounSelect, pronouns);
    populateSelect(verbSelect, verbs);
    populateSelect(objectSelect, objects);

    // Manually populate tense select as it has different structure
    if (tenseSelect) {
        tenseSelect.innerHTML = `
            <option value="">Selecciona un tiempo</option>
            <option value="presente">Presente</option>
            <option value="pasado">Pasado</option>
            <option value="futuro">Futuro</option>
        `;
    } else {
        console.error("tenseSelect is null");
    }

    // Manually populate emotion select
    if (emotionSelect) {
        emotionSelect.innerHTML = `
            <option value="tono neutro">Tono Neutro</option>
            <option value="alegre">Alegre</option>
            <option value="triste">Triste</option>
            <option value="enojado">Enojado</option>
            <option value="sorprendido">Sorprendido</option>
        `;
    } else {
        console.error("emotionSelect is null");
    }


    window.buildPhrase = function() {
        if (randomizeCheckbox && randomizeCheckbox.checked) {
            const randomPronounKey = Object.keys(pronouns)[Math.floor(Math.random() * Object.keys(pronouns).length)];
            const randomVerbKey = Object.keys(verbs)[Math.floor(Math.random() * Object.keys(verbs).length)];
            const randomTenseKey = Object.keys(tenses)[Math.floor(Math.random() * Object.keys(tenses).length)];
            const randomObjectKey = Object.keys(objects)[Math.floor(Math.random() * Object.keys(objects).length)];

            if (pronounSelect) pronounSelect.value = randomPronounKey;
            if (verbSelect) verbSelect.value = randomVerbKey;
            if (tenseSelect) tenseSelect.value = randomTenseKey;
            if (objectSelect) objectSelect.value = randomObjectKey;
            if (negationCheckbox) negationCheckbox.checked = Math.random() > 0.5; // Random true/false
            if (moodSelect) moodSelect.value = Math.random() > 0.5 ? 'indicativo' : 'condicional';
            // Ensure affixSelect and emotionSelect have options before randomizing
            if (affixSelect && affixSelect.options.length > 0) {
                 affixSelect.value = affixSelect.options[Math.floor(Math.random() * affixSelect.options.length)].value;
            }
            if (emotionSelect && emotionSelect.options.length > 0) {
                emotionSelect.value = emotionSelect.options[Math.floor(Math.random() * emotionSelect.options.length)].value;
            }
        }

        const selectedPronoun = pronounSelect ? pronounSelect.value : '';
        const selectedVerb = verbSelect ? verbSelect.value : '';
        const selectedTense = tenseSelect ? tenseSelect.value : '';
        const selectedObject = objectSelect ? objectSelect.value : '';
        const isNegated = negationCheckbox ? negationCheckbox.checked : false;
        const selectedMood = moodSelect ? moodSelect.value : '';
        const selectedAffix = affixSelect ? affixSelect.value : '';
        const selectedEmotion = emotionSelect ? emotionSelect.value : '';


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

        // Apply tense
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

        // Apply negation
        if (isNegated) {
            kibotashiVerb = "Ne" + kibotashiVerb;
            phraseMeaning = `No ${phraseMeaning}`;
        }

        // Apply mood (simplified)
        if (selectedMood === "condicional") {
            kibotashiVerb += "-ka"; // Example conditional affix
            phraseMeaning += " (condicional)";
        }

        // Apply affix
        if (selectedAffix) {
            // This is a simplified application. Real affix might change the word.
            kibotashiVerb += selectedAffix;
            phraseMeaning += ` con ${selectedAffix} (${affixSelect.options[affixSelect.selectedIndex].textContent})`;
        }

        // Apply emotion (simplified for phrase meaning)
        if (selectedEmotion && selectedEmotion !== "tono neutro") {
            phraseMeaning += ` [Tono: ${emotionSelect.options[emotionSelect.selectedIndex].textContent}]`;
        }

        let fullKibotashiPhrase = kibotashiVerb;
        let fullMeaning = phraseMeaning;

        if (selectedObject) {
            fullKibotashiPhrase += ` ${selectedObject}`;
            fullMeaning += ` ${objects[selectedObject]}`;
        }

        // Placeholder IPA (you'd need a more complex system to generate real IPA)
        ipaPronunciation = `/${fullKibotashiPhrase.toLowerCase().replace(/[^a-z]/g, '')}/`;

        if(kibotashiPhraseOutput) kibotashiPhraseOutput.textContent = fullKibotashiPhrase;
        if(ipaPhraseOutput) ipaPhraseOutput.textContent = ipaPronunciation;
        if(meaningPhraseOutput) meaningPhraseOutput.textContent = fullMeaning;
        if(constructorOutputDiv) constructorOutputDiv.style.display = 'block';

        // --- NEW: Trigger glossary search with the constructed phrase ---
        // Set the glossary search input value
        if (filtroPalabraInput) {
            filtroPalabraInput.value = fullKibotashiPhrase;
        }
        // Reset current page and render the glossary to apply the search
        currentPage = 1;
        renderGlossary();
        // Scroll to the glossary section for immediate feedback
        const glosarioSection = document.getElementById('glosario');
        if (glosarioSection) {
            glosarioSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    window.speakConstructedPhrase = function() {
        const textToSpeak = kibotashiPhraseOutput.textContent;
        if (textToSpeak) {
            window.speakText(textToSpeak);
        }
    };

    // Event listeners for changes in constructor selects (moved here)
    if (pronounSelect) pronounSelect.addEventListener('change', window.buildPhrase);
    if (verbSelect) verbSelect.addEventListener('change', window.buildPhrase);
    if (tenseSelect) tenseSelect.addEventListener('change', window.buildPhrase);
    if (objectSelect) objectSelect.addEventListener('change', window.buildPhrase);
    if (negationCheckbox) negationCheckbox.addEventListener('change', window.buildPhrase);
    if (moodSelect) moodSelect.addEventListener('change', window.buildPhrase);
    if (affixSelect) affixSelect.addEventListener('change', window.buildPhrase);
    if (emotionSelect) emotionSelect.addEventListener('change', window.buildPhrase);
    if (randomizeCheckbox) randomizeCheckbox.addEventListener('change', window.buildPhrase);

    // Event listeners for Constructor buttons (added here)
    if (buildPhraseBtn) {
        buildPhraseBtn.addEventListener('click', window.buildPhrase);
    }
    if (speakConstructedPhraseBtn) {
        speakConstructedPhraseBtn.addEventListener('click', window.speakConstructedPhrase);
    }

    // Function to scroll to top
    window.scrollToTop = function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Show/hide scroll to top button
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

    // --- Glosario Data and Pagination Logic ---

    // All glossary data
    const allGlossaryData = [
        // Existing vocabulary
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
        { espanol: "colador", kibotashi: "shuren", categoria: "Utensilio" },
        // New entries from previous steps
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

    console.log("Longitud de allGlossaryData al inicio:", allGlossaryData.length); // NEW LOG

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

    // Function to render the glossary table with pagination and filters
    function renderGlossary() {
        console.log("renderGlossary called.");
        const textFilter = filtroPalabraInput ? filtroPalabraInput.value.toLowerCase() : '';
        const categoryFilter = filtroCategoriaSelect ? filtroCategoriaSelect.value : '';

        console.log("Text Filter (actual value):", textFilter); // NEW LOG
        console.log("Category Filter (actual value):", categoryFilter); // NEW LOG


        // Apply filters
        filteredGlossary = allGlossaryData.filter(item => {
            const matchesText = (textFilter === "" || item.espanol.toLowerCase().includes(textFilter) || item.kibotashi.toLowerCase().includes(textFilter));
            const matchesCategory = (categoryFilter === "" || item.categoria === categoryFilter);
            return matchesText && matchesCategory;
        });

        // Sort filteredGlossary by category and then by Spanish word for consistent pagination
        filteredGlossary.sort((a, b) => {
            if (a.categoria < b.categoria) return -1;
            if (a.categoria > b.categoria) return 1;
            if (a.espanol < b.espanol) return -1;
            if (a.espanol > b.espanol) return 1;
            return 0;
        });

        const totalPages = Math.ceil(filteredGlossary.length / itemsPerPage);

        console.log("Filtered Glossary Length:", filteredGlossary.length);
        console.log("Items Per Page:", itemsPerPage);
        console.log("Total Pages:", totalPages);
        console.log("Current Page (before adjustment):", currentPage);


        // Adjust current page if it's out of bounds after filtering
        if (currentPage > totalPages && totalPages > 0) {
            currentPage = totalPages;
        } else if (totalPages === 0) {
            currentPage = 0; // No pages if no results
        } else if (currentPage === 0 && totalPages > 0) {
            currentPage = 1; // Reset to first page if no page selected but results exist
        }

        console.log("Current Page (after adjustment):", currentPage);


        // Get items for the current page
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const itemsToDisplay = filteredGlossary.slice(startIndex, endIndex);

        console.log("Items to Display (slice):", itemsToDisplay);


        // Clear existing rows
        if(glosarioBody) glosarioBody.innerHTML = '';

        // Populate table with itemsToDisplay
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

        // Update pagination info
        if(pageInfoSpan) pageInfoSpan.textContent = `Página ${currentPage || 0} de ${totalPages || 0}`;

        // Enable/disable pagination buttons
        if(prevPageBtn) prevPageBtn.disabled = currentPage <= 1;
        if(nextPageBtn) nextPageBtn.disabled = currentPage >= totalPages;

        // Re-attach play button event listeners for newly created buttons
        glosarioBody.querySelectorAll('button.play-button[data-audio]').forEach(button => {
            button.addEventListener('click', function() {
                const audio = this.previousElementSibling; // Get the audio tag
                audio.play().catch(e => console.error("Error playing audio:", e));
            });
        });
    }

    // Event listeners for pagination
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

    // Event listener for "Buscar" button click
    if(buscarPalabraBtn) {
        buscarPalabraBtn.addEventListener('click', () => {
            currentPage = 1; // Reset to first page on filter change
            renderGlossary();
        });
    }


    // Event listener for category filter change (still triggers immediate render)
    if(filtroCategoriaSelect) {
        filtroCategoriaSelect.addEventListener('change', () => {
            currentPage = 1; // Reset to first page on filter change
            renderGlossary();
        });
    }

    // Initial render of the glossary (shows first 10 words by default)
    renderGlossary();

    // Event listener for the "Enter the World" button
    const enterWorldButton = document.getElementById('enter-world-button');
    const gameStartAudio = document.getElementById('game-start-audio');
    const heroicIntroAudio = document.getElementById('heroic-intro-audio');
    const voiceIntroAudio = document.getElementById('voice-intro-audio');
    const mainContent = document.getElementById('main-content');

    if (enterWorldButton && gameStartAudio && heroicIntroAudio && voiceIntroAudio && mainContent) {
        enterWorldButton.addEventListener('click', async function(event) { // Make it async
            event.preventDefault();

            // Resume Tone.js AudioContext on user gesture
            if (Tone.context.state !== 'running') {
                await Tone.start();
                console.log('AudioContext resumed!');
            }

            // Play the game start audio
            gameStartAudio.play().catch(e => console.error("Error playing game start audio:", e)); // Added catch

            // After a short delay, start the heroic intro music and voice
            setTimeout(() => {
                heroicIntroAudio.muted = false;
                heroicIntroAudio.play().catch(e => console.error("Error playing heroic intro audio:", e));

                voiceIntroAudio.muted = false;
                voiceIntroAudio.play().catch(e => console.error("Error playing voice intro audio:", e));
            }, 500); // Start music/voice after 0.5 seconds

            // Smooth scroll to the intro section
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // After a longer delay, stop the intro music and show main content
            setTimeout(() => {
                heroicIntroAudio.pause();
                heroicIntroAudio.currentTime = 0; // Reset audio to beginning
                voiceIntroAudio.pause();
                voiceIntroAudio.currentTime = 0;

                mainContent.style.display = 'block'; // Show the rest of the content
            }, 10000); // Adjust this delay based on your audio lengths
        });
    }

    // Hide main content initially (assuming hero section is the first thing users see)
    if (mainContent) {
        mainContent.style.display = 'none';
    }
});
