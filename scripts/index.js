const select = document.querySelector('.address');
const templateDbc = document.querySelector('.template-dbc');
const dbcCodes = document.querySelector('.dbc-codes');

dbc.forEach(function (dbc) {
  const addressClient = dbc["Address"]
  const addressTitle = document.createElement('option');
  addressTitle.textContent = addressClient;
  addressTitle.className = 'address__option'
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
  }
  dbcCodes.appendChild(dbcList);
});

const showDbcCodesClient = (n) => {
  let i;
  let selectAddress = document.getElementsByClassName('address__option');
  let selectDbcCodes = document.getElementsByClassName('dbc-list');
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
      slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" slider__radio_active", "");
  }
  slides[slideIndex - 1].style.display = "grid";
  dots[slideIndex - 1].className += " slider__radio_active";

}