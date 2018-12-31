const { promisify } = require('util');
const fs = require('fs');
const { join, parse, format } = require('path');
const fm = require('front-matter');

const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const rename = promisify(fs.rename);
const stat = promisify(fs.stat);

/**
 * Get paths of files in a folder (not sub-folders)
 */
async function getFiles(folder) {
    let files = await readdir(folder);
    files = await Promise.all(
        files.map(async file => {
            const path = join(folder, file);
            const stats = await stat(path);
            return stats.isFile() ? path : null;
        })
    );
    return files.filter(Boolean);
}

async function renameFiles(folder) {
    const files = await getFiles(join(__dirname, folder));
    await Promise.all(
        files.map(async path => {
            const { dir, name, ext } = parse(path);
            const newName = `newsletter-${name}`;
            rename(path, format({ dir, name: newName, ext }));
        })
    );
}

renameFiles('content/posts/newsletters').catch(console.error);
