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
      "Nual": { kibotashi: "Tanel", ipa: "/ta.nel/", meaning: "will be" }
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
const affixData = {
  "": "Sin sufijo",
  "ul": "Cariño suave (-ul)",
  "ei": "Íntimo (-ei)",
  "an": "Confianza (-an)"
};

// Data for Moods
const moodData = {
  "indicativo": "Modo Indicativo",
  "condicional": "Modo Condicional"
};

// Data for Emotions
const emotionData = {
  "": "Tono neutro",
  "poetico": "Poético",
  "afectivo": "Afectivo",
  "melancolico": "Melancólico"
};

// Declare variables for sound synthesizers and audio elements
let matchSoundPlayer;
let reverb;
let lastSoundPlayTime = 0;
const minTimeBetweenSounds = 0.1; // Minimum time in seconds between sounds for reverb tail to be perceived

let gameStartAudioElement; // Audio element for the "Entrar al Mundo" button
let heroicIntroAudioElement; // Audio element for the heroic intro music
let voiceIntroAudioElement; // Audio element for the heroic voice intro

// Populate dropdowns on page load
document.addEventListener('DOMContentLoaded', () => {
  const pronounSelect = document.getElementById('pronoun-select');
  const verbSelect = document.getElementById('verb-select');
  const tenseSelect = document.getElementById('tense-select');
  const objectSelect = document.getElementById('object-select');
  const affixSelect = document.getElementById('affix-select');
  const moodSelect = document.getElementById('mood-select');
  const emotionSelect = document.getElementById('emotion-select');
  const randomizeCheckbox = document.getElementById('randomize-checkbox');
  const btnTop = document.getElementById('btnTop');
  const themeToggle = document.getElementById('theme-toggle');
  const characterCells = document.querySelectorAll('.character-cell');
  const enterWorldButton = document.getElementById('enter-world-button');

  gameStartAudioElement = document.getElementById('game-start-audio');
  heroicIntroAudioElement = document.getElementById('heroic-intro-audio');
  voiceIntroAudioElement = document.getElementById('voice-intro-audio'); // Get the voice intro audio element

  // Initialize Tone.js sound synthesizer
  if (typeof Tone !== 'undefined') {
    // Configure reverb effect for a more ethereal sound
    reverb = new Tone.Reverb({
      decay: 4,
      preDelay: 0.05,
      wet: 0.8
    }).toDestination();

    // Use PolySynth with FMSynth for a soft, resonant timbre with a metallic chime touch
    matchSoundPlayer = new Tone.PolySynth(Tone.FMSynth, {
      oscillator: { type: "sine" },
      envelope: { attack: 0.01, decay: 0.2, sustain: 0, release: 1.5 },
      modulation: { type: "sine" },
      modulationEnvelope: { attack: 0.01, decay: 0.1, sustain: 0, release: 0.2 },
      harmonicity: 3.5,
      modulationIndex: 5,
      volume: -18
    }).connect(reverb);
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
        const tables = entry.target.querySelectorAll('table');
        tables.forEach(table => {
          table.classList.add('visible');
        });
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
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
    cell.addEventListener('mouseover', () => {
      if (Tone.context.state !== 'running') {
          Tone.start();
      }
      const currentTime = Tone.now();
      if (currentTime - lastSoundPlayTime > minTimeBetweenSounds) {
        if (matchSoundPlayer) {
          matchSoundPlayer.triggerAttackRelease("G5", "1.5", currentTime);
          lastSoundPlayTime = currentTime;
        }
      }
    });

    cell.addEventListener('click', () => {
      if (Tone.context.state !== 'running') {
          Tone.start();
      }
      matchSoundPlayer.triggerAttackRelease("C5", "8n");
    });
  });

  // Event listener for the "Entrar al Mundo" button
  if (enterWorldButton) {
    console.log("Botón 'Entrar al Mundo' encontrado. Añadiendo event listener.");
    enterWorldButton.addEventListener('click', (event) => {
      console.log("Botón 'Entrar al Mundo' clickeado.");
      event.preventDefault();

      // Ensure Tone.js audio context is active with user interaction
      if (Tone.context.state !== 'running') {
        Tone.start().then(() => {
          console.log("Tone.js context started.");
          handleEnterWorldInteraction(enterWorldButton.href);
        }).catch(e => console.error("Error al iniciar Tone.js:", e));
      } else {
        handleEnterWorldInteraction(enterWorldButton.href);
      }
    });
  } else {
    console.warn("Botón 'Entrar al Mundo' no encontrado. Asegúrate de que tenga el ID 'enter-world-button'.");
  }

  // Initial play of the heroic intro audio (muted)
  // This will try to play the audio as soon as possible, but muted,
  // to help satisfy browser autoplay policies later.
  if (heroicIntroAudioElement) {
    heroicIntroAudioElement.play().catch(e => console.warn("Error al intentar reproducir intro heroica (música) silenciada:", e));
  }
  // Initial play of the voice intro audio (muted)
  if (voiceIntroAudioElement) {
    voiceIntroAudioElement.play().catch(e => console.warn("Error al intentar reproducir intro de voz silenciada:", e));
  }


  // Correction for Biné audio: "bine.mpuro3" to "bine.mp3" (from previous version)
  const bineAudioElement = document.getElementById('bine-audio');
  if (bineAudioElement && bineAudioElement.src.includes('bine.mpuro3')) {
    bineAudioElement.src = 'audios/bine.mp3';
    console.log("Ruta de audio 'bine-audio' corregida.");
  }
});

// Function to handle the "Entrar al Mundo" interaction
function handleEnterWorldInteraction(targetHref) {
  // Unmute and play the heroic intro music
  if (heroicIntroAudioElement) {
    heroicIntroAudioElement.muted = false;
    heroicIntroAudioElement.volume = 0.6; // Set a suitable background volume
    heroicIntroAudioElement.currentTime = 0; // Ensure it starts from beginning
    // Attempt to load the audio again before playing, to refresh sources if needed
    heroicIntroAudioElement.load();
    heroicIntroAudioElement.play().catch(e => {
        console.error("Error al intentar desmutear y reproducir intro heroica (música):", e);
        if (heroicIntroAudioElement.error) {
            console.error("Detalles del error de audio heroico:", heroicIntroAudioElement.error.code, heroicIntroAudioElement.error.message);
        }
    });
  }

  // Unmute and play the heroic voice intro
  if (voiceIntroAudioElement) {
    voiceIntroAudioElement.muted = false;
    voiceIntroAudioElement.volume = 1.0; // Full volume for voice
    voiceIntroAudioElement.currentTime = 0; // Ensure it starts from beginning
    // Attempt to load the audio again before playing, to refresh sources if needed
    voiceIntroAudioElement.load(); // Added .load() for robustness
    voiceIntroAudioElement.play().then(() => {
        console.log("voice-intro.wav reproducido exitosamente. Configurandose para fundir música...");
        // Set up the fade-out for heroicIntroAudioElement 10 seconds after voice-intro.wav ends
        // Ensure to remove previous listener to avoid multiple calls if button is clicked repeatedly
        voiceIntroAudioElement.removeEventListener('ended', fadeHeroicMusicOnVoiceEnd);
        voiceIntroAudioElement.addEventListener('ended', fadeHeroicMusicOnVoiceEnd);
    }).catch(e => {
        console.error("Error al intentar desmutear y reproducir intro de voz:", e);
        if (voiceIntroAudioElement.error) {
            console.error("Detalles del error de audio de voz:", voiceIntroAudioElement.error.code, voiceIntroAudioElement.error.message);
        }
    });
  }

  // Play the "Game Star.mp3" sound effect
  if (gameStartAudioElement) {
    console.log("Intento de reproducción de 'Game Star.mp3'. Estado del audio:", gameStartAudioElement.readyState, "Src:", gameStartAudioElement.src);
    gameStartAudioElement.currentTime = 0;
    gameStartAudioElement.play().then(() => {
      console.log("'Game Star.mp3' reproducido exitosamente. Navegando...");
      // Determine the longest *initial* audio duration (Game Star or Voice Intro) for navigation delay
      let maxInitialAudioDuration = gameStartAudioElement.duration;
      if (voiceIntroAudioElement && !voiceIntroAudioElement.muted && voiceIntroAudioElement.duration > maxInitialAudioDuration) {
          maxInitialAudioDuration = voiceIntroAudioElement.duration;
      }

      // Add a small buffer to the longest initial audio duration before navigating
      const delay = (maxInitialAudioDuration > 0 ? maxInitialAudioDuration * 1000 : 500) + 100;

      setTimeout(() => {
        const targetElement = document.querySelector(targetHref);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        } else {
            // Fallback if element not found (should not happen with a valid ID)
            window.location.href = targetHref;
        }
      }, delay);
      
    }).catch(e => {
      console.error("Error (Promise rejected) al intentar reproducir 'Game Star.mp3':", e);
      // Fallback: navigate even if the game start audio fails to play
      console.warn("Navegando directamente debido a un error de reproducción de audio del botón.");
      const targetElement = document.querySelector(targetHref);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.location.href = targetHref;
        }
    });
  } else {
    console.warn("Elemento de audio 'game-start-audio' no encontrado. Navegando directamente.");
    const targetElement = document.querySelector(targetHref);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    } else {
        window.location.href = targetHref;
    }
  }
}

// New helper function to handle the music fade-out after voice intro ends
function fadeHeroicMusicOnVoiceEnd() {
    console.log("voice-intro.wav ha terminado. Iniciando temporizador para el fundido de música heroica.");
    // Wait 10 seconds before starting the fade out
    setTimeout(() => {
        if (heroicIntroAudioElement && !heroicIntroAudioElement.paused) {
            console.log("Iniciando fundido de la música heroica.");
            let fadeInterval;
            let currentVolume = heroicIntroAudioElement.volume;
            const fadeDuration = 3000; // Total fade duration in milliseconds (e.g., 3 seconds for a smooth fade)
            const intervalTime = 50; // Interval for each step in milliseconds

            // Calculate the actual volume decrease per step to ensure it reaches 0 smoothly within fadeDuration
            const numberOfSteps = fadeDuration / intervalTime;
            const volumeDecreasePerStep = currentVolume / numberOfSteps;

            fadeInterval = setInterval(() => {
                if (currentVolume > volumeDecreasePerStep) {
                    currentVolume -= volumeDecreasePerStep;
                    heroicIntroAudioElement.volume = currentVolume;
                } else {
                    heroicIntroAudioElement.volume = 0;
                    heroicIntroAudioElement.pause();
                    heroicIntroAudioElement.currentTime = 0; // Reset for next play if needed
                    clearInterval(fadeInterval);
                    console.log("Música heroica fundida y detenida.");
                }
            }, intervalTime);
        } else {
            console.log("Música heroica ya pausada o no disponible, no se inicia el fundido.");
        }
    }, 10000); // 10 seconds after voice-intro.wav ends
}

// Function to build the phrase based on selections in the constructor
function buildPhrase() {
  const selectedPronounKey = document.getElementById('pronoun-select').value;
  const selectedVerbKey = document.getElementById('verb-select').value;
  let selectedTenseKey = document.getElementById('tense-select').value;
  let selectedObjectKey = document.getElementById('object-select').value;
  let selectedAffix = document.getElementById('affix-select').value;
  let selectedMood = document.getElementById('mood-select').value;
  let selectedEmotion = document.getElementById('emotion-select').value;
  const randomize = document.getElementById('randomize-checkbox').checked;

  // If randomize is checked, randomly select values for all dropdowns
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
    // The function will continue and use the newly set values after these assignments.
  }

  let pronoun = pronounsData[selectedPronounKey];
  let verb = verbsData[selectedVerbKey];
  
  let kibotashiPhrase = "";
  let ipaPhrase = "";
  let meaningPhrase = "";

  const negationCheckbox = document.getElementById('negation-checkbox');
  const isNegated = negationCheckbox && negationCheckbox.checked;

  let conjugatedVerb = "";
  let verbIpa = "";
  let verbMeaning = "";

  kibotashiPhrase += pronoun.kibotashi;
  ipaPhrase += pronoun.ipa;
  meaningPhrase += pronoun.meaning;

  // Verb conjugation logic (specific for 'Ta', generic for others)
  if (verb.kibotashi === "Ta") {
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
      if (baseMeaning.includes('/')) baseMeaning = baseMeaning.split('/')[0]; // Take first meaning if multiple
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
      currentObjectIpa = `${object.ipa.slice(0, -1)}${selectedAffix}/`;
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
  
  // Set the class based on emotion for styling
  const constructorOutputDiv = document.getElementById('constructor-output');
  constructorOutputDiv.className = 'constructor-output'; // Reset to base class
  if (selectedEmotion) {
      constructorOutputDiv.classList.add(selectedEmotion);
  }
  constructorOutputDiv.style.display = 'block';

  // Store for TTS
  document.getElementById('constructor-output').dataset.kibotashiPhrase = kibotashiPhrase.trim();
  document.getElementById('constructor-output').dataset.kibotashiIpa = ipaPhrase.trim();

  playMatchSound(); // Play sound effect for constructor output
}

// Function to speak the constructed phrase using Web Speech API
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
      (voice.name.includes('América Latina') || voice.name.includes('Latinoamérica') || voice.lang.includes('LA') || voice.lang.includes('MX') || voice.lang.includes('AR') || voice.lang.includes('ES-US'))
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

// Function to play a subtle sound effect (for character cells)
function playMatchSound() {
  const currentTime = Tone.now();
  if (currentTime - lastSoundPlayTime > minTimeBetweenSounds) {
    if (matchSoundPlayer) {
      matchSoundPlayer.triggerAttackRelease("G5", "1.5", currentTime);
      lastSoundPlayTime = currentTime;
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
    }
  });
}, observerOptions);

sections.forEach(section => {
  sectionObserver.observe(section);
});
