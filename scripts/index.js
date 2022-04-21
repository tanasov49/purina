const select = document.querySelector('.address');
const templateDbc = document.querySelector('.template-dbc');
const dbcCodes = document.querySelector('.dbc-codes');
const showAddress = (card) => {
  const addressTitle = document.createElement('option');
  addressTitle.textContent = card["Address"];
  addressTitle.className = 'address__option'
  return addressTitle;
}
const addNewElements = dbc.map((card) => {
  return showAddress(card);
});
select.append(...addNewElements);

dbc.forEach(function (dbc) {
  const dbcList = templateDbc.content.querySelector('.dbc-list').cloneNode();
  const dbcValue = Object.keys(dbc);
  for (let i = 1; i <= dbcValue.length; i++) {
    const dbcText = document.createElement('p');
    dbcText.className = 'dbc-list__text';
    dbcText.textContent = dbcValue[i];
    dbcList.appendChild(dbcText);
  }
  dbcCodes.appendChild(dbcList);
});


// const showDbcCodes = (code) => {
//   const dbcList = templateDbc.content.querySelector('.dbc-list').cloneNode();
//   const dbcText = document.createElement('p');
//   const dbcValue = Object.keys(code);
//   for (let i = 0; i < dbcValue.length; i++) {
//     dbcText.className = 'dbc-list__text';
//     dbcText.textContent = dbcValue[i];
//     dbcList.appendChild(dbcText);
//   }
//   dbcList.appendChild(dbcCodes);
// }


// const section = document.querySelector('address-clients');
// const requestURL = '../data/json.json';
// const request = new XMLHttpRequest();
// const templateDbc = document.querySelector('.template-dbc');

// request.open('GET', requestURL);
// request.responseType = 'text'; // now we're getting a string!
// request.send();

// request.onload = function() {
//   const superHeroesText = request.response;
//   const superHeroes = JSON.parse(superHeroesText);
//   showHeroes(superHeroes);
// }
// function showHeroes(jsonObj) {
//     const heroes = jsonObj;

//     for (let i = 0; i < heroes.length; i++) {
//       const myArticle = document.querySelector('.address');
//       const dbcCodes = document.querySelector('.dbc-codes');
//       const dbcList = templateDbc.content.querySelector('.dbc-list').cloneNode(true);
//       const myH2 = document.createElement('option');
//       myH2.className = 'address__option';
//       myH2.textContent = heroes[i]["Address"];
      
//     const dbc = Object.keys(heroes[i]);
//     for (let j = 1; j < dbc.length; j++) {
//       const dbcText = document.createElement('p');
//       dbcText.className = 'dbc-list__text';
//       dbcText.textContent = dbc[j];
//       dbcList.appendChild(dbcText);
//       dbcCodes.appendChild(dbcList);
//     }
//     myArticle.appendChild(myH2);
//   }
//   }



// const createCard = (card) => {

//   const elementsCard = templateElement.content.querySelector(".element-item").cloneNode(true);
//   const imageCard = elementsCard.querySelector(".element-item__image");
//   const titleCard = elementsCard.querySelector(".element-item__title");
//   const imageFullscreenClick = elementsCard.querySelector(".element-item__image");
//   //Кнопки лайка
//   const likeButton = elementsCard.querySelector(".element-item__like");
//   const deleteButton = elementsCard.querySelector(".element-item__trash");
//   imageCard.src = card.link;
//   imageCard.alt = card.name;
//   titleCard.textContent = card.name;
//   //включение и выключение лайка
//   return elementsCard;
// };
// const addNewCard = (card) => {
//   elements.prepend(createCard(card));
// };
// //Вставка карточек из формы
// const addCard = (evt) => {
//   evt.preventDefault();
//   const card = {};
//   card.name = titleInputCard.value;
//   card.link = imageInputCard.value;
//   addNewCard(card);
//   closePopup(popupAddCard);
//   formPopupCard.reset();
// };
// const addNewElements = elementsCards.map((card) => {
//   return createCard(card);
// });
// elements.append(...addNewElements);
// formPopupCard.addEventListener("submit", addCard);

