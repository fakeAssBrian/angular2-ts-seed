# angular2-ts-seed

[![Join the chat on Gitter](https://badges.gitter.im/codewareio/angular2-ts-seed.svg)][41]
[![Dependency Status](https://david-dm.org/codewareio/angular2-ts-seed/status.svg)][1] 
[![devDependency Status](https://david-dm.org/codewareio/angular2-ts-seed/dev-status.svg)][2]

A complete, yet simple, starter for Angular 2 using TypeScript.

This seed repo serves as an Angular 2 starter for anyone looking to get up and running with **Angular 2** and 
**TypeScript** fast. Using **Webpack 2** for building our files and assisting with boilerplate.

## Notable features
* **TS**
  * TS linting with [TSLint][15], additional angular2 specific rules with [Codelyzer][16].
  * Generate scaffold files (component, directive, pipe, service, route, action -, reducer -, selector-, effect for ngrx)
    with [plop][47].
* **CSS**
  * [Sass][4] support with [Libsass][5] for super fast compiles.
  * [Autoprefixer][6] adds vendor prefixes to CSS rules by [Can I use][7] database.
  * [CSSNext][8] to use tomorrow’s CSS syntax, today.
  * [PostCSS Assets][9] - An asset manager for CSS.
  * [PostCSS Focus][9] - Add `:focus` selector to every `:hover` for keyboard accessibility.
  * CSS linting with [stylelint][10], [doiuse][11] and [colorguard][12].
  * Sourcemaps for global CSS.
* **Development mode**
  * Fast TS re-bundling.
  * File Watching and page reloading.
* **Production builds**
  * TS and CSS minification.
  * Cache busting.
  * Local sever for testing production build.

[Is Angular 2 Ready Yet?][22]

## Quick start

```sh
# clone our repo
$ git clone https://github.com/codewareio/angular2-ts-seed.git my-app

# change directory to your app
$ cd my-app

# install the dependencies with npm
$ npm i

# start mock json api
$ npm run start:mock-api

# start webpack-dev-server in a separate terminal session
$ npm start
```
navigate to [http://localhost:3000][23] or [http://0.0.0.0:3000][24] in your browser.

## Table of Contents

* Getting Started
  * [Dependencies](#dependencies)
  * [Installing](#installing)
  * [Running the app](#running-the-app)
* [Other commands](#other-commands)
* [Frequently asked questions](#frequently-asked-questions)


## Dependencies

What you need to run this app:

* `node` and `npm` (use [NVM][25])
* Ensure you're running Node (`v4.1.x`+) and NPM (`2.14.x`+)


## Installing

* `fork` this repo
* `clone` your fork
* `npm i` to install all dependencies
* `npm run start:mock-api` to start mock json api
* `npm start` to start webpack-dev-server
* navigate to [http://localhost:3000][23]

## Running the app

After you have installed all dependencies you can now run the app. Run `npm start` to start a local server using 
`webpack-dev-server` which will watch, build (in-memory), and reload for you. The port will be displayed to you 
as `http://0.0.0.0:3000` (or if you prefer IPv6, if you're using express server, then it's `http://[::1]:3000`).


## Other commands

Please note, not all commands will be listed here, feel free to check out the npm scripts section in `package.json`.

### build files for production and serve it

```sh
# production build
$ npm run build

# serve it, on port 8080
$ npm run start:prod
```

### serve, watch and build files

```sh
$ npm start

# or

$ npm run start:dev
```

### run linters

```sh
# run js lint
$ npm run lint:ts

# run scss lint
$ npm run lint:scss
```

### generate scaffold files with [plop][47]

You can generate component, directive, pipe, service, route, action -, reducer -, selector-, effect for ngrx.

```sh
$ npm run generate
```

## Frequently asked questions

* What's the current browser support for Angular 2 Beta?
  * Please view the updated list of [browser support for Angular 2][27]
* How do I start the app when I get `EACCES` and `EADDRINUSE` errors?
  * The `EADDRINUSE` error means the port `3000` is currently being used and `EACCES` is lack of permission for webpack 
    to build files to `./dist/`
* What are the naming conventions for Angular 2?
  * [Angular 2 Style Guide][30]
* Some dependencies are not met, what's going on?
  * `es6-shim` and `reflect-metadata` are dependencies of angular 2. We decided to include `core-js` as a better replacement.
* What is the `.github` folder for?
  * Read more about it here: [Issue and Pull Request templates][42]. Long story short, it is not a vital part of the 
    project. Feel free to delete it.



[1]: https://david-dm.org/codewareio/angular2-es-seed#info=dependencies
[2]: https://david-dm.org/codewareio/angular2-es-seed#info=devDependencies
[3]: https://github.com/postcss/postcss
[4]: http://sass-lang.com/
[5]: http://sass-lang.com/libsass
[6]: https://github.com/postcss/autoprefixer
[7]: http://caniuse.com/
[8]: http://cssnext.io/
[9]: https://github.com/assetsjs/postcss-assets
[10]: http://stylelint.io/
[11]: http://www.doiuse.com/
[12]: https://github.com/SlexAxton/css-colorguard
[13]: http://babeljs.io/
[14]: https://github.com/tc39/ecma262#current-proposals
[15]: http://palantir.github.io/tslint/
[16]: https://github.com/mgechev/codelyzer
[//]: # ([17]:) 
[18]: http://jasmine.github.io/
[19]: http://karma-runner.github.io/
[20]: https://github.com/gotwarlost/istanbul
[21]: https://angular.github.io/protractor/
[22]: http://splintercode.github.io/is-angular-2-ready/
[23]: http://localhost:3000
[24]: http://0.0.0.0:3000
[25]: https://github.com/creationix/nvm/
[26]: https://github.com/angular/protractor/blob/master/docs/debugging.md#testing-out-protractor-interactively
[27]: https://github.com/angularclass/awesome-angular2#current-browser-support-for-angular-2
[28]: /src/app/home/home.spec.js
[29]: /config/webpack.js#L48
[30]: https://angular.io/docs/ts/latest/guide/style-guide.html
[31]: https://github.com/codewareio/angular2-es-seed/wiki/How-do-I-async-load-a-component-with-AsyncRoute
[32]: https://github.com/AngularClass/
[33]: https://github.com/AngularClass/angular2-webpack-starter/
[34]: https://github.com/preboot/
[35]: https://github.com/preboot/angular2-webpack/
[36]: https://github.com/AngularClass/angular2-webpack-starter/issues/215
[37]: https://github.com/AngularClass/angular2-webpack-starter/issues/214#event-511768416
[38]: http://www.typescriptlang.org/
[39]: https://github.com/mgechev/angular2-seed/
[40]: https://github.com/AngularClass/angular2-webpack-starter/issues/130#issuecomment-158872648
[41]: https://gitter.im/codewareio/angular2-ts-seed?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge
[42]: https://github.com/blog/2111-issue-and-pull-request-templates
[43]: https://github.com/webpack/webpack/issues/91
[44]: https://github.com/mgechev/angular2-style-guide
[45]: https://github.com/ngrx/store
[46]: https://github.com/ngrx/store/issues/94
[47]: https://github.com/amwmedia/plop
[48]: https://github.com/postcss/postcss-focus
