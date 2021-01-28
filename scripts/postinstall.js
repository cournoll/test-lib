const fs = require('fs');
const ncp = require('ncp').ncp;
const rimraf = require('rimraf');

console.log('Running postinstall script...');
if (fs.existsSync('./tsconfig.json')) {
  return console.log("Skipping your package's postinstall routine.");
} else {
  console.log('Copying files from dist folder into root project folder...');
  ncp('dist', './', function (errNcp) {
    if (errNcp) return console.error(errNcp);
    console.log('Removing dist folder...');
    rimraf('dist', function (errRimraf) {
      if (errRimraf) return console.error(errRimraf);
      console.log('Postinstall done!');
    });
  });
}
