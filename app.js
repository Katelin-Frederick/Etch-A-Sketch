var gridSize;
var container = document.querySelector(".container");
var clearBtn = document.querySelector("#clear");
var sizeBtn = document.querySelector("#size");

// Creates the Grid
function createGrid(gridSize = 16) {
    for (let x = 0; x < gridSize; x++) { //Creates lines
        var gridLine = document.createElement("div");
        gridLine.classList.add("gridLine");
        for (n = 0; n < gridSize; n++) { //Creates cells inside lines
            var gridBox = document.createElement("div");
            gridBox.classList.add("gridBox");
            gridLine.appendChild(gridBox);
        }
        container.appendChild(gridLine);
    }
    gridBoxes = document.querySelectorAll(".gridBox");
    gridLines = document.querySelectorAll(".gridLine");
}

createGrid(gridSize);

// Fills in the boxes on the grid
function fillBoxes () {
  var boxes = document.querySelectorAll(".gridBox");
  Array.from(boxes).forEach(function(box) {
    box.addEventListener('mouseover', function(e){
      e.target.style.background = colorCheck.value;
    });
  });
};

fillBoxes();

// Functionality for the clear button, clears grid
clearBtn.addEventListener('click', function(e) {
  var boxes = document.querySelectorAll(".gridBox");
  Array.from(boxes).forEach(function(box) {
    box.style.background = "rgba(255, 255, 255, 1)";
  });
});

// Functionality for the size button, sets the size of the grid
sizeBtn.addEventListener('click', function(e) {
  let dimension = prompt('What size grid would you like? (Enter a number between 5-100)');
  if (dimension >= 5 && dimension <= 100) {

    // Clears the previous boxes on the grid
    while (container.childElementCount > 0) {
      container.removeChild(container.firstElementChild);
    }

    // Creates new grid with specified dimensions
    gridSize= dimension;
    createGrid(gridSize);
    fillBoxes();

  }
  else {
    alert('The number you entered is invalid, please try again')
  }
});
