const XLSX = require("xlsx");

const workbook = XLSX.readFile("script/data/ika-database.xlsx");

function genFotos() {
    const worksheet = workbook.Sheets["fotos"];

    const fotos = XLSX.utils.sheet_to_json(worksheet);
    console.log(fotos);
    const fotosData = {}
    
    for (const foto of fotos) {
        let fileName = foto['fileName'];
        let url = foto['url']
        let date = foto ['date']
        let description = foto['description']
        let sendBy = foto['sendBy']
        let gallery = foto['gallery']

        if (description === undefined) {
            description = ''
        }
    
        console.log('var ' + fileName + ' = newFoto("'+ date + '", "'+ url + '", '+ sendBy +', "'+ description + '", "'+ gallery +'")')

        // if (gallery === "Achievements") { console.log('gallery.achievements2020.push('+ fileName +');'); }
        //     else if (gallery === "Duty") { console.log('gallery.duty2020.push('+ fileName +');'); }
        //     else if (gallery === "Eventos") { console.log('gallery.eventos2020.push('+ fileName +');'); }
        //     else if (gallery === "Social") { console.log('gallery.social2020.push('+ fileName +');'); }
        //     else if (gallery === "Biscoito") { console.log('gallery.biscoito2020.push('+ fileName +');'); }
    }
}

function genCharacters() {
    const worksheet = workbook.Sheets["characters"];

    const characters = XLSX.utils.sheet_to_json(worksheet);
    // console.log(characters);
    const charactersData = {}

    for (const character of characters) {
        const nick = character['nick'];
        const pic = character['pic']
        const id = character ['id']
        const role = character['role']

        console.log('var ' + nick.toLowerCase().replace(/\s/g, '') + ' = characterBuilder("' + nick + '", "' + pic + '", ' + id + ', "' + role + '")')
    }
}

function genBiscoitos() {

    const worksheet = workbook.Sheets["biscoito"];

    const biscoitos = XLSX.utils.sheet_to_json(worksheet);
    console.log(biscoitos);
    const biscoitosData = {}
    
    for (const biscoito of biscoitos) {
        let fileName = biscoito['fileName'];
        let expansion = biscoito['expansion'];
        let date = biscoito['date']
        let dutyName = biscoito['dutyName'];
        let dutyLevel = biscoito ['dutyLevel'];
        let url = biscoito['url'];
        let p1 = biscoito['p1'];
        let p1job = biscoito['p1job'];
        let p2 = biscoito['p2'];
        let p2job = biscoito['p2job'];
        let p3 = biscoito['p3']
        let p3job = biscoito['p3job']
        let p4 = biscoito['p4']
        let p4job = biscoito['p4job']
        let p5 = biscoito['p5'];
        let p5job = biscoito['p5job'];
        let p6 = biscoito['p6'];
        let p6job = biscoito['p6job'];
        let p7 = biscoito['p7']
        let p7job = biscoito['p7job']
        let p8 = biscoito['p8']
        let p8job = biscoito['p8job']
       
        console.log('var ' + fileName + ' = newBiscoito_8Player("'+ expansion +'", "'+ date +'", "'+ dutyName +'", "'+ dutyLevel +'", "' + url + '", '+ p1 +', "'+ p1job +'", '+ p2 +', "'+ p2job +'", '+ p3 +', "'+ p3job +'", '+ p4 +', "'+ p4job +'", '+ p5 +', "'+ p5job +'", '+ p6 +', "'+ p6job +'", '+ p7 +', "'+ p7job +'", '+ p8 +', "'+ p8job +'")')

    //     if (gallery === "Achievements") { console.log('gallery.achievements2020.push('+ fileName +');'); }
    //         else if (gallery === "Duty") { console.log('gallery.duty2020.push('+ fileName +');'); }
    //         else if (gallery === "Eventos") { console.log('gallery.eventos2020.push('+ fileName +');'); }
    //         else if (gallery === "Social") { console.log('gallery.social2020.push('+ fileName +');'); }
    //         else if (gallery === "Biscoito") { console.log('gallery.biscoito2020.push('+ fileName +');'); }
    // }

}
}

// genCharacters();
// genFotos();
genBiscoitos()