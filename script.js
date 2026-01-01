let boxes = document.querySelectorAll(".box");
let result = document.querySelector(".result");
let after_finish = document.querySelector(".after_finish");
let reset_btn = document.querySelector(".reset");
let new_game_btn = document.querySelector(".new_game_btn");

let current_player = "X";
let count = 0;

const winning_patterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let resetGame = () => {
  current_player = "X";
  count = 0;
  enableBoxes();
  after_finish.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (current_player === "X") {
      box.innerText = "X";
      current_player = "O";
      box.style.color = "#e0fbfc";
    } else {
      box.innerText = "O";
      current_player = "X";
      box.style.color = "#80ffdb";
    }
    checkWinner();

    box.disabled = true;
    count++;

    if (count === 9) {
      result.innerText = "Match is draw!";
      after_finish.classList.remove("hide");
    }
  });
});

let showWinner = (winner) => {
  result.innerText = `Congratulation , Winner is ${winner}`;
  after_finish.classList.remove("hide");
  disableBoxes();
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const checkWinner = () => {
  for (let pattern of winning_patterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos3Val === pos2Val) {
        showWinner(pos1Val);
      }
    }
  }
};

reset_btn.addEventListener("click", resetGame);
new_game_btn.addEventListener("click", resetGame);
