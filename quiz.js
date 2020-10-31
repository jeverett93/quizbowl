let startButton = document.getElementById("start-button");
startButton.addEventListener("click", startQuiz)
let quizContainer = document.getElementById("quiz-container");

let score = 0
const savedArray = JSON.parse(localStorage.getItem("score")) || [];

let questionNum = 0;
// let questionNum = Math.floor(Math.random() * 21)
let quiz_data = [
  {
    question: "What was Tandem previous name?",
    choices: ["Tandem", "Burger Shack", "Extraordinary Humans", "Devmynd"],
    correct: "Devmynd"
  },
  {
    question: "In Shakespeare's play Julius Caesar, Caesar's last words were...",
    choices: ["Iacta alea est!", "Vidi, vini, vici", "Aegri somnia vana", "Et tu, Brute?"],
    correct: "Et tu, Brute?"
  },
  {
    question: "A group of tigers are referred to as:",
    choices: ["Chowder", "Pride", "Destruction", "Ambush"],
    correct: "Ambush"
  },
  {
    question: "What is the top speed an average cat can travel?",
    choices: ["42 mph", "13 mph", "9 mph", "31 mph"],
    correct: "31 mph"
  },
  {
    question: "A cat can jump to _____ times its own height:",
    choices: ["3", "9", "7", "5"],
    correct: "5"
  },
  {
    question: "What is the only letter that doesn't appear in a US state name?",
    choices: ["M", "Z", "X", "Q"],
    correct: "Q"
  },
  {
    question: "What is the name for a cow-bison hybrid?",
    choices: ["Cowson", "Bicow", "Mooson", "Beefalo"],
    correct: "Beefalo"
  },
  {
    question: "What is the largest freshwater lake in the world?",
    choices: ["Lake Baikal", "Lake Michigan", "Lake Victoria", "Lake Superior"],
    correct: "Lake Superior"
  },

  {
    question: "In a website address bar, what does WWW stand for?",
    choices: ["Wild Wild West", "War World Web", "World Wide Web"],
    correct: "World Wide Web"
  },
  {
    question: "In a game of bingo, what number is represented by the name two little ducks?",
    choices: ["20", "55", "77", "22"],
    correct: "22"
  },
  {
    question: "According to Greek mythology, who was the first woman on Earth?",
    choices: ["Lilith", "Eve", "Hera", "Pandora"],
    correct: "Pandora"
  },
  {
    question: "In which European city would you find Orly airport?",
    choices: ["London", "Belgium", "Munich", "Paris"],
    correct: "Paris"
  },
  {
    question: "Where would you find the Sea of Tranquility?",
    choices: ["California", "Siberia", "China", "The Moon"],
    correct: "The Moon"
  },
  {
    question: "Which artist painted 'Girl with a Pearl Earrin'?",
    choices: ["Van Gogh", "Picasso", "Da Vinci", "Vermeer"],
    correct: "Vermeer"
  },
  {
    question: "What is the official name for the 'hashtag' symbol?",
    choices: ["Number sign", "Hash Sign", "Pound", "Octothorpe"],
    correct: "Octothorpe"
  },
  {
    question: "Not American at all, where is apple pie from?",
    choices: ["Japan", "Ethiopia", "Canada", "England"],
    correct: "England"
  },
  {
    question: "What is the national animal of Scotland?",
    choices: ["Bear", "Rabbit", "Seal", "Unicorn"],
    correct: "Unicorn"
  },
  {
    question: "Where in the world is the only place where Canada is *due south*",
    choices: ["Alaska", "Russia", "Washington", "Detroit"],
    correct: "Detroit"
  },
  {
    question: "Approximately how many grapes go into a bottle of wine?",
    choices: ["500", "200", "1000", "700"],
    correct: "700"
  },
  {
    question: "How much does a US One Dollar Bill cost to make?",
    choices: ["$0.25", "$1", "$5", "$0.05"],
    correct: "$0.05"
  },
  {
    question: "The Vatican bank has the only ATM in the world that allows users to do what?",
    choices: [
      "Receive withdrawls in rosary beads",
      "Vote for the Pope",
      "Purchase indulgences",
      "Perform transactions in Latin"
    ],
    correct: "Perform transactions in Latin"
  }
]

function startQuiz() {
  renderQuestion()
}

// function getRandom() {
//   let random = Math.floor(Math.random() * quiz_data.length)
//   return random 
// }

function renderQuestion() {
  // let randomq = getRandom()

  let buttons = quiz_data[questionNum].choices.map(function (answer) {
    return `<button onclick="answerQuestion('${answer}')" >${answer}</button>`
  })

  quizContainer.innerHTML = `
  <h1>${quiz_data[questionNum].question}</h1>
  ${buttons.join("")}`
}

function answerQuestion(answer) {
  if (answer === quiz_data[questionNum].correct) {
    score++;
    alert("Correct!")
  }
  else {
    alert(`Incorrect, the answer was ${quiz_data[questionNum].correct}`)
  }

  questionNum++;
  
  if (questionNum === (quiz_data.length - 10)) {
    endQuiz()
  } 
  else if (questionNum === quiz_data.length) {
    endQuiz()
  }
  else {
    renderQuestion()
  }
}

function endQuiz() {
  let newBtn = document.createElement("button");
  let newHead = document.createElement("h4");
  newBtn.innerText = "Another Round?";
  newHead.innerHTML = "Your score is " + score;

  newBtn.addEventListener("click", () => {
    startQuiz()
    score = 0
  });

  quizContainer.innerHTML = "";
  quizContainer.appendChild(newHead);
  quizContainer.appendChild(newBtn);
}

