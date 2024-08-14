const fs = require('fs');
const path = require('path');
const { globSync } = require('glob');

const clean_file_name_pattern = /^\d+-icon-service-(.*)$/;

var root_dir = process.argv[2];
var temp_dir = process.argv[3];
// root_dir = 'C:\\RRc\\Personal\\sc\\icon-collection\\Azure_Public_Service_Icons';
// temp_dir = 'C:\\RRc\\Personal\\sc\\icon-collection';

if (!root_dir || !temp_dir) {
    console.log(`### ERROR! No directory provided!`);
    console.log(`Usage: node clean-up.js {root_directory} {temp_directory}`);
    process.exit(1);
}

// Define the pattern to match files, e.g., '*.txt' to match all text files
// The pattern is relative to the source directory
const pattern = `${root_dir}/**/*.svg`; // Adjust this pattern to match the files you want

var files = globSync(pattern, { nodir: true, ignore: 'node_modules/**' });

temp_dest_dir = path.join(temp_dir, 'svgs');
if (!fs.existsSync(temp_dest_dir)) {
    fs.mkdirSync(temp_dest_dir, { recursive: true });
}
// Iterate over the matched files
files.forEach(file => {
    // Get the file name
    let fileName = path.basename(file);
    const match = fileName.match(clean_file_name_pattern);
    if(match){
        fileName = match[1];
    }
    // Define the new destination path
    const destPath = path.join(temp_dest_dir, fileName);
    // Move the file to the base directory
    fs.renameSync(file, destPath);
});
fs.rmSync(root_dir, { recursive: true, force: true });
fs.renameSync(temp_dest_dir, root_dir);