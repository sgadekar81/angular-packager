const fs = require('fs');
data = fs.readFileSync('gitignore.txt','utf8');
fs.writeFileSync('.gitignore',data);
