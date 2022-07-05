display = {
  updateFotosAchievements: function () {
    var fotosAchievement_Div = document.getElementById("fotosAchievement_Container");
    fotosAchievement_Div.innerHTML = "";

    for (i = 0; i < fotos.url.length; i++) {
      fotosAchievement_Div.innerHTML += '<div class="foto"> <img class="image" onClick="reply_click(event,this)"  src="' + fotos.url[i] + '" alt=""> <div class="send-by" id="fotos' + fotos.gallery[i] + '_SendBy"> Enviado por: <a id="fotos' + fotos.gallery[i] + '_lodestone" href="https://na.finalfantasyxiv.com/lodestone/character/' + fotos.lodestone[i] + '"> ' + fotos.sendBy[i] + ' </a> </div><div class="description" id="fotos' + fotos.gallery[i] + '_Description"> ' + fotos.description[i] + ' </div><div class="date" id="fotos' + fotos.gallery[i] + '_Date"> ' + fotos.date[i] + ' </div></div>';
    }
  },

  updateBiscoito: function () {
    var biscoitoDiv = document.getElementById("biscoitoContainer");
    biscoitoDiv.innerHTML = "";

    for (i = 0; i < biscoito.dutyName.length; i++) {
      biscoitoDiv.innerHTML += '';
      biscoitoDiv.innerHTML += '<div class="group-img"> <img src="' + biscoito.screenshot[i] + '" alt=""> <div class="duty-info position-1"> <p class="name">' + biscoito.dutyName[i] + '</p><p class="duty-level ' + biscoito.dutyLevel[i] + '">' + biscoito.dutyLevel[i] + '</p></div><div class="date position-1">' + biscoito.date[i] + '</div><div class="party-info position-1"> <a href="' + biscoito.player1.lodestone[i] + '"><div class="member"><div class="job ' + biscoito.player1.job[i] + ' small"></div>' + biscoito.player1.nick[i] + '</div></a> <a href="' + biscoito.player2.lodestone[i] + '"><div class="member"><div class="job ' + biscoito.player2.job[i] + ' small"></div>' + biscoito.player2.nick[i] + '</div></a> <a href="' + biscoito.player3.lodestone[i] + '"><div class="member"><div class="job ' + biscoito.player3.job[i] + ' small"></div>' + biscoito.player3.nick[i] + '</div></a> <a href="' + biscoito.player4.lodestone[i] + '"><div class="member"><div class="job ' + biscoito.player4.job[i] + ' small"></div>' + biscoito.player4.nick[i] + '</div></a> <a href="' + biscoito.player5.lodestone[i] + '"><div class="member"><div class="job ' + biscoito.player5.job[i] + ' small"></div>' + biscoito.player5.nick[i] + '</div></a> <a href="' + biscoito.player6.lodestone[i] + '"><div class="member"><div class="job ' + biscoito.player6.job[i] + ' small"></div>' + biscoito.player6.nick[i] + '</div></a> <a href="' + biscoito.player7.lodestone[i] + '"><div class="member"><div class="job ' + biscoito.player7.job[i] + ' small"></div>' + biscoito.player7.nick[i] + '</div></a> <a href="' + biscoito.player8.lodestone[i] + '"><div class="member"><div class="job ' + biscoito.player8.job[i] + ' small"></div>' + biscoito.player8.nick[i] + '</div></a> </div></div>';

    }
  },
}

var fotos = {
  url: [],
  date: [],
  sendBy: [],
  lodestone: [],
  description: [],
  gallery: [],
}

var biscoito = {

  dutyName: [],
  dutyLevel: [],
  screenshot: [],
  date: [],

  player1: {
    nick: [],
    job: [],
    lodestone: [],
  },

  player2: {
    nick: [],
    job: [],
    lodestone: [],
  },

  player3: {
    nick: [],
    job: [],
    lodestone: [],
  },

  player4: {
    nick: [],
    job: [],
    lodestone: [],
  },

  player5: {
    nick: [],
    job: [],
    lodestone: [],
  },

  player6: {
    nick: [],
    job: [],
    lodestone: [],
  },

  player7: {
    nick: [],
    job: [],
    lodestone: [],
  },

  player8: {
    nick: [],
    job: [],
    lodestone: [],
  },
}


// ------------------------------------------------
// get elements from inputs
// ------------------------------------------------

var form = document.getElementById('newFotoForm');
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

function newFotoFromInput() {
  var outputFotos = document.getElementById("outputFotos");

  let inputURL = document.getElementById("inputURL").value;
  let inputDate = document.getElementById("inputDate").value;
  let inputDescription = document.getElementById("inputDescription").value;
  let inputSendBy = document.getElementById("inputSendBy").value;
  let inputLodestone = document.getElementById("inputLodestone").value;
  let inputGallery = document.getElementById("inputGallery").value;
  
  outputFotos.innerHTML += 'newFoto("' + inputURL +'", "' + inputDate + '", "' + inputSendBy + '", "' + inputLodestone + '", "' + inputDescription + '", "' + inputGallery + '"); <br/>';
}

// ------------------------------------------------
// onload
// ------------------------------------------------
window.onload = function () {





  newFoto("img/screenshots/fotos/2020/duty/mapas-matt.png", "2020", "Matt", "30204464", "Ygg, Kuro, Matt, Vic e Etienne posando com seus Boreas.", "Achievement");
  newFoto("img/screenshots/fotos/2020/eventos/aniversariomega-vic.png", "2020", "Matt", "30204464", "Ygg, Kuro, Matt, Vic e Etienne posando com seus Boreas.", "Achievement");
  newFoto("img/screenshots/fotos/2020/achievements/firebird-kenji.png", "2020", "Matt", "30204464", "Ygg, Kuro, Matt, Vic e Etienne posando com seus Boreas.", "Achievement");
  newFoto("img/screenshots/fotos/2020/duty/eureka-kenji.png", "2020", "Matt", "30204464", "Ygg, Kuro, Matt, Vic e Etienne posando com seus Boreas.", "Achievement");
  newFoto("img/screenshots/fotos/2020/achievements/boreas-matt.jpg", "2020", "Matt", "30204464", "Ygg, Kuro, Matt, Vic e Etienne posando com seus Boreas.", "Achievement");
  newFoto("img/screenshots/fotos/2020/duty/mapas-matt4.png", "2020", "Matt", "30204464", "Ygg, Kuro, Matt, Vic e Etienne posando com seus Boreas.", "Achievement");
  newBiscoito_8Player("Alexander", "savage", "16/16/9000", "img/screenshots/fotos/cover/cover 02.jpg", "oroboros", "war", "", "aaa", "pld", "", "bbb", "drk", "", "ccc", "whm", "", "ddd", "ast", "", "eee", "drg", "", "fff", "brd", "", "qwe", "mnk", "")

  display.updateFotosAchievements();
  display.updateBiscoito();
}

// ------------------------------------------------
// page update
// ------------------------------------------------
window.onhashchange = checkHash;

checkHash();

function checkHash() {
  var hero = document.getElementById('hero');

  //Check if the hash is empty
  if (window.location.hash.substring(1) == '') {
    hero.style.display = 'block';
  } else {
    hero.style.display = 'none';
  }
};

// ------------------------------------------------
// character builder
// ------------------------------------------------
function characterBuilder(name, avatar, lodestone) {
  return character = {
    'name' : name,
    'avatar' : avatar,
    'lodestone' : lodestone,
  }
}

function apiFake(id) {
  switch (id) {
    case 19210263:
      return characterBuilder("Enki", "https://img2.finalfantasyxiv.com/f/a23316227544639e9625a73b5ccc453c_be20385e18333edb329d4574f364a1f0fc0_96x96.jpg?1656806135", id);
    case 29518378:
      return characterBuilder("Ygg", "https://img2.finalfantasyxiv.com/f/be2bf245a304ed40ad0ca79c6ad8d7bb_be20385e18333edb329d4574f364a1f0fc0_96x96.jpg?1656804430", id);
    }
    case 29518378:
      
}

var enki = apiFake(19210263);
var ygg = apiFake(29518378);

var characterList = []

characterList.push(enki);
characterList.push(ygg);

// ------------------------------------------------
// fotos database
// ------------------------------------------------
function newFoto(gallery, date, url, sendBy, lodestone, description) {
  return fotos = {
    'gallery' : gallery,
    'date' : date,
    'url' : url,
    'sendBy' : sendBy,
    'lodestone' : lodestone,
    'description' : description
  }
}

function fotosDatabase (id) {
  switch (id) {
    case 0:
    return newFoto("Endgame","16/06/2020", "img/screenshots/biscoito/2020/2020-t9-kenji.png", characterList[1].name, characterList[1].lodestone, "Primeiro grupo da Ika à completar T9 no Nv50!" )
    case 1:
    return newFoto("Endgame","16/06/2020", "img/screenshots/biscoito/2020/2020-t9-kenji.png", characterList[0].name, characterList[1].lodestone, "Primeiro grupo da Ika à completar T9 no Nv50!" )
    case 2:
    return newFoto("Endgame","16/06/2020", "img/screenshots/biscoito/2020/2020-t9-kenji.png", characterList[1].name, characterList[1].lodestone, "Primeiro grupo da Ika à completar T9 no Nv50!" )
    case 3:
    return newFoto("Endgame","16/06/2020", "img/screenshots/biscoito/2020/2020-t9-kenji.png", characterList[0].name, characterList[1].lodestone, "Primeiro grupo da Ika à completar T9 no Nv50!" )
    case 4:
    return newFoto("Endgame","16/06/2020", "img/screenshots/biscoito/2020/2020-t9-kenji.png", characterList[1].name, characterList[1].lodestone, "Primeiro grupo da Ika à completar T9 no Nv50!" )
    case 5:
    return newFoto("Endgame","16/06/2020", "img/screenshots/biscoito/2020/2020-t9-kenji.png", characterList[0].name, characterList[1].lodestone, "Primeiro grupo da Ika à completar T9 no Nv50!" )
  }
}

var arrT9_0 = fotosDatabase(0);
var endgame2 = fotosDatabase(2);
var endgame3 = fotosDatabase(3);
var endgame4 = fotosDatabase(4);

var photoList = [];
photoList.push(endgame1);
photoList.push(endgame2);
photoList.push(endgame3);
photoList.push(endgame4);

// ------------------------------------------------
// biscoito database
// ------------------------------------------------
function newBiscoito_8Player(expansion, dutyName, dutyLevel, foto, p1, p1job, p2, p2job, p3, p3job, p4, p4job, p5, p5job, p6, p6job, p7, p7job, p8, p8job)
  return biscoitos = {
    'expansion' : expansion,
    'dutyName' : dutyName,
    'dutyLevel' : dutyLevel,
    'foto' : foto,
    'p1' : p1,
    'p1job' : p1job,
    'p2' : p2,
    'p2job' : p2job,
    'p2' : p3,
    'p2job' : p3job,
    'p2' : p4,
    'p2job' : p4job,
    'p2' : p5,
    'p2job' : p5job,
    'p2' : p6,
    'p2job' : p6job,
    'p2' : p7,
    'p2job' : p7job,
    'p2' : p8,
    'p2job' : p8job,
  }
  
function biscoitoDatabase(id) {
  switch (id) {
    case 0:
      return newBiscoito_8Player('A Realm Reborn', "Second Coil of Bahamut - Turn 9", "Normal", photoList.arrT9_0, kenji,   )
  }
}

// ------------------------------------------------
// gallery pop-up view
// ------------------------------------------------
function reply_click(e,el) {
  e = e || window.event;

  document.querySelector('.pop-up-img').style.display = 'flex'
  document.querySelector('.pop-up-img img').src = el.getAttribute('src');
  
  console.log(e); //will be the event
  console.log(el); //we be the dom element 
}

function closePopUpImage() {
  document.querySelector('.pop-up-img').style.display = 'none'
}

// ------------------------------------------------
// new biscoito var
// ------------------------------------------------
function newBiscoito_8Player(dutyName, dutyLevel, date, screenshot, p1nick, p1job, p1lodestone, p2nick, p2job, p2lodestone, p3nick, p3job, p3lodestone, p4nick, p4job, p4lodestone, p5nick, p5job, p5lodestone, p6nick, p6job, p6lodestone, p7nick, p7job, p7lodestone, p8nick, p8job, p8lodestone) {
  biscoito.dutyName.push(dutyName);
  biscoito.dutyLevel.push(dutyLevel);
  biscoito.date.push(date);
  biscoito.screenshot.push(screenshot);

  biscoito.player1.nick.push(p1nick);
  biscoito.player1.job.push(p1job);
  biscoito.player1.lodestone.push(p1lodestone);
  
  biscoito.player2.nick.push(p2nick);
  biscoito.player2.job.push(p2job);
  biscoito.player2.lodestone.push(p2lodestone);
  
  biscoito.player3.nick.push(p3nick);
  biscoito.player3.job.push(p3job);
  biscoito.player3.lodestone.push(p3lodestone);
  
  biscoito.player4.nick.push(p4nick);
  biscoito.player4.job.push(p4job);
  biscoito.player4.lodestone.push(p4lodestone);
  
  biscoito.player5.nick.push(p5nick);
  biscoito.player5.job.push(p5job);
  biscoito.player5.lodestone.push(p5lodestone);
  
  biscoito.player6.nick.push(p6nick);
  biscoito.player6.job.push(p6job);
  biscoito.player6.lodestone.push(p6lodestone);
  
  biscoito.player7.nick.push(p7nick);
  biscoito.player7.job.push(p7job);
  biscoito.player7.lodestone.push(p7lodestone);
  
  biscoito.player8.nick.push(p8nick);
  biscoito.player8.job.push(p8job);
  biscoito.player8.lodestone.push(p8lodestone);
}

// ------------------------------------------------
// responsive menu
// ------------------------------------------------
function responsiveMenu() {
    var x = document.getElementById("nav-links");
    x.classList.toggle('active');
  }

  function fotoView(e) {
    e.classList.toggle('active');
  }

