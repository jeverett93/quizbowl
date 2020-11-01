// grabbing id elements
let startButton = document.getElementById("start-button");
startButton.addEventListener("click", startQuiz)
let quizContainer = document.getElementById("quiz-container");

// global variables that track score, question number and the questions themselves
let score = 0
let questionNum = 0;

const quiz_data = [
  {
    question: "What was Tandem's previous name?",
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
  }
]


function startQuiz() {
  renderQuestion()
}

const renderQuestion = () => {
  let buttons = quiz_data[questionNum].choices.map(function (answer) {
    return `<button style="margin: 20px" class=btn-primary onclick="answerQuestion('${answer}')" >${answer}</button>`
  })

  quizContainer.innerHTML = `
  <h1 style="color: white">${quiz_data[questionNum].question}</h1>
  ${buttons.join("")}`
}

// increments score based on if it's correct or not & ends quiz round based on user progression
const answerQuestion = (answer) => {
  if (answer === quiz_data[questionNum].correct) {
    score++;
    alert(`Correct! The answer was ${quiz_data[questionNum].correct}`)
  }
  else {
    alert(`Incorrect, the answer was ${quiz_data[questionNum].correct}`)
  }

  questionNum++;
  
  if (questionNum === (quiz_data.length - 10)) {
    endRoundOne()
  } 
  else if (questionNum === (quiz_data.length)) {
    endQuiz()
  }
  else {
    renderQuestion()
  }
}

const endRoundOne = () => {
  let newBtn = document.createElement("button");
  let newHead = document.createElement("h4");
  newBtn.style.cssText = "color: white; background-color: #007bff; border-color: #007bff"
  newHead.style.cssText = "color: white"
  newBtn.innerText = "Next Round?";
  newHead.innerHTML = "Your current score is " + score;
  

  newBtn.addEventListener("click", () => {
    startQuiz()
  });

  quizContainer.innerHTML = "";
  quizContainer.appendChild(newHead);
  quizContainer.appendChild(newBtn);
}

const endQuiz = () => {
  let newHead = document.createElement("h4");
  newHead.style.cssText = "color: white"
  newHead.innerHTML = "Your total score is " + score;

  quizContainer.innerHTML = "";
  quizContainer.appendChild(newHead);
  quizContainer.appendChild(newBtn);
}

