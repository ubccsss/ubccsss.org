# Hugo Bootstrap v5 Theme

This is a simple Hugo theme using [Bootstrap v5](https://getbootstrap.com/), inspired by [hugo-bootstrap](https://github.com/Xzya/hugo-bootstrap).

## Installation

You can install the theme either as a clone or submodule.

I recommend the latter. From the root of your Hugo site, type the following:

```shell
$ git submodule add https://github.com/NotWoods/hugo-bootstrap-5.git themes/hugo-bootstrap-5
$ git submodule init
$ git submodule update
```

Now you can get updates to the theme in the future by updating the submodule:

```
$ git submodule update --remote themes/hugo-bootstrap-5
```

## Demo

You can find a demo [here](https://themes.gohugo.io/theme/hugo-bootstrap-5/).

## Screenshots

![preview](https://raw.githubusercontent.com/NotWoods/hugo-bootstrap-5/master/images/screenshot.png)
![preview](https://raw.githubusercontent.com/NotWoods/hugo-bootstrap-5/master/images/screenshot2.png)

## Configuration

Check `exampleSite/config.toml` for an example configuration.

## Brand

The brand can be overriden by adding your own layout `layouts/partials/brand.html`. Check `exampleSite/layouts/partials/brand.html` for an example.

## Menu

The navbar displays the `main` menus by default. You can find more details about how to configure it [here](https://gohugo.io/templates/menu-templates/), as well as in the `exampleSite`.

## Multilanguage

The theme supports multiple languages.

You can find the default translation bundles in `i18n` (english and spanish by default).

## License

Open sourced under the [MIT license](./LICENSE.md).
