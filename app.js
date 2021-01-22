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
        "fact": "Anklyosaurus survived for approximately 135 million years.",
        "extinct": true
    },
    {
        "name": "Brachiosaurus",
        "weight": 70000,
        "height": "372",
        "diet": "herbivor",
        "where": "North America",
        "when": "Late Jurasic",
        "fact": "An asteroid was named 9954 Brachiosaurus in 1991.",
        "extinct": true
    },
    {
        "name": "Stegosaurus",
        "weight": 11600,
        "height": 79,
        "diet": "herbivor",
        "where": "North America, Europe, Asia",
        "when": "Late Jurasic to Early Cretaceous",
        "fact": "The Stegosaurus had between 17 and 22 seperate places and flat spines.",
        "extinct": true
    },
    {
        "name": "Elasmosaurus",
        "weight": 16000,
        "height": 59,
        "diet": "carnivor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Elasmosaurus was a marine reptile first discovered in Kansas.",
        "extinct": true
    },
    {
        "name": "Pteranodon",
        "weight": 44,
        "height": 20,
        "diet": "carnivor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Actually a flying reptile, the Pteranodon is not a dinosaur.",
        "extinct": true
    },
    {
        "name": "Pigeon",
        "weight": 0.5,
        "height": 9,
        "diet": "herbivor",
        "where": "World Wide",
        "when": "Holocene",
        "fact": "All birds are living dinosaurs.",
        "extinct": false
    }
];

// Constructor function for dinosaurs:
function dino(name, weight, height, diet, where, when, fact) {
this.name = name;
this.weight = weight;
this.height = height;
this.diet = diet;
this.where = where;
this.when = when;
this.fact = fact;
this.netWorth = 0;
this.codingSkills = `The ${this.name} does not know how to code, hence it's net worth of ${this.netWorth} USD.`;
this.opposableThumbs = 0;
this.knowsHowToRead = false;
}

//Function that combines the constructor function for dinosaurs with the dinoData
function createDino (n) {
  return new dino(dinoData[n].name, dinoData[n].weight, dinoData[n].height, dinoData[n].diet, dinoData[n].where, dinoData[n].when, dinoData[n].fact)
}

//each dino Object is created using the above function. This should be a forEach loop
const triceratops = createDino(0)
const tyrannosaurusRex = createDino(1)
const anklyosaurus = createDino(2) //deleted following format: (2, "anklyosaurus")
const brachiosaurus = createDino(3)
const stegosaurus = createDino(4)
const lasmosaurus = createDino(5)
const teranodon = createDino(6)
const pigeon = createDino(7)

// Create Human Object using literal notation (since there is only one)
const human = {
  name: "",
  heightFeet: 2,
  heightInches: 2,
  weight: 2,
  diet: "",
  codingSkills: `Knows how to code.`,
  opposableThumbs: 2,
  knowsHowToRead: true,
};

// Get human data from user input (not an IIFE, don't know why IIFE)
thename.addEventListener('input', function () {
  human.name = event.target.value ;
});
diet.addEventListener('input', function () {
  human.diet = event.target.value ;
});
feet.addEventListener('input', function () {
  human.heightFeet = event.target.value ;
});
inches.addEventListener('input', function () {
  human.heightInches = event.target.value ;
});
weight.addEventListener('input', function () {
  human.weight = event.target.value ;
});

//This function can be used to remove elements by ID
const removeelement = function (elementID) {
  const element = document.getElementById(elementID);
  element.remove()}

//the following function creates the infographic when "submit" is clicked
//most of the functionality of the site is located within this event listener
//first, the event listener to trigger the whole thing when "submit" is clicked
btn.addEventListener('click', function () {
  //immediately remove the form using the above function to remove elements
  removeelement("dino-compare")
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

//The following function allows the creation of text elements containing name or species
  const namePlateCreator = function(name){
    const newName = document.createElement('p');
    const newText = document.createTextNode('Species: ' + name);
    if (name == human.name) {
      const inputName = document.createTextNode('Name: ' + name);
      newName.appendChild(inputName);
      return newName
    }
    newName.appendChild(newText);
    return newName
    }

//Create name element for all creatures in order for it to be appended later
  const humanName = namePlateCreator(human.name)
  const triceratopsName = namePlateCreator(triceratops.name)
  const tyrannosaurusRexName = namePlateCreator(tyrannosaurusRex.name)
  const anklyosaurusName = namePlateCreator(anklyosaurus.name)
  const brachiosaurusName = namePlateCreator(brachiosaurus.name)
  const stegosaurusName = namePlateCreator(stegosaurus.name)
  const lasmosaurusName = namePlateCreator(lasmosaurus.name)
  const teranodonName = namePlateCreator(teranodon.name)
  const pigeonName = namePlateCreator(pigeon.name)

//Create name elements for dinosaurs in order for them to be appended later. This should be automatized
  const triceratopsSpecies = namePlateCreator(triceratops.name)
  const tyrannosaurusRexSpecies = namePlateCreator(tyrannosaurusRex.name)
  const anklyosaurusSpecies = namePlateCreator(anklyosaurus.name)
  const brachiosaurusSpecies = namePlateCreator(brachiosaurus.name)
  const stegosaurusSpecies = namePlateCreator(stegosaurus.name)
  const lasmosaurusSpecies = namePlateCreator(lasmosaurus.name)
  const teranodonSpecies = namePlateCreator(teranodon.name)
  const pigeonSpecies = namePlateCreator(pigeon.name)


  //the next function loops through the list of images to create cards with images
  dinoImages.forEach(function(item, index) { //loop through the list of images
    const newDiv = document.createElement('div'); // creates a new div element and assigns a variable to it
    newDiv.classList.add('grid-item'); // gives the new div element the "grid item" variable
    newDiv.setAttribute("id", item.src) //gives each new div element a different id
    grid.appendChild(newDiv); //appends the new div to the parent container
    card[index].appendChild(dinoImages[index]); //append an image to each new div
    if (index == 4) {
    card[index].appendChild(humanName);
    }

    //the next function and switch make sure that the correct name plate is displayed
    //under each dinosaur. Depending on the image ID, it appends a different name
    //this could actually be shortened significantly, by creating an array with
    //currentdino (the string inside the ID) and an array with name variables (whats inside appendchild)
    //then a foreach loop that is:
    /*
    if (dinoname in currentdinoID)
      card[index].appendChild(dinonameplate);
    */
    function currentDino(species) {
      return newDiv.id.includes(species)
    }
    switch (true) {
      case currentDino("triceratops"):
        card[index].appendChild(triceratopsName);
        break;
      case currentDino ("tyrannosaurus"):
        card[index].appendChild(tyrannosaurusRexName);
        break;
      case currentDino ("anklyosaurus"):
        card[index].appendChild(anklyosaurusName);
        break;
      case currentDino ("brachiosaurus"):
        card[index].appendChild(brachiosaurusName);
        break;
      case currentDino ("stegosaurus"):
        card[index].appendChild(stegosaurusName);
        break;
      case currentDino ("lasmosaurus"):
        card[index].appendChild(lasmosaurusName);
        break;
      case currentDino ("teranodon"):
        card[index].appendChild(teranodonName);
        break;
      case currentDino ("pigeon"):
        card[index].appendChild(pigeonName);
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
