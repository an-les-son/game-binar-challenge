//variabel yang di embed dari id html
const sRock = document.getElementById("rock");
const sPaper = document.getElementById("paper");
const sScissors = document.getElementById("scissors");

//mencari value computer secara rendom
function getSelectComputer() {
  const comp = Math.random();
  console.log(comp);
  if (comp < 0.23) return "rock";
  if (comp >= 0.23 && comp < 0.23) return "paper";
  return "scissors";
}

//formula aturan permainan
function getResult(comp, player) {
  if (player === comp) return "draw";
  if (player === "rock") return comp === "scissors" ? "player1win" : "comwin";
  if (player === "scissors") return comp === "paper" ? "player1win" : "comwin";
  if (player === "paper") return comp === "rock" ? "player1win" : "comwin";
}

//aksi rock
function selectRock() {
  document.querySelector("#bg-rock").classList.add("select-item-game");

  sPaper.removeAttribute("onClick");
  sScissors.removeAttribute("onClick");

  const pilihanComputer = getSelectComputer();
  const pilihanPlayer = sRock.id;
  const hasil = getResult(pilihanComputer, pilihanPlayer);

  document.querySelector(".img-result").setAttribute("src", "assets/" + hasil + ".png");

  if (pilihanComputer == "rock") {
    document.querySelector("#bg-rock-comp").classList.add("select-item-game");
  } else if (pilihanComputer == "paper") {
    document.querySelector("#bg-paper-comp").classList.add("select-item-game");
  } else if (pilihanComputer == "scissors") {
    document.querySelector("#bg-scissors-comp").classList.add("select-item-game");
  }

  //untuk cek isi variabel di console broswer
  // console.log("player : " + pilihanPlayer);
  // console.log("comp : " + pilihanComputer);
  // console.log("hasil: " + hasil);
}

//aksi paper
function selectPaper() {
  document.querySelector("#bg-paper").classList.add("select-item-game");

  sRock.removeAttribute("onClick");
  sScissors.removeAttribute("onClick");

  const pilihanComputer = getSelectComputer();
  const pilihanPlayer = sPaper.id;
  const hasil = getResult(pilihanComputer, pilihanPlayer);

  document.querySelector(".img-result").setAttribute("src", "assets/" + hasil + ".png");

  if (pilihanComputer == "rock") {
    document.querySelector("#bg-rock-comp").classList.add("select-item-game");
  } else if (pilihanComputer == "paper") {
    document.querySelector("#bg-paper-comp").classList.add("select-item-game");
  } else if (pilihanComputer == "scissors") {
    document.querySelector("#bg-scissors-comp").classList.add("select-item-game");
  }

  // //untuk cek isi variabel di console broswer
  // console.log("player : " + pilihanPlayer);
  // console.log("comp : " + pilihanComputer);
  // console.log("hasil: " + hasil);
}

//aksi scissors
function selectScissors() {
  document.querySelector("#bg-scissors").classList.add("select-item-game");

  sPaper.removeAttribute("onClick");
  sRock.removeAttribute("onClick");

  const pilihanComputer = getSelectComputer();
  const pilihanPlayer = sScissors.id;
  const hasil = getResult(pilihanComputer, pilihanPlayer);

  document.querySelector(".img-result").setAttribute("src", "assets/" + hasil + ".png");

  if (pilihanComputer == "rock") {
    document.querySelector("#bg-rock-comp").classList.add("select-item-game");
  } else if (pilihanComputer == "paper") {
    document.querySelector("#bg-paper-comp").classList.add("select-item-game");
  } else if (pilihanComputer == "scissors") {
    document.querySelector("#bg-scissors-comp").classList.add("select-item-game");
  }

  //untuk cek isi variabel di console broswer
  // console.log("player : " + pilihanPlayer);
  // console.log("comp : " + pilihanComputer);
  // console.log("hasil: " + hasil);
}
