// app.js — Quiz Albanais–Français

// ----------------------
// Données
// ----------------------
const VOCAB = [
  // Bases
  { sq: "po", fr: "oui", cat: "bases" },
  { sq: "jo", fr: "non", cat: "bases" },
  { sq: "ndoshta", fr: "peut-être", cat: "bases" },
  { sq: "mirë", fr: "bien", cat: "bases" },
  { sq: "keq", fr: "mal", cat: "bases" },
  { sq: "mësoj", fr: "apprendre", cat: "bases" },
  { sq: "kuptoj", fr: "comprendre", cat: "bases" },
  { sq: "flas", fr: "parler", cat: "bases" },
  { sq: "shkruaj", fr: "écrire", cat: "bases" },
  { sq: "lexoj", fr: "lire", cat: "bases" },
  { sq: "mut", fr: "caca", cat: "bases" },

  // Salutations
  { sq: "ju lutem", fr: "s'il vous plaît", cat: "salutations" },
  { sq: "të lutem", fr: "s'il te plaît", cat: "salutations" },
  { sq: "faleminderit", fr: "merci", cat: "salutations" },
  { sq: "përshëndetje", fr: "bonjour", cat: "salutations" },
  { sq: "mirupafshim", fr: "au revoir", cat: "salutations" },
  { sq: "më fal", fr: "excusez-moi", cat: "salutations" },
  { sq: "si jeni?", fr: "comment ça va?", cat: "salutations" },

  // Nombres
  { sq: "një", fr: "un", cat: "nombres" },
  { sq: "dy", fr: "deux", cat: "nombres" },
  { sq: "tre", fr: "trois", cat: "nombres" },
  { sq: "katër", fr: "quatre", cat: "nombres" },
  { sq: "pesë", fr: "cinq", cat: "nombres" },
  { sq: "gjashtë", fr: "six", cat: "nombres" },
  { sq: "shtatë", fr: "sept", cat: "nombres" },
  { sq: "tetë", fr: "huit", cat: "nombres" },
  { sq: "nëntë", fr: "neuf", cat: "nombres" },
  { sq: "dhjetë", fr: "dix", cat: "nombres" },

  // Couleurs
  { sq: "kuq", fr: "rouge", cat: "couleurs" },
  { sq: "bardhë", fr: "blanc", cat: "couleurs" },
  { sq: "zezë", fr: "noir", cat: "couleurs" },
  { sq: "mavi", fr: "bleu", cat: "couleurs" },
  { sq: "jeshile", fr: "vert", cat: "couleurs" },
  { sq: "sari", fr: "jaune", cat: "couleurs" },
  { sq: "portokall", fr: "orange", cat: "couleurs" },
  { sq: "pembe", fr: "rose", cat: "couleurs" },
  { sq: "kaft", fr: "marron", cat: "couleurs" },
  { sq: "përhift", fr: "gris", cat: "couleurs" },

  // Famille
  { sq: "nënë", fr: "mère", cat: "famille" },
  { sq: "babë", fr: "père", cat: "famille" },
  { sq: "vëlla", fr: "frère", cat: "famille" },
  { sq: "motër", fr: "sœur", cat: "famille" },
  { sq: "gjysh", fr: "grand-père", cat: "famille" },
  { sq: "gjyshe", fr: "grand-mère", cat: "famille" },
  { sq: "djalë", fr: "fils", cat: "famille" },
  { sq: "vajzë", fr: "fille", cat: "famille" },
  { sq: "bashkëshort", fr: "mari", cat: "famille" },
  { sq: "bashkëshorte", fr: "femme", cat: "famille" },

  // Nourriture
  { sq: "bukë", fr: "pain", cat: "nourriture" },
  { sq: "ujë", fr: "eau", cat: "nourriture" },
  { sq: "mish", fr: "viande", cat: "nourriture" },
  { sq: "djathë", fr: "fromage", cat: "nourriture" },
  { sq: "mollë", fr: "pomme", cat: "nourriture" },
  { sq: "perime", fr: "légumes", cat: "nourriture" },
  { sq: "fruta", fr: "fruits", cat: "nourriture" },
  { sq: "kafe", fr: "café", cat: "nourriture" },
  { sq: "çaj", fr: "thé", cat: "nourriture" },
  { sq: "sheqer", fr: "sucre", cat: "nourriture" },

  // Temps
  { sq: "sot", fr: "aujourd'hui", cat: "temps" },
  { sq: "nesër", fr: "demain", cat: "temps" },
  { sq: "dje", fr: "hier", cat: "temps" },
  { sq: "orë", fr: "heure", cat: "temps" },
  { sq: "minutë", fr: "minute", cat: "temps" },
  { sq: "sekondë", fr: "seconde", cat: "temps" },
  { sq: "javë", fr: "semaine", cat: "temps" },
  { sq: "muaj", fr: "mois", cat: "temps" },
  { sq: "vit", fr: "année", cat: "temps" },
  { sq: "kohë", fr: "temps", cat: "temps" },
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
    const prompt = dir === "sq-fr" ? target.sq : target.fr;
    const answer = dir === "sq-fr" ? target.fr : target.sq;
    const others = pool.filter(v => v !== target);
    const candidates = shuffle(others)
      .slice(0, state.choiceCount - 1)
      .map(v => (dir === "sq-fr" ? v.fr : v.sq));
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
  const prompt = dir === "sq-fr" ? target.sq : target.fr;
  const answer = dir === "sq-fr" ? target.fr : target.sq;

  const others = pool.filter(v => v !== target);
  const candidates = shuffle(others)
    .slice(0, state.choiceCount - 1)
    .map(v => (dir === "sq-fr" ? v.fr : v.sq));

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