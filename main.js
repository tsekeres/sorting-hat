console.log("Ho Ender.");

const studentCards = [
];
//   {
//     name: "Tad",
//     house: "Gryffindor",
//     crestImgUrl: "https://i.pinimg.com/originals/e1/13/2f/e1132fc96dfc0e2f0373fee35a45e193.png",
//     attribute: "  ",
//     idNumber: 
//   },
//   {
//     name: "Geo",
//     house: "Slytherin",
//     crestImgUrl: "https://i.pinimg.com/originals/5b/90/db/5b90db4bc3ac72b596356cfc9ac7e712.png",
//     idNumber: 
//   },
//   {
//     name: "John",
//     house: "Hufflepuff",
//     crestImgUrl: "https://wallpaperaccess.com/full/4116097.jpg",
//     idNumber: 
//   },
//   {
//     name: "Lily",
//     house: "Ravenclaw",
//     crestImgUrl: "https://www.clipartmax.com/png/middle/264-2649292_ravenclaw-crest-harry-potter-ravenclaw-crest.png",
//     idNumber: 
//   },

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
  "Slytherine"
];


const getFormInfo = (e) => {

  const name = document.querySelector('#floatingName').value;

  

  const randomHouse = Math.floor(Math.random() * studentHouse.length);
  const house = studentHouse[randomHouse];

  const obj = {
    name,
    house,
  }
 
  studentCards.push(obj);
  cardBuilder(studentCards);

  document.querySelector("form").reset();
  
}



const buttonEvents = () => {
  document.querySelector('#jumbo').addEventListener('click', handleButtonClick);
  document.querySelector('#sortButton').addEventListener('click', getFormInfo);
}


const init = () => {
  buttonEvents();
  
}

init();
