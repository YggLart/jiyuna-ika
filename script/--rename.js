const { readdirSync, rename } = require('fs');
const { resolve } = require('path');


// Get path to image directory
const imageDirPath = resolve(__dirname, 'img/screenshots/fotos/2020/0-rename');

// Get an array of the files inside the folder
const files = readdirSync(imageDirPath);

var count = 0
// Loop through each file that was retrieved
files.forEach(file => {
  const oldPath = imageDirPath + `/${file}`;
  var newName = 'vic-'

  count += 1
  // lowercasing the filename
  const newPath = imageDirPath + `/${newName + count + '.png'}`;

  // Rename file
  rename(
    oldPath,
    newPath,
    err => console.log(err)
  );
});