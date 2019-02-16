import createParser from './createParser';

const camelToKebab = createParser(/[A-Z]/, match => `-${match.toLowerCase()}`);
const snakeToKebab = createParser(/_/, () => '-');

// disabled to allow named exports while only one named export exists
// eslint-disable-next-line
export { camelToKebab, snakeToKebab };
