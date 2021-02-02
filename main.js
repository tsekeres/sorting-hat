console.log("Ho Ender.");

// const studentCards = [
//   {
//     name: "Tad",
//     house: "Gryffindor",
//     crestImgUrl: "https://i.pinimg.com/originals/e1/13/2f/e1132fc96dfc0e2f0373fee35a45e193.png",
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
// ];

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;

}

const domString = `<div class="form">
                      <h3 class="form-title">Enter First Year's Name:</h3>
                      <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingName" placeholder="Name">
                        <label for="floatingInput">Name</label>
                      </div>
                      <p class="lead">
                      <a id="sortButton" class="btn btn-primary btn-lg" href="#" role="button">Sort!</a>
                      </p>
                    </div>`;



const handleButtonClick = (e) => {
  
  const buttonId = e.target.id;

  if (buttonId === 'jumbo') {
    printToDom('#form', domString);
  }; 


}

const getFormInfo = (e) => {

  const name = document.querySelector('#floatingName').value;

  const obj = {
    name,
  }

  document.querySelector('#form').reset();
  
}



const buttonEvents = () => {
  document.querySelector('#jumbo').addEventListener('click', handleButtonClick);
  document.querySelector('#form').addEventListener('click', getFormInfo);
}


const init = () => {
  buttonEvents();
  
}

init();
