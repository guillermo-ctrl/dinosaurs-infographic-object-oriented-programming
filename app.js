//Data from JSON in an array
const dinoData = [
    {
        "name": "Triceratops",
        "weight": 13000,
        "height": 114,
        "diet": "herbivor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Vision blocked by own horns.",
        "extinct": true
    },
    {
        "name": "Tyrannosaurus Rex",
        "weight": 11905,
        "height": 144,
        "diet": "carnivor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Can not actually run.",
        "extinct": true
    },
    {
        "name": "Anklyosaurus",
        "weight": 10500,
        "height": 55,
        "diet": "herbivor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Wife took his children and house then got extinct.",
        "extinct": true
    },
    {
        "name": "Brachiosaurus",
        "weight": 70000,
        "height": "372",
        "diet": "herbivor",
        "where": "North America",
        "when": "Late Jurasic",
        "fact": "Eggs smaller than chicken eggs.",
        "extinct": true
    },
    {
        "name": "Stegosaurus",
        "weight": 11600,
        "height": 79,
        "diet": "herbivor",
        "where": "North America, Europe, Asia",
        "when": "Late Jurasic to Early Cretaceous",
        "fact": "Brain the size of a walnut.",
        "extinct": true
    },
    {
        "name": "Elasmosaurus",
        "weight": 16000,
        "height": 408,
        "diet": "carnivor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Incapable of raising neck above water.",
        "extinct": true
    },
    {
        "name": "Pteranodon",
        "weight": 44,
        "height": 20,
        "diet": "carnivor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Not a dinosaur. Proves there is more than one way to extintion.",
        "extinct": true
    },
    {
        "name": "Pigeon",
        "weight": 0.5,
        "height": 9,
        "diet": "herbivor",
        "where": "World Wide",
        "when": "Holocene",
        "fact": "All birds are secretly dinosaurs.",
        "extinct": false
    }
];

// Constructor function for dinosaurs:
function dino(name, weight, height, diet, where, when, fact) {
this.name = name;
this.weight = weight;
this.weightlbs = weight;
this.weightkg = weight/2.2046;
this.height = height;
this.heightinches = height;
this.heightcm = height/0.39370;
this.diet = diet;
this.where = where;
this.when = when;
this.fact = fact;
this.netWorth = 0;
this.codingSkills = `The ${this.name} does not know how to code, hence it's net worth of ${this.netWorth} USD.`;
this.opposableThumbs = 0;
}

//Function that combines the constructor function for dinosaurs with the dinoData
function createDino (n) {
  return new dino(dinoData[n].name, dinoData[n].weight, dinoData[n].height, dinoData[n].diet, dinoData[n].where, dinoData[n].when, dinoData[n].fact)
}

//each dino Object is created using the above function. This should be a forEach loop
const triceratops = createDino(0)
const tyrannosaurusRex = createDino(1)
const anklyosaurus = createDino(2)
const brachiosaurus = createDino(3)
const stegosaurus = createDino(4)
const elasmosaurus = createDino(5)
const pteranodon = createDino(6)
const pigeon = createDino(7)

//all dino objects are put in an array for later use
const dinoArray = [triceratops, tyrannosaurusRex, anklyosaurus, brachiosaurus, stegosaurus, elasmosaurus, pteranodon, pigeon];

// Create Human Object using literal notation (since there is only one)
const human = {
  name: "John",
  species: "human",
  inputFeet: 5,
  inputInches: 6,
  inputweight: 150,
  diet: "Herbivor",
  opposableThumbs: 2,
  weight: 150
};


// Get human data from user input (not an IIFE, don't know why IIFE)
thename.addEventListener('input', function () {
  human.name = event.target.value ;
});
diet.addEventListener('input', function () {
  human.diet = event.target.value ;
});
feet.addEventListener('input', function () {
  human.inputFeet = event.target.value ;
  human.inputFeet = parseInt(human.inputFeet, 10)
});
inches.addEventListener('input', function () {
  human.inputInches = event.target.value ;
  human.inputInches = parseInt(human.inputInches, 10)
});
weight.addEventListener('input', function () {
  human.inputweight = event.target.value ;
  human.inputweight = parseInt(human.inputweight, 10)
});

//This function can be used to remove elements by ID
const removeelement = function (elementID) {
  const element = document.getElementById(elementID);
  element.remove()}

//the following function creates the infographic when "submit" is clicked
//most of the functionality of the site is located within this event listener
//first, the event listener to trigger the whole thing when "submit" is clicked

btn.addEventListener('click', function () {

  //First we want to check if the name input is valid.
  //the next functions check for characters and valid diets
  function onlyCharacters (str) {
  var code, i, len;
  for (i = 0, len = str.length; i < len; i++) {
    code = str.charCodeAt(i);
    if (!(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
      return false;
    }
  }
  return true;
};

  //here we have an if statement that will get out of the function and alert
  //the user if the name is not valid
  if (onlyCharacters(human.name) == false || human.name.length == 0 ) {
    alert("Input not valid.")
    return;
  };

  //once we have valid data, remove the form using the removeelement function
  removeelement("dino-compare")

  //assign human values according to different metric system, needs to happen on "submit" click
  human.weightlbs = human.inputweight;
  human.weightkg = human.inputweight/2.2;
  human.heightinches = (human.inputFeet*12) + (human.inputInches);
  human.heightcm =  human.heightinches*2.54
  human.weight = human.inputweight;
  human.height = human.heightinches;

  //Compare method 1
  const addThumbCompare = function (object) {
    object.opposableThumbs = "Has a grand total of " + object.opposableThumbs + " opposable thumbs, " +(human.opposableThumbs - object.opposableThumbs) + " less than you";
  }
  //Compare method 2
  const addWeightCompare = function (object) {
    if (object.weight > human.weight) {
      object.weight = object.weight-human.weight + " lbs fatter than you.";
    }
    else {
      object.weight = "You have " + (human.weight - object.weight) + " more lbs of raw muscle mass than the puny " + object.name + ".";
    }
    //delete other weight data so that it does not show up in the final infographic
    delete object.weightlbs
    delete object.weightkg
  }
  //Compare method 3
  const addHeightCompare = function (object) {
    if (object.height > human.height) {
      const inchesDifference = function () {
      n = object.height - human.height
      string = ""
      string = Math.floor(string + n/12) + " feet"
      if (n % 12 == 0) {
        return string
        }
      else {
        string = string + " and " + n % 12 + " inches"
        }
      return string
        }
      object.height = inchesDifference(object) + " too tall to enjoy any Disneyland rides."
      }

    else {
      object.height = "Tiny " + object.name + " is " + (human.height - object.height) + " inches tinier than you.";
      }
      delete object.heightcm
      delete object.heightinches
      }

  //add the compared information to all dinos
  dinoArray.forEach(function(item, index) {
  addThumbCompare(item)
  addWeightCompare(item)
  addHeightCompare(item)
  });

  //put the grid and the grid items into a variable for later refference
  const card = document.getElementsByClassName("grid-item")
  const infographic = document.getElementById("grid");


  //Empry array that will be filled with all images
  const dinoImages = [];

  //Using an IIFE to add each dinosaur image + human image to the array.
  //the dinosaur images appear in random positions, human and pigeon are fixed
  (addImages = function () {
    const triceratopsImg = document.createElement('img');
    triceratopsImg.setAttribute("src", "images/triceratops.png")
    dinoImages.push(triceratopsImg)

    const elasmosaurusImg = document.createElement('img');
    elasmosaurusImg.setAttribute("src", "images/elasmosaurus.png")
    dinoImages.push(elasmosaurusImg);

    const anklyosaurusImg = document.createElement('img');
    anklyosaurusImg.setAttribute("src", "images/anklyosaurus.png")
    dinoImages.push(anklyosaurusImg);

    const brachiosaurusImg = document.createElement('img');
    brachiosaurusImg.setAttribute("src", "images/brachiosaurus.png")
    dinoImages.push(brachiosaurusImg);

    const pteranodonImg = document.createElement('img');
    pteranodonImg.setAttribute("src", "images/pteranodon.png")
    dinoImages.push(pteranodonImg);

    const stegosaurusImg = document.createElement('img');
    stegosaurusImg.setAttribute("src", "images/stegosaurus.png")
    dinoImages.push(stegosaurusImg);

    const tyrannosaurusRexImg = document.createElement('img');
    tyrannosaurusRexImg.setAttribute("src", "images/tyrannosaurus%20rex.png")
    dinoImages.push(tyrannosaurusRexImg);
    //creating a variable for human and pigeon
    const humanImage = document.createElement('img');
    humanImage.setAttribute("src", "images/human.png")

    const pigeonImage = document.createElement('img');
    pigeonImage.setAttribute("src", "images/pigeon.png")

    //the next function shuffles the array so that the order is different every time
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    };
    //then we call the function to shuffle the array
    shuffleArray(dinoImages);
    //then add the human and pigeon to specific locations so that they always appear in the middle
    dinoImages.splice(4, 0, humanImage);
    dinoImages.splice(5, 0, pigeonImage);
  })()

  //The following function chooses a random property of an object (used for dino properties)
  var randomProperty = function (obj) {
    var keys = Object.keys(obj);
    return obj[keys[ keys.length * Math.random() << 0]];
  };

  //The following function creates text elements containing species and fact
  const infoModuleCreator = function(name){
    const lineBreak = document.createElement('br')
    const newPara = document.createElement('p');
    const newName = document.createTextNode('Species: ' + name.name);
    const newFact = document.createTextNode(randomProperty(name));
    //make an exception so that the human only gets a name and no fact
    if (name.species === "human") {
      const inputName = document.createTextNode('Name: ' + name.name);
      newPara.appendChild(inputName);
      return newPara
    }
    else if (name.name === "Pigeon") {
      const inputName = document.createTextNode('Species: ' + name.name);
      const pigeonFact = document.createTextNode(pigeon.fact);
      newPara.appendChild(inputName);
      newPara.appendChild(lineBreak);
      newPara.appendChild(pigeonFact);
      return newPara
    }

    newPara.appendChild(newName);
    newPara.appendChild(lineBreak);

    newPara.appendChild(newFact);

    return newPara
    }

  //the next function loops through the list of images to create grid items (cards with images)
  dinoImages.forEach(function(item, index) { //loop through the list of images
    const newDiv = document.createElement('div'); // creates a new div element and assigns a variable to it
    newDiv.classList.add('grid-item'); // gives the new div element the "grid item" variable, thus making the div a "card" or grid item
    newDiv.setAttribute("id", item.src.slice(104, -4)) //gives each new div element a different id based on the image src
    grid.appendChild(newDiv); //appends the new div to the parent container (the grid)
    card[index].appendChild(dinoImages[index]); //append an image to each new div

    switch (newDiv.id) {
      case ("triceratops"):
        card[index].appendChild(infoModuleCreator(triceratops));
        break;
      case ("tyrannosaurus%20rex"):
        card[index].appendChild(infoModuleCreator(tyrannosaurusRex));
        break;
      case ("anklyosaurus"):
        card[index].appendChild(infoModuleCreator(anklyosaurus));
        break;
      case ("brachiosaurus"):
        card[index].appendChild(infoModuleCreator(brachiosaurus));
        break;
      case ("stegosaurus"):
        card[index].appendChild(infoModuleCreator(stegosaurus));
        break;
      case ("elasmosaurus"):
        card[index].appendChild(infoModuleCreator(elasmosaurus));
        break;
      case ("pteranodon"):
        card[index].appendChild(infoModuleCreator(pteranodon));
        break;
      case ("pigeon"):
        card[index].appendChild(infoModuleCreator(pigeon));
        break;
      case ("human"):
        card[index].appendChild(infoModuleCreator(human));
        break;
    }



  });

 // then the following function creates a comparison Method that returns a string
 //the string is used to create a new objects
 //the object gets appended to the cards
 //cards case statement: case triceratops in image append random triceratops comparison method

  });


    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array

        // Add tiles to DOM

// On button click, prepare and display infographic

//additional information
// Object-Oriented Javascript
// Great! You now have the starter code. Before moving forward, make sure you are
// comfortable with the content from Object-Oriented Javascript. Ask yourself:
//
// What is an object and how do you access and modify its properties?
// What is an IIFE?
// How can you efficiently create objects?
// What is the meaning of this?
// What is prototypal inheritance?
// What is the Document?
// What are events?
// How do you use getElementbyId() to select a DOM element by its id?
// How do you use the className property? What does it return, and why would it be useful?
// Every element has an innerHTML property that represents the markup of the element's
// content. How can you leverage this property to get and set content?
