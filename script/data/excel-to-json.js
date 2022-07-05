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
    
        console.log('var ' + fileName + ' = newFoto("'+ date + '", "'+ url + '", '+ sendBy + ', "'+ description + '", "'+ gallery +'")')

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

// genCharacters();
genFotos();