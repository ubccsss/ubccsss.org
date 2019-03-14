# ubccsss.org

Website for the UBC Computer Science Student Society.

## Contributing

We welcome contributions of any kind including pages, suggestions, bug reports,
pull requests etc. We would love to hear from you.

#### Important folders

##### `content`

Contains content files corresponding to every post, event, and page.

##### `data`

YAML files with some data used elsewhere in the site, including the Cube's
address, images for the 3D cube on the homepage, and social media links.

##### `layouts` and `themes`.

HTML template files for the site. The
[hugo-bootstrap](https://themes.gohugo.io/hugo-bootstrap/) theme is used as a
base for the site. Files with the same name in the `layouts` folder override
files in the `themes/hugo-bootstrap` folder.

##### `static`

Static files that are copied into the website with no modifications. Images and
PDF files are placed here.

### Build

To view the site locally, you need to clone this repository:

```bash
git clone --recurse-submodules https://github.com/ubccsss/ubccsss.org.git
```

You'll also need to
[install Hugo](https://gohugo.io/getting-started/installing/). The current
version of Hugo used is listed in the [`netlify.toml`](netlify.toml) file, under
the key `HUGO_VERSION`.

Then to view the website in your browser, run Hugo and open up the link:

```bash
▶ hugo server

Building sites ...
.
.
Serving pages from memory
Web Server is available at http://localhost:1313/ (bind address 127.0.0.1)
Press Ctrl+C to stop
```

## Related

-   [ubccsss/exams](https://github.com/ubccsss/exams) - The site for our exam
    database.
-   [ubccsss/tcf](https://github.com/ubccsss/tcf) - The website for the
    Technical Career Fair.
-   [ubccsss/style](https://github.com/ubccsss/styles) - Our online style guide.
