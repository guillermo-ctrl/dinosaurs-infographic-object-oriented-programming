//Data from JSON in an array
const dinoData = [
    {
        "species": "Triceratops",
        "weight": 13000,
        "height": 114,
        "diet": "herbivor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "First discovered in 1889 by Othniel Charles Marsh"
    },
    {
        "species": "Tyrannosaurus Rex",
        "weight": 11905,
        "height": 144,
        "diet": "carnivor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "The largest known skull measures in at 5 feet long."
    },
    {
        "species": "Anklyosaurus",
        "weight": 10500,
        "height": 55,
        "diet": "herbivor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Anklyosaurus survived for approximately 135 million years."
    },
    {
        "species": "Brachiosaurus",
        "weight": 70000,
        "height": "372",
        "diet": "herbivor",
        "where": "North America",
        "when": "Late Jurasic",
        "fact": "An asteroid was named 9954 Brachiosaurus in 1991."
    },
    {
        "species": "Stegosaurus",
        "weight": 11600,
        "height": 79,
        "diet": "herbivor",
        "where": "North America, Europe, Asia",
        "when": "Late Jurasic to Early Cretaceous",
        "fact": "The Stegosaurus had between 17 and 22 seperate places and flat spines."
    },
    {
        "species": "Elasmosaurus",
        "weight": 16000,
        "height": 59,
        "diet": "carnivor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Elasmosaurus was a marine reptile first discovered in Kansas."
    },
    {
        "species": "Pteranodon",
        "weight": 44,
        "height": 20,
        "diet": "carnivor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Actually a flying reptile, the Pteranodon is not a dinosaur."
    },
    {
        "species": "Pigeon",
        "weight": 0.5,
        "height": 9,
        "diet": "herbivor",
        "where": "World Wide",
        "when": "Holocene",
        "fact": "All birds are living dinosaurs."
    }
];
// Create Dino Constructor
function dino(species, weight, height, diet, where, when, fact) {
this.species = species;
this.weight = weight;
this.height = height;
this.diet = diet;
this.where = where;
this.when = when;
this.fact = fact;
this.netWorth = 0;
this.codingSkills = `The ${this.species} does not know how to code, hence it's net worth of ${this.netWorth} USD.`;
this.opposableThumbs = 0;
}

// Create Dino Objects
//chose the creator function method because factory functions do not provide
//inheritance features. IMPROVEMENT: This seems like could be done by a foreach loop
const triceratops = new dino(dinoData[0].species, dinoData[0].weight, dinoData[0].height, dinoData[0].diet, dinoData[0].where, dinoData[0].when, dinoData[0].fact)
const tyrannosaurusRex = new dino(dinoData[1].species, dinoData[1].weight, dinoData[1].height, dinoData[1].diet, dinoData[1].where, dinoData[1].when, dinoData[1].fact)
const anklyosaurus = new dino(dinoData[2].species, dinoData[2].weight, dinoData[0].height, dinoData[2].diet, dinoData[2].where, dinoData[2].when, dinoData[2].fact)
const brachiosaurus = new dino(dinoData[3].species, dinoData[3].weight, dinoData[0].height, dinoData[3].diet, dinoData[3].where, dinoData[3].when, dinoData[3].fact)
const stegosaurus = new dino(dinoData[4].species, dinoData[4].weight, dinoData[0].height, dinoData[4].diet, dinoData[4].where, dinoData[4].when, dinoData[4].fact)
const lasmosaurus = new dino(dinoData[5].species, dinoData[5].weight, dinoData[0].height, dinoData[5].diet, dinoData[5].where, dinoData[5].when, dinoData[5].fact)
const teranodon = new dino(dinoData[6].species, dinoData[6].weight, dinoData[0].height, dinoData[6].diet, dinoData[6].where, dinoData[6].when, dinoData[6].fact)
const igeon = new dino(dinoData[7].species, dinoData[7].weight, dinoData[0].height, dinoData[7].diet, dinoData[7].where, dinoData[7].when, dinoData[7].fact)

// Create Human Object
const human = {
  name: "",
  height: 2,
  weight: 2,
  diet: ""
};

// Use IIFE to get human data from form


    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array

        // Add tiles to DOM

    // Remove form from screen


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
