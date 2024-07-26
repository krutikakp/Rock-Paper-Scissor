let userScore = 0;
let compScore = 0;
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const draw = () => {
  msg.innerText = "Game was draw. play again";
  msg.style.backgroundColor = "#FFB200";
};

const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const ranId = Math.floor(Math.random() * 3);
  return options[ranId];
};

const showwinner = (userwin, userChoice, compChoice) => {
  if (userwin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "#399918";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You Lose. ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "#FF4C4C";
  }
};
const playGame = (userChoice) => {
  const compChoice = genCompChoice();
  if (userChoice === compChoice) {
    draw();
  } else {
    let userwin = true;
    if (userChoice === "rock") {
      userwin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userwin = compChoice === "scissor" ? false : true;
    } else {
      userwin = compChoice === "rock" ? false : true;
    }
    showwinner(userwin, userChoice, compChoice);
  }
};
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
