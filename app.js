//Data from JSON in an array

const dinoData = [
    {
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
this.weightkg = weight/2.2046;
this.height = height;
this.heightinches = height;
this.heightcm = height/0.39370;
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

function createDino (n) {
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
  name: "John",
  species: "human",
  inputFeet: 5,
  inputInches: 6,
  heightinches: 66,
  inputCentimeters: 67,
  inputMeters: 1,
  inputweight: 150,
  diet: "herbivore",
  opposableThumbs: 2,
  inputlbs: 150,
  inputkg: 68
};

//Set a default metric system

let metricSystem = "inches"
let weightSystem = "lbs"

//event listeners for the prefered metric systems

metric.addEventListener("input", function () {
  metricSystem = event.target.value ;
  const cmoptions = document.getElementById("cmoptions")
  const inchesoptions = document.getElementById("inchesoptions")
  if (metricSystem == "inches") {
    cmoptions.style.display = "none";
    inchesoptions.style.display = "block";
  }
  else {
    cmoptions.style.display = "block";
    inchesoptions.style.display = "none";
  }
});
mass.addEventListener("input", function () {
  weightSystem = event.target.value ;
  const lbsoptions = document.getElementById("weightlbs")
  const kgoptions = document.getElementById("weightkg")
  if (weightSystem == "lbs") {
    kgoptions.style.display = "none";
    lbsoptions.style.display = "block";
  }
  else {
    kgoptions.style.display = "block";
    lbsoptions.style.display = "none";
  }
});

// event listeners to get human data from user input

thename.addEventListener("input", function () {
  human.name = event.target.value ;
});
diet.addEventListener("input", function () {
  human.diet = event.target.value ;
});
feet.addEventListener("input", function () {
  human.inputFeet = event.target.value ;
  human.inputFeet = parseInt(human.inputFeet, 10)
});
inches.addEventListener("input", function () {
  human.inputInches = event.target.value ;
  human.inputInches = parseInt(human.inputInches, 10)
});
meters.addEventListener("input", function () {
  human.inputMeters = event.target.value ;
  human.inputMeters = parseInt(human.inputMeters, 10)
});
centimeters.addEventListener("input", function () {
  human.inputCentimeters = event.target.value ;
  human.inputCentimeters = parseInt(human.inputCentimeters, 10)
});
weightlbs.addEventListener("input", function () {
  human.inputlbs = event.target.value ;
  human.inputlbs = parseInt(human.inputlbs, 10)
});
weightkg.addEventListener("input", function () {
  human.inputkg = event.target.value ;
  human.inputkg = parseInt(human.inputkg, 10)
});

//This function can be used to remove elements by ID

const removeElement = function (elementID) {
  const element = document.getElementById(elementID);
  element.remove()}

//this function can be used to shuffle an array (credit: stackoverflow)

const shuffleArray = function(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
};

//event listener for the restart button
reload.addEventListener("click", function () {
  location.reload();
});


//the following function creates the infographic when "submit" is clicked
//most of the functionality of the site is located within this event listener
btn.addEventListener("click", function () {

  //First we want to check if the name input is valid.

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

  //once we have valid data, remove the form using the removeElement function
  removeElement("dino-compare")

  //assign human and dino values according to the chosen metric systems
  if (weightSystem == "kg") {
    human.weight = human.inputkg
    human.weight = parseInt(human.weight, 10)
    dinoArray.forEach(function(item, index) {
      item.weight = item.weight*0.45
      item.weight = parseInt(item.weight, 10)
    });
  }
  else if (weightSystem == "lbs") {
    human.weight = human.inputlbs
  }
  if (metricSystem == "cm") {
    human.heightcm =  human.inputCentimeters + human.inputMeters*100
    human.height = human.heightcm
    human.height = parseInt(human.height, 10)
    dinoArray.forEach(function(item, index) {
      item.height = item.height*2.54
      item.height = parseInt(item.height, 10)
    });
  }
  else if (metricSystem == "inches") {
    human.heightinches = (human.inputFeet*12) + (human.inputInches);
    human.height = human.heightinches
  }

  //now we add extra sauce to the infographic with the following compare methods
  //the compare methods formulates comparisons between dino data and human input data
  //Compare method 1

  const addThumbCompare = function (object) {
    object.opposableThumbs = "Has a grand total of " + object.opposableThumbs + " opposable thumbs, " +(human.opposableThumbs - object.opposableThumbs) + " less than you";
  }

  //Compare method 2

  const addWeightCompare = function (object) {
    if (object.weight > human.weight) {
      object.weight = object.weight-human.weight + " " + weightSystem + " fatter than you.";
    }
    else {
      object.weight = "You have " + (human.weight - object.weight) + " more " + weightSystem + " of raw muscle mass than the puny " + object.name + ".";
    }
    //delete other weight data so that it does not show up in the final infographic
    delete object.weightlbs
    delete object.weightkg
  }

  //Compare method 3

  const addHeightCompare = function (object) {
    if (object.height > human.height) {
      if (metricSystem == "inches") {
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
      else if (metricSystem == "cm") {
        const cmDifference = function () {
        n = object.height - human.height
        string = ""
        string = Math.floor(string + n/100) + " meter"
        if (n % 100 == 0) {
          return string
          }
        else {
          string = string + " and " + n % 100 + " centimeters"
          }
        return string
          }
        object.height = cmDifference(object) + " too tall to enjoy any Disneyland rides."
      }
    }
    else if (object.height < human.height) {
      if (metricSystem == "inches") {
        object.height = "Tiny " + object.name + " is " + (human.height - object.height) + " inches tinier than you."
        }
      else {
        object.height = "Tiny " + object.name + " is " + Math.floor((human.height - object.heightcm)) + " cm tinier than you."};
      }
    delete object.heightcm
    delete object.heightinches

      }

  //Compare method 4

  const addDietCompare = function (object) {
    if (object.diet == human.diet) {
      object.diet = "Much like you, a " + object.diet;
    }
    else if (human.diet == "omnivore") {
      object.diet = "Unlike you, an all-consuming" + human.diet + ", lacked the capacity to feed upon any and all living organisms";
    }
    else {
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

  //Using an IIFE to add each dinosaur image + human image to the dinoImages array.
  //the dinosaur images appear in random positions, human and pigeon are fixed

  (addImages = function () {
    const triceratopsImg = document.createElement("img");
    triceratopsImg.setAttribute("src", "images/triceratops.png")
    dinoImages.push(triceratopsImg)

    const elasmosaurusImg = document.createElement("img");
    elasmosaurusImg.setAttribute("src", "images/elasmosaurus.png")
    dinoImages.push(elasmosaurusImg);

    const anklyosaurusImg = document.createElement("img");
    anklyosaurusImg.setAttribute("src", "images/anklyosaurus.png")
    dinoImages.push(anklyosaurusImg);

    const brachiosaurusImg = document.createElement("img");
    brachiosaurusImg.setAttribute("src", "images/brachiosaurus.png")
    dinoImages.push(brachiosaurusImg);

    const pteranodonImg = document.createElement("img");
    pteranodonImg.setAttribute("src", "images/pteranodon.png")
    dinoImages.push(pteranodonImg);

    const stegosaurusImg = document.createElement("img");
    stegosaurusImg.setAttribute("src", "images/stegosaurus.png")
    dinoImages.push(stegosaurusImg);

    const tyrannosaurusRexImg = document.createElement("img");
    tyrannosaurusRexImg.setAttribute("src", "images/tyrannosaurus%20rex.png")
    dinoImages.push(tyrannosaurusRexImg);
    //creating a variable for human and pigeon
    const humanImage = document.createElement("img");
    humanImage.setAttribute("src", "images/human.png")

    const pigeonImage = document.createElement("img");
    pigeonImage.setAttribute("src", "images/pigeon.png")

    //then we call the function to shuffle the array
    shuffleArray(dinoImages);
    //then add the human and pigeon to specific locations so that they always appear in the middle
    dinoImages.splice(4, 0, humanImage);
    dinoImages.splice(5, 0, pigeonImage);
  })()


  //The following function creates text elements containing species and random fact

  const infoModuleCreator = function(name){
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
    let randomProperty = function (obj) {
      if (obj.extinct == true) { //leave the pigeon name in, will be needed later
        delete obj.name //delete all dino names so that they do not appear as a fact
        delete obj.extinct
      }
      const values = Object.values(obj);
      shuffleArray(values)

      return values[values.length-1]
    };

    const newFact = document.createTextNode(randomProperty(name));

    newPara.appendChild(newName);
    newPara.appendChild(lineBreak);
    newPara.appendChild(newFact);

    return newPara
    }

  //now we loop through created list of images to create grid items (cards with images)

  dinoImages.forEach(function(item, index) { //loop through the list of images
    const newDiv = document.createElement("div"); // creates a new div element and assigns a variable to it
    newDiv.classList.add("grid-item"); // gives the new div element the "grid item" variable, thus making the div a "card" or grid item
    newDiv.setAttribute("id", item.src) //gives each new div element a different id based on the image src
    grid.appendChild(newDiv); //appends the new div to the parent container (the grid)
    card[index].appendChild(dinoImages[index]); //append an image to each new div
    if (newDiv.id.slice(-15) == "triceratops.png") {
      card[index].appendChild(infoModuleCreator(triceratops));
    }
    else if (newDiv.id.slice(-23) == "tyrannosaurus%20rex.png") {
      card[index].appendChild(infoModuleCreator(tyrannosaurusRex));
    }
    else if (newDiv.id.slice(-16) == "anklyosaurus.png") {
      card[index].appendChild(infoModuleCreator(anklyosaurus));
    }
    else if (newDiv.id.slice(-17) == "brachiosaurus.png") {
      card[index].appendChild(infoModuleCreator(brachiosaurus));
    }
    else if (newDiv.id.slice(-15) == "stegosaurus.png") {
      card[index].appendChild(infoModuleCreator(stegosaurus));
    }
    else if (newDiv.id.slice(-16) == "elasmosaurus.png") {
      card[index].appendChild(infoModuleCreator(elasmosaurus));
    }
    else if (newDiv.id.slice(-14) == "pteranodon.png") {
      card[index].appendChild(infoModuleCreator(pteranodon));
    }
    else if (newDiv.id.slice(-10) == "pigeon.png") {
      card[index].appendChild(infoModuleCreator(pigeon));
    }
    else if (newDiv.id.slice(-9) == "human.png") {
      card[index].appendChild(infoModuleCreator(human));
    }





  });

  //and finally show the button to restart the page

  reload.style.display = "inline-block"

  });
