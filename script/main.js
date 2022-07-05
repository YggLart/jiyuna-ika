display = {
  updateFotos_Eventos: function () {
    var fotosEventos_Div = document.getElementById("fotosEventos_Container");
    fotosEventos_Div.innerHTML = "";

    for (i=0; i < gallery.eventos2020.length; i++) {
      fotosEventos_Div.innerHTML += '<div onClick="fotoClick(event,this)" class="foto"> <img class="image" src="' + gallery.eventos2020[i].url + '" alt=""> <div class="send-by" id="fotos' + gallery.eventos2020[i].gallery + '_SendBy"> Enviado por: <a id="fotos' + gallery.eventos2020[i].gallery + '_lodestone" href="https://na.finalfantasyxiv.com/lodestone/character/' + gallery.eventos2020[i].sendBy.id + '"> ' + gallery.eventos2020[i].sendBy.name + ' </a> </div><div class="description" id="fotos' + gallery.eventos2020[i].gallery + '_Description"> ' + gallery.eventos2020[i].description + ' </div><div class="date" id="fotos' + gallery.eventos2020[i].gallery + '_Date"> ' + gallery.eventos2020[i].date + ' </div></div>';
    }
  },

  updateFotos_Social: function () {
    var fotosSocial_Div = document.getElementById("fotosSocial_Container");
    fotosSocial_Div.innerHTML = "";

    for (i=0; i < gallery.social2020.length; i++) {
      fotosSocial_Div.innerHTML += '<div onClick="fotoClick(event,this)" class="foto"> <img class="image" src="' + gallery.social2020[i].url + '" alt=""> <div class="send-by" id="fotos' + gallery.social2020[i].gallery + '_SendBy"> Enviado por: <a id="fotos' + gallery.social2020[i].gallery + '_lodestone" href="https://na.finalfantasyxiv.com/lodestone/character/' + gallery.social2020[i].sendBy.id + '"> ' + gallery.social2020[i].sendBy.name + ' </a> </div><div class="description" id="fotos' + gallery.social2020[i].gallery + '_Description"> ' + gallery.social2020[i].description + ' </div><div class="date" id="fotos' + gallery.social2020[i].gallery + '_Date"> ' + gallery.social2020[i].date + ' </div></div>';
    }
  },

  updateFotos_Achievements: function () {
    var fotosAchievement_Div = document.getElementById("fotosAchievement_Container");
    fotosAchievement_Div.innerHTML = "";

    for (i=0; i < gallery.achievements2020.length; i++) {
      fotosAchievement_Div.innerHTML += '<div onClick="fotoClick(event,this)" class="foto"> <img class="image" src="' + gallery.achievements2020[i].url + '" alt=""> <div class="send-by" id="fotos' + gallery.achievements2020[i].gallery + '_SendBy"> Enviado por: <a id="fotos' + gallery.achievements2020[i].gallery + '_lodestone" href="https://na.finalfantasyxiv.com/lodestone/character/' + gallery.achievements2020[i].sendBy.id + '"> ' + gallery.achievements2020[i].sendBy.name + ' </a> </div><div class="description" id="fotos' + gallery.achievements2020[i].gallery + '_Description"> ' + gallery.achievements2020[i].description + ' </div><div class="date" id="fotos' + gallery.achievements2020[i].gallery + '_Date"> ' + gallery.achievements2020[i].date + ' </div></div>';
    }
  },

  updateFotos_Duty: function () {
    var fotosDuty_Div = document.getElementById("fotosDuty_Container");
    fotosDuty_Div.innerHTML = "";

    for (i=0; i < gallery.duty2020.length; i++) {
      fotosDuty_Div.innerHTML += '<div onClick="fotoClick(event,this)" class="foto"> <img class="image" src="' + gallery.duty2020[i].url + '" alt=""> <div class="send-by" id="fotos' + gallery.duty2020[i].gallery + '_SendBy"> Enviado por: <a id="fotos' + gallery.duty2020[i].gallery + '_lodestone" href="https://na.finalfantasyxiv.com/lodestone/character/' + gallery.duty2020[i].sendBy.id + '"> ' + gallery.duty2020[i].sendBy.name + ' </a> </div><div class="description" id="fotos' + gallery.duty2020[i].gallery + '_Description"> ' + gallery.duty2020[i].description + ' </div><div class="date" id="fotos' + gallery.duty2020[i].gallery + '_Date"> ' + gallery.duty2020[i].date + ' </div></div>';
    }
  },

  // updateBiscoito: function () {
  //   var biscoitoDiv = document.getElementById("biscoitoContainer");
  //   biscoitoDiv.innerHTML = "";

  //   for (i = 0; i < biscoito.dutyName.length; i++) {
  //     biscoitoDiv.innerHTML += '';
  //     biscoitoDiv.innerHTML += '<div class="group-img"> <img src="' + biscoito.screenshot[i] + '" alt=""> <div class="duty-info position-1"> <p class="name">' + biscoito.dutyName[i] + '</p><p class="duty-level ' + biscoito.dutyLevel[i] + '">' + biscoito.dutyLevel[i] + '</p></div><div class="date position-1">' + biscoito.date[i] + '</div><div class="party-info position-1"> <a href="' + biscoito.player1.id[i] + '"><div class="member"><div class="job ' + biscoito.player1.job[i] + ' small"></div>' + biscoito.player1.nick[i] + '</div></a> <a href="' + biscoito.player2.id[i] + '"><div class="member"><div class="job ' + biscoito.player2.job[i] + ' small"></div>' + biscoito.player2.nick[i] + '</div></a> <a href="' + biscoito.player3.id[i] + '"><div class="member"><div class="job ' + biscoito.player3.job[i] + ' small"></div>' + biscoito.player3.nick[i] + '</div></a> <a href="' + biscoito.player4.id[i] + '"><div class="member"><div class="job ' + biscoito.player4.job[i] + ' small"></div>' + biscoito.player4.nick[i] + '</div></a> <a href="' + biscoito.player5.id[i] + '"><div class="member"><div class="job ' + biscoito.player5.job[i] + ' small"></div>' + biscoito.player5.nick[i] + '</div></a> <a href="' + biscoito.player6.id[i] + '"><div class="member"><div class="job ' + biscoito.player6.job[i] + ' small"></div>' + biscoito.player6.nick[i] + '</div></a> <a href="' + biscoito.player7.id[i] + '"><div class="member"><div class="job ' + biscoito.player7.job[i] + ' small"></div>' + biscoito.player7.nick[i] + '</div></a> <a href="' + biscoito.player8.id[i] + '"><div class="member"><div class="job ' + biscoito.player8.job[i] + ' small"></div>' + biscoito.player8.nick[i] + '</div></a> </div></div>';

  //   }
  // },
}

// ------------------------------------------------
// get elements from inputs
// ------------------------------------------------

var form = document.getElementById('newFotoForm');
function handleForm(event) { event.preventDefault(); } 
// form.addEventListener('submit', handleForm);

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
function characterBuilder(name, pic, id, role) {
  return character = {
    'name' : name,
    'pic' : pic,
    'id' : id,
    'role' : role,
  }
}

// create new char
var kurohaneenki = characterBuilder("Kurohane Enki", "https://img2.finalfantasyxiv.com/f/a23316227544639e9625a73b5ccc453c_be20385e18333edb329d4574f364a1f0fc0_96x96.jpg?1657034739", 19210263, "president")
var ygglart = characterBuilder("Ygg Lart", "https://img2.finalfantasyxiv.com/f/be2bf245a304ed40ad0ca79c6ad8d7bb_be20385e18333edb329d4574f364a1f0fc0_96x96.jpg?1657035646", 29518378, "vice_president")
var ryodanonoko = characterBuilder("Ryodan Onoko", "https://img2.finalfantasyxiv.com/f/239027da291968bae2ee941c82eecfd9_be20385e18333edb329d4574f364a1f0fc0_96x96.jpg?1657033929", 25899347, "vice_president")
var nyardodix = characterBuilder("Nyar Dodix", "https://img2.finalfantasyxiv.com/f/27b20af0d2817df1e966e1a3c9e04235_be20385e18333edb329d4574f364a1f0fc0_96x96.jpg?1657033660", 11515265, "vice_president")
var kaliweiss = characterBuilder("Kali Weiss", "https://img2.finalfantasyxiv.com/f/006b309359e9e854044233220e248b59_be20385e18333edb329d4574f364a1f0fc0_96x96.jpg?1657035281", 27152831, "vice_president")
var cassandradlasol = characterBuilder("Cassandra D'la'Sol", "https://img2.finalfantasyxiv.com/f/de26e452bf1de6309f9c8d70dfc2c55c_be20385e18333edb329d4574f364a1f0fc0_96x96.jpg?1657034108", 29722755, "headcouncil")
var eirmahariel = characterBuilder("Eir Mahariel", "https://img2.finalfantasyxiv.com/f/90ed90148525f20bdb08b178e89b6e11_be20385e18333edb329d4574f364a1f0fc0_96x96.jpg?1657033952", 8018580, "council")
var lilinawada = characterBuilder("Lilina Wada", "https://img2.finalfantasyxiv.com/f/38acd1acdca441d1a3be2ffb6cf35310_be20385e18333edb329d4574f364a1f0fc0_96x96.jpg?1657034202", 27860143, "council")
var rirururiru = characterBuilder("Riruru Riru", "https://img2.finalfantasyxiv.com/f/ae57e3ec5a4bfa3d177667dd776e309f_be20385e18333edb329d4574f364a1f0fc0_96x96.jpg?1657032769", 28352880, "council")
var scarletdelaire = characterBuilder("Scarlet Delaire", "https://img2.finalfantasyxiv.com/f/5b06100849b4b3b93dd7b757927c86c3_be20385e18333edb329d4574f364a1f0fc0_96x96.jpg?1657033952", 31726139, "companheiro")
var oriohntia = characterBuilder("O'riohn Tia", "https://img2.finalfantasyxiv.com/f/894718c1943cc0fd25ab7f6407450866_be20385e18333edb329d4574f364a1f0fc0_96x96.jpg?1657035851", 40312591, "companheiro")
var ramzamal = characterBuilder("Ramza Mal", "https://img2.finalfantasyxiv.com/f/ff4435429071a1709f3b9815e19f48ff_be20385e18333edb329d4574f364a1f0fc0_96x96.jpg?1657033585", 32455230, "companheiro")
var yesodketer = characterBuilder("Y'esod Keter", "https://img2.finalfantasyxiv.com/f/b581ecff4916768856980bfccb377be8_be20385e18333edb329d4574f364a1f0fc0_96x96.jpg?1657035302", 28548772, "companheiro")
var faeruaridan = characterBuilder("Faeru Aridan", "https://img2.finalfantasyxiv.com/f/c27c43f48602dc1c516ddd5b2bea6e5d_be20385e18333edb329d4574f364a1f0fc0_96x96.jpg?1657036451", 36157163, "companheiro")
var lyphasborwan = characterBuilder("Lyphas Borwan", "https://img2.finalfantasyxiv.com/f/cdd3be3f3d350fcfbfb458fc022c16d2_be20385e18333edb329d4574f364a1f0fc0_96x96.jpg?1657034185", 16324073, "companheiro")
var inquihealhands = characterBuilder("Inqui Healhands", "https://img2.finalfantasyxiv.com/f/c8ef24f605e1fcd508076ba4d668ac84_be20385e18333edb329d4574f364a1f0fc0_96x96.jpg?1657036103", 26893580, "companheiro")
var bonniemine = characterBuilder("Bonnie Mine", "https://img2.finalfantasyxiv.com/f/3d52d2c1b7214fec5277063e196f7508_be20385e18333edb329d4574f364a1f0fc0_96x96.jpg?1657035294", 28672471, "senior")
var luanarorix = characterBuilder("Luan Arorix", "https://img2.finalfantasyxiv.com/f/c17e9527b55cfbc431153cfde8b3ca99_be20385e18333edb329d4574f364a1f0fc0_96x96.jpg?1657033773", 28840070, "senior")
var raissa = characterBuilder("Rai Ssa", "https://img2.finalfantasyxiv.com/f/ee4a593d050e1140d822504a00c01541_be20385e18333edb329d4574f364a1f0fc0_96x96.jpg?1657035999", 29734037, "senior")
var sabakiharvey = characterBuilder("Sabaki Harvey", "https://img2.finalfantasyxiv.com/f/57c42f2e29666b3436871dca22bbd117_be20385e18333edb329d4574f364a1f0fc0_96x96.jpg?1657034297", 30210042, "senior")
var askradhiom = characterBuilder("Askrad Hiom", "https://img2.finalfantasyxiv.com/f/55099eb268047131911d1edcd35dab49_be20385e18333edb329d4574f364a1f0fc0_96x96.jpg?1657034004", 31512088, "junior")
var cherryboomie = characterBuilder("Cherry Boomie", "https://img2.finalfantasyxiv.com/f/7e3a2956f2de02840ddaa365f93db65a_be20385e18333edb329d4574f364a1f0fc0_96x96.jpg?1657033488", 38190479, "junior")
var dominusimperius = characterBuilder("Dominus Imperius", "https://img2.finalfantasyxiv.com/f/ed4960ef10d36f975c469e7cc49f964c_be20385e18333edb329d4574f364a1f0fc0_96x96.jpg?1657035014", 33008325, "junior")
var dyagohnprowell = characterBuilder("Dyagohn Prowell", "https://img2.finalfantasyxiv.com/f/caf0e796f3d5b8c01f5b410ef25a7e7d_be20385e18333edb329d4574f364a1f0fc0_96x96.jpg?1657034565", 32032895, "junior")
var erykrallen = characterBuilder("Erykr Allen", "https://img2.finalfantasyxiv.com/f/9f003ee2777474446cb8c9bccb9bfea2_be20385e18333edb329d4574f364a1f0fc0_96x96.jpg?1657035295", 29516422, "junior")
var evelynakhabila = characterBuilder("Evelyn Akhabila", "https://img2.finalfantasyxiv.com/f/b45c0cb2bd988248f2c3c05236cc39a1_be20385e18333edb329d4574f364a1f0fc0_96x96.jpg?1657033579", 29098591, "junior")
var fenrislupus = characterBuilder("Fenris Lupus", "https://img2.finalfantasyxiv.com/f/828bc5217825378e9402f780ceffc898_be20385e18333edb329d4574f364a1f0fc0_96x96.jpg?1657036185", 33328174, "junior")
var friedrickengels = characterBuilder("Friedrick Engels", "https://img2.finalfantasyxiv.com/f/7743980619b5f91efb5b9b2c7ceccfdc_be20385e18333edb329d4574f364a1f0fc0_96x96.jpg?1657033496", 33607103, "junior")
var gatusguerreirus = characterBuilder("Gatus Guerreirus", "https://img2.finalfantasyxiv.com/f/0df8ed74e8eb1fe5d5bb4fa170fa54aa_be20385e18333edb329d4574f364a1f0fc0_96x96.jpg?1657033934", 30547568, "junior")
var hanayuribashi = characterBuilder("Hana Yuribashi", "https://img2.finalfantasyxiv.com/f/03c6c9b4571d43ccd070b0a976a0e43c_be20385e18333edb329d4574f364a1f0fc0_96x96.jpg?1657035375", 31807464, "junior")
var innistradvainst = characterBuilder("Innistrad Vainst", "https://img2.finalfantasyxiv.com/f/f3dc547da60c100146f91d022346d26f_be20385e18333edb329d4574f364a1f0fc0_96x96.jpg?1657034738", 31728946, "junior")
var karenraisu = characterBuilder("Karen Raisu", "https://img2.finalfantasyxiv.com/f/5924a8946eb9fcb1097d65a67c9936d1_be20385e18333edb329d4574f364a1f0fc0_96x96.jpg?1657036024", 32885746, "junior")
var kekeuzumaki = characterBuilder("Keke Uzumaki", "https://img2.finalfantasyxiv.com/f/a8731b7bd6ff536f647882d2993e83a8_be20385e18333edb329d4574f364a1f0fc0_96x96.jpg?1657034461", 31747575, "junior")
var lauriamdandelion = characterBuilder("Lauriam Dandelion", "https://img2.finalfantasyxiv.com/f/4b38eb5bee9074f46c1070f61ed0117c_be20385e18333edb329d4574f364a1f0fc0_96x96.jpg?1657034674", 31173504, "junior")
var mayakitsune = characterBuilder("Maya Kitsune", "https://img2.finalfantasyxiv.com/f/68b1bb7ab0c3c8e137f994ec31ff0528_be20385e18333edb329d4574f364a1f0fc0_96x96.jpg?1657033205", 23620834, "junior")
var nimmistwalker = characterBuilder("Nim Mistwalker", "https://img2.finalfantasyxiv.com/f/c743c73b1ac2dbfdcde2633d5070e2b9_be20385e18333edb329d4574f364a1f0fc0_96x96.jpg?1657036722", 32751749, "junior")
var opheliasarrus = characterBuilder("Ophelia Sarrus", "https://img2.finalfantasyxiv.com/f/3cd79f1b0d232960cc21320113fab7ab_be20385e18333edb329d4574f364a1f0fc0_96x96.jpg?1657034657", 27563524, "junior")
var sethincoil = characterBuilder("Sethin Coil", "https://img2.finalfantasyxiv.com/f/760c13c4cf15f1cc8d84761149c55d79_be20385e18333edb329d4574f364a1f0fc0_96x96.jpg?1657033950", 36632681, "junior")
var sharlamitnu = characterBuilder("Sharla Mitnu", "https://img2.finalfantasyxiv.com/f/bac9126b0d8abf2977cf3a485676afa9_be20385e18333edb329d4574f364a1f0fc0_96x96.jpg?1657034318", 30938987, "junior")
var talerindav = characterBuilder("Talerin Dav", "https://img2.finalfantasyxiv.com/f/1b5f5eabd7fef4f299627ee1c07c1c14_be20385e18333edb329d4574f364a1f0fc0_96x96.jpg?1657035916", 30670159, "junior")
var tcelesbhsup = characterBuilder("Tceles B'hsup", "https://img2.finalfantasyxiv.com/f/6d61432f17941e8f4544c658cd166b91_be20385e18333edb329d4574f364a1f0fc0_96x96.jpg?1657035358", 25967166, "junior")
var ulquizzz = characterBuilder("Ulqui Zzz", "https://img2.finalfantasyxiv.com/f/f4bce1bc69ab2afa490fb5cdacffc4e5_be20385e18333edb329d4574f364a1f0fc0_96x96.jpg?1657033480", 18362930, "junior")
var valentynecoeli = characterBuilder("Valentyne Coeli", "https://img2.finalfantasyxiv.com/f/b12b76bd98996ebe7c00c55eb6fd0706_be20385e18333edb329d4574f364a1f0fc0_96x96.jpg?1657036282", 36136978, "junior")
var willgaspar = characterBuilder("Will Gaspar", "https://img2.finalfantasyxiv.com/f/660ae865e98f0081ebce3ba76283ea07_be20385e18333edb329d4574f364a1f0fc0_96x96.jpg?1657033489", 40688547, "junior")
var makisuguis = characterBuilder("Maki Suguis", "https://img2.finalfantasyxiv.com/f/72d4015e15d40db57c186e2131abc196_ba22853447012a24cee115315d6a5bebfc0_96x96.jpg?1657034480", 27433867, "ally")
var kuroyozakura = characterBuilder("Kuro Yozakura", "https://img2.finalfantasyxiv.com/f/b368c024202261f67e87d65f6cb8f093_be20385e18333edb329d4574f364a1f0fc0_96x96.jpg?1657036173", 28583734, "ally")
var mattconstante = characterBuilder("Matt Constante", "https://img2.finalfantasyxiv.com/f/0df6a5ce5a440f111c0e65143dbf75cf_be20385e18333edb329d4574f364a1f0fc0_96x96.jpg?1657035117", 30204464, "ally")
var barilanshs = characterBuilder("Bari Lanshs", "https://img2.finalfantasyxiv.com/f/8dd5700f3ac9487649e69cf23a0b5206_be20385e18333edb329d4574f364a1f0fc0_96x96.jpg?1657037449", 8555044, "ally")
var gojiracaipira = characterBuilder("Gojira Caipira", "https://img2.finalfantasyxiv.com/f/987051a015b046845a40ff1d5e446e9d_be20385e18333edb329d4574f364a1f0fc0_96x96.jpg?1657036712", 28238178, "ally")

// char list
var characterList = []

// push into char list
characterList.push(kurohaneenki);

// ------------------------------------------------
// fotos database
// ------------------------------------------------
var gallery = {
  eventos2020: [], eventos2021: [], eventos2022: [],
  social2020: [], social2021: [], social2022: [],
  achievements2020: [], achievements2021: [], achievements2022: [],
  duty2020: [], duty2021: [], duty2022: [],
  endgame2020: [], endgame2021: [], endgame2022: [],
};

function newFoto(date, url, sendBy, description, gallery) {
  return fotos = {
    'date' : date,
    'url' : url,
    'sendBy' : sendBy,
    'description' : description,
    'gallery' : gallery,
  }
}

// create new
// 2020 endgame

var boreas_matt = newFoto("2020", "img/screenshots/fotos/2020/achievements/boreas-matt.jpg", mattconstante, "Ygg, kuro_yozakura, matt_constante, cassandra_dlasol e Etienne posando com seus Boreas.", "Achievements")
var firebird_bari = newFoto("2020", "img/screenshots/fotos/2020/achievements/firebird-bari.png", barilanshs, "kuro_yozakura, cassandra_dlasol, Bonnie, Kblo, Riruru, bari_lanshs, maki_suguis e Red com seus Firebird.", "Achievements")
var firebird_kenji = newFoto("2020", "img/screenshots/fotos/2020/achievements/firebird-kenji.png", makisuguis, "kuro_yozakura, cassandra_dlasol, Bonnie, Kblo, Riruru, bari_lanshs, maki_suguis e Red com seus Firebird.", "Achievements")
var gobwalker_bari = newFoto("2020", "img/screenshots/fotos/2020/achievements/gobwalker-bari.png", barilanshs, "IKA com Gobwalkers em Idyllshyre", "Achievements")
var nightmare_kenji = newFoto("2020", "img/screenshots/fotos/2020/achievements/nightmare-kenji.png", makisuguis, "IKA passeando com Nightmares na praça da Ikasinha", "Achievements")
var torrekugane_kenji = newFoto("2020", "img/screenshots/fotos/2020/achievements/torrekugane-kenji.png", makisuguis, "kuro_yozakura, bari_lanshs, Riruru, tceles_bhsup, maki_suguis e Enki no topo da Torre de Kugane.", "Achievements")
var bismark_kenji = newFoto("2020", "img/screenshots/fotos/2020/duty/bismark-kenji.png", makisuguis, "Clima tenso entre os Brothers durante Bismark.", "Duty")
var bozja_kenji = newFoto("2020", "img/screenshots/fotos/2020/duty/bozja-kenji.png", makisuguis, "/toast em Bozja", "Duty")     
var copiedfactory_gojira = newFoto("2020", "img/screenshots/fotos/2020/duty/copiedfactory-gojira.png", gojiracaipira, "24/24 Copied Factory da IKA", "Duty")
var copiedfactory_kenji = newFoto("2020", "img/screenshots/fotos/2020/duty/copiedfactory-kenji.png", makisuguis, "24/24 Copied Factory da IKA", "Duty")
var emerald_kenji = newFoto("2020", "img/screenshots/fotos/2020/duty/emerald-kenji.png", makisuguis, "kuro_yozakura dando aula de /flamedance pra Riru, Red, maki_suguis, Vini, cassandra_dlasol, Kblo e Enki na Emerald", "Duty")
var eureka_kenji = newFoto("2020", "img/screenshots/fotos/2020/duty/eureka-kenji.png", makisuguis, "Presença Comunista em Eureka", "Duty")
var mapas_bari = newFoto("2020", "img/screenshots/fotos/2020/duty/mapas-bari.png", barilanshs, "Ficando RIKA", "Duty")
var mapas_gojira = newFoto("2020", "img/screenshots/fotos/2020/duty/mapas-gojira.png", gojiracaipira, "Ficando RIKA+", "Duty")  
var mapas_gojira2 = newFoto("2020", "img/screenshots/fotos/2020/duty/mapas-gojira2.png", gojiracaipira, "Ficando RIKA++", "Duty")
var mapas_kenji = newFoto("2020", "img/screenshots/fotos/2020/duty/mapas-kenji.png", makisuguis, "Ficando RIKA+++", "Duty")     
var mapas_kenji2 = newFoto("2020", "img/screenshots/fotos/2020/duty/mapas-kenji2.png", makisuguis, "Ficando RIKA++++", "Duty")  
var mapas_kuro = newFoto("2020", "img/screenshots/fotos/2020/duty/mapas-kuro.png", kuroyozakura, "Ficando RIKA+++++", "Duty")   
var mapas_matt = newFoto("2020", "img/screenshots/fotos/2020/duty/mapas-matt.png", mattconstante, "Ficando RIKAS", "Duty")      
var mapas_matt2 = newFoto("2020", "img/screenshots/fotos/2020/duty/mapas-matt2.png", mattconstante, "Ficando RIKAS+", "Duty")   
var mapas_matt3 = newFoto("2020", "img/screenshots/fotos/2020/duty/mapas-matt3.png", mattconstante, "Ficando RIKAS++", "Duty")  
var mapas_matt4 = newFoto("2020", "img/screenshots/fotos/2020/duty/mapas-matt4.png", mattconstante, "Ficando RIKAS+++", "Duty") 
var omega12_kenji = newFoto("2020", "img/screenshots/fotos/2020/duty/omega12-kenji.png", makisuguis, "IKA surrando O12N", "Duty")
var puppetsbunker_matt = newFoto("2020", "img/screenshots/fotos/2020/duty/puppetsbunker-matt.png", mattconstante, "Bonnie, Riru, Enki, kuro_yozakura, cassandra_dlasol e matt_constante em Puppets’ Bunker", "Duty")
var aniversarioenki_kuro = newFoto("2020", "img/screenshots/fotos/2020/eventos/aniversarioenki-kuro.png", kuroyozakura, "Aniversário do Enki na Ikasinha", "Eventos")
var aniversarioenki_dino1 = newFoto("2020", "img/screenshots/fotos/2020/eventos/aniversarioenki-dino1.png", tcelesbhsup, "Aniversário do Enki,", "Eventos")
var aniversarioenki_gojira1 = newFoto("2020", "img/screenshots/fotos/2020/eventos/aniversarioenki-gojira1.png", gojiracaipira, "Aniversário do Enki na Ikasinha e gente no telhado", "Eventos")
var aniversarioenki_gojira2 = newFoto("2020", "img/screenshots/fotos/2020/eventos/aniversarioenki-gojira2.png", gojiracaipira, "Aniversário do Enki, virou bagunça", "Eventos")
var aniversarioenki_kenji1 = newFoto("2020", "img/screenshots/fotos/2020/eventos/aniversarioenki-kenji1.png", makisuguis, "Aniversário do Enki, Quizz", "Eventos")
var aniversarioenki_kenji2 = newFoto("2020", "img/screenshots/fotos/2020/eventos/aniversarioenki-kenji2.png", makisuguis, "Aniversário do Enki, Roleta Russa no void do quarto do Enki", "Eventos")
var aniversarioenki_matt1 = newFoto("2020", "img/screenshots/fotos/2020/eventos/aniversarioenki-matt1.png", mattconstante, "Aniversário do Enki, Quizz no void do quarto do Enki", "Eventos")
var aniversarioenki_matt2 = newFoto("2020", "img/screenshots/fotos/2020/eventos/aniversarioenki-matt2.png", mattconstante, "Aniversário do Enki, discurso", "Eventos")
var aniversarioenki_matt3 = newFoto("2020", "img/screenshots/fotos/2020/eventos/aniversarioenki-matt3.png", mattconstante, "Aniversário do Enki, celebrações calorosas", "Eventos")
var aniversariomega_gojira = newFoto("2020", "img/screenshots/fotos/2020/eventos/aniversariomega-gojira.png", gojiracaipira, "Aniversário do Mega, PEI", "Eventos")
var aniversariomega_kuro = newFoto("2020", "img/screenshots/fotos/2020/eventos/aniversariomega-kuro.png", kuroyozakura, "Gang Shot Uniformizados da Ika", "Eventos")
var aniversariomega_vic = newFoto("2020", "img/screenshots/fotos/2020/eventos/aniversariomega-vic.png", cassandradlasol, "Gang Shot Uniformizados da Ika", "Eventos")
var aniversariotengu_tengu = newFoto("2020", "img/screenshots/fotos/2020/eventos/aniversariotengu-tengu.png", ryodanonoko, "Aniversário do ryodan_onoko, calor humano digital <3", "Eventos")
var banheiraika_bari = newFoto("2020", "img/screenshots/fotos/2020/eventos/banheiraika-bari.png", barilanshs, "Super Banheira da Ika Turbo", "Eventos")
var banheiraika_kenji1 = newFoto("2020", "img/screenshots/fotos/2020/eventos/banheiraika-kenji1.png", makisuguis, "Banheira Ika", "Eventos")
var banheiraika_kenji2 = newFoto("2020", "img/screenshots/fotos/2020/eventos/banheiraika-kenji2.png", makisuguis, "Banheira Ika", "Eventos")
var banheiraika_kuro = newFoto("2020", "img/screenshots/fotos/2020/eventos/banheiraika-kuro.png", kuroyozakura, "Super Banheira da Ika", "Eventos")
var casamento_gojira = newFoto("2020", "img/screenshots/fotos/2020/eventos/casamento-gojira.png", gojiracaipira, "Casamentos IKA", "Eventos")
var casamento_kuro = newFoto("2020", "img/screenshots/fotos/2020/eventos/casamento-kuro.png", kuroyozakura, "Casamentos IKA", "Eventos")
var casamento_tengu = newFoto("2020", "img/screenshots/fotos/2020/eventos/casamento-tengu.png", ryodanonoko, "Convidados de Casamento IKA", "Eventos")
var casamentokbloetiene_matt = newFoto("2020", "img/screenshots/fotos/2020/eventos/casamentokbloetiene-matt.png", mattconstante, "Casamento Kblo&Etienne, Jantar", "Eventos")
var casamentokbloetienne_bari = newFoto("2020", "img/screenshots/fotos/2020/eventos/casamentokbloetienne-bari.png", barilanshs, "Casamento Kblo&Etienne, foto de Altar", "Eventos")
var casamentokbloetienne_gojira = newFoto("2020", "img/screenshots/fotos/2020/eventos/casamentokbloetienne-gojira.png", gojiracaipira, "Casamento Kblo&Etienne, foto na parte bonita da igreja", "Eventos")
var casamentokbloetienne_kenji1 = newFoto("2020", "img/screenshots/fotos/2020/eventos/casamentokbloetienne-kenji1.png", makisuguis, "Casamento Kblo&Etienne, Jantar", "Eventos")
var casamentokbloetienne_kenji2 = newFoto("2020", "img/screenshots/fotos/2020/eventos/casamentokbloetienne-kenji2.png", makisuguis, "Casamento Kblo&Etienne, Party", "Eventos")
var casamentokbloetienne_kenji3 = newFoto("2020", "img/screenshots/fotos/2020/eventos/casamentokbloetienne-kenji3.png", makisuguis, "Casamento Kblo&Etienne, foto de Altar", "Eventos")
var casamentokbloetienne_kenji4 = newFoto("2020", "img/screenshots/fotos/2020/eventos/casamentokbloetienne-kenji4.png", makisuguis, "Casamento Kblo&Etienne, foto de Escada", "Eventos")
var casamentokbloetienne_kenji5 = newFoto("2020", "img/screenshots/fotos/2020/eventos/casamentokbloetienne-kenji5.png", makisuguis, "Casamento Kblo&Etienne, confusão na igreja", "Eventos")
var casamentokbloetienne_kenji6 = newFoto("2020", "img/screenshots/fotos/2020/eventos/casamentokbloetienne-kenji6.png", makisuguis, "Casamento Kblo&Etienne, convidados do casamento", "Eventos")
var casamentokbloetienne_kuro = newFoto("2020", "img/screenshots/fotos/2020/eventos/casamentokbloetienne-kuro.png", kuroyozakura, "Casamento Kblo&Etienne, fora igreja", "Eventos")
var casamentokbloetienne_party_dino = newFoto("2020", "img/screenshots/fotos/2020/eventos/casamentokbloetienne-party-dino.png", tcelesbhsup, "Casamento Kblo&Etienne, Party", "Eventos")
var casamentokbloetienne_party_matt = newFoto("2020", "img/screenshots/fotos/2020/eventos/casamentokbloetienne-party-matt.png", mattconstante, "Casamento Kblo&Etienne, Party", "Eventos")
var costadelsol_comunismo_kenji = newFoto("2020", "img/screenshots/fotos/2020/eventos/costadelsol-comunismo-kenji.png", makisuguis, "Costa del Sol, a foice e o martelo", "Eventos")
var costadelsol_dino = newFoto("2020", "img/screenshots/fotos/2020/eventos/costadelsol-dino.png", tcelesbhsup, "Costa del Sol, o nascimento do lala comunista", "Eventos")
var costadelsol_kenji = newFoto("2020", "img/screenshots/fotos/2020/eventos/costadelsol-kenji.png", makisuguis, "Costa del Sol, o sacrifício", "Eventos")
var dragonquest_kenji = newFoto("2020", "img/screenshots/fotos/2020/eventos/dragonquest-kenji.png", makisuguis, "Ikasinha, evento de Dragon Quest X", "Eventos")
var EPA_kenji = newFoto("2020", "img/screenshots/fotos/2020/eventos/EPA-kenji.png", makisuguis, "EITA (after do casamento)", "Eventos")
var festajunika_dino = newFoto("2020", "img/screenshots/fotos/2020/eventos/festajunika-dino.png", tcelesbhsup, "Festa Junika!", "Eventos")
var festajunika_kenji_corridachocobo = newFoto("2020", "img/screenshots/fotos/2020/eventos/festajunika-kenji-corridachocobo.png", makisuguis, "Festa Junika, corrida de chocobo na vizinhança da Ikasinha", "Eventos")
var festajunika_kenji2 = newFoto("2020", "img/screenshots/fotos/2020/eventos/festajunika-kenji2.png", makisuguis, "Festa Junika, dança em quadrilha", "Eventos")
var festajunika_kenji3 = newFoto("2020", "img/screenshots/fotos/2020/eventos/festajunika-kenji3.png", makisuguis, "Festa Junika, dança em quadrilha", "Eventos")
var festajunika_kuro = newFoto("2020", "img/screenshots/fotos/2020/eventos/festajunika-kuro.png", kuroyozakura, "Festa Junika, dança em quadrilha", "Eventos")
var festajunika_matt = newFoto("2020", "img/screenshots/fotos/2020/eventos/festajunika-matt.png", mattconstante, "Festa Junika, fila na barraca de rifas", "Eventos")
var festajunika_vic = newFoto("2020", "img/screenshots/fotos/2020/eventos/festajunika-vic.png", cassandradlasol, "Festa Junika, telhado da Ikasinha", "Eventos")
var festajunika_vic2 = newFoto("2020", "img/screenshots/fotos/2020/eventos/festajunika-vic2.png", cassandradlasol, "Festa Junika, aquele grupo que fica até o amanhecer do dia seguinte da festa", "Eventos")
var fontebehemoth_kenji = newFoto("2020", "img/screenshots/fotos/2020/eventos/fontebehemoth-kenji.png", makisuguis, "Fonte de Behemoth em Idyllshire", "Eventos")
var fontechocobo_kenji = newFoto("2020", "img/screenshots/fotos/2020/eventos/fontechocobo-kenji.png", makisuguis, "Fonte de Chocobo em Idyllshire", "Eventos")
var gaiolaika_kenji = newFoto("2020", "img/screenshots/fotos/2020/eventos/gaiolaika-kenji.png", makisuguis, "Gaiola da Ika, porradaria na área secreta do quarto do Enki", "Eventos")
var gaiolaika_kenji2 = newFoto("2020", "img/screenshots/fotos/2020/eventos/gaiolaika-kenji2.png", makisuguis, "Gaiola da Ika, também usada pra festa", "Eventos")
var hallowika_gojira = newFoto("2020", "img/screenshots/fotos/2020/eventos/hallowika-gojira.png", gojiracaipira, "Hallowika", "Eventos")
var hallowika_kenji1 = newFoto("2020", "img/screenshots/fotos/2020/eventos/hallowika-kenji1.png", makisuguis, "Hallowika, invasão de dançarinos e baderneiros no palco", "Eventos")
var hallowika_kenji2 = newFoto("2020", "img/screenshots/fotos/2020/eventos/hallowika-kenji2.png", makisuguis, "Hallowika, foto na escada da Ikasona", "Eventos")
var hallowika_kenji3 = newFoto("2020", "img/screenshots/fotos/2020/eventos/hallowika-kenji3.png", makisuguis, "Hallowika, foto na sacada da Ikasona", "Eventos")
var poolparty_matt = newFoto("2020", "img/screenshots/fotos/2020/eventos/poolparty-matt.png", mattconstante, "Pool Party na Ikasinha", "Eventos")
var torneiotripletriad_bari = newFoto("2020", "img/screenshots/fotos/2020/eventos/torneiotripletriad-bari.png", barilanshs, "Torneio de Triple Triad, platéia", "Eventos")
var torneiotripletriad_kenji = newFoto("2020", "img/screenshots/fotos/2020/eventos/torneiotripletriad-kenji.png", makisuguis, "Torneio de Triple Triad no subsolo da Ikasinha.", "Eventos")
var torneiotripletriad_tengu = newFoto("2020", "img/screenshots/fotos/2020/eventos/torneiotripletriad-tengu.png", ryodanonoko, "Torneio de Triple Triad na Festa Junika.", "Eventos")
var visitandosalasdaFC_kenji_ = newFoto("2020", "img/screenshots/fotos/2020/eventos/visitandosalasdaFC-kenji-.png", makisuguis, "A távola redonda da Ika", "Eventos")
var bari_flamedance = newFoto("2020", "img/screenshots/fotos/2020/social/bari-flamedance.png", barilanshs, "/flamedance no Market Board da rua da Ikasinha", "Social")
var bari_fullparty = newFoto("2020", "img/screenshots/fotos/2020/social/bari-fullparty.png", barilanshs, "Full Party na frente da Ikasinha", "Social")
var bari_kugane_banheira = newFoto("2020", "img/screenshots/fotos/2020/social/bari-kugane-banheira.png", barilanshs, "Banheirão de Kugane noturna", "Social")
var bari_mounts_ikasinha = newFoto("2020", "img/screenshots/fotos/2020/social/bari-mounts-ikasinha.png", barilanshs, "Frente da Ikasinha exibindo Mount", "Social")
var dino_gobbulparty = newFoto("2020", "img/screenshots/fotos/2020/social/dino-gobbulparty.png", tcelesbhsup, "Party de Gobbul em Rising Stones", "Social")
var dino_kuganenight = newFoto("2020", "img/screenshots/fotos/2020/social/dino-kuganenight.png", tcelesbhsup, "Kugane Night City", "Social")
var gojira_agiotafamily = newFoto("2020", "img/screenshots/fotos/2020/social/gojira-agiotafamily.png", gojiracaipira, "Família Agiota", "Social")
var gojira_costadelsol = newFoto("2020", "img/screenshots/fotos/2020/social/gojira-costadelsol.png", gojiracaipira, "Boiando em Costa del Sol", "Social")
var gojira_eulmore_pose = newFoto("2020", "img/screenshots/fotos/2020/social/gojira-eulmore-pose.png", gojiracaipira, "Eulmore", "Social")
var gojira_eulmore = newFoto("2020", "img/screenshots/fotos/2020/social/gojira-eulmore.png", gojiracaipira, "Eulmore picante", "Social")
var gojira_ikasinhatelhado = newFoto("2020", "img/screenshots/fotos/2020/social/gojira-ikasinhatelhado.png", gojiracaipira, "Ikasinha Legacy, primeira print no telhado", "Social")
var gojira_ikasinhnamb_pose = newFoto("2020", "img/screenshots/fotos/2020/social/gojira-ikasinhnamb-pose.png", gojiracaipira, "undefined", "Social")
var gojira_kingkong = newFoto("2020", "img/screenshots/fotos/2020/social/gojira-kingkong.png", gojiracaipira, "undefined", "Social")
var gojira_lightparty = newFoto("2020", "img/screenshots/fotos/2020/social/gojira-lightparty.png", gojiracaipira, "undefined", "Social")
var gojira_lojinharp = newFoto("2020", "img/screenshots/fotos/2020/social/gojira-lojinharp.png", gojiracaipira, "undefined", "Social")
var gojira_sneaky = newFoto("2020", "img/screenshots/fotos/2020/social/gojira-sneaky.png", gojiracaipira, "undefined", "Social")
var gojira_stack = newFoto("2020", "img/screenshots/fotos/2020/social/gojira-stack.png", gojiracaipira, "undefined", "Social")  
var gojira_tabletopdance = newFoto("2020", "img/screenshots/fotos/2020/social/gojira-tabletopdance.png", gojiracaipira, "undefined", "Social")
var kenji_coldnight = newFoto("2020", "img/screenshots/fotos/2020/social/kenji-coldnight.png", makisuguis, "undefined", "Social")
var kenji_eulmore_pose = newFoto("2020", "img/screenshots/fotos/2020/social/kenji-eulmore-pose.png", makisuguis, "undefined", "Social")
var kenji_flamedance = newFoto("2020", "img/screenshots/fotos/2020/social/kenji-flamedance.png", makisuguis, "undefined", "Social")
var kenji_fullparty = newFoto("2020", "img/screenshots/fotos/2020/social/kenji-fullparty.png", makisuguis, "undefined", "Social")
var kenji_house_pose = newFoto("2020", "img/screenshots/fotos/2020/social/kenji-house-pose.png", makisuguis, "undefined", "Social")
var kenji_ikasinha_aquarium = newFoto("2020", "img/screenshots/fotos/2020/social/kenji-ikasinha-aquarium.png", makisuguis, "undefined", "Social")
var kenji_ikasinha_bikerace = newFoto("2020", "img/screenshots/fotos/2020/social/kenji-ikasinha-bikerace.png", makisuguis, "undefined", "Social")
var kenji_ikasinha_bodyguard = newFoto("2020", "img/screenshots/fotos/2020/social/kenji-ikasinha-bodyguard.png", makisuguis, "undefined", "Social")
var kenji_ikasinha_kweh = newFoto("2020", "img/screenshots/fotos/2020/social/kenji-ikasinha-kweh.png", makisuguis, "undefined", "Social")
var kenji_ikasinha_manderville = newFoto("2020", "img/screenshots/fotos/2020/social/kenji-ikasinha-manderville.png", makisuguis, "undefined", "Social")
var kenji_ikasinha_pontodeonibus = newFoto("2020", "img/screenshots/fotos/2020/social/kenji-ikasinha-pontodeonibus.png", makisuguis, "undefined", "Social")
var kenji_ikasinha_pose = newFoto("2020", "img/screenshots/fotos/2020/social/kenji-ikasinha-pose.png", makisuguis, "undefined", "Social")
var kenji_ikasinha_pose2 = newFoto("2020", "img/screenshots/fotos/2020/social/kenji-ikasinha-pose2.png", makisuguis, "undefined", "Social")
var kenji_ikasinha_pose3 = newFoto("2020", "img/screenshots/fotos/2020/social/kenji-ikasinha-pose3.png", makisuguis, "undefined", "Social")
var kenji_ikasinha_pose4 = newFoto("2020", "img/screenshots/fotos/2020/social/kenji-ikasinha-pose4.png", makisuguis, "undefined", "Social")
var kenji_ikasinha_pose5 = newFoto("2020", "img/screenshots/fotos/2020/social/kenji-ikasinha-pose5.png", makisuguis, "undefined", "Social")
var kenji_ikasinha_room = newFoto("2020", "img/screenshots/fotos/2020/social/kenji-ikasinha-room.png", makisuguis, "undefined", "Social")
var kenji_ikasinha_social = newFoto("2020", "img/screenshots/fotos/2020/social/kenji-ikasinha-social.png", makisuguis, "undefined", "Social")
var kenji_ikasinha_telhado = newFoto("2020", "img/screenshots/fotos/2020/social/kenji-ikasinha-telhado.png", makisuguis, "undefined", "Social")
var kenji_ikasinha_telhado2 = newFoto("2020", "img/screenshots/fotos/2020/social/kenji-ikasinha-telhado2.png", makisuguis, "undefined", "Social")
var kenji_illmeg_pose = newFoto("2020", "img/screenshots/fotos/2020/social/kenji-illmeg-pose.png", makisuguis, "undefined", "Social")
var kenji_kingkong = newFoto("2020", "img/screenshots/fotos/2020/social/kenji-kingkong.png", makisuguis, "undefined", "Social") 
var kenji_kugane_banheira = newFoto("2020", "img/screenshots/fotos/2020/social/kenji-kugane-banheira.png", makisuguis, "undefined", "Social")
var kenji_kuganenight = newFoto("2020", "img/screenshots/fotos/2020/social/kenji-kuganenight.png", makisuguis, "undefined", "Social")
var kenji_kuganenight2 = newFoto("2020", "img/screenshots/fotos/2020/social/kenji-kuganenight2.png", makisuguis, "undefined", "Social")
var kenji_mountparty = newFoto("2020", "img/screenshots/fotos/2020/social/kenji-mountparty.png", makisuguis, "undefined", "Social")
var kenji_mountparty2 = newFoto("2020", "img/screenshots/fotos/2020/social/kenji-mountparty2.png", makisuguis, "undefined", "Social")
var kenji_pose = newFoto("2020", "img/screenshots/fotos/2020/social/kenji-pose.png", makisuguis, "undefined", "Social")
var kuro_fishing_ladies = newFoto("2020", "img/screenshots/fotos/2020/social/kuro-fishing-ladies.png", kuroyozakura, "undefined", "Social")
var kuro_ikasinha_manderville = newFoto("2020", "img/screenshots/fotos/2020/social/kuro-ikasinha-manderville.png", kuroyozakura, "undefined", "Social")
var kuro_night_party = newFoto("2020", "img/screenshots/fotos/2020/social/kuro-night-party.png", kuroyozakura, "undefined", "Social")
var matt_ikasinha_aquarium = newFoto("2020", "img/screenshots/fotos/2020/social/matt-ikasinha-aquarium.png", mattconstante, "undefined", "Social")
var matt_ikasinha_manderville = newFoto("2020", "img/screenshots/fotos/2020/social/matt-ikasinha-manderville.png", mattconstante, "undefined", "Social")
var matt_ikasinha_room_banheira = newFoto("2020", "img/screenshots/fotos/2020/social/matt-ikasinha-room-banheira.png", mattconstante, "undefined", "Social")
var matt_ikasinha_room = newFoto("2020", "img/screenshots/fotos/2020/social/matt-ikasinha-room.png", mattconstante, "undefined", "Social")
var matt_mount_trio = newFoto("2020", "img/screenshots/fotos/2020/social/matt-mount-trio.png", mattconstante, "undefined", "Social")
var matt_mounts_beds_chairs = newFoto("2020", "img/screenshots/fotos/2020/social/matt-mounts-beds-chairs.png", mattconstante, "undefined", "Social")
var tengu_ikasinha_aquarium = newFoto("2020", "img/screenshots/fotos/2020/social/tengu-ikasinha-aquarium.png", ryodanonoko, "undefined", "Social")
var tengu_ikasinha_telhado = newFoto("2020", "img/screenshots/fotos/2020/social/tengu-ikasinha-telhado.png", ryodanonoko, "undefined", "Social")
var tengu_stack = newFoto("2020", "img/screenshots/fotos/2020/social/tengu-stack.png", ryodanonoko, "undefined", "Social") 
// assign gallery
// 2020 biscoitos
gallery.achievements2020.push(boreas_matt);
gallery.achievements2020.push(firebird_bari);
gallery.achievements2020.push(firebird_kenji);
gallery.achievements2020.push(gobwalker_bari);
gallery.achievements2020.push(nightmare_kenji);
gallery.achievements2020.push(torrekugane_kenji);
gallery.duty2020.push(bismark_kenji);
gallery.duty2020.push(bozja_kenji);
gallery.duty2020.push(copiedfactory_gojira);
gallery.duty2020.push(copiedfactory_kenji);
gallery.duty2020.push(emerald_kenji);
gallery.duty2020.push(eureka_kenji);
gallery.duty2020.push(mapas_bari);
gallery.duty2020.push(mapas_gojira);
gallery.duty2020.push(mapas_gojira2);
gallery.duty2020.push(mapas_kenji);
gallery.duty2020.push(mapas_kenji2);
gallery.duty2020.push(mapas_kuro);
gallery.duty2020.push(mapas_matt);
gallery.duty2020.push(mapas_matt2);
gallery.duty2020.push(mapas_matt3);
gallery.duty2020.push(mapas_matt4);
gallery.duty2020.push(omega12_kenji);
gallery.duty2020.push(puppetsbunker_matt);
gallery.eventos2020.push(aniversarioenki_kuro);
gallery.eventos2020.push(aniversarioenki_dino1);
gallery.eventos2020.push(aniversarioenki_gojira1);
gallery.eventos2020.push(aniversarioenki_gojira2);
gallery.eventos2020.push(aniversarioenki_kenji1);
gallery.eventos2020.push(aniversarioenki_kenji2);
gallery.eventos2020.push(aniversarioenki_matt1);
gallery.eventos2020.push(aniversarioenki_matt2);
gallery.eventos2020.push(aniversarioenki_matt3);
gallery.eventos2020.push(aniversariomega_gojira);
gallery.eventos2020.push(aniversariomega_kuro);
gallery.eventos2020.push(aniversariomega_vic);
gallery.eventos2020.push(aniversariotengu_tengu);
gallery.eventos2020.push(banheiraika_bari);
gallery.eventos2020.push(banheiraika_kenji1);
gallery.eventos2020.push(banheiraika_kenji2);
gallery.eventos2020.push(banheiraika_kuro);
gallery.eventos2020.push(casamento_gojira);
gallery.eventos2020.push(casamento_kuro);
gallery.eventos2020.push(casamento_tengu);
gallery.eventos2020.push(casamentokbloetiene_matt);
gallery.eventos2020.push(casamentokbloetienne_bari);
gallery.eventos2020.push(casamentokbloetienne_gojira);
gallery.eventos2020.push(casamentokbloetienne_kenji1);
gallery.eventos2020.push(casamentokbloetienne_kenji2);
gallery.eventos2020.push(casamentokbloetienne_kenji3);
gallery.eventos2020.push(casamentokbloetienne_kenji4);
gallery.eventos2020.push(casamentokbloetienne_kenji5);
gallery.eventos2020.push(casamentokbloetienne_kenji6);
gallery.eventos2020.push(casamentokbloetienne_kuro);
gallery.eventos2020.push(casamentokbloetienne_party_dino);
gallery.eventos2020.push(casamentokbloetienne_party_matt);
gallery.eventos2020.push(costadelsol_comunismo_kenji);
gallery.eventos2020.push(costadelsol_dino);
gallery.eventos2020.push(costadelsol_kenji);
gallery.eventos2020.push(dragonquest_kenji);
gallery.eventos2020.push(EPA_kenji);
gallery.eventos2020.push(festajunika_dino);
gallery.eventos2020.push(festajunika_kenji_corridachocobo);
gallery.eventos2020.push(festajunika_kenji2);
gallery.eventos2020.push(festajunika_kenji3);
gallery.eventos2020.push(festajunika_kuro);
gallery.eventos2020.push(festajunika_matt);
gallery.eventos2020.push(festajunika_vic);
gallery.eventos2020.push(festajunika_vic2);
gallery.eventos2020.push(fontebehemoth_kenji);
gallery.eventos2020.push(fontechocobo_kenji);
gallery.eventos2020.push(gaiolaika_kenji);
gallery.eventos2020.push(gaiolaika_kenji2);
gallery.eventos2020.push(hallowika_gojira);
gallery.eventos2020.push(hallowika_kenji1);
gallery.eventos2020.push(hallowika_kenji2);
gallery.eventos2020.push(hallowika_kenji3);
gallery.eventos2020.push(poolparty_matt);
gallery.eventos2020.push(torneiotripletriad_bari);
gallery.eventos2020.push(torneiotripletriad_kenji);
gallery.eventos2020.push(torneiotripletriad_tengu);
gallery.eventos2020.push(visitandosalasdaFC_kenji_);
gallery.social2020.push(bari_flamedance);
gallery.social2020.push(bari_fullparty);
gallery.social2020.push(bari_kugane_banheira);
gallery.social2020.push(bari_mounts_ikasinha);
gallery.social2020.push(dino_gobbulparty);
gallery.social2020.push(dino_kuganenight);
gallery.social2020.push(gojira_agiotafamily);
gallery.social2020.push(gojira_costadelsol);
gallery.social2020.push(gojira_eulmore_pose);
gallery.social2020.push(gojira_eulmore);
gallery.social2020.push(gojira_ikasinhatelhado);
gallery.social2020.push(gojira_ikasinhnamb_pose);
gallery.social2020.push(gojira_kingkong);
gallery.social2020.push(gojira_lightparty);
gallery.social2020.push(gojira_lojinharp);
gallery.social2020.push(gojira_sneaky);
gallery.social2020.push(gojira_stack);
gallery.social2020.push(gojira_tabletopdance);
gallery.social2020.push(kenji_coldnight);
gallery.social2020.push(kenji_eulmore_pose);
gallery.social2020.push(kenji_flamedance);
gallery.social2020.push(kenji_fullparty);
gallery.social2020.push(kenji_house_pose);
gallery.social2020.push(kenji_ikasinha_aquarium);
gallery.social2020.push(kenji_ikasinha_bikerace);
gallery.social2020.push(kenji_ikasinha_bodyguard);
gallery.social2020.push(kenji_ikasinha_kweh);
gallery.social2020.push(kenji_ikasinha_manderville);
gallery.social2020.push(kenji_ikasinha_pontodeonibus);
gallery.social2020.push(kenji_ikasinha_pose);
gallery.social2020.push(kenji_ikasinha_pose2);
gallery.social2020.push(kenji_ikasinha_pose3);
gallery.social2020.push(kenji_ikasinha_pose4);
gallery.social2020.push(kenji_ikasinha_pose5);
gallery.social2020.push(kenji_ikasinha_room);
gallery.social2020.push(kenji_ikasinha_social);
gallery.social2020.push(kenji_ikasinha_telhado);
gallery.social2020.push(kenji_ikasinha_telhado2);
gallery.social2020.push(kenji_illmeg_pose);
gallery.social2020.push(kenji_kingkong);
gallery.social2020.push(kenji_kugane_banheira);
gallery.social2020.push(kenji_kuganenight);
gallery.social2020.push(kenji_kuganenight2);
gallery.social2020.push(kenji_mountparty);
gallery.social2020.push(kenji_mountparty2);
gallery.social2020.push(kenji_pose);
gallery.social2020.push(kuro_fishing_ladies);
gallery.social2020.push(kuro_ikasinha_manderville);
gallery.social2020.push(kuro_night_party);
gallery.social2020.push(matt_ikasinha_aquarium);
gallery.social2020.push(matt_ikasinha_manderville);
gallery.social2020.push(matt_ikasinha_room_banheira);
gallery.social2020.push(matt_ikasinha_room);
gallery.social2020.push(matt_mount_trio);
gallery.social2020.push(matt_mounts_beds_chairs);
gallery.social2020.push(tengu_ikasinha_aquarium);
gallery.social2020.push(tengu_ikasinha_telhado);
gallery.social2020.push(tengu_stack);

// ------------------------------------------------
// biscoito database
// ------------------------------------------------
function newBiscoito_8Player(expansion, dutyName, dutyLevel, foto, p1, p1job, p2, p2job, p3, p3job, p4, p4job, p5, p5job, p6, p6job, p7, p7job, p8, p8job) {
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
}

// ------------------------------------------------
// gallery pop-up view
// ------------------------------------------------
function fotoClick(e,el) {
  e = e || window.event;

  document.querySelector('.pop-up-img').style.display = 'flex'
  document.querySelector('.pop-up-img img').src = el.querySelector('img').getAttribute('src');
  document.querySelector('.pop-up-img .send-by').innerHTML = el.querySelector('.send-by').innerHTML;
  document.querySelector('.pop-up-img .description').innerHTML = el.querySelector('.description').innerHTML;
  document.querySelector('.pop-up-img .date').innerHTML = el.querySelector('.date').innerHTML;  

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
  biscoito.player1.id.push(p1lodestone);
  
  biscoito.player2.nick.push(p2nick);
  biscoito.player2.job.push(p2job);
  biscoito.player2.id.push(p2lodestone);
  
  biscoito.player3.nick.push(p3nick);
  biscoito.player3.job.push(p3job);
  biscoito.player3.id.push(p3lodestone);
  
  biscoito.player4.nick.push(p4nick);
  biscoito.player4.job.push(p4job);
  biscoito.player4.id.push(p4lodestone);
  
  biscoito.player5.nick.push(p5nick);
  biscoito.player5.job.push(p5job);
  biscoito.player5.id.push(p5lodestone);
  
  biscoito.player6.nick.push(p6nick);
  biscoito.player6.job.push(p6job);
  biscoito.player6.id.push(p6lodestone);
  
  biscoito.player7.nick.push(p7nick);
  biscoito.player7.job.push(p7job);
  biscoito.player7.id.push(p7lodestone);
  
  biscoito.player8.nick.push(p8nick);
  biscoito.player8.job.push(p8job);
  biscoito.player8.id.push(p8lodestone);
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

// ------------------------------------------------
// onload
// ------------------------------------------------
window.onload = function () {

  // newFoto("img/screenshots/fotos/2020/duty/mapas-matt.png", "2020", "Matt", "30204464", "Ygg, Kuro, Matt, Vic e Etienne posando com seus Boreas.", "Achievement");
  // newFoto("img/screenshots/fotos/2020/eventos/aniversariomega-vic.png", "2020", "Matt", "30204464", "Ygg, Kuro, Matt, Vic e Etienne posando com seus Boreas.", "Achievement");
  // newFoto("img/screenshots/fotos/2020/achievements/firebird-kenji.png", "2020", "Matt", "30204464", "Ygg, Kuro, Matt, Vic e Etienne posando com seus Boreas.", "Achievement");
  // newFoto("img/screenshots/fotos/2020/duty/eureka-kenji.png", "2020", "Matt", "30204464", "Ygg, Kuro, Matt, Vic e Etienne posando com seus Boreas.", "Achievement");
  // newFoto("img/screenshots/fotos/2020/achievements/boreas-matt.jpg", "2020", "Matt", "30204464", "Ygg, Kuro, Matt, Vic e Etienne posando com seus Boreas.", "Achievement");
  // newFoto("img/screenshots/fotos/2020/duty/mapas-matt4.png", "2020", "Matt", "30204464", "Ygg, Kuro, Matt, Vic e Etienne posando com seus Boreas.", "Achievement");
  // newBiscoito_8Player("Alexander", "savage", "16/16/9000", "img/screenshots/fotos/cover/cover 02.jpg", "oroboros", "war", "", "aaa", "pld", "", "bbb", "drk", "", "ccc", "whm", "", "ddd", "ast", "", "eee", "drg", "", "fff", "brd", "", "qwe", "mnk", "")

  // atualiza as fotos
  display.updateFotos_Eventos();
  display.updateFotos_Social();
  display.updateFotos_Achievements();
  display.updateFotos_Duty();

  // atualiza os biscoito
  // display.updateBiscoito();
}
