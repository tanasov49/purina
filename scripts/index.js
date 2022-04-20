const section = document.querySelector('address-clients');
const requestURL = 'data/json.json';
const request = new XMLHttpRequest();
const templateDbc = document.querySelector('.template-dbc');

request.open('GET', requestURL);
request.responseType = 'text'; // now we're getting a string!
request.send();

request.onload = function() {
  const superHeroesText = request.response;
  const superHeroes = JSON.parse(superHeroesText);
  showHeroes(superHeroes);
}
function showHeroes(jsonObj) {
    const heroes = jsonObj;

    for (let i = 0; i < heroes.length; i++) {
      const myArticle = document.querySelector('.address');
      const dbcCodes = document.querySelector('.dbc-codes');
      const dbcList = templateDbc.content.querySelector('.dbc-list').cloneNode(true);
      const myH2 = document.createElement('option');
      myH2.className = 'address__option';
      myH2.textContent = heroes[i]["Address"];
      
    const dbc = Object.keys(heroes[i]);
    for (let j = 1; j < dbc.length; j++) {
      const dbcText = document.createElement('p');
      dbcText.className = 'dbc-list__text';
      dbcText.textContent = dbc[j];
      dbcList.appendChild(dbcText);
      dbcCodes.appendChild(dbcList);
    }
    myArticle.appendChild(myH2);
  }
  }

