const quizData = [
  // HTML
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Trainer Marking Language",
      "Hyper Text Markup Language",
      "Hyper Text Marketing Language",
      "Hyper Tool Markup Language"
    ],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Which tag is used to create a hyperlink in HTML?",
    options: ["<link>", "<a>", "<href>", "<hyper>"],
    answer: "<a>"
  },

  // CSS
  {
    question: "Which CSS property is used to change the text color?",
    options: ["background-color", "font-color", "color", "text-color"],
    answer: "color"
  },

  // JavaScript
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: ["var", "let", "const", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "What does 'DOM' stand for?",
    options: [
      "Document Object Model",
      "Data Object Management",
      "Desktop Oriented Model",
      "Digital Object Map"
    ],
    answer: "Document Object Model"
  },

  // Basic Science
  {
    question: "What gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    answer: "Carbon Dioxide"
  },
  {
    question: "What is the boiling point of water at sea level?",
    options: ["90°C", "100°C", "110°C", "80°C"],
    answer: "100°C"
  },

  // Geography
  {
    question: "Which is the largest continent on Earth?",
    options: ["Africa", "North America", "Asia", "Europe"],
    answer: "Asia"
  },

  // Basic Maths
  {
    question: "What is the square root of 64?",
    options: ["6", "8", "7", "9"],
    answer: "8"
  },
  {
    question: "Solve: 15 - (5 × 2)",
    options: ["5", "10", "0", "20"],
    answer: "5"
  }
];

  
  let currentQuestion = 0;
  let score = 0;
  
  const questionEl = document.getElementById("question");
  const optionButtons = document.querySelectorAll(".option-btn");
  const nextBtn = document.getElementById("next-btn");
  
  function loadQuestion() {
    const currentQuiz = quizData[currentQuestion];
    questionEl.textContent = currentQuiz.question;
    optionButtons.forEach((btn, index) => {
      btn.textContent = currentQuiz.options[index];
      btn.classList.remove("correct", "wrong");
      btn.disabled = false;
    });
    nextBtn.style.display = "none";
  }
  
  optionButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const selected = btn.textContent;
      const correct = quizData[currentQuestion].answer;
      if (selected === correct) {
        btn.classList.add("correct");
        score++;
      } else {
        btn.classList.add("wrong");
      }
  
      optionButtons.forEach(button => {
        button.disabled = true;
        if (button.textContent === correct) {
          button.classList.add("correct");
        }
      });
  
      nextBtn.style.display = "inline-block";
    });
  });
  
  nextBtn.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showResult();
    }
  });
  
  function showResult() {
    quiz.innerHTML = `
      <h2>You scored ${score} out of ${quizData.length}</h2>
      <button class="btn" onclick="location.reload()">Restart Quiz</button>
    `;
  }  
  
  loadQuestion();