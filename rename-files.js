const fs = require('fs');
const { join } = require('path');
const { promisify } = require('util');
const slugify = require('slugify');
const readFile = promisify(fs.readFile);
const rename = promisify(fs.rename);
const readdir = promisify(fs.readdir);

async function renameFileWithTitle(folder, file) {
    const path = join(folder, file);
    await rename(path, path.replace('-meeting-minutes', ''));
}

async function main(folder) {
    const files = await readdir(folder);
    await Promise.all(files.map(file => renameFileWithTitle(folder, file)));
}

main(process.argv[2]);
