const select = document.querySelector('.address');
const templateDbc = document.querySelector('.template-dbc');
const dbcCodes = document.querySelector('.dbc-codes');

// Метод поиска адресов с помощью map
// const createCard = (card) => {
//   const addressTitle = document.createElement('option');
//   const dbcKey = Object.keys(card);
//   addressTitle.className = 'address__option';
//   addressTitle.textContent = card["Address"];
//   addressTitle.id = 'address_';
//   return addressTitle;
// };

// const addNewElements = dbc.map((card) => {
//   return createCard(card);
// });
// select.append(...addNewElements);
// Метод поиска адресов с помощью foreach
dbc.forEach(function (dbc, index) {
  const addressTitle = document.createElement('option');
  const addressValue = dbc["Address"];
  addressTitle.className = 'address__option';
  addressTitle.textContent = addressValue;
  addressTitle.id = 'address_' + index;
  select.appendChild(addressTitle);
})
dbc.forEach(function (dbc) {
  const dbcList = templateDbc.content.querySelector('.dbc-list').cloneNode();
  const dbcKey = Object.keys(dbc);
  const dbcValue = Object.values(dbc);
  for (let i = 0; i <= dbcKey.length; i++) {
    const dbcText = document.createElement('p');
    dbcText.className = 'dbc-list__text';
    if (dbcValue[i] === "0") {
      dbcText.textContent = dbcKey[i];
      dbcList.appendChild(dbcText);
    }
    dbcCodes.appendChild(dbcList);
  }
});



// var slideIndex = 1;
// showDbcCodesClient(slideIndex);
// /* Устанавливает текущий слайд */
// function currentSlide(n) {
//   showDbcCodesClient(slideIndex = n);
// }
// const showDbcCodesClient = (n) => {
//   let i;
//   let selectAddress = document.getElementsByClassName('address__option');
//   let selectDbcCodes = document.getElementsByClassName('dbc-list');
//   if (n > selectDbcCodes.length) {
//     slideIndex = 1
//   }
//   if (n < 1) {
//       slideIndex = selectDbcCodes.length
//   }
//   for (i = 0; i < selectDbcCodes.length; i++) {
//     selectDbcCodes[i].style.display = "none";
//   }
//   selectDbcCodes[slideIndex - 1].style.display = "grid";
// }