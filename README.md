# style-object-to-css-string

![Travis](https://img.shields.io/travis/Tbhesswebber/style-object-to-css-string.svg?label=build&logo=travis&logoColor=yellow&style=popout-square)
![codecov](https://img.shields.io/codecov/c/github/Tbhesswebber/style-object-to-css-string.svg?logo=codecov&style=popout-square)
![Commitizen friendly](<https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=popout-square&logo=travis&logoColor=rgba(0,0,0,0)>)

This project was inspired by some work with the [:nail_care:styled components](https://www.styled-components.com/) library. In creating a component that I will never use, I needed to provide the consumer with a way to pass down styles that I can then merge into various component definitions above my own css rules.

Just in case, this package also exposes the ability to generate additional syntax parsers that can then be used with the primary export or as stand-alone string parsing functions.

## Usage

### Basic Usage

```javascript
import styleToCss from 'style-obj-to-css-string';
// I now regret my choice in package name

const styles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const styleString = styleToCss(styles);
/**
 * Generates all values as a single semicolon separated string
 * "display: flex;flex-direction: column;align-items: center;justify-content: center;"/
```

## Contributing

As my first open-source package, this repository is over-tooled to the max just to see what is possible - feel free to create issues specifically surrounding the tools that I am using and their configurations.

### Getting Started

This project is written with Node version 10 and npm version 6 - while operating outside of these constraints is fine, you may want to attempt to use these version for uniformity. With nvm installed, just run `nvm use` to read from the [.nvmrc](./.nvmrc) file.

Getting started is simple, just fork and clone the repository and then run the following commands in your terminal. The validate script will run the build, the tests, and the linter and is the script that will run before you commit and push.

```bash
$ cd style-object-to-css-string
$ npm run install
$ npm run validate
# will show a slew of commands that are being run
# will show the current test coverage report for the repository
```

### Committing

I use [commitlint](https://github.com/conventional-changelog/commitlint) to lint git commits according to the [conventional changelog](https://github.com/conventional-changelog/commitlint/blob/master/%40commitlint/config-conventional/README.md). If you're as lazy as I am, feel free to use [commitizen cli](https://github.com/commitizen/cz-cli) either with your own installation or with `npm run cz` - if your commit still fails commitlint's rules, you can run `npm run cz -- --retry`.

#### :fire_engine:In Case of Emergency:fire_engine:

Just in case something happens that forces you to run away from your computer screaming, just run `npm run fire`, which will create a new branch called "emergency", commit all of your current changes, and then push them to a new branch on your origin remote.
