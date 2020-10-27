/*
    - you need to read the data from json file.

    - you need to read human details when user submits form.

    - change the ui to display facts page when human form is submitted.

    - compare few facts of human and dino.
    */

// Create Dino Constructor
class Creature {
    constructor(dino) {
        this.dino = dino;
    }
}
// Create Dino Objects

// Create Human Object

// Use IIFE to get human data from form

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.

// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.

// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.

// Generate Tiles for each Dino in Array

// Add tiles to DOM



function makeRows(rows, cols) {
  const container = document.getElementById("grid");

  let dinosaurs = [];
  const getDinos = fetch("dino.json")
    .then((response) => response.json())
    .then((data) => {
       dinosaurs = data.Dinos.map((dino) => new Creature(dino));
       for (c = 0; c < (dinosaurs.length); c++) {
        let cell = document.createElement("div");
        let cell2 = document.createElement("div");
        cell.innerText = dinosaurs[c].dino.species;
        cell2.innerText = dinosaurs[c].dino.fact;
        container.appendChild(cell).className = "grid-item";
        container.appendChild(cell).className = "grid-item";
      };
    });
};


function addTilesToDOM() {
    makeRows(3,3);
}

// Remove form from screen
function removeForm() {
  document.getElementById("dino-compare").style.display = "none";
  addTilesToDOM();
}

// On button click, prepare and display infographic
document.getElementById("btn").onclick = () => {
  const formData = {
    name: document.getElementById("name").value,
    height: document.getElementById("feet").value,
    inch: document.getElementById("inches").value,
    weight: document.getElementById("weight").value,
    diet: document.getElementById("diet").value,
  };
  removeForm();
};
