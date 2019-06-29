function getTime() {
  let today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('time').innerHTML =
    h + ":" + m + ":" + s;
  let t = setTimeout(getTime, 500);
}
function checkTime(i) {
  if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
  return i;
}

function getDay() {
  let d = new Date();
  let weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  let n = weekday[d.getDay()];
  document.getElementById("day").innerHTML = n;
}

function getDate() {
  let dt = new Date();
  document.getElementById("date").innerHTML = dt.toLocaleDateString();
}

function getDate2() {
  let dt = new Date();
  document.getElementById("date2").innerHTML = dt.toLocaleDateString();
}

//stores the schedules in the local storage
function assignSchedule(s, p) {
  localStorage.setItem('sd', s);
  localStorage.setItem('pd', p);
}
function buildDumb() {
  // localStorage stores the list of lists as one string. 
  // TODO: parse the input to lists!!!!!!!!!!!

  /*let sd = localStorage.getItem('sd'); 
  let pd = localStorage.getItem('pd');
  buildSite(sd,pd,document);*/

  //now only for testing:
  let sd = [["SpublicSchedule", "10:15 - 11:15 Presentation", "Beschreibung"], ["SpublicSchedule", "12:15 - 13:45 Talk", "Beschreibung"], ["SpublicSchedule", "15:15 - 17:15 Meeting", "Beschreibung"]];
  let pd = [["studentSchedule", "12:15 - 13:45 Interactive Systems ", "By: Prof. Krüger In: E1.3 HS01"], ["studentSchedule", "14:15 - 15:45 Informationssysteme", "By: Prof. Dietrich In: GHH"], ["studentSchedule", "16:15 - 17:45 Nebenläufige Programmierung", "By: Prof. Hermanns In: E1.3 HS02"]];
  buildSite(sd, pd, document);
}


// test string: "SpublicSchedule;10:15 - 11:15 Presentation;Beschreibung;SpublicSchedule;12:15 - 13:45 Talk;Beschreibung;SpublicSchedule;15:15 - 17:15 Meeting;Beschreibung"

function parseString(str) {
  let words = str.split(';');  //split input on semicolon ';'
  let data = new Array();
  let length = words.length;
  
  for(let i = 0; i< (length/3); i++){
    data[i] = [words[0],words[1],words[2]];
    words.shift();
    words.shift();
    words.shift(); 
  }
  return data;
}

/**
 * 
 * @param {*} schedule 
 * @param {*} publications 
 */
function buildSite(schedule, publications) {
  let id;
  let title;
  let description;
  let tmp;
  for (let i = 0; i < schedule.length; i++) {
    tmp = i % 3;
    id = schedule[i][0];
    title = schedule[i][1];
    description = schedule[i][2];
    addCard(id, title, description, tmp);
  }
  for (let i = 0; i < publications.length; i++) {
    tmp = i % 3;
    id = publications[i][0];
    title = publications[i][1];
    description = publications[i][2];
    addCard(id, title, description, tmp);
  }
}

function addCard(id, title, description, n) {
  //card creation
  let card = document.createElement("div");
  card.className = "card";
  let cardHeader = document.createElement("div");

  // pattern for header style
  switch (n) {
    case 0:
      cardHeader.className = "card-header bg-info text-white";
      break;
    case 1:
      cardHeader.className = "card-header bg-secondary text-white";
      break;
    case 2:
      cardHeader.className = "card-header bg-dark text-white";
      break;
  }

  if (id == "recentPublications") {
    description = "Authors: ".bold() + description;
  }

  let cardTitle = document.createElement("h4");
  cardTitle.innerHTML = title;
  let cardBody = document.createElement("div");
  cardBody.className = "card-body";
  let addInfo = document.createElement("div");
  addInfo.className = "addInfo";
  addInfo.innerHTML = description;

  cardHeader.appendChild(cardTitle);              // put title in header
  card.appendChild(cardHeader);                   // put header in card
  cardBody.appendChild(addInfo);                  // put description in card-body
  card.appendChild(cardBody);                     // put body in card
  this.document.getElementById(id).appendChild(card);  // append card to id
}

/**
 * restyle and translates the page
 * called in involt.js by arduino
 * @param {*} value --> language 0:english , 1:german, 2:french
 */
function restyleLanguage(value) {
  let france = document.getElementsByName('involtApp')[0].contentWindow.document.getElementById('fr')
  let english = document.getElementsByName('involtApp')[0].contentWindow.document.getElementById('en');
  let german = document.getElementsByName('involtApp')[0].contentWindow.document.getElementById('de');

  switch (value) {
    //english
    case 0:
      france.setAttribute("style", "outline:none;height:80px;");
      english.setAttribute("style", "outline:none;height:100px;filter: drop-shadow(0 0 0.75rem crimson); height:100px;");
      german.setAttribute("style", "outline:none;height:80px;");
      lang = 'en';
      break;
    //german
    case 1:
      france.setAttribute("style", "outline:none;height:80px;");
      english.setAttribute("style", "outline:none;height:80px;");
      german.setAttribute("style", "outline:none;height:100px;filter: drop-shadow(0 0 0.75rem crimson); height:100px;");
      lang = 'de';
      break;
    //french
    case 2:
      france.setAttribute("style", "outline:none;filter: drop-shadow(0 0 0.75rem crimson); height:100px;");
      english.setAttribute("style", "outline:none;height:80px;");
      german.setAttribute("style", "outline:none;height:80px;");
      lang = 'fr';
      break;
  }
  translate(lang);
};

/**
 *  JQuery website translation
 * */
function translate(l) {
  let lang = l;
  let app = document.getElementsByName('involtApp')[0].contentWindow;
  app.$('.lang').each(function (index, element) {
    $(this).text(arrLang[lang][$(this).attr('key')]);
  });
}

let arrLang = {
  'en': {
    'welcome': 'Welcome at the',
    'date': 'It\'s the',
    'publications': 'Recent Publications',
    'useCard': 'You can use your UDS-Card to get additional information!',
    'employeeSchedule': 'Today\'s schedule',
    'lec': 'Today\'s lectures'
  },
  'de': {
    'welcome': 'Willkommen am',
    'date': 'Es ist der',
    'publications': 'Aktuelle Veröffentlichungen',
    'useCard': 'Mit Ihrer UDS-Karte können Sie zusätzliche Informationen erhalten!',
    'employeeSchedule': 'Heutiger Tagesablauf',
    'lec': 'Heutige Vorlesungen'
  },
  'fr': {
    'welcome': 'Bienvenue à',
    'date': 'C\'est le',
    'publications': 'Publications récentes',
    'useCard': 'Vous pouvez utiliser votre UDS-Card pour obtenir des informations supplémentaires!',
    'employeeSchedule': 'Horaire actuel',
    'lec': 'Cours d\'aujourd\'hui'
  }
};
