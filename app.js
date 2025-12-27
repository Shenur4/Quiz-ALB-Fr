// app.js — Quiz Albanais–Français–Allemand–Anglais

// ---------------------------------
// Données VOCAB (AL + FR + DE + EN)
// ---------------------------------
const VOCAB = [
  // Bases
  { sq: "po", fr: "oui", de: "ja", en: "yes", cat: "bases" },
  { sq: "jo", fr: "non", de: "nein", en: "no", cat: "bases" },
  { sq: "ndoshta", fr: "peut-être", de: "vielleicht", en: "maybe", cat: "bases" },
  { sq: "mirë", fr: "bien", de: "gut", en: "good", cat: "bases" },
  { sq: "keq", fr: "mal", de: "schlecht", en: "bad", cat: "bases" },
  { sq: "mësoj", fr: "apprendre", de: "lernen", en: "learn", cat: "bases" },
  { sq: "kuptoj", fr: "comprendre", de: "verstehen", en: "understand", cat: "bases" },
  { sq: "flas", fr: "parler", de: "sprechen", en: "speak", cat: "bases" },
  { sq: "shkruaj", fr: "écrire", de: "schreiben", en: "write", cat: "bases" },
  { sq: "lexoj", fr: "lire", de: "lesen", en: "read", cat: "bases" },
  { sq: "mut", fr: "caca", de: "kacke", en: "poop", cat: "bases" },

  // Salutations
  { sq: "ju lutem", fr: "s'il vous plaît", de: "bitte", en: "please", cat: "salutations" },
  { sq: "të lutem", fr: "s'il te plaît", de: "bitte", en: "please", cat: "salutations" },
  { sq: "faleminderit", fr: "merci", de: "danke", en: "thank you", cat: "salutations" },
  { sq: "përshëndetje", fr: "bonjour", de: "hallo", en: "hello", cat: "salutations" },
  { sq: "mirupafshim", fr: "au revoir", de: "auf Wiedersehen", en: "goodbye", cat: "salutations" },
  { sq: "më fal", fr: "excusez-moi", de: "entschuldigung", en: "sorry", cat: "salutations" },
  { sq: "si jeni?", fr: "comment ça va?", de: "wie geht's?", en: "how are you?", cat: "salutations" },

  // Nombres
  { sq: "një", fr: "un", de: "eins", en: "one", cat: "nombres" },
  { sq: "dy", fr: "deux", de: "zwei", en: "two", cat: "nombres" },
  { sq: "tre", fr: "trois", de: "drei", en: "three", cat: "nombres" },
  { sq: "katër", fr: "quatre", de: "vier", en: "four", cat: "nombres" },
  { sq: "pesë", fr: "cinq", de: "fünf", en: "five", cat: "nombres" },
  { sq: "gjashtë", fr: "six", de: "sechs", en: "six", cat: "nombres" },
  { sq: "shtatë", fr: "sept", de: "sieben", en: "seven", cat: "nombres" },
  { sq: "tetë", fr: "huit", de: "acht", en: "eight", cat: "nombres" },
  { sq: "nëntë", fr: "neuf", de: "neun", en: "nine", cat: "nombres" },
  { sq: "dhjetë", fr: "dix", de: "zehn", en: "ten", cat: "nombres" },

  // Couleurs
  { sq: "kuq", fr: "rouge", de: "rot", en: "red", cat: "couleurs" },
  { sq: "bardhë", fr: "blanc", de: "weiß", en: "white", cat: "couleurs" },
  { sq: "zezë", fr: "noir", de: "schwarz", en: "black", cat: "couleurs" },
  { sq: "mavi", fr: "bleu", de: "blau", en: "blue", cat: "couleurs" },
  { sq: "jeshile", fr: "vert", de: "grün", en: "green", cat: "couleurs" },
  { sq: "sari", fr: "jaune", de: "gelb", en: "yellow", cat: "couleurs" },
  { sq: "portokall", fr: "orange", de: "orange", en: "orange", cat: "couleurs" },
  { sq: "pembe", fr: "rose", de: "rosa", en: "pink", cat: "couleurs" },
  { sq: "kaft", fr: "marron", de: "braun", en: "brown", cat: "couleurs" },
  { sq: "përhift", fr: "gris", de: "grau", en: "grey", cat: "couleurs" },

  // Famille
  { sq: "nënë", fr: "mère", de: "mutter", en: "mother", cat: "famille" },
  { sq: "babë", fr: "père", de: "vater", en: "father", cat: "famille" },
  { sq: "vëlla", fr: "frère", de: "bruder", en: "brother", cat: "famille" },
  { sq: "motër", fr: "sœur", de: "schwester", en: "sister", cat: "famille" },
  { sq: "gjysh", fr: "grand-père", de: "großvater", en: "grandfather", cat: "famille" },
  { sq: "gjyshe", fr: "grand-mère", de: "großmutter", en: "grandmother", cat: "famille" },
  { sq: "djalë", fr: "fils", de: "sohn", en: "son", cat: "famille" },
  { sq: "vajzë", fr: "fille", de: "tochter", en: "daughter", cat: "famille" },
  { sq: "bashkëshort", fr: "mari", de: "ehemann", en: "husband", cat: "famille" },
  { sq: "bashkëshorte", fr: "femme", de: "ehefrau", en: "wife", cat: "famille" },

  // Nourriture
  { sq: "bukë", fr: "pain", de: "brot", en: "bread", cat: "nourriture" },
  { sq: "ujë", fr: "eau", de: "wasser", en: "water", cat: "nourriture" },
  { sq: "mish", fr: "viande", de: "fleisch", en: "meat", cat: "nourriture" },
  { sq: "djathë", fr: "fromage", de: "käse", en: "cheese", cat: "nourriture" },
  { sq: "mollë", fr: "pomme", de: "apfel", en: "apple", cat: "nourriture" },
  { sq: "perime", fr: "légumes", de: "gemüse", en: "vegetables", cat: "nourriture" },
  { sq: "fruta", fr: "fruits", de: "obst", en: "fruits", cat: "nourriture" },
  { sq: "kafe", fr: "café", de: "kaffee", en: "coffee", cat: "nourriture" },
  { sq: "çaj", fr: "thé", de: "tee", en: "tea", cat: "nourriture" },
  { sq: "sheqer", fr: "sucre", de: "zucker", en: "sugar", cat: "nourriture" },

  // Temps
  { sq: "sot", fr: "aujourd'hui", de: "heute", en: "today", cat: "temps" },
  { sq: "nesër", fr: "demain", de: "morgen", en: "tomorrow", cat: "temps" },
  { sq: "dje", fr: "hier", de: "gestern", en: "yesterday", cat: "temps" },
  { sq: "orë", fr: "heure", de: "stunde", en: "hour", cat: "temps" },
  { sq: "minutë", fr: "minute", de: "minute", en: "minute", cat: "temps" },
  { sq: "sekondë", fr: "seconde", de: "sekunde", en: "second", cat: "temps" },
  { sq: "javë", fr: "semaine", de: "woche", en: "week", cat: "temps" },
  { sq: "muaj", fr: "mois", de: "monat", en: "month", cat: "temps" },
  { sq: "vit", fr: "année", de: "jahr", en: "year", cat: "temps" },
  { sq: "kohë", fr: "temps", de: "zeit", en: "time", cat: "temps" },
];

// ----------------------
// UI MULTILINGUE
// ----------------------
const UI = {
  fr: {
    title: "Quiz Albanais – Multilingue",
    header_title: "Quiz Albanais – Multilingue",
    header_subtitle: "Teste ton vocabulaire en albanais, français, allemand et anglais.",
    label_direction: "Direction:",
    label_category: "Catégorie:",
    label_difficulty: "Difficulté:",
    btn_start: "Commencer",
    btn_survival: "Mode Survie",
    btn_back: "Retour au menu",
    label_question: "Question:",
    label_score: "Score:",
    label_best: "Meilleur:",
    label_time: "Temps : 5s",
    btn_next: "Suivant",
    btn_skip: "Passer",
    results_title: "Bravo !",
    results_score: "Ton score:",
    btn_restart: "Rejouer",
  },
  de: {
    title: "Albanisch Quiz – Mehrsprachig",
    header_title: "Albanisch Quiz – Mehrsprachig",
    header_subtitle: "Teste deinen Wortschatz auf Albanisch, Französisch, Deutsch und Englisch.",
    label_direction: "Richtung:",
    label_category: "Kategorie:",
    label_difficulty: "Schwierigkeit:",
    btn_start: "Starten",
    btn_survival: "Überlebensmodus",
    btn_back: "Zurück zum Menü",
    label_question: "Frage:",
    label_score: "Punkte:",
    label_best: "Bestleistung:",
    label_time: "Zeit : 5s",
    btn_next: "Weiter",
    btn_skip: "Überspringen",
    results_title: "Gut gemacht!",
    results_score: "Dein Ergebnis:",
    btn_restart: "Nochmal spielen",
  },
  en: {
    title: "Albanian Quiz – Multilingual",
    header_title: "Albanian Quiz – Multilingual",
    header_subtitle: "Test your vocabulary in Albanian, French, German and English.",
    label_direction: "Direction:",
    label_category: "Category:",
    label_difficulty: "Difficulty:",
    btn_start: "Start",
    btn_survival: "Survival Mode",
    btn_back: "Back to menu",
    label_question: "Question:",
    label_score: "Score:",
    label_best: "Best:",
    label_time: "Time : 5s",
    btn_next: "Next",
    btn_skip: "Skip",
    results_title: "Well done!",
    results_score: "Your score:",
    btn_restart: "Play again",
  }
};

// ----------------------
// Appliquer la langue UI
// ----------------------
function applyUI(lang) {
  const t = UI[lang] || UI.fr;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) el.textContent = t[key];
  });
}

// Lire ?dir=sq-fr
const params = new URLSearchParams(window.location.search);
const selectedDir = params.get("dir");
const uiLang = selectedDir ? selectedDir.split("-")[1] : "fr";

// Synchroniser le menu déroulant
document.addEventListener("DOMContentLoaded", () => {
  const dirSelect = document.getElementById("direction");
  if (dirSelect && selectedDir) {
    const opt = [...dirSelect.options].find(o => o.value === selectedDir);
    if (opt) dirSelect.value = selectedDir;
  }
});

// ----------------------
// État global
// ----------------------
const BEST_KEY = "best_score";
const SURVIVAL_BEST_KEY = "survival_best_score";
const SURVIVAL_NAME_KEY = "survival_best_name";

const state = {
  questions: [],
  currentIdx: 0,
  total: 0,
  score: 0,
  answered: false,
  choiceCount: 3,
  survival: false,
  pool: [],
  currentQuestion: null
};

// ----------------------
// Sélecteurs
// ----------------------
const el = {
  direction: document.getElementById("direction"),
  category: document.getElementById("category"),
  difficulty: document.getElementById("difficulty"),

  startBtn: document.getElementById("startBtn"),
  survivalBtn: document.getElementById("survivalBtn"),

  gamePanel: document.getElementById("gamePanel"),
  resultsPanel: document.getElementById("resultsPanel"),

  questionText: document.getElementById("questionText"),
  qIndex: document.getElementById("qIndex"),
  qTotal: document.getElementById("qTotal"),
  score: document.getElementById("score"),
  best: document.getElementById("best"),
  progress: document.getElementById("progress"),
  feedback: document.getElementById("feedback"),
  timer: document.getElementById("timer"),

  choices: document.getElementById("choices"),
  listenBtn: document.getElementById("listenBtn"),

  finalScore: document.getElementById("finalScore"),
  finalTotal: document.getElementById("finalTotal"),
  bestMsg: document.getElementById("bestMsg"),

  nextBtn: document.getElementById("nextBtn"),
  skipBtn: document.getElementById("skipBtn"),
  restartBtn: document.getElementById("restartBtn"),

  flashPanel: document.getElementById("flashPanel"),
  flashCard: document.getElementById("flashCard"),
  flashFront: document.getElementById("flashFront"),
  flashBack: document.getElementById("flashBack"),
  flashNext: document.getElementById("flashNext"),
  flashBtn: document.getElementById("flashBtn"),
};

// ----------------------
// Mapping direction → champs
// ----------------------
function getPrompt(dir, word) {
  switch (dir) {
    case "sq-fr": return word.sq;
    case "fr-sq": return word.fr;
    case "sq-de": return word.sq;
    case "de-sq": return word.de;
    case "sq-en": return word.sq;
    case "en-sq": return word.en;
  }
}

function getAnswer(dir, word) {
  switch (dir) {
    case "sq-fr": return word.fr;
    case "fr-sq": return word.sq;
    case "sq-de": return word.de;
    case "de-sq": return word.sq;
    case "sq-en": return word.en;
    case "en-sq": return word.sq;
  }
}

// ======================================================
// VOIX INTELLIGENTES (PC = albanais, mobile = turc)
// ======================================================

function detectPlatform() {
  const ua = navigator.userAgent;
  return {
    isWindows: ua.includes("Windows"),
    isMobile: ua.includes("Android") || ua.includes("iPhone") || ua.includes("iPad")
  };
}

function getVoiceLangPrompt(dir) {
  const { isWindows, isMobile } = detectPlatform();

  // Si la langue source est l'albanais
  if (dir.startsWith("sq-")) {
    if (isWindows) return "sq-AL";   // PC → vraie voix albanaise
    if (isMobile) return "tr-TR";    // Mobile → voix turque (bien meilleure)
  }

  // Sinon, langue source normale
  switch (dir) {
    case "fr-sq": return "fr-FR";
    case "de-sq": return "de-DE";
    case "en-sq": return "en-US";
  }

  return "sq-AL"; // fallback propre
}

function getVoiceLangAnswer(dir) {
  const { isWindows, isMobile } = detectPlatform();

  // Si la langue cible est l'albanais
  if (dir.endsWith("-sq")) {
    if (isWindows) return "sq-AL";   // PC → vraie voix albanaise
    if (isMobile) return "tr-TR";    // Mobile → voix turque (bien meilleure)
  }

  // Sinon, langue cible normale
  switch (dir) {
    case "sq-fr": return "fr-FR";
    case "sq-de": return "de-DE";
    case "sq-en": return "en-US";
  }

  return "sq-AL"; // fallback propre
}

// Synthèse vocale
function speak(text, lang) {
  const utter = new SpeechSynthesisUtterance(text);
  const voices = speechSynthesis.getVoices();

  // Choix intelligent de la voix
  utter.voice = voices.find(v => v.lang === lang) || null;

  // Ajustements pour améliorer la prononciation
  utter.rate = 0.9;
  utter.pitch = 1.0;

  speechSynthesis.cancel();
  speechSynthesis.speak(utter);
}

// ======================================================
// FLASHCARDS
// ======================================================

function startFlashcards() {
  el.flashPanel.classList.remove("hidden");
  el.gamePanel.classList.add("hidden");
  el.resultsPanel.classList.add("hidden");
  loadFlashcard();
}

function loadFlashcard() {
  const dir = el.direction.value;
  const pool = VOCAB;

  const word = pool[Math.floor(Math.random() * pool.length)];

  el.flashFront.textContent = getPrompt(dir, word);
  el.flashBack.textContent = getAnswer(dir, word);

  el.flashCard.classList.remove("flip");

  // Lecture automatique recto
  speak(el.flashFront.textContent, getVoiceLangPrompt(dir));
}

el.flashCard.addEventListener("click", () => {
  el.flashCard.classList.toggle("flip");
  const dir = el.direction.value;

  if (el.flashCard.classList.contains("flip")) {
    speak(el.flashBack.textContent, getVoiceLangAnswer(dir));
  } else {
    speak(el.flashFront.textContent, getVoiceLangPrompt(dir));
  }
});

el.flashNext.addEventListener("click", loadFlashcard);
el.flashBtn.addEventListener("click", startFlashcards);

// ======================================================
// QUIZ NORMAL + MODE SURVIE
// ======================================================

function normalize(s) {
  return s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function generateQuestion(dir, word, pool, choiceCount) {
  const prompt = getPrompt(dir, word);
  const answer = getAnswer(dir, word);

  const distractorPool = pool
    .filter(v => v !== word)
    .map(v => getAnswer(dir, v))
    .filter(v => normalize(v) !== normalize(answer));

  const options = shuffle([
    answer,
    ...shuffle(distractorPool).slice(0, choiceCount - 1)
  ]);

  return { prompt, answer, options };
}

function startGame() {
  state.survival = false;

  const dir = el.direction.value;
  const cat = el.category.value;
  const diff = el.difficulty.value;

  state.choiceCount =
    diff === "easy" ? 3 :
    diff === "medium" ? 4 : 5;

  const pool = VOCAB.filter(v => cat === "all" || v.cat === cat);
  state.pool = [...pool];

  state.total = 10;
  state.currentIdx = 0;
  state.score = 0;
  state.questions = [];

  for (let i = 0; i < state.total; i++) {
    const word = pool[Math.floor(Math.random() * pool.length)];
    state.questions.push(generateQuestion(dir, word, pool, state.choiceCount));
  }

  el.qTotal.textContent = state.total;
  el.score.textContent = 0;
  el.progress.max = state.total;
  el.progress.value = 0;

  el.resultsPanel.classList.add("hidden");
  el.gamePanel.classList.remove("hidden");
  el.timer.classList.add("hidden");
  el.feedback.textContent = "";

  renderQuestion();
}

function renderQuestion() {
  const q = state.questions[state.currentIdx];
  state.answered = false;

  el.questionText.textContent = q.prompt;
  el.choices.innerHTML = "";

  q.options.forEach(opt => {
    const li = document.createElement("li");
    li.className = "choice festive";
    li.textContent = opt;
    li.addEventListener("click", () => handleChoice(li, opt));
    el.choices.appendChild(li);
  });

  el.qIndex.textContent = state.currentIdx + 1;
  el.progress.value = state.currentIdx;
  el.feedback.textContent = "";

  // 🔊 Lecture automatique
  const dir = el.direction.value;
  speak(q.prompt, getVoiceLangPrompt(dir));
}

function handleChoice(li, opt) {
  if (state.answered) return;
  const q = state.questions[state.currentIdx];
  const correct = normalize(opt) === normalize(q.answer);
  state.answered = true;

  const choices = el.choices.querySelectorAll(".choice");
  choices.forEach(c => {
    const isCorrect = normalize(c.textContent) === normalize(q.answer);
    if (isCorrect) c.classList.add("correct");
  });

  if (!correct) li.classList.add("wrong");

  if (correct) {
    state.score++;
    el.score.textContent = state.score;
    el.feedback.textContent = "Bien joué !";
  } else {
    el.feedback.textContent = `Réponse: ${q.answer}`;
  }
}

function next() {
  if (state.currentIdx < state.total - 1) {
    state.currentIdx++;
    renderQuestion();
  } else finish();
}

function skip() {
  if (state.answered) return;
  state.answered = true;
  el.feedback.textContent = "Passé.";

  if (state.currentIdx < state.total - 1) {
    state.currentIdx++;
    renderQuestion();
  } else finish();
}

function finish() {
  el.gamePanel.classList.add("hidden");
  el.resultsPanel.classList.remove("hidden");

  el.finalScore.textContent = state.score;
  el.finalTotal.textContent = state.total;

  const best = parseInt(localStorage.getItem(BEST_KEY) || "0", 10);

  if (state.score > best) {
    localStorage.setItem(BEST_KEY, String(state.score));
    el.best.textContent = state.score;
    el.bestMsg.textContent = "Nouveau meilleur score !";
  } else {
    el.bestMsg.textContent = `Meilleur actuel: ${best}`;
  }

  launchConfetti();
}

// ----------------------
// MODE SURVIE
// ----------------------
let timer = null;
let timeLeft = 5;

function startSurvival() {
  state.survival = true;

  const dir = el.direction.value;
  const cat = el.category.value;
  const diff = el.difficulty.value;

  state.choiceCount =
    diff === "easy" ? 3 :
    diff === "medium" ? 4 : 5;

  const pool = VOCAB.filter(v => cat === "all" || v.cat === cat);
  state.pool = [...pool];
  state.score = 0;

  el.qTotal.textContent = "∞";
  el.score.textContent = 0;
  el.progress.max = 0;
  el.progress.value = 0;

  el.resultsPanel.classList.add("hidden");
  el.gamePanel.classList.remove("hidden");
  el.timer.classList.remove("hidden");
  el.feedback.textContent = "";

  renderSurvivalQuestion();
}

function renderSurvivalQuestion() {
  clearInterval(timer);
  timeLeft = 5;
  updateTimerDisplay();

  const dir = el.direction.value;
  const pool = state.pool;

  const word = pool[Math.floor(Math.random() * pool.length)];
  const q = generateQuestion(dir, word, pool, state.choiceCount);

  state.currentQuestion = q;
  state.answered = false;

  el.questionText.textContent = q.prompt;
  el.choices.innerHTML = "";

  q.options.forEach(opt => {
    const li = document.createElement("li");
    li.className = "choice festive";
    li.textContent = opt;
    li.addEventListener("click", () => handleSurvivalChoice(li, opt));
    el.choices.appendChild(li);
  });

  el.qIndex.textContent = state.score + 1;

  startTimer();

  // 🔊 Lecture automatique
  speak(q.prompt, getVoiceLangPrompt(dir));
}

function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();

    if (timeLeft <= 0) {
      clearInterval(timer);
      el.feedback.textContent = "Temps écoulé !";
      setTimeout(() => endSurvival(), 800);
    }
  }, 1000);
}

function updateTimerDisplay() {
  el.timer.textContent = `Temps : ${timeLeft}s`;
}

function handleSurvivalChoice(li, opt) {
  if (state.answered) return;
  state.answered = true;
  clearInterval(timer);

  const correct = normalize(opt) === normalize(state.currentQuestion.answer);

  if (correct) {
    state.score++;
    el.score.textContent = state.score;
    renderSurvivalQuestion();
  } else {
    el.feedback.textContent = `Réponse: ${state.currentQuestion.answer}`;
    setTimeout(() => endSurvival(), 800);
  }
}

function endSurvival() {
  clearInterval(timer);

  el.gamePanel.classList.add("hidden");
  el.resultsPanel.classList.remove("hidden");

  el.finalScore.textContent = state.score;
  el.finalTotal.textContent = "∞";

  const best = parseInt(localStorage.getItem(SURVIVAL_BEST_KEY) || "0", 10);

  if (state.score > best) {
    const name = prompt("Nouveau record ! Entre ton nom :");
    localStorage.setItem(SURVIVAL_BEST_KEY, state.score);
    localStorage.setItem(SURVIVAL_NAME_KEY, name || "Anonyme");
    el.bestMsg.textContent = `Record battu par ${name} avec ${state.score} !`;
  } else {
    const name = localStorage.getItem(SURVIVAL_NAME_KEY) || "Personne";
    el.bestMsg.textContent = `Record actuel : ${best} par ${name}`;
  }

  launchConfetti();
}

function restart() {
  if (state.survival) startSurvival();
  else startGame();
}

// ======================================================
// EFFETS VISUELS (NEIGE + CONFETTIS)
// ======================================================

// ❄️ Effet de neige
function createSnowflakes() {
  const snowContainer = document.querySelector('.snow');
  if (!snowContainer) return;

  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.textContent = '❄';

  snowflake.style.left = Math.random() * 100 + 'vw';
  snowflake.style.animationDuration = (Math.random() * 10 + 10) + 's';
  snowflake.style.fontSize = (Math.random() * 10 + 10) + 'px';

  snowContainer.appendChild(snowflake);

  setTimeout(() => {
    snowflake.remove();
  }, 15000);
}

setInterval(createSnowflakes, 600);

// 🎉 Confettis
function launchConfetti() {
  const colors = ["#ff0", "#f0f", "#0ff", "#0f0", "#f00", "#00f", "#ffa500"];
  const confettiContainer = document.body;

  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.style.position = "fixed";
    confetti.style.top = "-10px";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.width = "8px";
    confetti.style.height = "14px";
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.opacity = 0.9;
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
    confetti.style.zIndex = 9999;
    confetti.style.pointerEvents = "none";

    const duration = Math.random() * 3 + 2;
    confetti.style.transition = `transform ${duration}s linear, top ${duration}s linear`;
    confettiContainer.appendChild(confetti);

    setTimeout(() => {
      confetti.style.top = "100vh";
      confetti.style.transform += ` translateY(100vh) rotate(${Math.random() * 360}deg)`;
    }, 50);

    setTimeout(() => {
      confetti.remove();
    }, duration * 1000 + 500);
  }
}

// ======================================================
// ÉCOUTEURS D'ÉVÉNEMENTS
// ======================================================

el.startBtn.addEventListener("click", startGame);
el.survivalBtn.addEventListener("click", startSurvival);
el.nextBtn.addEventListener("click", next);
el.skipBtn.addEventListener("click", skip);
el.restartBtn.addEventListener("click", restart);

// Bouton "Écouter" du quiz
if (el.listenBtn) {
  el.listenBtn.addEventListener("click", () => {
    const dir = el.direction.value;
    const text = el.questionText.textContent;
    speak(text, getVoiceLangPrompt(dir));
  });
}

// ======================================================
// INITIALISATION UI MULTILINGUE
// ======================================================

document.addEventListener("DOMContentLoaded", () => {
  applyUI(uiLang);
});

// ======================================================
// FIN DU FICHIER app.js
// ======================================================
