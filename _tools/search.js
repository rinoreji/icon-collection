const fs = require('fs');
const path = require('path');
const { globSync } = require('glob');

var root_dir = process.argv[2];

if (!root_dir) {
    console.log(`### ERROR! No directory provided!`);
    console.log(`Usage: node search.js {root_directory}`);
    process.exit(1);
}

// Define the pattern to match files, e.g., '*.txt' to match all text files
// The pattern is relative to the source directory
const pattern = `${root_dir}/**/_img_data.json`; // Adjust this pattern to match the files you want

var files = globSync(pattern, { nodir: true, ignore: 'node_modules/**' });
let data = [];
// Iterate over the matched files
files.forEach(file => {
    let img_data = JSON.parse(fs.readFileSync(file));
    img_data.dir=path.dirname(file);
    console.log(img_data.dir);
    //img_data.images.map(f=> data.push(path.join(dir,f)));
    data.push(img_data);
});

fs.writeFileSync(path.join(root_dir, '/_icons.json'), JSON.stringify(data));