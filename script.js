// Data for pronouns
const pronounsData = {
  "Ena": { kibotashi: "Ena", text: "Yo", meaning: "I", ipa: "/e.na/" },
  "Lun": { kibotashi: "Lun", text: "Yo (poético)", meaning: "I (poetic)", ipa: "/lun/" },
  "Bua": { kibotashi: "Bua", text: "Tú", meaning: "You (singular)", ipa: "/bua/" },
  "Sual": { kibotashi: "Sual", text: "Él / Ella", meaning: "He / She", ipa: "/sual/" },
  "Nual": { kibotashi: "Nual", text: "Nosotros", meaning: "We", ipa: "/nual/" }
};

// Data for verbs, including their base meaning, IPA, and specific conjugations for "Ta"
const verbsData = {
  "Ta": {
    kibotashi: "Ta", text: "Ser", meaning: "be", ipa: "/ta/",
    present: {
      "Ena": { kibotashi: "Tao", ipa: "/ta.o/", meaning: "am" },
      "Lun": { kibotashi: "Tao", ipa: "/ta.o/", meaning: "am" },
      "Bua": { kibotashi: "Tua", ipa: "/tua/", meaning: "are" },
      "Sual": { kibotashi: "Tai", ipa: "/tai/", meaning: "is" },
      "Nual": { kibotashi: "Tanal", ipa: "/ta.nal/", meaning: "are" }
    },
    past: { // Specific past forms for Ta from user's table
      "Ena": { kibotashi: "Taor", ipa: "/ta.or/", meaning: "was" },
      "Lun": { kibotashi: "Taor", ipa: "/ta.or/", meaning: "was" },
      "Bua": { kibotashi: "Tauor", ipa: "/tau.or/", meaning: "were" },
      "Sual": { kibotashi: "Tair", ipa: "/tair/", meaning: "was" },
      "Nual": { kibotashi: "Tanor", ipa: "/ta.nor/", meaning: "were" }
    },
    future: { // Specific future forms for Ta from user's table
      "Ena": { kibotashi: "Tael", ipa: "/ta.el/", meaning: "will be" },
      "Lun": { kibotashi: "Tael", ipa: "/ta.el/", meaning: "will be" },
      "Bua": { kibotashi: "Tuel", ipa: "/tu.el/", meaning: "will be" },
      "Sual": { kibotashi: "Taiel", ipa: "/tai.el/", meaning: "will be" },
      "Nual": { kibotashi: "Tanal", ipa: "/ta.nel/", meaning: "are not" } // Corrected meaning
    },
    negation: { // Specific negation forms for Ta from user's table
      "Ena": { kibotashi: "Netao", ipa: "/ne.ta.o/", meaning: "am not" },
      "Lun": { kibotashi: "Netao", ipa: "/ne.ta.o/", meaning: "am not" },
      "Bua": { kibotashi: "Netua", ipa: "/ne.tua/", meaning: "are not" },
      "Sual": { kibotashi: "Netai", ipa: "/ne.tai/", meaning: "is not" },
      "Nual": { kibotashi: "Netanal", ipa: "/ne.ta.nal/", meaning: "are not" }
    },
    past_suffix: "or", future_suffix: "el", negation_prefix: "Ne"
  },
  "Ni": { kibotashi: "Ni", text: "Estar", meaning: "be (location/state)", ipa: "/ni/", present_form: "Ni", past_suffix: "or", future_suffix: "el", negation_prefix: "Ne" },
  "Kel": { kibotashi: "Kel", text: "Tener", meaning: "have", ipa: "/kel/", present_form: "Kel", past_suffix: "or", future_suffix: "el", negation_prefix: "Ne" },
  "Mir": { kibotashi: "Mir", text: "Hacer", meaning: "do/make", ipa: "/miʁ/", present_form: "Mir", past_suffix: "or", future_suffix: "el", negation_prefix: "Ne" },
  "Bin": { kibotashi: "Bin", text: "Sentir", meaning: "feel", ipa: "/bin/", present_form: "Bin", past_suffix: "or", future_suffix: "el", negation_prefix: "Ne" },
  "Jan": { kibotashi: "Jan", text: "Ir", meaning: "go", ipa: "/ʒan/", present_form: "Jan", past_suffix: "or", future_suffix: "el", negation_prefix: "Ne" },
  "Vael": { kibotashi: "Vael", text: "Decir", meaning: "say", ipa: "/ˈva.el/", present_form: "Vael", past_suffix: "or", future_suffix: "el", negation_prefix: "Ne" },
  "Zar": { kibotashi: "Zar", text: "Saber", meaning: "know", ipa: "/zaʁ/", present_form: "Zar", past_suffix: "or", future_suffix: "el", negation_prefix: "Ne" },
  "Katun": { kibotashi: "Katun", text: "Querer", meaning: "want", ipa: "/ˈka.tun/", present_form: "Katun", past_suffix: "or", future_suffix: "el", negation_prefix: "Ne" },
  "Solv": { kibotashi: "Solv", text: "Poder", meaning: "can", ipa: "/solv/", present_form: "Solv", past_suffix: "or", future_suffix: "el", negation_prefix: "Ne" }
};

// Data for tenses
const tensesData = {
  "Presente": { text: "Presente", meaning: "" },
  "Pasado": { text: "Pasado", meaning: "-ed" },
  "Futuro": { text: "Futuro", meaning: "will" },
  "Negación": { text: "Negación", meaning: "not" }
};

// Data for relations (objects/complements)
const relationsData = {
  "Nirel": { kibotashi: "Nirel", text: "Persona", meaning: "person", ipa: "/ˈni.ʁel/" },
  "Maran": { kibotashi: "Maran", text: "Compañero/a", meaning: "companion", ipa: "/ˈma.ʁan/" },
  "Kuren": { kibotashi: "Kuren", text: "Amigo/a", meaning: "friend", ipa: "/ˈku.ʁen/" },
  "Naviir": { kibotashi: "Naviir", text: "Pareja", meaning: "partner", ipa: "/ˈna.viːʁ/" },
  "Tareni": { kibotashi: "Tareni", text: "Madre", meaning: "mother", ipa: "/ˈta.ʁe.ni/" },
  "Soren": { kibotashi: "Soren", text: "Padre", meaning: "father", ipa: "/ˈso.ʁen/" },
  "Mirat": { kibotashi: "Mirat", text: "Hijo/a", meaning: "child", ipa: "/ˈmi.ʁat/" },
  "Tarenel": { kibotashi: "Tarenel", meaning: "family", ipa: "/ta.ʁeˈnel/" }
};

// Data for Affixes
const affixData = { // Defined globally for access in randomize
  "": "Sin sufijo",
  "ul": "Cariño suave (-ul)",
  "ei": "Íntimo (-ei)",
  "an": "Confianza (-an)" // Updated text
};

// Data for Moods
const moodData = { // Defined globally for access in randomize
  "indicativo": "Modo Indicativo", // Updated text
  "condicional": "Modo Condicional" // Updated text
};

// Data for Emotions
const emotionData = { // Defined globally for access in randomize
  "": "Tono neutro", // Updated text
  "poetico": "Poético", // Updated text (was 'poetico', now 'Poético')
  "afectivo": "Afectivo", // Updated text (was 'afectivo', now 'Afectivo')
  "melancolico": "Melancólico" // Updated text (was 'melancolico', now 'Melancólico')
};

// Declara una variable para el sintetizador de sonido
let matchSoundPlayer;
let reverb;
let lastSoundPlayTime = 0;
const minTimeBetweenSounds = 0.1; // Mínimo tiempo en segundos entre sonidos para que se perciba la cola de reverb

// Populate dropdowns on page load
document.addEventListener('DOMContentLoaded', () => {
  const pronounSelect = document.getElementById('pronoun-select');
  const verbSelect = document.getElementById('verb-select');
  const tenseSelect = document.getElementById('tense-select');
  const objectSelect = document.getElementById('object-select');
  const affixSelect = document.getElementById('affix-select'); // New affix select
  const moodSelect = document.getElementById('mood-select'); // New mood select
  const emotionSelect = document.getElementById('emotion-select'); // New emotion select
  const randomizeCheckbox = document.getElementById('randomize-checkbox'); // New randomize checkbox
  const btnTop = document.getElementById('btnTop'); // Get the scroll to top button
  const themeToggle = document.getElementById('theme-toggle'); // Get the theme toggle button
  const characterCells = document.querySelectorAll('.character-cell'); // Get all character cells

  // Inicializa el sintetizador de sonido de Tone.js
  if (typeof Tone !== 'undefined') {
    // Configura el efecto de reverb para un sonido más etéreo
    reverb = new Tone.Reverb({
      decay: 4,     // Mayor duración de la cola de la reverb
      preDelay: 0.05, // Ligero retraso antes de que empiece la reverb
      wet: 0.8      // Mayor cantidad de señal con efecto para un sonido más ambiental
    }).toDestination(); // Conecta la reverb al destino final

    // Usar PolySynth con FMSynth para un timbre suave y resonante con toque metálico de carillón
    matchSoundPlayer = new Tone.PolySynth(Tone.FMSynth, {
      oscillator: {
        type: "sine" // Onda senoidal para un sonido base puro
      },
      envelope: {
        attack: 0.01,   // Ataque muy rápido para un "ding" nítido
        decay: 0.2,    // Decaimiento rápido
        sustain: 0,  // Sin sostenido
        release: 1.5   // Liberación larga para una cola suave y envolvente
      },
      modulation: {
        type: "sine" // Onda senoidal para el modulador para un timbre más limpio de campana
      },
      modulationEnvelope: {
        attack: 0.01,
        decay: 0.1,
        sustain: 0,
        release: 0.2
      },
      harmonicity: 3.5, // Ajuste para un timbre más complejo y armónico de campana/carillón
      modulationIndex: 5, // Índice de modulación para un sonido limpio y no demasiado "ruidoso"
      volume: -18 // Volumen ajustado para que no sea intrusivo
    }).connect(reverb); // Conecta el sintetizador a la reverb
  } else {
    console.warn("Tone.js no se cargó. Los sonidos de los caracteres no funcionarán.");
  }

  // Populate Pronoun dropdown
  for (const key in pronounsData) {
    const option = document.createElement('option');
    option.value = key;
    option.textContent = `${pronounsData[key].text} (${key})`;
    pronounSelect.appendChild(option);
  }

  // Populate Verb dropdown
  for (const key in verbsData) {
    const option = document.createElement('option');
    option.value = key;
    option.textContent = `${verbsData[key].text} (${key})`;
    verbSelect.appendChild(option);
  }

  // Populate Tense dropdown
  for (const key in tensesData) {
    const option = document.createElement('option');
    option.value = key;
    option.textContent = tensesData[key].text;
    tenseSelect.appendChild(option);
  }

  // Populate Object/Complement dropdown
  const noneObjectOption = document.createElement('option');
  noneObjectOption.value = "none";
  noneObjectOption.textContent = "Ninguno";
  objectSelect.appendChild(noneObjectOption);
  for (const key in relationsData) {
    const option = document.createElement('option');
    option.value = key;
    option.textContent = `${relationsData[key].text} (${key})`;
    objectSelect.appendChild(option);
  }

  // Populate Affix dropdown
  for (const key in affixData) {
    const option = document.createElement('option');
    option.value = key;
    option.textContent = affixData[key];
    affixSelect.appendChild(option);
  }

  // Populate Mood dropdown
  for (const key in moodData) {
    const option = document.createElement('option');
    option.value = key;
    option.textContent = moodData[key];
    moodSelect.appendChild(option);
  }

  // Populate Emotion dropdown
  for (const key in emotionData) {
    const option = document.createElement('option');
    option.value = key;
    option.textContent = emotionData[key];
    emotionSelect.appendChild(option);
  }

  // Initialize Intersection Observer for sections
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // If the section contains a table, also make all tables visible
        const tables = entry.target.querySelectorAll('table');
        tables.forEach(table => {
          table.classList.add('visible');
        });
      } else {
        // Optional: remove visible class when out of view, if you want re-trigger
        // entry.target.classList.remove('visible');
        // const tables = entry.target.querySelectorAll('table');
        // tables.forEach(table => {
        //   table.classList.remove('visible');
        // });
      }
    });
  }, {
    threshold: 0.1, // Trigger when 10% of the section is visible
    rootMargin: "0px 0px -50px 0px" // Slightly adjust trigger point
  });

  // Observe all sections, excluding the hero section which is always visible initially
  document.querySelectorAll('section:not(#hero)').forEach(section => {
    observer.observe(section);
  });

  // Show/hide scroll to top button based on scroll position
  window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      btnTop.style.display = "block";
    } else {
      btnTop.style.display = "none";
    }
  };

  // Theme toggle logic
  // Check for saved theme preference or system preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.classList.add(savedTheme);
    themeToggle.textContent = savedTheme === 'dark-mode' ? 'Modo Claro' : 'Modo Oscuro';
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark-mode');
    themeToggle.textContent = 'Modo Claro';
  } else {
    themeToggle.textContent = 'Modo Oscuro';
  }

  // Add event listener for theme toggle button
  themeToggle.addEventListener('click', () => {
    if (document.documentElement.classList.contains('dark-mode')) {
      document.documentElement.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light-mode');
      themeToggle.textContent = 'Modo Oscuro';
    } else {
      document.documentElement.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark-mode');
      themeToggle.textContent = 'Modo Claro';
    }
  });

  // Add mouseover event listener to character cells for sound
  characterCells.forEach(cell => {
    // Existing mouseover for sound
    cell.addEventListener('mouseover', () => {
      // Asegurarse de que el contexto de audio esté activo con la primera interacción del usuario
      if (Tone.context.state !== 'running') {
          Tone.start();
      }

      const currentTime = Tone.now();
      // Solo reproducir el sonido si ha pasado el tiempo mínimo desde la última reproducción
      if (currentTime - lastSoundPlayTime > minTimeBetweenSounds) {
        if (matchSoundPlayer) {
          // Reproducir la nota G5 para el efecto de carillón agudo
          matchSoundPlayer.triggerAttackRelease("G5", "1.5", currentTime); // Nota G5, duración 1.5 segundos
          lastSoundPlayTime = currentTime; // Actualizar el último tiempo de reproducción
        }
      }
    });

    // New click event for pronunciation - uses the same matchSoundPlayer for consistency
    cell.addEventListener('click', () => {
      // Asegurarse de que el contexto de audio esté activo con la primera interacción del usuario
      if (Tone.context.state !== 'running') {
          Tone.start();
      }
      // Play a specific note (e.g., C5) for any character click, as phonemes are not musical notes
      matchSoundPlayer.triggerAttackRelease("C5", "8n");
    });
  });
});

// Function to build the phrase based on selections
function buildPhrase() {
  const selectedPronounKey = document.getElementById('pronoun-select').value;
  const selectedVerbKey = document.getElementById('verb-select').value;
  let selectedTenseKey = document.getElementById('tense-select').value; // Changed to `let` for randomization
  let selectedObjectKey = document.getElementById('object-select').value; // Changed to `let` for randomization
  let selectedAffix = document.getElementById('affix-select').value; // Get selected affix
  let selectedMood = document.getElementById('mood-select').value; // Get selected mood
  let selectedEmotion = document.getElementById('emotion-select').value; // Get selected emotion
  const randomize = document.getElementById('randomize-checkbox').checked; // Get randomize checkbox state

  // Si se selecciona aleatorio, escoge componentes al azar
  if (randomize) {
    const pronounKeys = Object.keys(pronounsData);
    const verbKeys = Object.keys(verbsData);
    const objectKeys = Object.keys(relationsData);

    document.getElementById('pronoun-select').value = pronounKeys[Math.floor(Math.random() * pronounKeys.length)];
    document.getElementById('verb-select').value = verbKeys[Math.floor(Math.random() * verbKeys.length)];
    document.getElementById('tense-select').value = ["Presente", "Pasado", "Futuro", "Negación"][Math.floor(Math.random() * 4)];
    document.getElementById('object-select').value = objectKeys[Math.floor(Math.random() * objectKeys.length)];
    document.getElementById('mood-select').value = ["indicativo", "condicional"][Math.floor(Math.random() * 2)];
    document.getElementById('affix-select').value = ["", "ul", "ei", "an"][Math.floor(Math.random() * 4)];
    document.getElementById('emotion-select').value = ["", "poetico", "afectivo", "melancolico"][Math.floor(Math.random() * 4)];
    // The function will continue and use the newly set values.
  }


  let pronoun = pronounsData[selectedPronounKey];
  let verb = verbsData[selectedVerbKey];
  let object = relationsData[selectedObjectKey];


  let kibotashiPhrase = "";
  let ipaPhrase = "";
  let meaningPhrase = "";

  // Handle negation checkbox
  const negationCheckbox = document.getElementById('negation-checkbox');
  const isNegated = negationCheckbox && negationCheckbox.checked;

  // Verb Conjugation
  let conjugatedVerb = "";
  let verbIpa = "";
  let verbMeaning = "";

  // Pronoun
  kibotashiPhrase += pronoun.kibotashi;
  ipaPhrase += pronoun.ipa;
  meaningPhrase += pronoun.meaning;

  // Determine conjugated verb and its IPA/meaning
  if (verb.kibotashi === "Ta") { // Special conjugation for "Ta"
    if (isNegated) {
      conjugatedVerb = verb.negation[pronoun.kibotashi].kibotashi;
      verbIpa = verb.negation[pronoun.kibotashi].ipa;
      verbMeaning = verb.negation[pronoun.kibotashi].meaning;
    } else if (selectedTenseKey === "Presente") {
      conjugatedVerb = verb.present[pronoun.kibotashi].kibotashi;
      verbIpa = verb.present[pronoun.kibotashi].ipa;
      verbMeaning = verb.present[pronoun.kibotashi].meaning;
    } else if (selectedTenseKey === "Pasado") {
      conjugatedVerb = verb.past[pronoun.kibotashi].kibotashi;
      verbIpa = verb.past[pronoun.kibotashi].ipa;
      verbMeaning = verb.past[pronoun.kibotashi].meaning;
    } else if (selectedTenseKey === "Futuro") {
      conjugatedVerb = verb.future[pronoun.kibotashi].kibotashi;
      verbIpa = verb.future[pronoun.kibotashi].ipa;
      verbMeaning = verb.future[pronoun.kibotashi].meaning;
    }
  } else { // Regular conjugation for other verbs
    if (isNegated) {
      conjugatedVerb = verb.negation_prefix + verb.kibotashi;
      // Simple IPA concatenation for regular verbs with negation prefix
      verbIpa = `/${verb.negation_prefix.toLowerCase()}${verb.ipa.replace(/\//g, '')}/`;
      verbMeaning = tensesData["Negación"].meaning + " " + verb.meaning;
    } else if (selectedTenseKey === "Presente") {
      conjugatedVerb = verb.kibotashi;
      verbIpa = verb.ipa;
      verbMeaning = verb.meaning;
    } else if (selectedTenseKey === "Pasado") {
      conjugatedVerb = verb.kibotashi + verb.past_suffix;
      verbIpa = `${verb.ipa.slice(0, -1)}${verb.past_suffix}/`;
      let baseMeaning = verb.meaning;
      if (baseMeaning.includes('/')) baseMeaning = baseMeaning.split('/')[0];
      if (baseMeaning === 'be') verbMeaning = 'was/were';
      else if (baseMeaning === 'go') verbMeaning = 'went';
      else if (baseMeaning === 'have') verbMeaning = 'had';
      else if (baseMeaning === 'do') verbMeaning = 'did';
      else if (baseMeaning === 'make') verbMeaning = 'made';
      else if (baseMeaning.endsWith('e')) verbMeaning = baseMeaning + 'd';
      else verbMeaning = baseMeaning + 'ed';
    } else if (selectedTenseKey === "Futuro") {
      conjugatedVerb = verb.kibotashi + verb.future_suffix;
      verbIpa = `${verb.ipa.slice(0, -1)}${verb.future_suffix}/`;
      verbMeaning = tensesData["Futuro"].meaning + " " + verb.meaning;
    }
  }

  kibotashiPhrase += " " + conjugatedVerb;
  ipaPhrase += " " + verbIpa;
  meaningPhrase += " " + verbMeaning;

  // Apply affective suffix if object exists
  if (selectedObjectKey !== "none") {
    const object = relationsData[selectedObjectKey];
    let currentObjectKibotashi = object.kibotashi;
    let currentObjectIpa = object.ipa;
    let currentObjectMeaning = object.meaning;

    if (selectedAffix) {
      currentObjectKibotashi = `${object.kibotashi}${selectedAffix}`;
      currentObjectIpa = `${object.ipa.slice(0, -1)}${selectedAffix}/`; // Assuming simple concatenation for IPA for now
      if (selectedAffix === "ul") currentObjectMeaning += " (gentle)";
      else if (selectedAffix === "ei") currentObjectMeaning += " (intimate)";
      else if (selectedAffix === "an") currentObjectMeaning += " (trustworthy)";
    }
    kibotashiPhrase += ` ${currentObjectKibotashi}`;
    ipaPhrase += ` ${currentObjectIpa}`;
    meaningPhrase += ` ${currentObjectMeaning}`;
  }

  // Apply conditional mood
  if (selectedMood === "condicional") {
    kibotashiPhrase = `Ka ${kibotashiPhrase}`;
    ipaPhrase = `/ka/ ${ipaPhrase}`;
    meaningPhrase = `If ${meaningPhrase}`;
  }

  // Apply emotional tone
  if (selectedEmotion !== "") {
    meaningPhrase += ` [${emotionData[selectedEmotion].text} tone]`;
  }

  // Update the output display
  document.getElementById('kibotashi-phrase').textContent = kibotashiPhrase.trim();
  document.getElementById('ipa-phrase').textContent = ipaPhrase.trim();
  document.getElementById('meaning-phrase').textContent = meaningPhrase.trim();
  
  // Set the class based on emotion
  const constructorOutputDiv = document.getElementById('constructor-output');
  // Remove any previous emotion classes before adding the new one
  constructorOutputDiv.className = 'constructor-output'; // Reset to base class
  if (selectedEmotion) { // Only add if an emotion is selected
      constructorOutputDiv.classList.add(selectedEmotion);
  }
  constructorOutputDiv.style.display = 'block';

  // Store for TTS
  document.getElementById('constructor-output').dataset.kibotashiPhrase = kibotashiPhrase.trim();
  document.getElementById('constructor-output').dataset.kibotashiIpa = ipaPhrase.trim();

  playMatchSound();
}

// Function to speak the constructed phrase
function speakConstructedPhrase() {
  const kibotashiPhrase = document.getElementById('constructor-output').dataset.kibotashiPhrase;
  if (kibotashiPhrase) {
    speakText(kibotashiPhrase);
  }
}

// Function to speak text using the Web Speech API
function speakText(text) {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    let voices = window.speechSynthesis.getVoices();

    // Attempt to find a female Latin American Spanish voice
    let latinFemaleVoice = voices.find(voice =>
      voice.lang.startsWith('es-') &&
      (voice.name.includes('Femenina') || voice.name.includes('Female')) &&
      (voice.lang.includes('LA') || voice.lang.includes('MX') || voice.lang.includes('AR') || voice.lang.includes('ES-US'))
    );

    // Fallback to any Spanish voice if specific Latin American female not found
    if (!latinFemaleVoice) {
      latinFemaleVoice = voices.find(voice => voice.lang.startsWith('es-') && (voice.name.includes('Femenina') || voice.name.includes('Female')));
    }

    // Final fallback to any Spanish voice if no female voice is found
    if (!latinFemaleVoice) {
        latinFemaleVoice = voices.find(voice => voice.lang.startsWith('es-'));
    }

    // If a suitable voice is found, set it
    if (latinFemaleVoice) {
      utterance.voice = latinFemaleVoice;
    } else {
      console.warn("No se encontró una voz femenina en español (Latinoamérica). Usando la voz predeterminada del sistema.");
      utterance.lang = 'es-ES';
    }

    utterance.rate = 0.9;

    window.speechSynthesis.speak(utterance);
  } else {
    console.warn("Tu navegador no soporta la API de Web Speech.");
    // Using a custom modal instead of alert()
    const modal = document.createElement('div');
    modal.classList.add('custom-modal');
    modal.innerHTML = `
      <p>Tu navegador no soporta la síntesis de voz.</p>
      <p>Por favor, usa un navegador más moderno como Chrome, Firefox o Edge.</p>
      <button onclick="this.parentNode.remove()">Cerrar</button>
    `;
    document.body.appendChild(modal);
  }
}

// Function to play a subtle sound effect
function playMatchSound() {
  const currentTime = Tone.now();
  // Solo reproducir el sonido si ha pasado el tiempo mínimo desde la última reproducción
  if (currentTime - lastSoundPlayTime > minTimeBetweenSounds) {
    if (matchSoundPlayer) {
      // Reproducir la nota G5 para el efecto de carillón agudo
      matchSoundPlayer.triggerAttackRelease("G5", "1.5", currentTime); // Nota G5, duración 1.5 segundos
      lastSoundPlayTime = currentTime; // Actualizar el último tiempo de reproducción
    }
  }
}

// Function to scroll to top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Intersection Observer for section fade-in animation
const sections = document.querySelectorAll('section');
const observerOptions = {
  root: null, // viewport
  rootMargin: '0px',
  threshold: 0.1 // 10% of the section must be visible
};

const sectionObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Stop observing once it's visible
    }
  });
}, observerOptions);

sections.forEach(section => {
  sectionObserver.observe(section);
});
