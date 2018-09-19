const fs = require('fs');
data = fs.readFileSync('package.json','utf8');
fs.writeFileSync('dist/package.json',data);