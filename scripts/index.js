const address = document.querySelector('.address');
const templateDbc = document.querySelector('.template-dbc');
const dbcCodes = document.querySelector('.dbc-codes');
const closeBtnAddress = document.querySelector('.address-clients__close-btn');
const anywhere = document.querySelector('.page');
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
  const addressTitle = document.createElement('li');
  const addressValue = dbc["Address"];
  addressTitle.className = 'address__option';
  addressTitle.textContent = addressValue;
  addressTitle.setAttribute('onclick', `option(${(++index)})`)
  address.appendChild(addressTitle);
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


const closeKeyEsc = (evt) => {
  if (evt.key === 'Escape') {
    const addressOpened = document.querySelector('.address__opened');
    closeAddress(addressOpened);
  }
}
const openAddress = (address) => {
  address.classList.add("address__opened");
  closeBtnAddress.classList.add("address-clients__close-btn_visibled");
  document.addEventListener('keyup', closeKeyEsc);
}
const closeAddress = (address) => {
  address.classList.remove("address__opened");
  closeBtnAddress.classList.remove("address-clients__close-btn_visibled");
  document.removeEventListener('keyup', closeKeyEsc);
}
const btnAddress = document.querySelector('.address-clients__btn');
btnAddress.addEventListener('click', () => {
  openAddress(address);
});
closeBtnAddress.addEventListener('click', () => {
  closeAddress(address);
})

var slideIndex = 1;
showSlides(slideIndex);
function option(n) {
  showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("dbc-list");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
      slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "grid";
  closeAddress(address);
  console.log(slides.length);
}