function characterBuilder(name, avatar, job) {
    return character = {'name' : name, 'avatar' : avatar, 'job': job};
  }
  
  
  function apiFake(id) {
    if (id === 19210263) {
      return characterBuilder("Enki", "https://img2.finalfantasyxiv.com/f/a23316227544639e9625a73b5ccc453c_be20385e18333edb329d4574f364a1f0fc0_96x96.jpg?1656806135", "Goldsmith");
    } else if (id === 29518378) {
      return characterBuilder("Ygg", "https://img2.finalfantasyxiv.com/f/be2bf245a304ed40ad0ca79c6ad8d7bb_be20385e18333edb329d4574f364a1f0fc0_96x96.jpg?1656804430", "Dark Knight");
    }
  }
  
  function showAllCharacters(list) {
      for(let i = 0; i < list.length; i++) { 
      console.log("----------------")
      console.log("O Nome do personagem " + i +" é: " + list[i].name);
      console.log("O link do avatar é: " + list[i].avatar);
      console.log("Seu job é: " + list[i].job);
    }
  }
  
  var enki = apiFake(19210263);
  var ygg = apiFake(29518378);
  
  var characterList = []
  characterList.push(enki);
  characterList.push(ygg);
  
  //log do enki
  console.log(enki)
  
  //log do nome do ygg
  console.log(ygg.name)
  
  //quantidade de character
  console.log(characterList.length)
  
  //nome do primeiro char
  console.log(characterList[0].name)
  
  //classe do segundo char
  console.log(characterList[1].job)
  
  //mostrando uma lista
  console.log(showAllCharacters(characterList))