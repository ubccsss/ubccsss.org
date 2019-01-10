const fs = require('fs');
const {join} = require('path');
const { promisify } = require('util');
const stat = promisify(fs.stat);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const readdir = promisify(fs.readdir);
const cheerio = require('cheerio');
const TurndownService = require('turndown');

const turndownService = new TurndownService();

function field([className]) {
    return `.field-name-field-${className} .field-item`;
}

async function stripBadHtml(path) {
    const input = await readFile(path, 'utf8');
    const firstDash = input.indexOf('---');
    const secondDash = input.indexOf('---', firstDash + 1);

    let frontMatter = input.slice(firstDash + 4, secondDash).trim();
    let body = input.slice(secondDash + 4).trim();

    const $ = cheerio.load(body);
    const date = $(field`dates`).text().trim();
    const location = $(field`location`).text().trim();
    const tags = $(field`tags`).map((i, el) => $(el).text().trim()).get();

    if (body.includes('<div')) {
        if (tags.length > 0) {
            frontMatter += `\ntags: [${tags.join(', ')}]`;
        }
        if (date) {
            frontMatter += `\nraw_date: ${date}`;
        }
        if (location) {
            frontMatter += `\nraw_location: ${location}`;
        }

        body = turndownService.turndown(body);

        await writeFile(path, `---\n${frontMatter}\n---\n\n${body}\n`, 'utf8');
    }
}

async function main(folder) {
    const files = await readdir(folder);
    await Promise.all(files.map(async file => {
        const path = join(folder, file);
        const stats = await stat(path);
        if (stats.isFile()) stripBadHtml(path);
    }));
}

main(process.argv[2]);
