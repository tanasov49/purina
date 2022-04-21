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