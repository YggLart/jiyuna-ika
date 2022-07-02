display = {
  updateBiscoito: function() {
    var biscoitoDiv = document.getElementById("biscoitoContainer");
    biscoitoDiv.innerHTML = "";

    biscoitoBoxes(biscoitoDiv);
  }
}

var fotos = {
  url: [],
  date: [],
  sendBy: [],
  lodestone: [],
  description: [],
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
// get elements from inputs at generate_new.html
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
  let inputTag = document.getElementById("inputTag").value;
  
  outputFotos.innerHTML += 'newFoto("' + inputURL +'", "' + inputDate + '", "' + inputDescription + '", "' + inputSendBy + '", "' + inputLodestone + '", "' + inputTag + '"); <br/>';
}

var textFile = null,
  makeTextFile = function (text) {
    var data = new Blob([text], {type: 'text/plain'});

    // If we are replacing a previously generated file we need to
    // manually revoke the object URL to avoid memory leaks.
    if (textFile !== null) {
      window.URL.revokeObjectURL(textFile);
    }

    textFile = window.URL.createObjectURL(data);

    // returns a URL you can use as a href
    return textFile;
  };

// ------------------------------------------------
// onload
// ------------------------------------------------
window.onload = function () {

  newBiscoito_8Player("Alexander", "savage", "16/16/9000", "img/screenshots/fotos/cover/cover 02.jpg", "oroboros", "war", "", "aaa", "pld", "", "bbb", "drk", "", "ccc", "whm", "", "ddd", "ast", "", "eee", "drg", "", "fff", "brd", "", "qwe", "mnk", "")

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
}

// ------------------------------------------------
// new fotos var
// ------------------------------------------------
function newFoto(url, date, sendBy, lodestone, description) {
  fotos.url.push(url);
  fotos.date.push(date);
  fotos.sendBy.push(sendBy);
  fotos.lodestone.push(lodestone);
  fotos.description.push(description);
}

// ------------------------------------------------
// new biscoito boxes
// ------------------------------------------------
function biscoitoBoxes(biscoitoDiv) {
  for (i = 0; i < biscoito.dutyName.length; i++) {
    biscoitoDiv.innerHTML += '';
    biscoitoDiv.innerHTML += '<div class="group-img"> <img src="' + biscoito.screenshot[i] + '" alt=""> <div class="duty-info position-1"> <p class="name">' + biscoito.dutyName[i] + '</p><p class="duty-level ' + biscoito.dutyLevel[i] + '">' + biscoito.dutyLevel[i] + '</p></div><div class="date position-1">' + biscoito.date[i] + '</div><div class="party-info position-1"> <a href="' + biscoito.player1.lodestone[i] + '"><div class="member"><div class="job ' + biscoito.player1.job[i] + ' small"></div>' + biscoito.player1.nick[i] + '</div></a> <a href="' + biscoito.player2.lodestone[i] + '"><div class="member"><div class="job ' + biscoito.player2.job[i] + ' small"></div>' + biscoito.player2.nick[i] + '</div></a> <a href="' + biscoito.player3.lodestone[i] + '"><div class="member"><div class="job ' + biscoito.player3.job[i] + ' small"></div>' + biscoito.player3.nick[i] + '</div></a> <a href="' + biscoito.player4.lodestone[i] + '"><div class="member"><div class="job ' + biscoito.player4.job[i] + ' small"></div>' + biscoito.player4.nick[i] + '</div></a> <a href="' + biscoito.player5.lodestone[i] + '"><div class="member"><div class="job ' + biscoito.player5.job[i] + ' small"></div>' + biscoito.player5.nick[i] + '</div></a> <a href="' + biscoito.player6.lodestone[i] + '"><div class="member"><div class="job ' + biscoito.player6.job[i] + ' small"></div>' + biscoito.player6.nick[i] + '</div></a> <a href="' + biscoito.player7.lodestone[i] + '"><div class="member"><div class="job ' + biscoito.player7.job[i] + ' small"></div>' + biscoito.player7.nick[i] + '</div></a> <a href="' + biscoito.player8.lodestone[i] + '"><div class="member"><div class="job ' + biscoito.player8.job[i] + ' small"></div>' + biscoito.player8.nick[i] + '</div></a> </div></div>';
  }
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

