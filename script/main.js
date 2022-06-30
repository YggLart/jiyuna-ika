display = {
  // updateGallery: function() {
  //   var galleryDiv = document.getElementById("galleryContainer");
    
  //   galleryDiv.innerHTML = "";

  //   for(i=0; i < gallery.name.length; i++) {
  //     galleryDiv.innerHTML += '<div class="gallery"><div class="cover-blur"><a href="">' + gallery.name[i] + '</a></div><div class="cover ' + gallery.name[i] + '"></div></div>'
  //   }
  // },
  updateBiscoito: function() {
    var biscoitoDiv = document.getElementById("biscoitoContainer");

    biscoitoDiv.innerHTML = "";

    for(i=0; i < biscoito.dutyName.length; i++) {
      biscoitoDiv.innerHTML += ''
      biscoitoDiv.innerHTML += '<div class="group-img"> <img src="'+ biscoito.screenshot[i] +'" alt=""> <div class="duty-info position-1"> <p class="name">'+ biscoito.dutyName[i] +'</p><p class="duty-level '+ biscoito.dutyLevel[i] +'">'+ biscoito.dutyLevel[i] +'</p></div><div class="date position-1">'+ biscoito.date[i] +'</div><div class="party-info position-1"> <a href="'+ biscoito.player1.lodestone[i] +'"><div class="member"><div class="job '+ biscoito.player1.job[i] +' small"></div>'+ biscoito.player1.nick[i] +'</div></a> <a href="'+ biscoito.player2.lodestone[i] +'"><div class="member"><div class="job '+ biscoito.player2.job[i] +' small"></div>'+ biscoito.player2.nick[i] +'</div></a> <a href="'+ biscoito.player3.lodestone[i] +'"><div class="member"><div class="job '+ biscoito.player3.job[i] +' small"></div>'+ biscoito.player3.nick[i] +'</div></a> <a href="'+ biscoito.player4.lodestone[i] +'"><div class="member"><div class="job '+ biscoito.player4.job[i] +' small"></div>'+ biscoito.player4.nick[i] +'</div></a> <a href="'+ biscoito.player5.lodestone[i] +'"><div class="member"><div class="job '+ biscoito.player5.job[i] +' small"></div>'+ biscoito.player5.nick[i] +'</div></a> <a href="'+ biscoito.player6.lodestone[i] +'"><div class="member"><div class="job '+ biscoito.player6.job[i] +' small"></div>'+ biscoito.player6.nick[i] +'</div></a> <a href="'+ biscoito.player7.lodestone[i] +'"><div class="member"><div class="job '+ biscoito.player7.job[i] +' small"></div>'+ biscoito.player7.nick[i] +'</div></a> <a href="'+ biscoito.player8.lodestone[i] +'"><div class="member"><div class="job '+ biscoito.player8.job[i] +' small"></div>'+ biscoito.player8.nick[i] +'</div></a> </div></div>'
    }
  }
}

var gallery = {
  name: [ 
    "eventos",
    "trials",
    "raids",
    "roleplay",
    "housing",
    "glamour",
  ],

  cover: [
    "../img/screenshots/fotos/cover/cover 02.jpg",
    "../img/screenshots/fotos/cover/cover 01.jpg",
    "../img/screenshots/fotos/cover/cover 03.jpg",
    "../img/screenshots/fotos/cover/cover 04.jpg",
    "../img/screenshots/fotos/cover/cover 05.jpg",
    "../img/screenshots/fotos/cover/cover 06.jpg",
  ],

  icon: [],
}

var biscoito = {

  dutyName: [
    "Second Coil of Bahamut - Turn 9"
  ],
  dutyLevel: [
    "normal"
  ],
  screenshot: [
    "img/screenshots/fotos/2020/raid/bahamut01.png",
  ],
  date: [
    "16/06/2020"
  ],

  player1: {
    nick: [
      "Ryodan Onoko",
    ],
    job: [ 
      "war",
    ],
    lodestone: [ 
      "",
    ],
  },

  player2: {
    nick: [
      "Kuro Brson",
    ],
    job: [ 
      "pld",
    ],
    lodestone: [ 
      "",
    ],
  },

  player3: {
    nick: [
      "Nyar Dodix",
    ],
    job: [ 
      "whm",
    ],
    lodestone: [ 
      "",
    ],
  },

  player4: {
    nick: [
      "Lilina Wada",
    ],
    job: [ 
      "ast",
    ],
    lodestone: [ 
      "",
    ],
  },

  player5: {
    nick: [
      "Kali Weiss",
    ],
    job: [ 
      "drg",
    ],
    lodestone: [ 
      "",
    ],
  },

  player6: {
    nick: [
      "Cassandra D'la'Sol",
    ],
    job: [ 
      "brd",
    ],
    lodestone: [ 
      "",
    ],
  },

  player7: {
    nick: [
      "Riruru Riru",
    ],
    job: [ 
      "brd",
    ],
    lodestone: [ 
      "",
    ],
  },

  player8: {
    nick: [
      "Maki Suguis",
    ],
    job: [ 
      "smn",
    ],
    lodestone: [ 
      "",
    ],
  },
}

// ------------------------------------------------
// onload
// ------------------------------------------------
window.onload = function () {

  newBiscoito_8Player("Alexander", "savage", "16/16/9000", "img/screenshots/fotos/cover/cover 02.jpg", "oroboros", "war", "", "aaa", "pld", "", "bbb", "drk", "", "ccc", "whm", "", "ddd", "ast", "", "eee", "drg", "", "fff", "brd", "", "qwe", "mnk", "")

  // display.updateGallery();
  display.updateBiscoito();
}


// ------------------------------------------------
// page update
// ------------------------------------------------
window.onhashchange = checkHash;

checkHash();

function checkHash() {
  var home = document.getElementById('home');

  //Check if the hash is empty
  if (window.location.hash.substring(1) == '') {
    home.style.display = 'block';
  } else {
    home.style.display = 'none';
  }
}

// ------------------------------------------------
// new biscoito
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

