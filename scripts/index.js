const select = document.querySelector('.address');

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

const showDbcCodes = (card) => {
  
}

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

