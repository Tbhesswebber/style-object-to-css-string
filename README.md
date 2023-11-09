# style-object-to-css-string

![Commitizen friendly](<https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=popout-square&logo=travis&logoColor=rgba(0,0,0,0)>)

This project was inspired by some work with the [:nail_care:styled components](https://www.styled-components.com/) library. In creating a component that I will never use, I needed to provide the consumer with a way to pass down styles that I can then merge into various component definitions along with my own css rules.

Just in case, this package also exposes the ability to access or generate additional syntax parsers that can then be used with the primary export or as stand-alone string parsing functions.

## Usage

### Basic Usage

#### Without styled-components

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
 * "display: flex;flex-direction: column;align-items: center;justify-content: center;"
 */
```

#### With :nail_care:styled-components

```javascript
import styled from 'styled-components';
import styleToCss from 'style-obj-to-css-string';

const StyledThingy = styled.p`
  ${/* Place properties that you will allow to be overwritten here - typically stylistic properties */}
  color: meduimaquamarine;
  font-size: 1rem;
  background-color: thistle;
  ${props => props.styles && styleToCss(props.styles) /* we check for styles to avoid an invocation with undefined.  may be fixed with future pull requests. */}
  ${/* Place properties that you will not allow to change here - typically structural properties */}
  display: block;
  margin: 1rem;
  grid-column: 1 / -1;
`;
```

### Advanced Usage

This library can also be useful in parsing JSON from servers that might use other case-conventions. Simply bring in our list of `parsers` in your import or make your own with our `createParser` function!

**parsers** - An object containing multiple parse methods.

- parsers.snakeToKebab( str: string ): string - converts snake_case to kebab-case
- parsers.camelToKebab( str: string ): string - converts camelCase to kebab-case

**createParser** - A function that return a parsing function.

- createParser(matcher: string | RegExp, replacer: Function): Function - generates a parser function as seen in parsers. Note: replacer uses the same syntax as the second parameter for [String.prototype.replace](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Specifying_a_function_as_a_parameter) (the first argument is the matched value)

```javascript
import styleToCss, { parsers, createParser } from 'style-to-css-string';
import axios from 'axios';

const kebabToCamel = createParser(/-[a-z]/, match => match.split('')[1].toUpperCase());

async function getStyleObj(path) {
  const style = await axios.get(path);
  const styleString = styleToCss(style, parsers.snakeToKebab);
}
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

#### :fire:In Case of Emergency:fire:

Just in case something happens that forces you to run away from your computer screaming, just run `npm run fire`, which will create a new branch called "emergency", commit all of your current changes, and then push them to a new branch on your origin remote. :fire_engine:
