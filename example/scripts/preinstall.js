const fs = require('fs');

let package = `
{
    "name": "web-cloud-frontend-commons",
    "version": "0.1.0",
    "license": "UNLICENSED",
    "main": "index.js",
    "dependencies": {
      "react-scripts": "4.0.1"
    },
    "peerDependencies": {
      "react": "^17.0.1",
      "react-dom": "^17.0.1",
      "styled-components": "^5.2.1",
      "@marketingtech/launch-code": "^0.19.0"
    }
}
`;

fs.writeFileSync('../dist/package.json', package);
