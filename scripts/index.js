const select = document.querySelector('.address');
const templateDbc = document.querySelector('.template-dbc');
const dbcCodes = document.querySelector('.dbc-codes');

const createCard = (card) => {
  const dbcList = templateDbc.content.querySelector(".dbc-list").cloneNode(true);
  const addressTitle = document.createElement('option');
  addressTitle.textContent = card["Address"];
  dbcList.appendChild(addressTitle);
  return dbcList;
};

const addNewElements = dbc.map((card) => {
  return createCard(card);
});
dbcList.append(...addNewElements);



// dbc.forEach(function (dbc) {
//     const addressTitle = document.createElement('option');
//     addressTitle.className = 'address__option';
//     addressTitle.textContent = dbc["Address"];
//     select.appendChild(addressTitle);
// })
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