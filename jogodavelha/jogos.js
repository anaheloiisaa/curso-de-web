const board = document.querySelector("[data-board]");
const cellelementes = document.querySelectorAll("[data-cell]");
const winningmessage = document.querySelector("[data-winning-message]");
const winningmessagetextelement = document.querySelector(
  "[data-winning-message-text]"
);
const restartbutton = document.querySelector("[data-restart-button]");
let iscircleturn;
const winningcombinations = [
  [o, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const stratgame = () => {
  iscircleturn = false;
  for (const cell of cellelementes) {
    cell.classList.remove("circle");
    cell.classList.remove("x");
    cell.removeEventListener("click", handleclick);
    cell.addEventListener("click", handleclick, { once: true });
  }
  setboardhoverclass();
  winningmessage.classList.remove("show-winning-message");
};
const endgame = (isdraw) => {
  if (isdraw) {
    winningmessagetextelement.inntext = "empate!";
  } else {
    winningmessagetextelement.innerHTML = iscircleturn
      ? "O Venceu"
      : "X Venceu!";
  }
  winningmessage.classList.add("show-winning-message");
};

const checkforwin = (currentplayer) => {
  return winningcombinations.some((combination) => {
    return combination.every((index) => {
      return cellelementes[index].classList.contains(currentplayer);
    });
  });
};

const checkfordraw = () => {
  return [...cellelementes].every((cell) => {
    return cell.classList.contains("x") || cell.classList.contains("circle");
  });
};
const placemark = (cell, classtoadd) => {
  cell.classlist.add(classtoadd);
};
const setboardhoverclass = () => {
  board.classlist.remove("circle");
  board.classlist.remove("x");
  if (iscircleturn) {
    board.classlist.add("circle");
  } else {
    board.classlist.add("x");
  }
};
const swapturns = () => {
  iscircleturn = !iscircleturn;
  setboardhoverclass();
};
const handleclick = (e) => {
  //colocar a marca (x ou círculo)
  const cell = e.target;
  const classtoadd = iscircleturn ? "circle" : "x";
  placemark(cell, classtoadd);
  //verificar a vitoria
  const iswin = checkforwin(classtoadd);
  //verificar empate
  const isdraw = checkfordraw();
  if (iswin) {
    endgame(false);
  } else if (isdraw) {
    endgame(true);
  } else {
    //mudar símbolo
    swapturns();
  }
};
stratgame();
restartbutton.addEventListener("click", stratgame);
