document.addEventListener('DOMContentLoaded', () => {
    // --- Global Elements ---
    const htmlElement = document.documentElement;
    const themeToggle = document.getElementById('theme-toggle');
    const sections = document.querySelectorAll('section');
    const btnTop = document.getElementById('btnTop');
    const fixedNav = document.querySelector('nav'); // Reference to the fixed navigation bar

    // --- Hero Section Audio ---
    const enterWorldButton = document.getElementById('enter-world-button');
    const gameStartAudio = document.getElementById('game-start-audio');
    const heroicIntroAudio = document.getElementById('heroic-intro-audio');
    const voiceIntroAudio = document.getElementById('voice-intro-audio');

    // --- Navigation ---
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = navMenu.querySelectorAll('a, button'); // All clickable elements in menu

    // --- Phrase Constructor Elements ---
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
    const constructorOutput = document.getElementById('constructor-output');
    const kibotashiPhraseSpan = document.getElementById('kibotashi-phrase');
    const ipaPhraseSpan = document.getElementById('ipa-phrase');
    const meaningPhraseSpan = document.getElementById('meaning-phrase');
    const speakConstructedPhraseBtn = document.getElementById('speak-constructed-phrase-btn');

    // --- Audio Section Elements ---
    const playButtons = document.querySelectorAll('.play-button');

    // --- Glossary Elements ---
    const filtroPalabra = document.getElementById('filtro-palabra');
    const buscarPalabraBtn = document.getElementById('buscar-palabra-btn');
    const filtroCategoria = document.getElementById('filtro-categoria');
    const glosarioBody = document.getElementById('glosario-body');
    const prevPageBtn = document.getElementById('prev-page');
    const nextPageBtn = document.getElementById('next-page');
    const pageInfoSpan = document.getElementById('page-info');

    // --- Data for Phrase Constructor and Glossary ---
    const data = {
        pronouns: [
            { kibotashi: 'Ena', spanish: 'Yo', ipa: '/e.na/' },
            { kibotashi: 'Lun', spanish: 'Yo (poético)', ipa: '/lun/' },
            { kibotashi: 'Bua', spanish: 'Tú', ipa: '/bua/' },
            { kibotashi: 'Sual', spanish: 'Él/Ella', ipa: '/su.al/' },
            { kibotashi: 'Nual', spanish: 'Nosotros', ipa: '/nu.al/' }
        ],
        verbs: [
            { kibotashi: 'Ta', spanish: 'Ser', ipa: '/ta/' },
            { kibotashi: 'Ni', spanish: 'Estar', ipa: '/ni/' },
            { kibotashi: 'Kel', spanish: 'Tener', ipa: '/kel/' },
            { kibotashi: 'Mir', spanish: 'Hacer', ipa: '/miʁ/' },
            { kibotashi: 'Bin', spanish: 'Sentir', ipa: '/bin/' },
            { kibotashi: 'Jan', spanish: 'Ir', ipa: '/ʒan/' },
            { kibotashi: 'Vael', spanish: 'Decir', ipa: '/ˈva.el/' },
            { kibotashi: 'Zar', spanish: 'Saber', ipa: '/zaʁ/' },
            { kibotashi: 'Katun', spanish: 'Querer', ipa: '/ˈka.tun/' },
            { kibotashi: 'Solv', spanish: 'Poder', ipa: '/solv/' }
        ],
        tenses: [
            { name: 'Presente', suffix: '', spanish: 'Presente' },
            { name: 'Pasado', suffix: 'or', spanish: 'Pasado' },
            { name: 'Futuro', suffix: 'el', spanish: 'Futuro' }
        ],
        conjugations: {
            // Base verb 'Ta' (ser) conjugation examples. Add more if needed.
            'Ta': {
                'Ena': { presente: 'Tao', pasado: 'Taor', futuro: 'Tael' },
                'Bua': { presente: 'Tua', pasado: 'Tauor', futuro: 'Tuel' },
                'Sual': { presente: 'Tai', pasado: 'Tair', futuro: 'Taiel' },
                'Nual': { presente: 'Tanal', pasado: 'Tanor', futuro: 'Tanel' }
            }
        },
        objects: [
            { kibotashi: 'Katen', spanish: 'mi amor', ipa: '/ˈka.ten/' },
            { kibotashi: 'Kuren', spanish: 'amigo', ipa: '/ˈku.ʁen/' },
            { kibotashi: 'Tovar', spanish: 'voz', ipa: '/ˈto.var/' },
            { kibotashi: 'Naviirsa', spanish: 'su pareja', ipa: '/na.ˈviʁ.sa/' },
            { kibotashi: 'Alma', spanish: 'alma', ipa: '/ˈal.ma/' }
        ],
        affixes: [
            { value: 'ul', meaning: 'cariño suave', applyTo: 'noun', kibotashi: '-ul' },
            { value: 'ei', meaning: 'íntimo', applyTo: 'noun', kibotashi: '-ei' },
            { value: 'an', meaning: 'confianza', applyTo: 'noun', kibotashi: '-an' }
        ],
        // Example Glossary Data (Expanded for demonstration)
        glossary: [
            { spanish: 'Lluvia suave', kibotashi: 'Zariel', category: 'Naturaleza', ipa: '/ˈza.ɾjel/' },
            { spanish: 'Lluvia intensa', kibotashi: 'Zarunel', category: 'Naturaleza', ipa: '/ˈza.ɾu.nel/' },
            { spanish: 'Corriente', kibotashi: 'Zareth', category: 'Naturaleza', ipa: '/ˈza.ɾeθ/' },
            { spanish: 'Charco', kibotashi: 'Zaril', category: 'Naturaleza', ipa: '/ˈza.ɾil/' },
            { spanish: 'Río', kibotashi: 'Zarunor', category: 'Naturaleza', ipa: '/ˈza.ɾu.noɾ/' },
            { spanish: 'Humedad', kibotashi: 'Zarim', category: 'Entorno', ipa: '/ˈza.ɾim/' },
            { spanish: 'Niebla húmeda', kibotashi: 'Zarvai', category: 'Entorno', ipa: '/ˈzaɾ.vai/' },
            { spanish: 'Gota', kibotashi: 'Zari', category: 'Naturaleza', ipa: '/ˈza.ɾi/' },
            { spanish: 'Mar', kibotashi: 'Zaruai', category: 'Lugar', ipa: '/ˈza.ɾu.ai/' },
            { spanish: 'Agua bendita', kibotashi: 'Zarael', category: 'Valor', ipa: '/ˈza.ɾa.el/' }
            { spanish: 'Suelo fértil', kibotashi: 'Feolin', category: 'Naturaleza', ipa: '/ˈfe.o.lin/' },
            { spanish: 'Polvo', kibotashi: 'Feolar', category: 'Naturaleza', ipa: '/ˈfe.o.laɾ/' },
            { spanish: 'Terreno', kibotashi: 'Feoren', category: 'Lugar', ipa: '/ˈfe.o.ɾen/' },
            { spanish: 'Piedra', kibotashi: 'Feorun', category: 'Naturaleza', ipa: '/ˈfe.o.ɾun/' },
            { spanish: 'Montículo', kibotashi: 'Feolai', category: 'Lugar', ipa: '/ˈfe.o.lai/' },
            { spanish: 'Ceniza', kibotashi: 'Feolun', category: 'Naturaleza', ipa: '/ˈfe.o.lun/' },
            { spanish: 'Lodo', kibotashi: 'Zarfeol', category: 'Combinado', ipa: '/ˈzaɾ.fe.ol/' },
            { spanish: 'Caverna', kibotashi: 'Feolur', category: 'Lugar', ipa: '/ˈfe.o.luɾ/' },
            { spanish: 'Raíz', kibotashi: 'Feomir', category: 'Naturaleza', ipa: '/ˈfe.o.miɾ/' },
            { spanish: 'Semilla', kibotashi: 'Feonel', category: 'Naturaleza', ipa: '/ˈfe.o.nel/' }
            { spanish: 'Tormenta', kibotashi: 'Vaareth', category: 'Naturaleza', ipa: '/ˈva.a.ɾeθ/' },
            { spanish: 'Brisa', kibotashi: 'Vaarel', category: 'Entorno', ipa: '/ˈva.a.ɾel/' },
            { spanish: 'Susurro de aire', kibotashi: 'Vaarin', category: 'Entorno', ipa: '/ˈva.a.ɾin/' },
            { spanish: 'Remolino', kibotashi: 'Vaalur', category: 'Naturaleza', ipa: '/ˈva.a.luɾ/' },
            { spanish: 'Aliento', kibotashi: 'Vaor', category: 'Cuerpo', ipa: '/ˈva.oɾ/' },
            { spanish: 'Norte', kibotashi: 'Vaaron', category: 'Ubicación', ipa: '/ˈva.a.ɾon/' },
            { spanish: 'Viento cálido', kibotashi: 'Vaarun', category: 'Entorno', ipa: '/ˈva.a.ɾun/' },
            { spanish: 'Eco del viento', kibotashi: 'Vaelei', category: 'Entorno', ipa: '/ˈva.e.lei/' },
            { spanish: 'Vuelo', kibotashi: 'Vaelen', category: 'Acción', ipa: '/ˈva.e.len/' },
            { spanish: 'Aire puro', kibotashi: 'Vaerel', category: 'Valor', ipa: '/ˈva.e.ɾel/' }
            { spanish: 'Amor', kibotashi: 'Kat', category: 'Emoción', ipa: '/kat/' },
            { spanish: 'Alegría', kibotashi: 'Biné', category: 'Emociones', ipa: '/ˈbi.ne/' },
            { spanish: 'Ternura', kibotashi: 'Kol', category: 'Emociones', ipa: '/kol/' },
            { spanish: 'Ternura íntima', kibotashi: 'Tin', category: 'Emociones', ipa: '/tin/' },
            { spanish: 'Calma interior', kibotashi: 'Mior', category: 'Emociones', ipa: '/ˈmjɔʁ/' },
            { spanish: 'Dolor emocional', kibotashi: 'Harun', category: 'Emociones', ipa: '/ˈha.ʁun/' },
            { spanish: 'Esperanza', kibotashi: 'Zinar', category: 'Emociones', ipa: '/ˈzi.naʁ/' },
            { spanish: 'Coraje', kibotashi: 'Brel', category: 'Emociones', ipa: '/bʁel/' },
            { spanish: 'Bien / equilibrio', kibotashi: 'Kéa', category: 'Emociones', ipa: '/ˈke.a/' },
            { spanish: 'Malestar', kibotashi: 'Ruom', category: 'Emociones', ipa: '/ʁu.om/' },
            { spanish: 'Agua', kibotashi: 'Zarun', category: 'Naturaleza', ipa: '/ˈza.ʁun/' },
            { spanish: 'Tierra', kibotashi: 'Feol', category: 'Naturaleza', ipa: '/fe.ol/' },
            { spanish: 'Viento', kibotashi: 'Vaar', category: 'Naturaleza', ipa: '/vaːʁ/' },
            { spanish: 'Sol', kibotashi: 'Kuar', category: 'Naturaleza', ipa: '/ˈkuaʁ/' },
            { spanish: 'Roca', kibotashi: 'Drin', category: 'Naturaleza', ipa: '/dʁin/' },
            { spanish: 'Mañana', kibotashi: 'Rinar', category: 'Tiempo', ipa: '/ˈʁi.naʁ/' },
            { spanish: 'Tarde', kibotashi: 'Taren', category: 'Tiempo', ipa: '/ˈta.ʁen/' },
            { spanish: 'Yo', kibotashi: 'Ena', category: 'Pronombre', ipa: '/ˈe.na/' },
            { spanish: 'Tú', kibotashi: 'Bua', category: 'Pronombre', ipa: '/ˈbu.a/' },
            { spanish: 'Él / Ella', kibotashi: 'Sual', category: 'Pronombre', ipa: '/ˈsu.al/' },
            { spanish: 'Nosotros', kibotashi: 'Nual', category: 'Pronombre', ipa: '/ˈnu.al/' },
            { spanish: 'Ser', kibotashi: 'Ta', category: 'Verbo', ipa: '/ta/' },
            { spanish: 'Estar', kibotashi: 'Ni', category: 'Verbo', ipa: '/ni/' },
            { spanish: 'Tener', kibotashi: 'Kel', category: 'Verbo', ipa: '/kel/' },
            { spanish: 'Hacer', kibotashi: 'Mir', category: 'Verbo', ipa: '/miʁ/' },
            { spanish: 'Sentir', kibotashi: 'Bin', category: 'Verbo', ipa: '/bin/' },
            { spanish: 'Ir', kibotashi: 'Jan', category: 'Verbo', ipa: '/ʒan/' },
            { spanish: 'Decir', kibotashi: 'Vael', category: 'Verbo', ipa: '/ˈva.el/' },
            { spanish: 'Saber', kibotashi: 'Zar', category: 'Verbo', ipa: '/zaʁ/' },
            { spanish: 'Querer', kibotashi: 'Katun', category: 'Verbo', ipa: '/ˈka.tun/' },
            { spanish: 'Poder', kibotashi: 'Solv', category: 'Verbo', ipa: '/solv/' }
         ].sort((a, b) => a.spanish.localeCompare(b.spanish)) // Sort glossary alphabetically by Spanish word
    };

    let currentPage = 1;
    const rowsPerPage = 10;
    let filteredGlossary = data.glossary; // Initialize with full glossary

    // --- Functions ---

    // Function to show a custom modal (replaces alert/confirm)
    function showCustomModal(message, type = 'alert') {
        const existingModal = document.querySelector('.custom-modal');
        if (existingModal) existingModal.remove();

        const modalDiv = document.createElement('div');
        modalDiv.className = 'custom-modal';
        modalDiv.innerHTML = `<p>${message}</p><button>Cerrar</button>`;
        document.body.appendChild(modalDiv);

        modalDiv.querySelector('button').addEventListener('click', () => {
            modalDiv.remove();
        });
    }

    // Function to handle smooth scrolling with fixed header offset
    function scrollToSection(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerOffset = fixedNav.offsetHeight; // Get height of your fixed nav
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset - 20; // -20 for a little extra space

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    }

    // Function for "Scroll to Top" button
    window.scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    // --- Hero Section Audio Logic ---
    enterWorldButton.addEventListener('click', (event) => {
        // Prevent default anchor link behavior for now, as we handle scroll manually
        event.preventDefault();

        // Play game start audio
        gameStartAudio.currentTime = 0;
        gameStartAudio.play();

        // After a short delay, start heroic intro and voice intro
        setTimeout(() => {
            heroicIntroAudio.muted = false;
            heroicIntroAudio.volume = 0.6; // Set a reasonable volume
            heroicIntroAudio.play();
        }, 500); // Start 0.5 seconds after button click sound

        setTimeout(() => {
            voiceIntroAudio.muted = false;
            voiceIntroAudio.volume = 0.8; // Set a reasonable volume
            voiceIntroAudio.play();
        }, 1500); // Start 1.5 seconds after button click sound

        // Scroll to the intro section after a delay to allow audio to start
        const targetElement = document.querySelector('#intro');
        if (targetElement) {
            const headerOffset = fixedNav.offsetHeight;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset - 20;

            setTimeout(() => {
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }, 2000); // Scroll after 2 seconds
        }
    });

    // --- Theme Toggle Logic ---
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        htmlElement.classList.add(currentTheme);
        themeToggle.textContent = currentTheme === 'dark-mode' ? 'Modo Claro' : 'Modo Oscuro';
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        htmlElement.classList.add('dark-mode');
        themeToggle.textContent = 'Modo Claro';
    } else {
        themeToggle.textContent = 'Modo Oscuro';
    }

    themeToggle.addEventListener('click', () => {
        if (htmlElement.classList.contains('dark-mode')) {
            htmlElement.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light-mode');
            themeToggle.textContent = 'Modo Oscuro';
        } else {
            htmlElement.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
            themeToggle.textContent = 'Modo Claro';
        }
    });

    // --- Section Visibility Animation (Intersection Observer) ---
    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // When 10% of the section is visible
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once visible if animation only plays once
                // observer.unobserve(entry.target);
            } else {
                // Optional: Remove 'visible' class if you want animation to re-trigger on scroll back
                // entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // --- Navigation (Hamburger Menu) Logic ---
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('is-active'); // For potential animation of the icon
    });

    // Close menu when a link is clicked (for smooth scrolling and mobile UX)
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('is-active');
            }
            // Use the custom smooth scrolling function
            scrollToSection.call(link, event);
        });
    });

    // --- Character Cell Audio Playback ---
    const characterCells = document.querySelectorAll('.character-cell');
    characterCells.forEach(cell => {
        cell.addEventListener('click', () => {
            const phoneme = cell.dataset.phoneme;
            if (phoneme) {
                try {
                    // Create a simple synth using Tone.js for demonstration
                    // In a real scenario, you'd map phonemes to specific frequencies or samples
                    const synth = new Tone.Synth().toDestination();
                    let frequency;
                    switch (phoneme) {
                        case 'k': frequency = 'C4'; break;
                        case 't': frequency = 'D4'; break;
                        case 'b': frequency = 'E4'; break;
                        case 'n': frequency = 'F4'; break;
                        case 'm': frequency = 'G4'; break;
                        case 's': frequency = 'A4'; break;
                        case 'l': frequency = 'B4'; break;
                        case 'a': frequency = 'C5'; break;
                        case 'e': frequency = 'D5'; break;
                        case 'i': frequency = 'E5'; break;
                        case 'o': frequency = 'F5'; break;
                        case 'u': frequency = 'G5'; break;
                        default: frequency = 'C4';
                    }
                    synth.triggerAttackRelease(frequency, '8n');
                } catch (e) {
                    console.error("Error playing phoneme with Tone.js:", e);
                    showCustomModal("Error al reproducir el sonido. Asegúrate de que el audio esté habilitado y de que Tone.js esté cargado correctamente.", 'alert');
                }
            }
        });
    });

    // --- Phrase Constructor Logic ---

    // Populate selects
    function populateSelect(selectElement, options, textKey, valueKey) {
        selectElement.innerHTML = ''; // Clear previous options
        options.forEach(option => {
            const opt = document.createElement('option');
            opt.textContent = option[textKey];
            opt.value = option[valueKey];
            selectElement.appendChild(opt);
        });
    }

    populateSelect(pronounSelect, data.pronouns, 'spanish', 'kibotashi');
    populateSelect(verbSelect, data.verbs, 'spanish', 'kibotashi');
    populateSelect(tenseSelect, data.tenses, 'name', 'name');
    populateSelect(objectSelect, data.objects, 'spanish', 'kibotashi');

    // Add "Sin objeto" option to object select
    const noObjectOpt = document.createElement('option');
    noObjectOpt.textContent = 'Sin objeto';
    noObjectOpt.value = '';
    objectSelect.prepend(noObjectOpt); // Add it at the beginning

    // Function to get IPA for a given Kibotashi word
    function getIpa(word, type = 'word') {
        let ipa = '';
        if (type === 'pronoun') {
            const pronoun = data.pronouns.find(p => p.kibotashi === word);
            if (pronoun) ipa = pronoun.ipa;
        } else if (type === 'verb') {
            const verb = data.verbs.find(v => v.kibotashi === word);
            if (verb) ipa = verb.ipa;
        } else if (type === 'object') {
            const object = data.objects.find(o => o.kibotashi === word);
            if (object) ipa = object.ipa;
        } else if (type === 'affix') {
             const affix = data.affixes.find(a => a.value === word);
             if (affix) ipa = affix.ipa || word; // Return affix itself if no specific IPA
        }
        return ipa.replace(/\//g, ''); // Remove slashes for concatenation
    }

    // Function to build the phrase
    function buildPhrase() {
        let selectedPronoun = pronounSelect.value;
        let selectedVerb = verbSelect.value;
        let selectedTense = tenseSelect.value;
        let selectedObject = objectSelect.value;
        let isNegated = negationCheckbox.checked;
        let selectedMood = moodSelect.value;
        let selectedAffix = affixSelect.value;
        let selectedEmotion = emotionSelect.value;

        // Handle randomize option
        if (randomizeCheckbox.checked) {
            selectedPronoun = data.pronouns[Math.floor(Math.random() * data.pronouns.length)].kibotashi;
            selectedVerb = data.verbs[Math.floor(Math.random() * data.verbs.length)].kibotashi;
            selectedTense = data.tenses[Math.floor(Math.random() * data.tenses.length)].name;
            selectedObject = Math.random() < 0.5 ? '' : data.objects[Math.floor(Math.random() * data.objects.length)].kibotashi; // Randomly include/exclude object
            isNegated = Math.random() < 0.3; // 30% chance of negation
            selectedMood = Math.random() < 0.5 ? 'indicativo' : 'condicional';
            selectedAffix = Math.random() < 0.4 ? (data.affixes[Math.floor(Math.random() * data.affixes.length)].value) : '';
            selectedEmotion = ['neutro', 'poetico', 'afectivo', 'melancolico'][Math.floor(Math.random() * 4)];

            // Update selects to reflect randomized choice
            pronounSelect.value = selectedPronoun;
            verbSelect.value = selectedVerb;
            tenseSelect.value = selectedTense;
            objectSelect.value = selectedObject;
            negationCheckbox.checked = isNegated;
            moodSelect.value = selectedMood;
            affixSelect.value = selectedAffix;
            emotionSelect.value = selectedEmotion;
        }

        let kibotashiSentence = selectedPronoun;
        let ipaSentence = getIpa(selectedPronoun, 'pronoun');
        let meaningSentence = data.pronouns.find(p => p.kibotashi === selectedPronoun)?.spanish || selectedPronoun;

        let conjugatedVerb = selectedVerb;
        let verbMeaning = data.verbs.find(v => v.kibotashi === selectedVerb)?.spanish;
        let verbIpa = getIpa(selectedVerb, 'verb');

        // Apply conjugation based on selected verb and tense (using 'Ta' as example for now)
        if (selectedVerb === 'Ta' && data.conjugations.Ta) {
            const verbConjugations = data.conjugations.Ta[selectedPronoun];
            if (verbConjugations) {
                conjugatedVerb = verbConjugations[selectedTense.toLowerCase()];
                // Update IPA based on specific conjugation if needed, otherwise use base verb IPA
                // For simplicity, we'll append tense suffix IPA for now
                if (selectedTense === 'Pasado') verbIpa = '/ta.oɾ/'; // Example for 'Taor'
                else if (selectedTense === 'Futuro') verbIpa = '/ta.el/'; // Example for 'Tael'
                else verbIpa = getIpa(selectedVerb, 'verb');
            }
        } else {
             // For other verbs, just append the tense suffix for now (simple model)
             let suffix = data.tenses.find(t => t.name === selectedTense)?.suffix || '';
             conjugatedVerb = selectedVerb + suffix;
             // Simple IPA concatenation for other verbs (needs more complex phonological rules for accuracy)
             verbIpa = getIpa(selectedVerb, 'verb') + (suffix ? `.${suffix.toLowerCase()}` : '');
        }

        // Apply mood (simplified)
        if (selectedMood === 'condicional') {
            conjugatedVerb += 'r'; // Simple conditional suffix
            verbMeaning += ' (condicional)';
            verbIpa += 'ɾ'; // Add conditional IPA suffix
        }

        // Apply negation
        if (isNegated) {
            kibotashiSentence += ' Ne';
            ipaSentence += ' /ne/';
            meaningSentence += ' no';
        }

        kibotashiSentence += ' ' + conjugatedVerb;
        ipaSentence += ' ' + verbIpa;
        meaningSentence += ' ' + verbMeaning;

        if (selectedObject) {
            const objectMeaning = data.objects.find(o => o.kibotashi === selectedObject)?.spanish;
            kibotashiSentence += ' ' + selectedObject;
            ipaSentence += ' ' + getIpa(selectedObject, 'object');
            meaningSentence += ' ' + objectMeaning;
        }

        // Apply affix
        if (selectedAffix) {
            // This is a simplified application for demonstration.
            // In a real conlang, affixes attach to specific parts of speech.
            // For now, append to the last word.
            const affixData = data.affixes.find(a => a.value === selectedAffix);
            if (affixData) {
                const lastWord = kibotashiSentence.split(' ').pop();
                kibotashiSentence = kibotashiSentence.replace(lastWord, lastWord + affixData.kibotashi);
                ipaSentence += affixData.ipa ? ` ${affixData.ipa}` : ` ${affixData.kibotashi}`;
                meaningSentence += ` (${affixData.meaning})`;
            }
        }

        // Display results
        kibotashiPhraseSpan.textContent = kibotashiSentence.trim() + '.'; // Add period
        ipaPhraseSpan.textContent = ipaSentence.trim() + '/'; // Add trailing slash for IPA
        meaningPhraseSpan.textContent = meaningSentence.trim() + '.'; // Add period

        // Add emotion class to constructor output
        constructorOutput.className = 'constructor-output'; // Reset classes
        if (selectedEmotion && selectedEmotion !== 'neutro') {
            constructorOutput.classList.add(selectedEmotion);
        }

        constructorOutput.style.display = 'block'; // Show output
    }

    buildPhraseBtn.addEventListener('click', buildPhrase);

    // Initial phrase build on load
    buildPhrase();


    // Text-to-Speech (TTS) for constructed phrases
    speakConstructedPhraseBtn.addEventListener('click', () => {
        const textToSpeak = kibotashiPhraseSpan.textContent;
        speakText(textToSpeak);
    });

    // --- Audio Section Play Buttons Logic ---
    function speakText(text) {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'es-LA'; // Spanish (Latin America)
            utterance.rate = 0.9; // Slightly slower
            utterance.pitch = 1.0; // Normal pitch

            // Try to find a female voice
            let femaleVoice = null;
            const voices = speechSynthesis.getVoices();
            for (let i = 0; i < voices.length; i++) {
                // Look for a Spanish voice, preferably female, though 'female' isn't standard in all voice objects
                if (voices[i].lang === 'es-LA' || voices[i].lang === 'es-US') {
                     // Check for names that might imply female, or just pick the first good Spanish voice
                    if (voices[i].name.includes('Femenino') || voices[i].name.includes('Female')) {
                        femaleVoice = voices[i];
                        break;
                    }
                    if (!femaleVoice) femaleVoice = voices[i]; // Take first Spanish voice if no female found yet
                }
            }
            if (femaleVoice) {
                utterance.voice = femaleVoice;
            } else {
                console.warn("No se encontró una voz femenina en español-LA/US. Usando la voz predeterminada.");
            }

            speechSynthesis.speak(utterance);
        } else {
            showCustomModal("Tu navegador no soporta la API de SpeechSynthesis (Texto a Voz).", 'alert');
        }
    }

    playButtons.forEach(button => {
        button.addEventListener('click', () => {
            const audioSrc = button.dataset.audio;
            const textToSpeak = button.dataset.text;

            if (audioSrc) {
                const audio = new Audio(audioSrc);
                audio.play().catch(e => {
                    console.error("Error playing audio:", e);
                    showCustomModal("Error al reproducir el archivo de audio. Asegúrate de que la ruta sea correcta y el archivo exista.", 'alert');
                });
            } else if (textToSpeak) {
                speakText(textToSpeak);
            }
        });
    });


    // --- Glossary Filtering and Pagination ---
    function displayGlossary(page) {
        glosarioBody.innerHTML = ''; // Clear current table body

        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        const paginatedItems = filteredGlossary.slice(start, end);

        paginatedItems.forEach(word => {
            const row = document.createElement('tr');
            const audioPath = `audios/${word.kibotashi.toLowerCase().replace(/\s/g, '-')}.mp3`; // Standardize filename

            row.innerHTML = `
                <td>${word.spanish}</td>
                <td>${word.kibotashi}</td>
                <td>${word.category}</td>
                <td>
                    <button class="play-button" data-audio="${audioPath}" onerror="this.style.display='none'; showCustomModal('Audio file not found for ${word.kibotashi}', 'alert');">▶️ (Archivo)</button>
                    <button class="play-button" data-text="${word.kibotashi}">🗣️ (Voz)</button>
                </td>
            `;
            glosarioBody.appendChild(row);
        });

        // Update pagination controls
        const totalPages = Math.ceil(filteredGlossary.length / rowsPerPage);
        pageInfoSpan.textContent = `Página ${page} de ${totalPages}`;
        prevPageBtn.disabled = page === 1;
        nextPageBtn.disabled = page === totalPages || totalPages === 0; // Disable if no pages
    }

    function filterAndDisplayGlossary() {
        const searchTerm = filtroPalabra.value.toLowerCase().trim();
        const categoryFilter = filtroCategoria.value;

        filteredGlossary = data.glossary.filter(word => {
            const matchesSearch = searchTerm === '' ||
                                  word.spanish.toLowerCase().includes(searchTerm) ||
                                  word.kibotashi.toLowerCase().includes(searchTerm);

            const matchesCategory = categoryFilter === '' ||
                                    word.category === categoryFilter;

            return matchesSearch && matchesCategory;
        });

        currentPage = 1; // Reset to first page after filtering
        displayGlossary(currentPage);
    }

    // Event Listeners for Glossary Filters
    buscarPalabraBtn.addEventListener('click', filterAndDisplayGlossary);
    filtroPalabra.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            filterAndDisplayGlossary();
        } else {
            // Optional: Filter as user types (can be performance intensive for very large datasets)
            // filterAndDisplayGlossary();
        }
    });
    filtroCategoria.addEventListener('change', filterAndDisplayGlossary);

    // Event Listeners for Pagination
    prevPageBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            displayGlossary(currentPage);
        }
    });

    nextPageBtn.addEventListener('click', () => {
        const totalPages = Math.ceil(filteredGlossary.length / rowsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            displayGlossary(currentPage);
        }
    });

    // Initial display of glossary
    filterAndDisplayGlossary(); // Call once on load

    // --- Scroll to Top Button Visibility ---
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) { // Show button after scrolling 300px
            btnTop.style.display = 'block';
        } else {
            btnTop.style.display = 'none';
        }
    });

});
