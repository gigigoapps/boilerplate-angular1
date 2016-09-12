## Angular 1.5 Starter Kit with components

A project structure angular HTML5 Gigigo group

## Prerequisites

You will need **git** to clone the material-start repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

You must have node.js and its package manager (npm) installed.
You can get them from [http://nodejs.org/](http://nodejs.org/).

## Install

`git clone git@github.com:gigigo-html5/gig-starter-angular1-kit.git'

cd gig-starter-angular1-kit

`npm install`

## Start

To start the project

```sh
npm run start-dev
```

## Tests

```sh
npm install
npm test
```

## Info

http://git-scm.com/
https://www.npmjs.org/
http://nodejs.org

## Develop / Contributions

All code changes must be done inside src/ folder and then run gulp release task to 'create' distribution.
Distribution files are the ones in the project root folder.

## Release

Be responsible releasing a package! Check the npm scripts for release and understand it.

### Release patch
- example: 0.1.0 -> 0.1.1

```sh
npm run release:patch
```

### Release minor
- example: 3.1.1 -> 3.2.0

```sh
npm run release:minor
```

### Release major
- example: 2.50.3 -> 3.0.0

```sh
npm run release:major
```

## Dependencies

- [angular](https://github.com/angular/angular.js): Angular is a JavaScript library for building user interfaces.


## Dev Dependencies



## License

MIT
