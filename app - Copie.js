// app.js — Quiz Albanais–Français–Allemand

// ----------------------
// Données
// ----------------------
const VOCAB = [
  // Bases
  { sq: "po", fr: "oui", de: "ja", cat: "bases" },
  { sq: "jo", fr: "non", de: "nein", cat: "bases" },
  { sq: "ndoshta", fr: "peut-être", de: "vielleicht", cat: "bases" },
  { sq: "mirë", fr: "bien", de: "gut", cat: "bases" },
  { sq: "keq", fr: "mal", de: "schlecht", cat: "bases" },
  { sq: "mësoj", fr: "apprendre", de: "lernen", cat: "bases" },
  { sq: "kuptoj", fr: "comprendre", de: "verstehen", cat: "bases" },
  { sq: "flas", fr: "parler", de: "sprechen", cat: "bases" },
  { sq: "shkruaj", fr: "écrire", de: "schreiben", cat: "bases" },
  { sq: "lexoj", fr: "lire", de: "lesen", cat: "bases" },
  { sq: "mut", fr: "caca", de: "kacke", cat: "bases" },

  // Salutations
  { sq: "ju lutem", fr: "s'il vous plaît", de: "bitte", cat: "salutations" },
  { sq: "të lutem", fr: "s'il te plaît", de: "bitte", cat: "salutations" },
  { sq: "faleminderit", fr: "merci", de: "danke", cat: "salutations" },
  { sq: "përshëndetje", fr: "bonjour", de: "hallo", cat: "salutations" },
  { sq: "mirupafshim", fr: "au revoir", de: "auf Wiedersehen", cat: "salutations" },
  { sq: "më fal", fr: "excusez-moi", de: "entschuldigung", cat: "salutations" },
  { sq: "si jeni?", fr: "comment ça va?", de: "wie geht's?", cat: "salutations" },

  // Nombres
  { sq: "një", fr: "un", de: "eins", cat: "nombres" },
  { sq: "dy", fr: "deux", de: "zwei", cat: "nombres" },
  { sq: "tre", fr: "trois", de: "drei", cat: "nombres" },
  { sq: "katër", fr: "quatre", de: "vier", cat: "nombres" },
  { sq: "pesë", fr: "cinq", de: "fünf", cat: "nombres" },
  { sq: "gjashtë", fr: "six", de: "sechs", cat: "nombres" },
  { sq: "shtatë", fr: "sept", de: "sieben", cat: "nombres" },
  { sq: "tetë", fr: "huit", de: "acht", cat: "nombres" },
  { sq: "nëntë", fr: "neuf", de: "neun", cat: "nombres" },
  { sq: "dhjetë", fr: "dix", de: "zehn", cat: "nombres" },

  // Couleurs
  { sq: "kuq", fr: "rouge", de: "rot", cat: "couleurs" },
  { sq: "bardhë", fr: "blanc", de: "weiß", cat: "couleurs" },
  { sq: "zezë", fr: "noir", de: "schwarz", cat: "couleurs" },
  { sq: "mavi", fr: "bleu", de: "blau", cat: "couleurs" },
  { sq: "jeshile", fr: "vert", de: "grün", cat: "couleurs" },
  { sq: "sari", fr: "jaune", de: "gelb", cat: "couleurs" },
  { sq: "portokall", fr: "orange", de: "orange", cat: "couleurs" },
  { sq: "pembe", fr: "rose", de: "rosa", cat: "couleurs" },
  { sq: "kaft", fr: "marron", de: "braun", cat: "couleurs" },
  { sq: "përhift", fr: "gris", de: "grau", cat: "couleurs" },

  // Famille
  { sq: "nënë", fr: "mère", de: "mutter", cat: "famille" },
  { sq: "babë", fr: "père", de: "vater", cat: "famille" },
  { sq: "vëlla", fr: "frère", de: "bruder", cat: "famille" },
  { sq: "motër", fr: "sœur", de: "schwester", cat: "famille" },
  { sq: "gjysh", fr: "grand-père", de: "großvater", cat: "famille" },
  { sq: "gjyshe", fr: "grand-mère", de: "großmutter", cat: "famille" },
  { sq: "djalë", fr: "fils", de: "sohn", cat: "famille" },
  { sq: "vajzë", fr: "fille", de: "tochter", cat: "famille" },
  { sq: "bashkëshort", fr: "mari", de: "ehemann", cat: "famille" },
  { sq: "bashkëshorte", fr: "femme", de: "ehefrau", cat: "famille" },

  // Nourriture
  { sq: "bukë", fr: "pain", de: "brot", cat: "nourriture" },
  { sq: "ujë", fr: "eau", de: "wasser", cat: "nourriture" },
  { sq: "mish", fr: "viande", de: "fleisch", cat: "nourriture" },
  { sq: "djathë", fr: "fromage", de: "käse", cat: "nourriture" },
  { sq: "mollë", fr: "pomme", de: "apfel", cat: "nourriture" },
  { sq: "perime", fr: "légumes", de: "gemüse", cat: "nourriture" },
  { sq: "fruta", fr: "fruits", de: "obst", cat: "nourriture" },
  { sq: "kafe", fr: "café", de: "kaffee", cat: "nourriture" },
  { sq: "çaj", fr: "thé", de: "tee", cat: "nourriture" },
  { sq: "sheqer", fr: "sucre", de: "zucker", cat: "nourriture" },

  // Temps
  { sq: "sot", fr: "aujourd'hui", de: "heute", cat: "temps" },
  { sq: "nesër", fr: "demain", de: "morgen", cat: "temps" },
  { sq: "dje", fr: "hier", de: "gestern", cat: "temps" },
  { sq: "orë", fr: "heure", de: "stunde", cat: "temps" },
  { sq: "minutë", fr: "minute", de: "minute", cat: "temps" },
  { sq: "sekondë", fr: "seconde", de: "sekunde", cat: "temps" },
  { sq: "javë", fr: "semaine", de: "woche", cat: "temps" },
  { sq: "muaj", fr: "mois", de: "monat", cat: "temps" },
  { sq: "vit", fr: "année", de: "jahr", cat: "temps" },
  { sq: "kohë", fr: "temps", de: "zeit", cat: "temps" },
];

// ----------------------
// Références DOM
// ----------------------
const el = {
  direction: document.getElementById("direction"),
  category: document.getElementById("category"),
  difficulty: document.getElementById("difficulty"),
  startBtn: document.getElementById("startBtn"),
  survivalBtn: document.getElementById("survivalBtn"),
  gamePanel: document.getElementById("gamePanel"),
  resultsPanel: document.getElementById("resultsPanel"),
  qIndex: document.getElementById("qIndex"),
  qTotal: document.getElementById("qTotal"),
  score: document.getElementById("score"),
  best: document.getElementById("best"),
  questionText: document.getElementById("questionText"),
  choices: document.getElementById("choices"),
  nextBtn: document.getElementById("nextBtn"),
  skipBtn: document.getElementById("skipBtn"),
  feedback: document.getElementById("feedback"),
  progress: document.getElementById("progress"),
  finalScore: document.getElementById("finalScore"),
  finalTotal: document.getElementById("finalTotal"),
  bestMsg: document.getElementById("bestMsg"),
  restartBtn: document.getElementById("restartBtn"),
  timer: document.getElementById("timer")
};

// Lire la langue depuis l'URL
const params = new URLSearchParams(window.location.search);
const selectedDir = params.get("dir");

if (selectedDir) {
  document.getElementById("direction").value = selectedDir;
}

// ----------------------
// État
// ----------------------
let state = {
  pool: [],
  questions: [],
  currentIdx: 0,
  score: 0,
  total: 10,
  answered: false,
  choiceCount: 4,
  survival: false
};

const BEST_KEY = "alb-fr-quiz-best";
const SURVIVAL_BEST_KEY = "alb-fr-survival-best";
const SURVIVAL_NAME_KEY = "alb-fr-survival-name";

el.best.textContent = localStorage.getItem(BEST_KEY) || 0;

// ----------------------
// Helpers direction
// ----------------------
function getPrompt(dir, word) {
  switch (dir) {
    case "sq-fr":
    case "sq-de":
      return word.sq;
    case "fr-sq":
      return word.fr;
    case "de-sq":
      return word.de;
    default:
      return word.sq;
  }
}

function getAnswer(dir, word) {
  switch (dir) {
    case "sq-fr":
      return word.fr;
    case "sq-de":
      return word.de;
    case "fr-sq":
      return word.sq;
    case "de-sq":
      return word.sq;
    default:
      return word.fr;
  }
}

function mapCandidate(dir, word) {
  switch (dir) {
    case "sq-fr":
    case "fr-sq":
      return word.fr;
    case "sq-de":
    case "de-sq":
      return word.de;
    default:
      return word.fr;
  }
}

// ----------------------
// Mode normal
// ----------------------
function startGame() {
  state.survival = false;
  el.timer.classList.add("hidden");

  const dir = el.direction.value;
  const cat = el.category.value;
  const diff = el.difficulty.value;
  state.choiceCount = diff === "easy" ? 3 : diff === "medium" ? 4 : 5;

  const pool = VOCAB.filter(v => cat === "all" || v.cat === cat);
  state.pool = shuffle([...pool]);
  state.questions = [];
  state.currentIdx = 0;
  state.score = 0;
  state.total = Math.min(10, state.pool.length);

  for (let i = 0; i < state.total; i++) {
    const target = state.pool[i];
    const prompt = getPrompt(dir, target);
    const answer = getAnswer(dir, target);
    const others = pool.filter(v => v !== target);
    const candidates = shuffle(others)
      .slice(0, state.choiceCount - 1)
      .map(v => mapCandidate(dir, v));
    const options = shuffle([answer, ...candidates]);
    state.questions.push({ prompt, answer, options });
  }

  el.qTotal.textContent = state.total;
  el.score.textContent = 0;
  el.progress.max = state.total;
  el.progress.value = 0;
  el.resultsPanel.classList.add("hidden");
  el.gamePanel.classList.remove("hidden");

  renderQuestion();
}

// ----------------------
// Mode Survie
// ----------------------
let timer = null;
let timeLeft = 5;

function startSurvival() {
  state.survival = true;

  const dir = el.direction.value;
  const cat = el.category.value;
  const diff = el.difficulty.value;
  state.choiceCount = diff === "easy" ? 3 : diff === "medium" ? 4 : 5;

  const pool = VOCAB.filter(v => cat === "all" || v.cat === cat);
  state.pool = [...pool];
  state.currentIdx = 0;
  state.score = 0;
  state.total = Infinity;

  el.qTotal.textContent = "∞";
  el.score.textContent = 0;
  el.progress.max = 0;
  el.progress.value = 0;

  el.resultsPanel.classList.add("hidden");
  el.gamePanel.classList.remove("hidden");
  el.timer.classList.remove("hidden");

  renderSurvivalQuestion();
}

function renderSurvivalQuestion() {
  clearInterval(timer);
  timeLeft = 5;
  updateTimerDisplay();

  const dir = el.direction.value;
  const pool = state.pool;

  const target = pool[Math.floor(Math.random() * pool.length)];
  const prompt = getPrompt(dir, target);
  const answer = getAnswer(dir, target);

  const others = pool.filter(v => v !== target);
  const candidates = shuffle(others)
    .slice(0, state.choiceCount - 1)
    .map(v => mapCandidate(dir, v));

  const options = shuffle([answer, ...candidates]);

  state.currentQuestion = { prompt, answer, options };
  state.answered = false;

  el.questionText.textContent = prompt;
  el.choices.innerHTML = "";

  options.forEach(opt => {
    const li = document.createElement("li");
    li.className = "choice festive";
    li.textContent = opt;
    li.addEventListener("click", () => handleSurvivalChoice(li, opt));
    el.choices.appendChild(li);
  });

  el.qIndex.textContent = state.score + 1;

  startTimer();
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

// ----------------------
// Mode normal — affichage question
// ----------------------
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
}

// ----------------------
// Mode normal — choix
// ----------------------
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

// ----------------------
// Mode normal — suivant
// ----------------------
function next() {
  if (state.currentIdx < state.total - 1) {
    state.currentIdx++;
    renderQuestion();
  } else finish();
}

// ----------------------
// Mode normal — passer
// ----------------------
function skip() {
  if (state.answered) return;
  state.answered = true;
  el.feedback.textContent = "Passé.";

  if (state.currentIdx < state.total - 1) {
    state.currentIdx++;
    renderQuestion();
  } else finish();
}

// ----------------------
// Mode normal — fin
// ----------------------
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
// Rejouer
// ----------------------
function restart() {
  if (state.survival) startSurvival();
  else startGame();
}

// ----------------------
// Utils
// ----------------------
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

// ----------------------
// Écouteurs
// ----------------------
el.startBtn.addEventListener("click", startGame);
el.survivalBtn.addEventListener("click", startSurvival);
el.nextBtn.addEventListener("click", next);
el.skipBtn.addEventListener("click", skip);
el.restartBtn.addEventListener("click", restart);

// ----------------------
// Effet de neige ❄️
// ----------------------
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

// 🎉 Confettis multicolores en fin de partie
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