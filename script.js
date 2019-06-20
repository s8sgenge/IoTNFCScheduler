function getDateTime() {
  let dt = new Date();
  document.getElementById("datetime").innerHTML = dt.toLocaleString();
}

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
  document.getElementById(id).appendChild(card);  // append card to id
}

function resizeDE() {
  let france = document.getElementById("fr");
  france.setAttribute("style","outline:none;height:80px;");
  let english = document.getElementById("en");
  english.setAttribute("style", "outline:none;height:80px;");
  let german = document.getElementById("de");
  german.setAttribute("style", "outline:none;height:100px;filter: drop-shadow(0 0 0.75rem crimson); height:100px;");
}
function resizeFR() {
  let france = document.getElementById("fr");
  france.setAttribute("style", "outline:none;filter: drop-shadow(0 0 0.75rem crimson); height:100px;");
  let english = document.getElementById("en");
  english.setAttribute("style", "outline:none;height:80px;");
  let german = document.getElementById("de");
  german.setAttribute("style", "outline:none;height:80px;");
}

function resizeEN() {
  let france = document.getElementById("fr");
  france.setAttribute("style", "outline:none;height:80px;");
  let english = document.getElementById("en");
  english.setAttribute("style", "outline:none;height:100px;filter: drop-shadow(0 0 0.75rem crimson); height:100px;");
  let german = document.getElementById("de");
  german.setAttribute("style", "outline:none;height:80px;");
}

// JQuery website translation
$(function () {
  $('.translate').click(function () {
    let lang = $(this).attr('id');

    $('.lang').each(function (index, element) {
      $(this).text(arrLang[lang][$(this).attr('key')]);
    });
  });
});


function buildSite(schedule, publications) {
  let id;
  let title;
  let description;
  let tmp;
  for (let i = 0; i < schedule.length; i++) {
    tmp = i % 3;
    console.log(tmp);
    id = schedule[i][0];
    console.log(id);
    title = schedule[i][1];
    console.log(title);
    description = schedule[i][2];
    console.log(description);
    addCard(id, title, description, tmp);
  }
  for (let i = 0; i < publications.length; i++) {
    tmp = i % 3;
    console.log(tmp);
    id = publications[i][0];
    console.log(id);
    title = publications[i][1];
    console.log(title);
    description = publications[i][2];
    console.log(description);
    addCard(id, title, description, tmp);
  }
}

let arrLang = {
  'en': {
    'welcome': 'Welcome at the',
    'date': 'It\'s the',
    'publications': 'Recent Publications',
    'useCard': 'You can use your UDS-Card to get additional information!',
    'employeeSchedule': 'Today\'s schedule',
    'studentSchedule': 'Today\'s lectures'
  },
  'de': {
    'welcome': 'Willkommen am',
    'date': 'Es ist der',
    'publications': 'Aktuelle Veröffentlichungen',
    'useCard': 'Mit Ihrer UDS-Karte können Sie zusätzliche Informationen erhalten!',
    'employeeSchedule': 'Heutiger Tagesablauf',
    'studentSchedule': 'Heutige Vorlesungen'
  },
  'fr': {
    'welcome': 'Bienvenue à',
    'date': 'C\'est le',
    'publications': 'Publications récentes',
    'useCard': 'Vous pouvez utiliser votre UDS-Card pour obtenir des informations supplémentaires!',
    'employeeSchedule': 'Horaire actuel',
    'studentSchedule': 'Cours d\'aujourd\'hui'
  }
};
