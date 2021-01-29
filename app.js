//Data from JSON in an array

const dinoData = [{
        "name": "Triceratops",
        "weight": 13000,
        "height": 114,
        "diet": "herbivore",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Vision blocked by own horns.",
        "extinct": true
    },
    {
        "name": "Tyrannosaurus Rex",
        "weight": 11905,
        "height": 144,
        "diet": "carnivore",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Can not actually run.",
        "extinct": true
    },
    {
        "name": "Anklyosaurus",
        "weight": 10500,
        "height": 55,
        "diet": "herbivore",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Wife took his children and house then got extinct.",
        "extinct": true
    },
    {
        "name": "Brachiosaurus",
        "weight": 70000,
        "height": "372",
        "diet": "herbivore",
        "where": "North America",
        "when": "Late Jurasic",
        "fact": "Eggs smaller than chicken eggs.",
        "extinct": true
    },
    {
        "name": "Stegosaurus",
        "weight": 11600,
        "height": 79,
        "diet": "herbivore",
        "where": "North America, Europe, Asia",
        "when": "Late Jurasic to Early Cretaceous",
        "fact": "Brain the size of a walnut.",
        "extinct": true
    },
    {
        "name": "Elasmosaurus",
        "weight": 16000,
        "height": 408,
        "diet": "carnivore",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Incapable of raising neck above water.",
        "extinct": true
    },
    {
        "name": "Pteranodon",
        "weight": 44,
        "height": 20,
        "diet": "carnivore",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Not a dinosaur. Proves there is more than one way to extintion.",
        "extinct": true
    },
    {
        "name": "Pigeon",
        "weight": 0.5,
        "height": 9,
        "diet": "herbivore",
        "where": "World Wide",
        "when": "Holocene",
        "fact": "All birds are secretly dinosaurs.",
        "extinct": false,
    }
];

// Constructor function for dinosaurs:

function dino(name, weight, height, diet, where, when, fact, extinct) {
    this.name = name;
    this.weight = weight;
    this.weightlbs = weight;
    this.weightkg = weight / 2.2046;
    this.height = height;
    this.heightinches = height;
    this.heightcm = height / 0.39370;
    this.diet = diet;
    this.where = where;
    this.when = when;
    this.fact = fact;
    this.extinct = extinct;
    this.netWorth = 0;
    this.codingSkills = `The ${this.name} does not know how to code, hence it's net worth of ${this.netWorth} USD.`;
    this.opposableThumbs = 0;
}

//Function that combines the constructor function for dinosaurs with the dinoData

function createDino(n) {
    return new dino(dinoData[n].name, dinoData[n].weight, dinoData[n].height, dinoData[n].diet, dinoData[n].where, dinoData[n].when, dinoData[n].fact, dinoData[n].extinct)
}

//each dino Object is created using the above function

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
    species: "human",
    diet: "herbivore",
    opposableThumbs: 2,
    name: ""
};

//Set a default metric system

let metricSystem = "inches"
let weightSystem = "lbs"

//This function can be used to remove elements by ID

const removeElement = function(elementID) {
    const element = document.getElementById(elementID);
    element.remove()
}

//this function can be used to shuffle an array (credit: stackoverflow)

const shuffleArray = function(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
};

//event listener for the restart button
reload.addEventListener("click", function() {
    location.reload();
});

//the following function creates the infographic when "submit" is clicked
//most of the functionality of the site is located within this event listener

btn.addEventListener("click", function() {


    //get the human data
    human.name = document.getElementById("thename").value;
    human.diet = document.getElementById("diet").value;
    human.inputFeet = document.getElementById("feet").value;
    human.inputFeet = parseInt(human.inputFeet, 10)
    human.inputInches = document.getElementById("inches").value;
    human.inputInches = parseInt(human.inputInches, 10)
    human.inputMeters = document.getElementById("meters").value;
    human.inputMeters = parseInt(human.inputMeters, 10)
    human.inputCentimeters = document.getElementById("centimeters").value;
    human.inputCentimeters = parseInt(human.inputCentimeters, 10)
    human.inputlbs = document.getElementById("weightlbs").value;
    human.inputlbs = parseInt(human.inputlbs, 10)
    human.inputkg = document.getElementById("weightkg").value;
    human.inputkg = parseInt(human.inputkg, 10)

    //First we want to check if the name input is valid.

    function onlyCharacters(str) {
        let code, i, len;
        for (i = 0, len = str.length; i < len; i++) {
            code = str.charCodeAt(i);
            if (!(code > 64 && code < 91) && // upper alpha (A-Z)
                !(code > 96 && code < 123)) { // lower alpha (a-z)
                return false;
            }
        }
        return true;
    };
    //Check metric system

    weightSystem = document.getElementById("mass").value;

    //assign human and dino values according to the chosen metric systems

    if (weightSystem == "kg") {
        human.weight = human.inputkg
        human.weight = parseInt(human.weight, 10)
        dinoArray.forEach(function(item, index) {
            item.weight = item.weight * 0.45
            item.weight = parseInt(item.weight, 10)
        });
    } else if (weightSystem == "lbs") {
        human.weight = human.inputlbs
    }
    if (metricSystem == "cm") {
        human.heightcm = human.inputCentimeters + human.inputMeters * 100
        human.height = human.heightcm
        human.height = parseInt(human.height, 10)
        dinoArray.forEach(function(item, index) {
            item.height = item.height * 2.54
            item.height = parseInt(item.height, 10)
        });
    } else if (metricSystem == "inches") {
        human.heightinches = (human.inputFeet * 12) + (human.inputInches);
        human.height = human.heightinches
    }
    //here we have an if statement that will get out of the function and alert
    //the user if the input is not valid

    if (onlyCharacters(human.name) == false || human.name == undefined || human.name.length == 0 || human.height == undefined || human.weight == undefined) {
        alert("Input not valid.")
        return;
    };


    //once we have valid data, remove the form using the removeElement function

    removeElement("dino-compare")

    //now we add extra sauce to the infographic with the following compare methods
    //the compare methods formulates comparisons between dino data and human input data
    //Compare method 1

    const addThumbCompare = function(object) {
        object.opposableThumbs = "Has a grand total of " + object.opposableThumbs + " opposable thumbs, " + (human.opposableThumbs - object.opposableThumbs) + " less than you";
    }

    //Compare method 2

    const addWeightCompare = function(object) {
        if (object.weight > human.weight) {
            object.weight = object.weight - human.weight + " " + weightSystem + " fatter than you.";
        } else {
            object.weight = "You have " + (human.weight - object.weight) + " more " + weightSystem + " of raw muscle mass than the puny " + object.name + ".";
        }
        //delete other weight data so that it does not show up in the final infographic

        delete object.weightlbs
        delete object.weightkg
    }

    //Compare method 3

    const addHeightCompare = function(object) {
        if (object.height > human.height) {
            if (metricSystem == "inches") {
                const inchesDifference = function(object) {
                    n = object.height - human.height
                    string = ""
                    string = Math.floor(string + n / 12) + " feet"
                    if (n % 12 == 0) {
                        return string
                    } else {
                        string = string + " and " + n % 12 + " inches"
                    }

                    return string
                }

                object.height = inchesDifference(object) + " too tall to enjoy any Disneyland rides."
            } else if (metricSystem == "cm") {
                const cmDifference = function() {
                    n = object.height - human.height
                    string = ""
                    string = Math.floor(string + n / 100) + " meter"
                    if (n % 100 == 0) {
                        return string
                    } else {
                        string = string + " and " + n % 100 + " centimeters"
                    }
                    return string
                }
                object.height = cmDifference(object) + " too tall to enjoy any Disneyland rides."
            }
        } else if (object.height < human.height) {
            if (metricSystem == "inches") {
                object.height = "Tiny " + object.name + " is " + (human.height - object.height) + " inches tinier than you."
            } else {
                object.height = "Tiny " + object.name + " is " + Math.floor((human.height - object.heightcm)) + " cm tinier than you."
            };
        }
        delete object.heightcm
        delete object.heightinches


    }

    //Compare method 4

    const addDietCompare = function(object) {
        if (object.diet == human.diet) {
            object.diet = "Much like you, a " + object.diet;
        } else if (human.diet == "omnivore") {
            object.diet = "Unlike you, an all-consuming" + human.diet + ", lacked the capacity to feed upon any and all living organisms";
        } else {
            object.diet = "Made the wrong choice of becoming a " + object.diet
        }
        //delete other weight data so that it does not show up in the final infographic

        delete object.weightlbs
        delete object.weightkg
        delete object.netWorth //also delete this, even if unrelated
    }

    //add the compared information to all dinos, so that this can in turn appear
    //in the infographic

    dinoArray.forEach(function(item, index) {
        addThumbCompare(item)
        addWeightCompare(item)
        addHeightCompare(item)
        addDietCompare(item)
    });

    //store the grid and the grid items into a variable for later refference

    const card = document.getElementsByClassName("grid-item")
    const infographic = document.getElementById("grid");

    //Empty array that will be filled with all images

    const dinoImages = [];

    //We shuffle the dinoArray

    shuffleArray(dinoArray);


    //then we fill the images array, looping through the dino array

    dinoArray.forEach(function(item, index) {
        const newImg = document.createElement("img");
        newImg.setAttribute("src", `images/${item.name}.png`)
        dinoImages.push(newImg);
    });

    //We delete the pigeon image and object since it will be added later 
    const pigeonPlace = dinoArray.indexOf(pigeon) //FIND THE PIGEON
    dinoImages.splice(pigeonPlace, 1)
    dinoArray.splice(pigeonPlace, 1)



    //create variables for human and pigeon images

    const humanImage = document.createElement("img");
    humanImage.setAttribute("src", "images/human.png")

    const pigeonImage = document.createElement("img");
    pigeonImage.setAttribute("src", "images/pigeon.png")

    //and add them to specific places of the images array

    dinoImages.splice(4, 0, humanImage);
    dinoArray.splice(4, 0, human);
    dinoImages.splice(5, 0, pigeonImage);
    dinoArray.splice(5, 0, pigeon);


    //The following function creates text elements containing species and random fact
    //Human and pigeon get fixed values

    const infoModuleCreator = function(name) {
        const lineBreak = document.createElement("br")
        const newPara = document.createElement("p");
        const newName = document.createTextNode("Species: " + name.name);

        //make an exception so that the human only gets a name and no fact
        if (name.species === "human") {
            const inputName = document.createTextNode("Name: " + name.name);
            newPara.appendChild(inputName);
            return newPara
        }
        //make an exception so that the pigeon only gets name and specific fact
        else if (name.extinct == false) {
            const inputName = document.createTextNode("Species: " + name.name);
            const pigeonFact = document.createTextNode(pigeon.fact);
            newPara.appendChild(inputName);
            newPara.appendChild(lineBreak);
            newPara.appendChild(pigeonFact);
            return newPara
        }
        //The following function chooses a random property of an object (used for dino properties)
        const randomProperty = function(obj) {
            if (obj.extinct == true) { //leave the pigeon name in, will be needed later
                delete obj.name //delete all dino names so that they do not appear as a fact
                delete obj.extinct
            }
            const values = Object.values(obj);
            shuffleArray(values)

            return values[values.length - 1]
        };

        const newFact = document.createTextNode(randomProperty(name));

        newPara.appendChild(newName);
        newPara.appendChild(lineBreak);
        newPara.appendChild(newFact);

        return newPara
    }

    //now we loop through created list of images to create grid items (cards with images)

    dinoArray.forEach(function(item, index) { //loop through the list of images
        const newDiv = document.createElement("div"); // creates a new div element and assigns a variable to it
        newDiv.classList.add("grid-item"); // gives the new div element the "grid item" variable, thus making the div a "card" or grid item
        newDiv.setAttribute("id", item.name) //gives each new div element a different id based on the image src
        grid.appendChild(newDiv); //appends the new div to the parent container (the grid)
        card[index].appendChild(dinoImages[index]); //append an image to each new div
        card[index].appendChild(infoModuleCreator(item)) //append a random fact to dino cards


    });

    //and finally show the button to restart the page

    reload.style.display = "inline-block"

});