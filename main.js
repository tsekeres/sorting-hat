console.log("Ho Ender.");

const studentCards = [];

const deathEaters = [];

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;

}

const cardBuilder = (taco) => {
  let domString = '';

for (let [i, element] of taco.entries()) {
  domString += `<div class="card text-center my-2" style="width: 14rem;" id=${i}>
        <img src="${element.crestImgUrl}" class="card-img-top object-fit: contain" alt="Hogwarts House Crest">
        <div class="card-body">
          <h4 class="card-title">${element.house}</h4>
          <h5 class="card-student">${element.name}</h5>
          <p class="card-attributes">${element.attribute}</p>
          <button type="button" id=${taco[i].id} class="btn btn-primary">Expel</button>
        </div>
      </div>`;
      }
      printToDom('#student-cards', domString);
}

const expelBuilder = (taco) => {
  let domString = '';

for (let [i, element] of taco.entries()) {
  domString += `<div class="card text-center my-2" style="width: 14rem;" id=${i}>
        <img src="https://i.pinimg.com/originals/3e/62/c3/3e62c3fe324b8c1b56f54d877d7ea2d3.jpg" class="card-img-top object-fit: contain" alt="Hogwarts House Crest">
        <div class="card-body">
          <h4 class="card-title">Death Eater</h4>
          <h5 class="card-student">${element.name}</h5>
        </div>
      </div>`;
      }
      printToDom('#expelled-cards', domString);
}

const handleButtonClick = (e) => {
  
  const buttonId = e.target.id;

  if (buttonId === "jumbo") {
       document.getElementById("form").style.visibility = "visible";
  }; 

}

const studentHouse = [
  "Ravenclaw",
  "Gryffindor",
  "Hufflepuff",
  "Slytherin"
];

  const Gryffindor = "https://e7.pngegg.com/pngimages/855/960/png-clipart-harry-potter-and-the-philosopher-s-stone-garri-potter-sorting-hat-professor-minerva-mcgonagall-gryffindor-hogwarts-train.png";
  const Hufflepuff = "https://smallimg.pngkey.com/png/small/43-439176_51-hufflepuff-crest-transparent-hufflepuff-house.png";
  const Slytherin = "https://www.clipartmax.com/png/middle/230-2302214_slytherin-harry-potter-wiki-fandom-powered-by-wikia-slytherin-crest-transparent.png";
  const Ravenclaw = "https://i.pinimg.com/originals/4d/ab/0a/4dab0a87210b79bfbb9adbb5432847be.png";
  
  const gryAttribute = "You are courageous, chivalric, and determined!";
  const hufAttribute = "You value hard work, patience and loyalty!";
  const slyAttribute = "You are ambitious, cunning and resourceful!";
  const ravAttribute = "You value intelligence, learning, wisdom and wit!";

const getFormInfo = (e) => {
  e.preventDefault();

  const name = document.querySelector('#floatingName').value;

  const randomSort = Math.floor(Math.random() * studentHouse.length);
  const house = studentHouse[randomSort];

  const cardIds = studentCards.map(student => student.id).sort((a, b) => a - b);

  const id = cardIds.length ? cardIds[cardIds.length - 1] + 1 : 1;

  const obj = {
    name,
    house,
    id,
  };
  
  if (house === "Gryffindor") {
    obj.crestImgUrl = Gryffindor;
    obj.attribute = gryAttribute;
  } else if (house === "Hufflepuff") {
    obj.crestImgUrl = Hufflepuff;
    obj.attribute = hufAttribute;
  } else if (house === "Slytherin") {
    obj.crestImgUrl = Slytherin;
    obj.attribute = slyAttribute;
  } else if (house === "Ravenclaw") {
    obj.crestImgUrl = Ravenclaw;
    obj.attribute = ravAttribute;
  }

  const helpfulForm = () => {
    let reminder = `<h6 class="text-white">Please type in a name.</h6>`;
    printToDom('#reminderMessage', reminder);
  }

  if (name.length === 0) {
      helpfulForm();
  } else {
    studentCards.push(obj);
  }
  cardBuilder(studentCards);
  document.querySelector("form").reset();
}

const expel = (e) => {
  const targetType = e.target.type;
  const targetId = Number(e.target.id);

  if (targetType === "button") {
    const cardIndex = studentCards.findIndex((student) => student.id === targetId);
    let deathEater = studentCards.splice(cardIndex, 1);
    deathEaters.push(...deathEater);
  }
  cardBuilder(studentCards);
  expelBuilder(deathEaters);
  
}

const buttonEvents = () => {
  document.querySelector('#jumbo').addEventListener('click', handleButtonClick);
  document.querySelector('#sortButton').addEventListener('click', getFormInfo);
  document.querySelector('#student-cards').addEventListener('click', expel);
}

const init = () => {
  buttonEvents();
  
}

init();
