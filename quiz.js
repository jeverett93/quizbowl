let startButton = document.getElementById("start-button");
startButton.addEventListener("click", startQuiz)
let quizContainer = document.getElementById("quiz-container");

let score = 0
const savedArray = JSON.parse(localStorage.getItem("score")) || [];

let questionNum = 0;
let quiz_data = [
  {
    id: 1,
    question: "What was Tandem previous name?",
    choices: ["Tandem", "Burger Shack", "Extraordinary Humans", "Devmynd"],
    incorrect: ["Tandem", "Burger Shack", "Extraordinary Humans"],
    correct: "Devmynd"
  },
  {
    id: 2,
    question: "In Shakespeare's play Julius Caesar, Caesar's last words were...",
    choices: ["Iacta alea est!", "Vidi, vini, vici", "Aegri somnia vana", "Et tu, Brute?"],
    incorrect: ["Iacta alea est!", "Vidi, vini, vici", "Aegri somnia vana"],
    correct: "Et tu, Brute?"
  },
  {
    id: 3,
    question: "A group of tigers are referred to as:",
    choices: ["Chowder", "Pride", "Destruction", "Ambush"],
    incorrect: ["Chowder", "Pride", "Destruction"],
    correct: "Ambush"
  },
  {
    id: 4,
    question: "What is the top speed an average cat can travel?",
    choices: ["42 mph", "13 mph", "9 mph", "31 mph"],
    incorrect: ["42 mph", "13 mph", "9 mph"],
    correct: "31 mph"
  },
  {
    id: 5,
    question: "A cat can jump to _____ times its own height:",
    choices: ["3", "9", "7", "5"],
    incorrect: ["3", "9", "7"],
    correct: "5"
  },
  {
    id: 6,
    question: "What is the only letter that doesn't appear in a US state name?",
    choices: ["M", "Z", "X", "Q"],
    incorrect: ["M", "Z", "X"],
    correct: "Q"
  },
  {
    id: 7,
    question: "What is the name for a cow-bison hybrid?",
    choices: ["Cowson", "Bicow", "Mooson", "Beefalo"],
    incorrect: ["Cowson", "Bicow", "Mooson"],
    correct: "Beefalo"
  },
  {
    id: 8,
    question: "What is the largest freshwater lake in the world?",
    choices: ["Lake Baikal", "Lake Michigan", "Lake Victoria", "Lake Superior"],
    incorrect: ["Lake Baikal", "Lake Michigan", "Lake Victoria"],
    correct: "Lake Superior"
  },

  {
    id: 9,
    question: "In a website address bar, what does WWW stand for?",
    choices: ["Wild Wild West", "War World Web", "World Wide Web"],
    incorrect: ["Wild Wild West", "War World Web"],
    correct: "World Wide Web"
  },
  {
    id: 10,
    question: "In a game of bingo, what number is represented by the name two little ducks?",
    choices: ["20", "55", "77", "22"],
    incorrect: ["20", "55", "77"],
    correct: "22"
  },
  {
    id: 11,
    question: "According to Greek mythology, who was the first woman on Earth?",
    choices: ["Lilith", "Eve", "Hera", "Pandora"],
    incorrect: ["Lilith", "Eve", "Hera"],
    "correct": "Pandora"
  },
  {
    id: 12,
    question: "In which European city would you find Orly airport?",
    choices: ["London", "Belgium", "Munich", "Paris"],
    incorrect: ["London", "Belgium", "Munich"],
    correct: "Paris"
  },
  {
    id: 13,
    question: "Where would you find the Sea of Tranquility?",
    choices: ["California", "Siberia", "China", "The Moon"],
    incorrect: ["California", "Siberia", "China"],
    correct: "The Moon"
  },
  {
    id: 14,
    question: "Which artist painted 'Girl with a Pearl Earrin'?",
    choices: ["Van Gogh", "Picasso", "Da Vinci", "Vermeer"],
    incorrect: ["Van Gogh", "Picasso", "Da Vinci"],
    correct: "Vermeer"
  },
  {
    id: 15,
    question: "What is the official name for the 'hashtag' symbol?",
    choices: ["Number sign", "Hash Sign", "Pound", "Octothorpe"],
    incorrect: ["Number sign", "Hash Sign", "Pound"],
    correct: "Octothorpe"
  },
  {
    id: 16,
    question: "Not American at all, where is apple pie from?",
    choices: ["Japan", "Ethiopia", "Canada", "England"],
    incorrect: ["Japan", "Ethiopia", "Canada"],
    correct: "England"
  },
  {
    id: 17,
    question: "What is the national animal of Scotland?",
    choices: ["Bear", "Rabbit", "Seal", "Unicorn"],
    incorrect: ["Bear", "Rabbit", "Seal"],
    correct: "Unicorn"
  },
  {
    id: 18,
    question: "Where in the world is the only place where Canada is *due south*",
    choices: ["Alaska", "Russia", "Washington", "Detroit"],
    incorrect: ["Alaska", "Russia", "Washington"],
    correct: "Detroit"
  },
  {
    id: 19,
    question: "Approximately how many grapes go into a bottle of wine?",
    choices: ["500", "200", "1000", "700"],
    incorrect: ["500", "200", "1000"],
    correct: "700"
  },
  {
    id: 20,
    question: "How much does a US One Dollar Bill cost to make?",
    choices: ["$0.25", "$1", "$5", "$0.05"],
    incorrect: ["$0.25", "$1", "$5"],
    correct: "$0.05"
  },
  {
    id: 21,
    question: "The Vatican bank has the only ATM in the world that allows users to do what?",
    choices: [
      "Receive withdrawls in rosary beads",
      "Vote for the Pope",
      "Purchase indulgences",
      "Perform transactions in Latin"
    ],
    incorrect: [
      "Receive withdrawls in rosary beads",
      "Vote for the Pope",
      "Purchase indulgences"
    ],
    correct: "Perform transactions in Latin"
  }
]

function startQuiz() {
  renderQuestion()
}

function renderQuestion() {
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

  if (questionNum === quiz_data.length) {
    endQuiz()
  } else {
    renderQuestion()
  }
}

function endQuiz() {
  let newBtn = document.createElement("button");
  let newHead = document.createElement("h4");
  newBtn.innerText = "Submit";
  newHead.innerHTML = "Your score is " + score;

  // newBtn.addEventListener("click", () => {
  //   // scoreKeep.push(score);
  //   var userNameVal = document.getElementById("userInput").value;
  //   // scoreKeep.push(userNameVal);

  //   savedArray.push("Name: " + userNameVal + "  Score: " + score);
  //   alert(userNameVal);
  //   highScores();
  // });

  quizContainer.innerHTML = "";
  quizContainer.appendChild(newHead);
  quizContainer.appendChild(newBtn);
}

