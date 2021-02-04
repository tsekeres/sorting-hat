console.log("Ho Ender.");

const studentCards = [
];

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;

}

const cardBuilder = (taco) => {
  let domString = '';

for (let [i, element] of taco.entries()) {
  domString += `<div class="card text-center my-2" style="width: 14rem;" id=${i}>
        <img src="${element.crestImgUrl}" class="card-img-top" alt="Hogwarts House Crest">
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

  const Gryffindor = "https://www.clipartkey.com/mpngs/m/116-1169931_harry-potter-hogwarts-clipart-at-free-for-personal.png";
  const Hufflepuff = "https://wallpaperaccess.com/full/4116097.jpg";
  const Slytherin = "https://toppng.com/uploads/preview/slytherin-sticker-1156332001015i5o3h765.png";
  const Ravenclaw = "https://www.pinclipart.com/picdir/middle/113-1138734_crest-png-for-free-download-on-harry-potter.png";
  
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
    studentCards.splice(cardIndex, 1);
  }
  cardBuilder(studentCards);
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
