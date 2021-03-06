# ubccsss.org

Website for the UBC Computer Science Student Society.

## Contributing

We welcome contributions of any kind including pages, suggestions, bug reports,
pull requests etc. We would love to hear from you.

### Add a new event

Create a new event from the template using the `hugo new` command. Replace "2021-01-01" with the day of the event, and "cool-event" with the URL for the event. The URL should be lowercase.

```shell
hugo new events/2021-01-01-cool-event.md
```

#### Important folders

##### `content`

Contains content files corresponding to every post, event, and page.
The `events` folder contains events which can be added to a student's calendar,
and the `posts` folder contain general posts to display.

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

#### Headers and Redirects

HTTP [headers](https://docs.netlify.com/routing/headers/) can be set by editing the `static/_headers` file.

Short links and other [redirects](https://docs.netlify.com/routing/redirects/) can be configured in the `static/_redirects` file. If you want to redirect to another page on the site, you can add a `aliases` item to the metadata.

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
