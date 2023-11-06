// RED
const redScore = document.querySelector(".red>p>span");
const redIcon = document.querySelector(".red>.category>img");
const redCategory = document.querySelector(".red>.category>h3");

// ORANGE
const orangeScore = document.querySelector(".orange>p>span");
const orangeIcon = document.querySelector(".orange>.category>img");
const orangeCategory = document.querySelector(".orange>.category>h3");

//GEEN
const greenScore = document.querySelector(".green>p>span");
const greenIcon = document.querySelector(".green>.category>img");
const greenCategory = document.querySelector(".green>.category>h3");

//BLUE
const blueScore = document.querySelector(".blue>p>span");
const blueIcon = document.querySelector(".blue>.category>img");
const blueCategory = document.querySelector(".blue>.category>h3");

// FUNCTION

async function getScore() {
  const response = await fetch("./data.json");
  let data = await response.json();

  for (let i = 0; i < data.length; i++) {
    let categories = data[i].category;
    switch (categories) {
      case "Reaction":
        redCategory.innerHTML = data[i].category;
        redIcon.src = data[i].icon;
        redScore.innerHTML = data[i].score;
        break;

      case "Memory":
        orangeIcon.src = data[i].icon;
        orangeCategory.innerHTML = data[i].category;
        orangeScore.innerHTML = data[i].score;
        break;

      case "Verbal":
        greenIcon.src = data[i].icon;
        greenCategory.innerHTML = data[i].category;
        greenScore.innerHTML = data[i].score;
        break;

      case "Visual":
        blueIcon.src = data[i].icon;
        blueCategory.innerHTML = data[i].category;
        blueScore.innerHTML = data[i].score;
        break;
    }
  }
}

//RESULT
const result = document.querySelector(".global-score");
const btn = document.querySelector("button");
result.innerText = ".";

let a = 0;
let timer = setInterval(() => {
  a++;
  result.innerText = a;
  if (a == 76) {
    clearInterval(timer);
  }
}, 20);

getScore();
