const pets = [
  {
    id: 1,
    name: "Dusty",
    color: "Green",
    specialSkill: "Gives sincere apologies.",
    type: "cat",
    imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
  },
  {
    id: 2,
    name: "Whiskers",
    color: "Yellow",
    specialSkill: "Can prove he is a real man by drinking whiskey.",
    type: "dino",
    imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
  },
  {
    id: 3,
    name: "Coco",
    color: "Black",
    specialSkill: "Burps minimally.",
    type: "dog",
    imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
  },
  {
    id: 4,
    name: "Tiger",
    color: "Black",
    specialSkill: "Can read (but cannot understand) Hebrew.",
    type: "dog",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
  },
  {
    id: 5,
    name: "Oreo",
    color: "Yellow",
    specialSkill: "Able to stop chewing ice or whistling on request.",
    type: "cat",
    imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
  },
  {
    id: 6,
    name: "Sassy",
    color: "Brown",
    specialSkill: "Adept at talking self and others out of fights.",
    type: "cat",
    imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
  },
  {
    id: 7,
    name: "Sammy",
    color: "Blue",
    specialSkill: "Listens attentively to boring stories.",
    type: "cat",
    imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
  },
  {
    id: 8,
    name: "Buster",
    color: "Green",
    specialSkill: "Does not use excessive acronyms.",
    type: "dog",
    imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
  },
  {
    id: 9,
    name: "Samantha",
    color: "Brown",
    specialSkill: "Always up for dessert.",
    type: "cat",
    imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
  },
  {
    id: 10,
    name: "Coco",
    color: "Red",
    specialSkill: "Burps minimally.",
    type: "cat",
    imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
  },
  {
    id: 11,
    name: "Callie",
    color: "Blue",
    specialSkill: "Listens attentively to boring stories.",
    type: "dog",
    imageUrl: "http://dailynewsdig.com/wp-content/uploads/2014/03/Creative-And-Funny-Dog-Stock-Photography-Pictures-2.jpg"
  },
  {
    id: 12,
    name: "Buddy",
    color: "Red",
    specialSkill: "Enjoys fine wine.",
    type: "dog",
    imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
  },
  {
    id: 13,
    name: "Bubba",
    color: "Yellow",
    specialSkill: "Cleans himself.",
    type: "dog",
    imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
  },
  {
    id: 14,
    name: "Chloe",
    color: "Green",
    specialSkill: "Admits he is wrong",
    type: "dino",
    imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
  },
  {
    id: 15,
    name: "Nala",
    color: "Purple",
    specialSkill: "Dances when he has to.",
    type: "cat",
    imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
  },
  {
    id: 16,
    name: "Oscar",
    color: "Green",
    specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
    type: "cat",
    imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
  }
];

const targetingApp = document.querySelector("#app");



// Render to DOM utility function
const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};
const cardsOnDom = (array) => {
  let domString = "";
  for (const animal of array) {
    let petColor = "";
    switch (animal.type) {
      case "dog":
        petColor = "rgba(255, 0, 0, 0.5)";
        break;
      case "cat":
        petColor = "rgba(0, 255, 0, 0.5)";
        break;
      case "dino":
        petColor = "rgba(0, 0, 255, 0.5)";
        break;
      default:
        petColor = "yellow";
    }
    domString += `<div class="card" style="width: 18rem;">
    <img src="${animal.imageUrl}" class="card-img-top" alt="...">
    <div class="card-body" style="background-color: ${petColor}">
      <p class="card-text">${animal.name}</p>
      <hr>
      <p class="card-text">${animal.color}</p>
      <hr>
      <p class="card-text">${animal.specialSkill}</p>
      <hr>
      <p class="card-text">${animal.type}</p>
      <button class="btn btn-danger" id="delete--${animal.id}">Delete</button>
    </div>
  </div>`;
  }

  renderToDom("#app", domString);
}


const filter = (petType) => {
  // 1: accept an argument
  // 2: filter array of pets and return only pets object type
  const petTypeArray = [];

  for (const pet of pets) {
    if (pet.type === petType) {
      petTypeArray.push(pet);
    }
  }

  return petTypeArray;
}

// targetingApp.innerHTML = domString;

const allBtn = document.querySelector('#all-btn');

allBtn.addEventListener('click', () => {
  cardsOnDom(pets);
});


const dogBtn = document.querySelector('#dog-btn');

dogBtn.addEventListener('click', () => {
  cardsOnDom(filter("dog"));
});

const catBtn = document.querySelector('#cat-btn');

catBtn.addEventListener('click', () => {
  cardsOnDom(filter("cat"));
});

const dinoBtn = document.querySelector('#dino-btn');

dinoBtn.addEventListener('click', () => {
  cardsOnDom(filter("dino"));
});




cardsOnDom(pets);



// CREATE
// 1. Select/target the form on the DOM

const form = document.querySelector("form"); // This will select the tags <form></form> in HTML

// 2. create a function that grabs all the values from the form, pushes the new object to the array, then repaints the DOM with the new teammate

const createPet = (e) => {
  e.preventDefault();

  const newPetObj = {
    id: pets.length + 1,
    name: document.querySelector("#name").value,
    color: document.querySelector("#color").value,
    specialSkill: document.querySelector("#specialSkill").value,
    type: document.querySelector("#type").value,
    imageUrl: document.querySelector("#image").value
  }


  pets.push(newPetObj);
  cardsOnDom(pets);
  form.reset();
}

// 3. Add an event listener for the form submit and pass it on to the function (callback)
form.addEventListener('submit', createPet);


// DELETE
// 1. Target the app div
const app = document.querySelector('#app');

// 2. Add an event listener to capture clicks
app.addEventListener('click', (e) => {
  // console.log(e.target.id);

  // 3. check e.target.id includes "delete"
  if (e.target.id.includes("delete")) {
    const [, id] = e.target.id.split("--");
    // 4. add logic to remove from array
    // .findIndex is an array method
    const index = pets.findIndex(e => e.id === Number(id));

    // .splice modifies the original array
    pets.splice(index, 1);

    // 5. Repaint the DOM with the updated array
    cardsOnDom(pets);

  }
})