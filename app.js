const form = document.querySelector("#dino-compare");
const grid = document.querySelector("#grid");
const button = document.querySelector("#btn");
const toggleBtn = document.querySelector("#toggle");

function Human(name, weight, height, diet) {
  this.name = name;
  this.weight = weight;
  this.height = height;
  this.diet = diet;
}

function Dinasaur(species, weight, height, diet, fact) {
  this.species = species;
  this.weight = weight;
  this.height = height;
  this.diet = diet;
  this.fact = fact;
}

Dinasaur.prototype.compareWeight = function (human) {
  return `${this.species} is ${(this.weight / human.weight + 1).toFixed(
    2
  )} times heavier than ${human.name}`;
};

Dinasaur.prototype.compareHeight = function (human) {
  return `${this.species} is ${(this.height / human.height + 1).toFixed(
    2
  )} times taller than ${human.name}`;
};

Dinasaur.prototype.compareDiet = function (human) {
  if (human.diet.toLowerCase() === this.diet.toLowerCase()) {
    return `${human.name} and ${this.species} have the same diet, which is ${human.diet}`;
  } else {
    return `${human.name}'s diet is ${human.diet} whereas ${this.species}'s diet is ${this.diet}`;
  }
};

function randomizeFact(dino, human) {
  if (dino.species === "Pigeon") {
    return dino.fact;
  }
  switch (Math.floor(Math.random() * 4 + 1)) {
    case 1:
      return dino.compareWeight(human);
    case 2:
      return dino.compareHeight(human);
    case 3:
      return dino.compareDiet(human);
    case 4:
      return dino.fact;
  }
}

async function generateTile(humanObj) {
  try {
    await fetch("dino.json")
      .then((response) => response.json())
      .then((data) => {
        data.Dinos.map((dino) => {
          const div = document.createElement("div");
          div.classList.add("grid-item");
          const img = document.createElement("img");
          img.setAttribute("src", `./images/${dino.species.toLowerCase()}.png`);
          const p = document.createElement("p");
          const dinoObj = new Dinasaur(
            dino.species,
            dino.weight,
            dino.height,
            dino.diet,
            dino.fact
          );
          p.innerHTML = randomizeFact(dinoObj, humanObj);
          div.appendChild(img);
          div.appendChild(p);
          grid.appendChild(div);
        });
      });
    } catch(error) {
      console.log(error);
  }
};

// Remove form from screen
function removeForm() {
  document.getElementById("dino-compare").style.display = "none";
}

function createHumanTile(obj) {
  const div = document.createElement("div");
  div.classList.add("grid-item");
  const img = document.createElement("img");
  const h3 = document.createElement("h3");
  img.setAttribute("src", `./images/human.png`);
  h3.textContent = obj.name;
  div.appendChild(img);
  div.appendChild(h3);
  grid.appendChild(div);
}

function removeForm() {
  form.classList.add("display_none");	
  toggleBtn.classList.remove("display_none");	
  grid.classList.remove("display_none");	
}

// On button click, prepare and display infographic
button.addEventListener("click", () => {	
  // Use IIFE to get human data from form	
  const humanObj = (function getData() {	
    const name = document.querySelector("#name").value;	
    const feet = document.querySelector("#feet").value;	
    const inches = document.querySelector("#inches").value;	
    const weight = document.querySelector("#weight").value;	
    const diet = document.querySelector("#diet").value;	
    const height = +feet * 12 + +inches;	
    return new Human(name, weight, height, diet);	
  })();
  createHumanTile(humanObj);	
  generateTile(humanObj);	
  removeForm();
});

toggleBtn.addEventListener("click", () => {
  form.classList.toggle("display_none");
  toggleBtn.classList.toggle("display_none");
  grid.classList.add("display_none");
  grid.innerHTML = "";
});
