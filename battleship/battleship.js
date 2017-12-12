
var view = {
    displayMessage: function(msg) {
        var messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    },
    displayHit: function(location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "hit");
    },
    displayMiss: function(location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "miss");
    }
};

function ship(locations) {
    this.locations = locations;
    this.hits = ["", "", ""];
}

// game board
var model = {
    boardSize: 7,
    numShips: 3,
    shipLength: 3, //need to fix this later, want dynamic lengths
    shipsSunk: 0,

    ships: [ { locations: ["06", "16", "26"], hits: ["", "", ""] }, 
        { locations: ["24", "34", "44"], hits: ["", "", ""] }, 
        { locations: ["10", "11", "12"], hits: ["", "", ""] }]
};

// new ship(["10", "20", "30"]);
// console.log(new ship(["10", "20", "30"]));

view.displayMessage("Ffffff");
view.displayMiss("01");
view.displayHit("34");
view.displayMiss("55");
view.displayHit("12");
view.displayMiss("25");
view.displayHit("26");